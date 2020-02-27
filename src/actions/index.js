import {getData, transformForecastExtend} from '../services/TransformWeather';
export const SET_CITY = 'SET_CITY!';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
const setCity = payload => ({type:SET_CITY, payload});
const setForecastData = payload => ({type:SET_FORECAST_DATA, payload});


export const setSelectedCity = payload =>{
    return dispatch =>{
        //activar indicador de busqueda
        dispatch(setCity(payload));
        getData(payload).then(forecastData => {
            //modificar el estado con el resultado del fecht
            const forecastExtend= transformForecastExtend(forecastData);
            dispatch(setForecastData({city:payload, forecastExtend}));
          }).catch(err => console.log(`${err}`))
    }
}
