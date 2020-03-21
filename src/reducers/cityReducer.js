import {
  SET_CITY,
  ADD_CITY,
  SEARCH_CITY_START,
  SEARCH_CITY_FAIL,
  SEARCH_CITY_SUCCESS,
  SHOW_SEARCH_MODAL,
  HIDE_SEARCH_MODAL
} from "../actions/ActionTypes";

const initialState = {
  selectedcity: null,
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
    default:
      return state;
  }
};
