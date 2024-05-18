from models.resturent_recommendation import ResturentRecommendation
from models.attraction_recommendation import AttractionRecommendation
from models.hotel_recommendation import HotelRecommendation
from flask_sqlalchemy import SQLAlchemy
import functools
from werkzeug.security import generate_password_hash, check_password_hash
from sqlalchemy.exc import IntegrityError
import hashlib
from datetime import datetime
import json
from flask import Flask, session, redirect, url_for, render_template, request, flash, make_response
from flask_executor import Executor
from uuid import uuid4


app = Flask(__name__)
app.secret_key = '123456'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
executor = Executor(app)
db = SQLAlchemy(app)

ar = AttractionRecommendation()
hr = HotelRecommendation()
rr = ResturentRecommendation()


# Create a dictionary to map IDs to Futures
futures_dict = {}


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(80), nullable=False)


with app.app_context():
    db.create_all()


def nocache(view):
    def no_cache(*args, **kwargs):
        response = make_response(view(*args, **kwargs))
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
        return response

    return functools.update_wrapper(no_cache, view)


def get_attraction_recommendation(city, dates, activities, person):
    city_mapping = {
        'Toronto': 'Ontario',
        'Ontario': 'Ontario',
        'Montreal': 'Quebec',
        'Alberta': 'Alberta',
        'British Columbia': 'british_columbia',
        'Nova Scotia': 'nova_scotia',

    }
    province = city_mapping[city]
    start_date, end_date = dates.split(' to ')

    session['start_date'] = start_date
    session['end_date'] = end_date

    activities_list = activities.split(',') if activities else []
    # person = int(request.args.get('person'))

    # make dictionary from activities
    activity_dict = {
        "Cruises & Water Tours": "cruises,_sailing_&_water_tours",
        "Family Friendly": "family_friendly",
        "Recommended Experiences": "recommended_experiences",
        "Tour & Sightseeing": "tours_&_sightseeing",
        "Cultural & Theme Tours": "cultural_&_theme_tours",
        "Outdoor Activities": "outdoor_activities"
    }

    cat_rating = {}
    for activity in activities_list:
        cat_rating[activity_dict[activity]] = 5.0

    ar.load_variables(start_date, end_date, province, 5, 999, cat_rating)
    result = ar.recommend()

    # create unique filename based on the current timestamp
    unique_string = f"{city}{start_date}{end_date}{hashlib.md5(''.join(activities_list).encode()).hexdigest()}"
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    filename = f"static/generated_files/recommendations_{timestamp}_{unique_string}.json"

    # Save the result to a JSON file
    with open(filename, 'w') as file:
        json.dump(result, file)

    return filename


def hotel_recommendation(hotel_preferences, city, new_user=True):
    print(hotel_preferences, city, new_user)
    response = hr.prepare_final_output(hotel_preferences, city, new_user=new_user)
    # create unique filename based on the current timestamp
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    unique_string = f"{city}{hashlib.md5(timestamp.encode()).hexdigest()}"
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    filename = f"static/generated_files/hotel_recommendations_{timestamp}_{unique_string}.json"

    # Save the result to a JSON file
    with open(filename, 'w') as file:
        json.dump(response, file)

    return filename


def resturent_recommendation(city, category, top=5):
    print(city, category)
    response = rr.get_recommendation(city, category, top)
    # create unique filename based on the current timestamp
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    unique_string = f"{city}{hashlib.md5(timestamp.encode()).hexdigest()}"
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    filename = f"static/generated_files/restaurant_recommendations_{timestamp}_{unique_string}.json"

    # Save the result to a JSON file
    with open(filename, 'w') as file:
        json.dump(response, file)

    return filename


@app.route('/')
def index():
    return render_template('login.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        user = User.query.filter_by(username=request.form['username']).first()

        if user:
            if check_password_hash(user.password, request.form['password']):
                session['username'] = request.form['username']
                return redirect(url_for('mainpage'))
            else:
                print("Password is incorrect")
                flash('Login Unsuccessful. Please check username and password', 'danger')
        else:
            flash('Username does not exist.', 'danger')
    return render_template('login.html')


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        # Check if the password is provided
        if not password:
            flash('Password is required.', 'error')
            return redirect(url_for('signup'))  # Redirect back to the signup page

        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

        new_user = User(username=username, password=hashed_password)
        try:
            db.session.add(new_user)
            db.session.commit()
            flash('Account created successfully!', 'success')
            return redirect(url_for('login'))  # Redirect to the login page after successful registration
        except IntegrityError:
            db.session.rollback()  # Rollback the session to a clean state
            flash('Username already exists. Please choose another one.', 'error')
            return redirect(url_for('signup'))  # Redirect back to the signup page

    return render_template('login.html')  # Display the signup form


@app.route('/logout')
def logout():
    # Remove user ID (or other session data) from the session
    session.pop('username', None)

    # Redirect to the login page (or any other page)
    return render_template('login.html')


@app.route('/mainpage', methods=['POST', 'GET'])
def mainpage():
    if 'username' in session:
        return render_template('index.html')
    return render_template('unauthorized.html')


# @app.route('/trips', methods=['POST', 'GET'])
# def home():
#     if 'username' in session:
#         return render_template('trips/trips.html')
#     return render_template('unauthorized.html')


@app.route('/new_trip', methods=['POST', 'GET'])
def new_trip():
    if 'username' in session:
        if request.method == 'POST':
            # Extract form data
            city = request.form['city']
            dates = request.form['dates']
            activities = request.form['activities']
            person = request.form['person']

            future_id = str(uuid4())
            # Run the recommendation function asynchronously
            future = executor.submit(get_attraction_recommendation, city, dates, activities, person)
            futures_dict[future_id] = future
            session['future_id'] = future_id
            session['city'] = city
            return redirect(url_for('show_map'))  # Assuming you have a 'show_map' route to show the map
        else:
            # For a GET request, render the page to enter trip details
            return render_template('new-trip.html')

    return render_template('unauthorized.html')


@app.route('/show_map', methods=['POST', 'GET'])
def show_map():
    if 'username' in session:
        if request.method == 'POST':
            old_futures = ['hotel_future_id', 'restaurant_future_id']
            for fid in old_futures:
                if fid in session:
                    future = futures_dict.pop(session.pop(fid), None)
                    if future:
                        future.cancel()

            hotel_preferences = request.form['preference']
            hotel_preferences = hotel_preferences.split(',')
            city = session['city']
            restaurant_preferences = request.form['preference_2']
            restaurant_preferences = restaurant_preferences.split(',')

            # call for hotel recommendation
            hotel_future_id = str(uuid4())
            # Run the recommendation function asynchronously
            h_future = executor.submit(hotel_recommendation, hotel_preferences, city, True)
            futures_dict[hotel_future_id] = h_future
            session['hotel_future_id'] = hotel_future_id

            # call for restaurant recommendation
            restaurant_future_id = str(uuid4())
            # Run the recommendation function asynchronously
            r_future = executor.submit(resturent_recommendation, city, restaurant_preferences, 5)
            futures_dict[restaurant_future_id] = r_future
            session['restaurant_future_id'] = restaurant_future_id

            return redirect(url_for('loading_page'))  # Assuming you have a 'show_map' route to show the map
        else:
            # For a GET request, render the page to enter trip details
            return render_template('map.html')
    return render_template('unauthorized.html')


@app.route('/loading_page', methods=['GET'])
def loading_page():
    if 'username' in session:
        future_id = session.get('future_id')
        hotel_future_id = session.get('hotel_future_id')
        restaurant_future_id = session.get('restaurant_future_id')

        # Ensure all future IDs are present and corresponding futures exist
        if all(fid in futures_dict for fid in [future_id, hotel_future_id, restaurant_future_id]):
            future = futures_dict[future_id]
            h_future = futures_dict[hotel_future_id]
            r_future = futures_dict[restaurant_future_id]

            # Check if all futures are done
            if all(f.done() for f in [future, h_future, r_future]):
                print("All futures completed.")
                # Process results
                filename = future.result()
                h_filename = h_future.result()
                r_filename = r_future.result()
                # Store results in session for use in other routes
                session.update({
                    'filename': '/' + filename,
                    'h_filename': '/' + h_filename,
                    'r_filename': '/' + r_filename
                })
                # Cleanup the dictionary
                for fid in [future_id, hotel_future_id, restaurant_future_id]:
                    del futures_dict[fid]
                return redirect(url_for('itinerary'))
            else:
                print("One or more futures still processing.")
                return render_template('loading.html')
        else:
            print("No futures found for IDs, or some futures are missing.")
            #flash('Processing not complete or was reset. Please try again.', 'error')
            return redirect(url_for('new_trip'))

    return render_template('unauthorized.html')


@app.route('/itinerary', methods=['POST', 'GET'])
def itinerary():
    if 'username' in session:
        if 'filename' in session:
            # If the filename exists in session, display the map with the result
            filename = session['filename']
            h_filename = session['h_filename']
            r_filename = session['r_filename']
            city_image_map = {
                'Toronto': '/static/newtimg/toronto.jpeg',
                'Ontario': '/static/newtimg/ontario.jpeg',
                'Montreal': '/static/newtimg/montreal.jpeg',
                "Alberta": "/static/newtimg/alberta.jpeg",
                "British Columbia": "/static/newtimg/british.jpeg",
                "Nova Scotia": "/static/newtimg/nova.jpeg"
            }

            city = session['city']

            start_date = datetime.strptime(session['start_date'], '%Y-%m-%d').strftime('%d %b, %y')
            end_date = datetime.strptime(session['end_date'], '%Y-%m-%d').strftime('%d %b, %y')
            city_pic_filename = city_image_map.get(city, '/static/noimage.jpg')

            return render_template('map2.html', filename=filename, h_filename=h_filename,
                                   r_filename=r_filename, city=city, city_pic_filename=city_pic_filename,
                                   start_date=start_date, end_date=end_date)
        else:
            # Redirect to loading page if no filename is found in session
            return redirect(url_for('loading_page'))
    return render_template('unauthorized.html')


if __name__ == '__main__':
    app.run(host='localhost', port=8887, debug=True)
