import { getData, transformForecastExtend } from "../services/TransformWeather";
import { findCity } from "../services/findCity";
import {
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
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => {
  return dispatch => {
    //activar indicador de busqueda
    dispatch(setCity(payload));
    getData(payload, "forecast")
      .then(forecastData => {
        //modificar el estado con el resultado del fecht
        console.log(forecastData);
        const forecastExtend = transformForecastExtend(forecastData);
        console.log(forecastExtend);
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
  let locationUrl = "http://www.geoplugin.net/json.gp";
  return dispatch => {
    fetch(locationUrl)
      .then(res => res.json())
      .then(
        ({ geoplugin_city, geoplugin_regionName, geoplugin_currencyCode }) => {
          // set city in correct format for wheather api ej ( " rosario , ar ")
          let formatedCityInfo = [geoplugin_city, geoplugin_currencyCode].join(
            ","
          );
          dispatch(addCity(formatedCityInfo));
          dispatch(setSelectedCity(formatedCityInfo));
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
      .then(({ data }) => {
        let formatedCitiesList = data.map(
          city => city.name + "," + city.country
        );
        console.log(formatedCitiesList);
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
