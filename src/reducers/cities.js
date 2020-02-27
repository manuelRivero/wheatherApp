import {SET_FORECAST_DATA} from  '../actions/index';

export  const cities = (state ={}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const {city, forecastExtend} =action.payload;
            return {...state, [city]: forecastExtend };
        default:
            return state ;
    }
}