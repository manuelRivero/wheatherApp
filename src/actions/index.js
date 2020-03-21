import { getData, transformForecastExtend } from "../services/TransformWeather";
import {SET_CITY,SET_FORECAST_DATA, ADD_CITY} from './ActionTypes';
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
