import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE} from '../actions/actionTypes';

const  initialState = {
    places: [],
    selectedPlaces: null
}
// placesReducer
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLACE':
    return{
      ...state,// it shows previous states as we are not allowed to manipulate the state directly 
      places: state.places.concat({

        key: Math.random().toString(),
        name: action.placeName,
        image: placeImage
      })
    };
    case 'DELETE_PLACE':
    return{
      ...state,
      
        places: state.places.filter((place) => {
          return place.key !== state.selectedPlaces.key;
        }),

        selectedPlaces: null

    };

    case 'SELECT_PLACE':
    return{
      ...state,
      selectedPlaces: state.places.find(places => {
        return places.key === action.placeKey;
      })
    };
    case 'DESELECT_PLACE':
    return{
      ...state,
      selectedPlaces: null
    };
  default:
    return state
  }
}
