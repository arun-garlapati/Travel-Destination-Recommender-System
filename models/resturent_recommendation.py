import pandas as pd
import glob
from datetime import datetime, timedelta
from bing_image_downloader.downloader import download


class ResturentRecommendation:
    def __init__(self):
        # give relative path
        self.df = pd.read_csv('/Users/arungarlapati/Trip-Recommendation/data/resturent_business.csv')

        self.df['categories'] = self.df['categories'].apply(lambda x: x.split(','))
        self.df['categories'] = self.df['categories'].apply(lambda x: [i.strip() for i in x])
        self.df['categories'] = self.df['categories'].apply(lambda x: ' '.join(x))

    @staticmethod
    def get_image(name):
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

    def get_recommendation(self, city, category, top=5):
        print(self.df.shape[0])
        # self.df = self.df[(self.df['city'].str.lower() == city.lower()) & (self.df['is_open'] == 1)]
        filter_df = self.df[self.df['address'].str.contains(city, case=False, na=False)]
        # .&(self.df['categories'].str.contains(category, case=False, na=False))
        category = [i.lower() for i in category]
        filter_df['categories_processed'] = filter_df['categories'].str.lower()
        filter_df['similarity'] = filter_df['categories_processed'].apply(lambda x: self.similarity(x, category))
        if filter_df[filter_df['similarity'] > 0].shape[0] != 0:
            filter_df = filter_df[filter_df['similarity'] > 0]
        filter_df = filter_df.sort_values(by=['avg_stars', 'similarity'], ascending=[False, False])
        print('Total records:', filter_df.shape[0])
        filter_df['avg_stars'] = filter_df['avg_stars'].round(1)
        filter_df['image'] = None
        filter_df['open_hours'] = filter_df['open_hours'].fillna('Not Available')
        result = filter_df.head(top)[['name', 'address', 'categories', 'open_hours', 'avg_stars', 'latitude', 'longitude',
                                    'image']]
        result['image'] = result['name'].apply(self.get_image)
        return result.to_dict(orient='records')

    @staticmethod
    def similarity(x, y):
        x = x.split(';')
        common = set(x).intersection(set(y))
        return len(common) / (len(x) + len(y) - len(common))


# rr = ResturentRecommendation()
# df = rr.get_recommendation('Las Vegas', 'Restaurants', 5)
# print(df)
