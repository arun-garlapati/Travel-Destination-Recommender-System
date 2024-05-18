from datetime import datetime
from datetime import timedelta
from bing_image_downloader.downloader import download
from scipy.spatial.distance import cdist
from k_means_constrained import KMeansConstrained
from models.attractions_recc import *
import warnings
warnings.filterwarnings("ignore")


class AttractionRecommendation:
    def __init__(self):
        self.begin_date = None
        self.end_date = None
        self.province = None
        self.budget_low = None
        self.budget_high = None
        self.cat_rating = None
        self.attractions_df = None
        self.filtered_df = None
        self.final = None
        self.attractions_df = None

    def load_variables(self, begin_date, end_date, province, budget_low, budget_high, cat_rating):

        self.begin_date = datetime.strptime(begin_date, "%Y-%m-%d").date()
        self.end_date = datetime.strptime(end_date, "%Y-%m-%d").date()
        self.province = province
        self.budget_low = budget_low
        self.budget_high = budget_high
        self.cat_rating = cat_rating
        self.attractions_df = pd.read_json('models/attractions.json', orient='records')
        # self.attractions_df = self.attractions_df.drop_duplicates(['latitude', 'longitude'])
        self.filtered_df = self.filter_df()

        self.final = {
            'timeofday': self.generate_time_of_day(),
            'image': [],
            'name': [],
            'name_orig': [],
            'location': [],
            'price': [],
            'rating': [],
            'category': []
        }

    def generate_time_of_day(self):
        time_of_day = []
        days_count = (self.end_date - self.begin_date).days + 1
        for _ in range(days_count):
            time_of_day.extend(['Morning'] * 2 + ['Evening'] * 2)
        return time_of_day

    def filter_df(self):
        df = self.attractions_df
        df = df[(df['province'].str.lower() == self.province.lower()) & (df['price'] >= self.budget_low) &
                (df['price'] <= self.budget_high)]
        return df

    @staticmethod
    def get_image1(name):
        # Extracting the first part of the name before any commas
        name = name.split(",")[0]
        directory_path = f"/Users/arungarlapati/Trip-Recommendation/static/downloads/{name}/"

        # Check for existing files in the directory
        existing_files = glob.glob(f"{directory_path}/*.jpg") + glob.glob(f"{directory_path}/*.png")
        if existing_files:
            return "/static" + existing_files[0] .split("/static")[1]

        try:
            # If no files were found, proceed to download
            download(name, limit=1, output_dir=f"/Users/arungarlapati/Trip-Recommendation/static/downloads/",
                     adult_filter_off=True, force_replace=False, timeout=10,
                     verbose=False)
        except Exception as e:
            print(f"Error downloading image: {e}")
            return '/static/noimage.jpg'
        # Attempt to return the downloaded file
        try:
            for filename in glob.glob(f"{directory_path}*.jpg") + glob.glob(f"{directory_path}*.png"):
                return "/static" + filename.split("/static")[1]
        except Exception as e:
            print(f"Error finding downloaded image: {e}")

        # If no image is found in the specific folder, check the general downloads folder
        for filename in (glob.glob("/Users/arungarlapati/Trip-Recommendation/static/downloads/*jpg") +
                         glob.glob("/Users/arungarlapati/Trip-Recommendation/static/downloads//*png")):
            return "/static" + filename.split("/static")[1]

        return '/static/noimage.jpg'  # Return None if no image is found at all

    def top_recc1(self, df):
        for _, row in df.iterrows():
            if row['name'] not in self.final['name']:
                self.final['name'].append(row['name'].replace("_", " ").title())
                self.final['name_orig'].append(row['name'])
                self.final['location'].append([row['latitude'], row['longitude']])
                self.final['price'].append(row['price'])
                self.final['rating'].append(row['rating'])
                self.final['image'].append(self.get_image1(row['name']))
                self.final['category'].append(row['category'].replace("_", " ").title())

                return  # Exit after adding the first new recommendation
        print("No new recommendations added.")

    def find_closest1(self, df, loc, tod):
        df.loc[:, 'distance'] = df.apply(
            lambda row: math.sqrt((loc[0] - row['latitude']) ** 2 + (loc[1] - row['longitude']) ** 2),
            axis=1
        )
        df.sort_values(['distance', 'price'], ascending=[True, False], inplace=True)

        evening = [lem.name() for syn in wordnet.synsets("evening") + wordnet.synsets("night") for lem in syn.lemmas()]
        if tod == "Evening":
            df = df[df['name'].apply(lambda x: any(word in x.lower() for word in evening))]
        else:
            df = df[df['name'].apply(lambda x: all(word not in x.lower() for word in evening))]

        # Make sure there  are new recommendations to add
        df = df[~df['name'].isin(self.final['name_orig'])]
        if not df.empty:
            self.top_recc1(df)  # Call without passing df
        else:
            print("No suitable new attractions found.")

    def filter_df_post(self, filename, user):
        recc_df = pd.read_csv('models/rbm_models/' + filename + '/user{u}_unseen.csv'.format(u=user), index_col=0)
        recc_df.columns = ['attraction_id', 'att_name', 'att_cat', 'att_price', 'score']
        recommendation = self.attractions_df[
            ['attraction_id', 'name', 'category', 'city', 'latitude', 'longitude', 'price', 'province',
             'rating']].set_index('attraction_id').join(recc_df[['attraction_id', 'score']].set_index('attraction_id'),
                                                        how="inner").reset_index().sort_values("score", ascending=False)

        filtered = recommendation[
            (recommendation.province.str.lower() == self.province.lower()) & (recommendation.price >= self.budget_low) &
            (recommendation.price <= self.budget_high)]
        url = pd.read_json('models/outputs/attractions_cat.json', orient='records')
        url['id'] = url.index
        with_url = filtered.set_index('attraction_id').join(url[['id', 'attraction']].set_index('id'), how="inner")
        return with_url

    def recommend(self):
        filename, user, rbm_att = get_recc(self.attractions_df, self.cat_rating)
        recommend_df = self.filter_df_post(filename, user)
        print("Total recommendations: ", recommend_df.shape[0])
        if recommend_df.shape[0] == 0:
            print("No recommendations found.")
            recommend_df = self.filtered_df

        for i, tod in enumerate(self.final['timeofday']):
            if i % 4 == 0:
                self.top_recc1(recommend_df)
            else:
                self.find_closest1(recommend_df, self.final['location'][-1], tod)

        while len(self.final['timeofday']) > len(self.final['name']):
            print("Insufficient recommendations.")
            additional_data = self.filtered_df[~(self.filtered_df['name'].isin(self.final['name_orig']))]
            if not additional_data.empty:
                additional_data = additional_data.sort_values(['rating'], ascending=[False])
                for idx, row in additional_data.iterrows():
                    self.final['name'].append(row['name'].replace("_", " ").title())
                    self.final['name_orig'].append(row['name'])
                    self.final['location'].append([row['latitude'], row['longitude']])
                    self.final['price'].append(row['price'])
                    self.final['rating'].append(row['rating'])
                    self.final['image'].append(self.get_image1(row['name']))
                    self.final['category'].append(row['category'].replace("_", " ").title())
                    # Once you have enough recommendations, break out
                    if len(self.final['timeofday']) >= len(self.final['name']):
                        break
            else:
                print("No more unique recommendations available.")
                break

        final_df = pd.DataFrame(self.final)
        final_df['lat'] = final_df['location'].str[0]
        final_df['long'] = final_df['location'].str[1]
        final_df = self.get_iternary_cluster(final_df)
        final_df = self.calculate_intra_cluster_sequence(final_df)
        final_df['cluster'] = final_df['cluster'] + 1
        final_df.sort_values(['cluster', 'sequence'], inplace=True)
        json_data = self.get_json(final_df)
        return json_data

    def get_json(self, df_processed):
        # get cetnroid lat long
        centroid_lat = df_processed['lat'].mean()
        centroid_long = df_processed['long'].mean()
        dict_data = df_processed.to_dict(orient='records')

        # give me date list from begin_date to end_date
        date_list = [self.begin_date + timedelta(days=x) for x in range((self.end_date - self.begin_date).days + 1)]
        date_list = [date.strftime("%Y-%m-%d") for date in date_list]
        final_json = dict()
        final_json["date_list"] = date_list
        final_json["attractions_data"] = dict_data
        final_json["centroid_lat"] = centroid_lat
        final_json["centroid_long"] = centroid_long
        return final_json

    def get_iternary_cluster(self, df):
        num_days = (self.end_date - self.begin_date).days + 1
        places_lat_long = df[['lat', 'long']].values

        # Using KMeansConstrained to ensure approximately equal cluster sizes
        kmeans = KMeansConstrained(
            n_clusters=num_days,
            size_min=len(df) // num_days,
            size_max=len(df) // num_days + (0 if len(df) % num_days == 0 else 1),
            random_state=0
        ).fit(places_lat_long)
        df['cluster'] = kmeans.labels_

        # Assign each cluster a date
        cluster_date = {i: (self.begin_date + timedelta(days=i)).strftime("%Y-%m-%d") for i in range(num_days)}
        df['date'] = df['cluster'].map(cluster_date)
        return df

    @staticmethod
    def calculate_intra_cluster_sequence(df):
        # Add a new column 'sequence' initialized to NaN
        df['sequence'] = np.nan
        # Group by cluster (or by 'date' if you want to do it daily regardless of clusters)
        grouped = df.groupby(['cluster', 'date'])  # Grouping by both ensures sequences are per day per cluster
        # Calculate sequence within each group
        for (cluster, date), group in grouped:
            if len(group) > 1:
                # Calculate centroid of the cluster
                centroid = group[['lat', 'long']].mean().values.reshape(1, -1)
                # Calculate distances from centroid to each point in the cluster
                distances = cdist(group[['lat', 'long']].values, centroid)
                # Order by distance and assign sequence
                group = group.assign(sequence=np.argsort(distances.ravel()) + 1)
                # Place the ordered group back into the DataFrame
                df.loc[group.index, 'sequence'] = group['sequence']
            else:
                # If only one location in the cluster, assign sequence as 1
                df.loc[group.index, 'sequence'] = 1
        df['sequence'] = df['sequence'].astype(int)
        return df


# cat_rating = {'tours_&_sightseeing': 5.0,
#  'family_friendly': 5.0,
#  'sightseeing_tickets_&_passes': 5.0,
#  'holiday_&_seasonal_tours': 5.0,
#  'shows,_concerts_&_sports': 5.0
#               }
#
# # #
# start_date = '2024-05-08'
# end_date = '2024-05-11'
# city = 'Ontario'
# #
# # # Usage
# recommender = AttractionRecommendation()
# recommender.load_variables(start_date, end_date, city, 5, 999, cat_rating)
# data = recommender.recommend()
# print(data)
