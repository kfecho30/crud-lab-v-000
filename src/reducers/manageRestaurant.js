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
      return {restuarants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
    default:
      return state;
  }
}
