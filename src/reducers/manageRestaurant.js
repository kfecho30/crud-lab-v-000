import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants:[], reviews:[]}, action) {
  switch(action.type){
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      return {restaurants: state.restaurants.concat(restaurant)}
    case "DELETE_RESTAURANT":
      return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
      case 'ADD_REVIEW':

        const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() };
        return { ...state,
          reviews: [...state.reviews, review]
        }

      case 'DELETE_REVIEW':
        const reviews = state.reviews.filter(review => review.id !== action.id);
        return {...state, reviews }
    default:
      return state;
  }
}
