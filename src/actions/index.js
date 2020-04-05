import { getData, transformForecastExtend } from "../services/TransformWeather";
import { findCity } from "../services/findCity";
import firebaseApp from "../firebase/firebaseConfi"
import  {
  SET_CITY,
  SET_FORECAST_DATA,
  ADD_CITY,
  SET_USER_LOCATION,
  SEARCH_CITY_START,
  SEARCH_CITY_SUCCESS,
  SEARCH_CITY_FAIL,
  HIDE_SEARCH_MODAL,
  SHOW_SEARCH_MODAL,
  DELETE_CITY
} from "./ActionTypes";
import * as actions from "./ActionTypes";
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const getForecastData = payload => {
  return dispatch => {
    console.log(payload)
    getData(payload, "forecast")
      .then(forecastData => {
        //modificar el estado con el resultado del fecht
        const forecastExtend = transformForecastExtend(forecastData);
        dispatch(setForecastData({ city: payload, forecastExtend }));
      })
      .catch(err => console.log(`${err}`));
  };
};

export const addCity = city => {
  return {
    type: ADD_CITY,
    payload: city
  };
};
export const setUserLocation = () => {
  let locationUrl = "https://ipapi.co/json/";
  return dispatch => {
    fetch(locationUrl)
      .then(res => res.json())
      .then(
        ({ city, country_name}) => {
          // set city in correct format for wheather api ej ( " rosario , ar ")
          let formatedCityInfo = [city, country_name].join(", ");
          dispatch(addCity(formatedCityInfo));
          dispatch(showSnackbar(`your current location, ${formatedCityInfo}`))
          dispatch(getForecastData(formatedCityInfo));
        }
      );
  };
};

const searchCityStart = () => {
  return {
    type: SEARCH_CITY_START
  };
};

const searchCityfail = error => {
  return {
    type: SEARCH_CITY_FAIL,
    payload: error
  };
};
const searchCitySuccess = cities => {
  return {
    type: SEARCH_CITY_SUCCESS,
    payload: cities
  };
};


export const searchCity = city => {
  return dispatch => {
    dispatch(searchCityStart());
    findCity(city)
      .then(({_embedded}) => {
        const cities = _embedded['city:search-results'];
        let formatedCitiesList = cities.map( city => {
          // city name is the firts element on the array
          let cityNameArray = city.matching_full_name.split(",")
          let cityName= cityNameArray[0]
          // remove parentesis from the last statement
          let country = cityNameArray[cityNameArray.length - 1].split("(")[0]
          let formatedName = cityName+","+country;
          return formatedName
        }
        );
        dispatch(searchCitySuccess(formatedCitiesList));
      })
      .catch(err => dispatch(searchCityfail(err)));
  };
};

export const showModal = () => {
  return {
    type: SHOW_SEARCH_MODAL
  };
};

export const hideModal = () => {
  return {
    type: HIDE_SEARCH_MODAL
  };
};

export const deleteCity = (city) => {
  return{
    type:DELETE_CITY,
    payload:city
  }
}

export const setAuthState = (user) => {
  return {
    type:actions.SET_AUTH_STATE,
    payload:user
  }
}

export const hideSnackbar = () => {
  return ({
    type:actions.HIDE_SNACKBAR
  })
}

export const showSnackbar = (message) => {
  return ( dispatch => {
    dispatch({type:actions.SHOW_SNACKBAR, payload:message})
    setTimeout( ()=>{
      dispatch(hideSnackbar())
    }, 5000)
  })
}