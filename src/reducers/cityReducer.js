import {
  SET_CITY,
  ADD_CITY,
  SEARCH_CITY_START,
  SEARCH_CITY_FAIL,
  SEARCH_CITY_SUCCESS,
  SHOW_SEARCH_MODAL,
  HIDE_SEARCH_MODAL,
  DELETE_CITY
} from "../actions/ActionTypes";

const initialState = {
  selectedCity: null,
  cities: [],
  searchResults: [],
  isLoading: false,
  showModal: false
};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, selectedCity: action.payload };
    case ADD_CITY:
      let newCitiesList = [...state.cities, action.payload];
      return { ...state, cities: newCitiesList, showModal:false };
    case SEARCH_CITY_START:
      return { ...state, isLoading: true };
    case SEARCH_CITY_FAIL:
      return { ...state, isLoading: false };
    case SEARCH_CITY_SUCCESS:
      return { ...state, isLoading: false, searchResults: action.payload };
    case SHOW_SEARCH_MODAL:
      return { ...state, showModal: true, searchResults:[] };
    case HIDE_SEARCH_MODAL:
      return { ...state, showModal: false, searchResults:[] };
    case DELETE_CITY:
      newCitiesList =state.cities.filter((city, i)=> i !== action.payload)
      if(state.selectedCity === state.cities[action.payload]){
        return { ...state, cities: newCitiesList, selectedCity:state.cities[0] }
      }else if(state.cities.length === 0){
        return { ...state, cities: newCitiesList, selectedCity:null }
      }
      return { ...state, cities: newCitiesList }
    default:
      return state;
  }
};
