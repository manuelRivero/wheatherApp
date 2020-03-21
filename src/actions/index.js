import { getData, transformForecastExtend } from "../services/TransformWeather";
import {SET_CITY,SET_FORECAST_DATA, ADD_CITY, SET_USER_LOCATION} from './ActionTypes';
const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

export const setSelectedCity = payload => {
  return dispatch => {
    //activar indicador de busqueda
    dispatch(setCity(payload));
    getData(payload, "forecast")
      .then(forecastData => {
        //modificar el estado con el resultado del fecht
        console.log(forecastData)
        const forecastExtend = transformForecastExtend(forecastData);
        console.log(forecastExtend)
        dispatch(setForecastData({ city: payload, forecastExtend }));
      })
      .catch(err => console.log(`${err}`));
  };
};

export const addCity = city => {
  return ({
    type:ADD_CITY,
    payload:city

  })
}
export const setUserLocation = ()=>{
  let locationUrl = "http://www.geoplugin.net/json.gp";
  return (dispatch =>{
    fetch(locationUrl)
    .then(res => res.json())
    .then(({geoplugin_city, geoplugin_regionName, geoplugin_currencyCode }) =>{
      // set city in correct format for wheather api ej ( " rosario , ar ")
      let formatedCityInfo = [geoplugin_city, geoplugin_currencyCode].join(",")
      dispatch(addCity(formatedCityInfo))
      dispatch(setSelectedCity(formatedCityInfo))
    })
  })
}

