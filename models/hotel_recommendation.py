import glob
import pandas as pd
from joblib import load
from scipy.sparse import csr_matrix
from collections import OrderedDict
from bing_image_downloader.downloader import download


class HotelRecommendation:
    def __init__(self):
        self.hotel_df = pd.read_json('models/del_dup.json', orient='records', lines=True)
        self.hotel_df.dropna(subset=['hotel_rating', 'hotel_experience'], inplace=True, )
        self.hotel_df['city'] = self.hotel_df['city'].fillna('No City')
        self.hotel_df['hotel_rating'] = self.hotel_df['hotel_rating'].astype(str)
        self.grouped_df = self.hotel_df.groupby(
            ['id', 'hotel_name', 'hotel_rating', 'hotel_experience', 'address', 'country', 'location', 'price',
             'city'])['amenities'].apply(lambda x: ', '.join(x)).reset_index()

        self.hotel_df['address_copy'] = self.hotel_df['address'].str.lower()
        self.grouped_df['address_copy'] = self.grouped_df['address'].str.lower()

    @staticmethod
    def get_image1(name):
        # Extracting the first part of the name before any commas
        name = name.split(",")[0]
        name = name.replace(' ', '_')
        directory_path = f"/Users/arungarlapati/Trip-Recommendation/static/downloads/{name}/"

        # Check for existing files in the directory
        existing_files = glob.glob(f"{directory_path}/*.jpg") + glob.glob(f"{directory_path}/*.png")
        if existing_files:
            return "/static" + existing_files[0].split("/static")[1]

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

    @staticmethod
    def load_data(file_path):
        # Function to load data
        return pd.read_json(file_path, orient='record', lines=True)

    @staticmethod
    def load_model(model_path):
        # Function to load a pre-trained model
        return load(model_path)

    @staticmethod
    def get_recommendations_existing_user(user_data, model, user_items_matrix, user_items):
        # Creating a mapping from user_id to matrix index
        user_index_map = {user_id: idx for idx, user_id in enumerate(user_items.columns)}

        recommendations = []
        fallback_items = user_items.sum(axis=1).nlargest(50).index.tolist()
        for user_id in user_data['user_id'].unique():
            if user_id in user_index_map:
                user_idx = user_index_map[user_id]
                if user_idx >= user_items_matrix.shape[1] or user_idx >= model.user_factors.shape[0]:
                    print(f"Warning: User ID {user_id} mapped to out-of-bounds index {user_idx}. Using fallback items.")
                    for item_id in fallback_items:
                        recommendations.append({'user_id': user_id, 'att_id': item_id, 'rating': 0})
                    continue
                user_vector = user_items_matrix[:, user_idx].T.tocsr()  # Ensure it's in CSR format
                try:
                    items_recommended = model.recommend(user_idx, user_vector, N=50, filter_already_liked_items=True)
                    for item_id, score in zip(*items_recommended):
                        recommendations.append({'user_id': user_id, 'att_id': item_id, 'rating': score})
                except IndexError as e:
                    print(f"IndexError for User ID {user_id}: {str(e)}")
                    for item_id in fallback_items:
                        recommendations.append({'user_id': user_id, 'att_id': item_id, 'rating': 0})
            else:
                # Fallback strategy if user ID is not in the existing matrix
                print(f"User ID {user_id} not found in matrix. Using fallback items.")
                for item_id in fallback_items:
                    recommendations.append({'user_id': user_id, 'att_id': item_id, 'rating': 0})

        return pd.DataFrame(recommendations).head(5)

    def get_recommendations(self, user_preferences, new_user=False, user_id=None):
        # Filter hotels based on user preferences (for new users)
        if new_user:
            # Assuming 'amenities' column is a comma-separated string of amenities
            matched_hotels = self.hotel_df[self.hotel_df['amenities'].isin(user_preferences)]
            return matched_hotels['id']
        else:
            # Your existing logic for existing users
            # Load the user data
            u_id_df = self.load_data('models/u_id_df.json')
            model = self.load_model('models/mf_models1/model_file.joblib')
            usrid_s2 = pd.DataFrame({'user_id': [user_id]})
            user_items = u_id_df.pivot_table(index='att_id', columns='user_id', values='user_rating', fill_value=0)
            user_items_matrix = csr_matrix(user_items)
            recommendations = self.get_recommendations_existing_user(usrid_s2, model, user_items_matrix, user_items)
            return recommendations['att_id'].values

    def prepare_final_output(self, user_preference, user_location_to_search, new_user=False, user_id=None):
        if isinstance(user_location_to_search, str):
            user_location_to_search = user_location_to_search.lower()

        # Get recommendations based on user preferences for a new user
        hotel_sugg_id = self.get_recommendations(user_preference, new_user=new_user, user_id=user_id)

        hotel_sugg = self.grouped_df[(self.grouped_df['id'].isin(hotel_sugg_id))]

        # Filter hotels by user specified location
        hotel_sugg = hotel_sugg[hotel_sugg['address_copy'].str.contains(user_location_to_search)]

        # Check if less than 5 hotels found, fetch more based on highest rating
        if len(hotel_sugg) < 5:
            additional_hotels = self.grouped_df[(~self.grouped_df['id'].isin(hotel_sugg_id)) &
                                                (self.grouped_df['address_copy'].str.contains(user_location_to_search,
                                                                                              case=False))]
            additional_hotels = additional_hotels.sort_values(by='hotel_rating', ascending=False)
            hotel_sugg = pd.concat([hotel_sugg, additional_hotels]).drop_duplicates().head(5)

        # Prepare final output
        hotel_sugg['hotel_rating'] = hotel_sugg['hotel_rating'].fillna('No Rating')
        hotel_sugg['hotel_experience'] = hotel_sugg['hotel_experience'].fillna('No Rating')
        final = hotel_sugg.drop_duplicates(
            subset=['id', 'hotel_name', 'hotel_rating', 'hotel_experience', 'address', 'country', 'location',
                    'price']).reset_index(drop=True)

        # Group by hotel name and concatenate 5 amenities
        final['amenities'] = final['amenities'].apply(self.process_amenities)
        result = final.groupby(
            ['id', 'hotel_name', 'hotel_rating', 'hotel_experience', 'address', 'country', 'location', 'price']).agg({
             'amenities': lambda x: ', '.join(list(set(x)))
            }).reset_index()

        final = {
            'address': result[:5]['address'].values.tolist(),
            'amenities': result[:5]['amenities'].values.tolist(),
            'experience': result[:5]['hotel_experience'].values.tolist(),
            'name': result[:5]['hotel_name'].values.tolist(),
            'rating': result[:5]['hotel_rating'].values.tolist(),
            'location': [i[1:-1] for i in result[:5]['location'].values.tolist()],
            'price': result[:5]['price'].values.tolist(),
            'image': [self.get_image1(i) for i in result[:5]['hotel_name'].values.tolist()]
        }
        result = pd.DataFrame(final)
        return result.to_dict(orient='records')

    @staticmethod
    def process_amenities(amenities):
        # Split the string into a list
        amenities_list = amenities.split(', ')
        # Remove duplicates and preserve the order of first occurrence up to five elements
        seen = OrderedDict.fromkeys(amenities_list)
        # Join up to the first five unique amenities back into a string
        return ', '.join(list(seen.keys())[:5])

# model_path = 'mf_models1/model_file.joblib'
# user_data_path = 'u_id_df.json'
# del_dup_path = 'del_dup.json'
# usrid_s2 = pd.read_csv('usrid_s2.csv')
# user_location = "ontario"
# user_preferences = ['Public Wi-fi', 'Family Rooms', 'Wheelchair Access', 'Laundry Service', 'Nonsmoking rooms']
# #
# # # Sample Usage for a New User
# recommender = HotelRecommendation()
# final_output = recommender.prepare_final_output(user_preferences, user_location, new_user=True)
# final_output.to_json('hotel.json', orient='records')
# print(final_output)
