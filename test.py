from models.resturent_recommendation import ResturentRecommendation
from models.hotel_recommendation import HotelRecommendation


rr = ResturentRecommendation()
print(rr.get_recommendation("Montreal",  ['Nightlife', 'Breakfast & Brunch', 'Indian', 'Pubs', 'pizza'], 5))



# hr = HotelRecommendation()
# print(hr.prepare_final_output(['Free parking,Meeting rooms,Hot Tub,Restaurant,Family Rooms'],
#                               'Montreal', new_user=False, user_id=4023))
