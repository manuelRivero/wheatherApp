import {SET_FORECAST_DATA} from  '../actions/ActionTypes';

const initialState={

}

export  const extendedForecastReducer = (state =null, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const {city, forecastExtend} =action.payload;
            return {...state, [city]: forecastExtend };
        default:
            return state ;
    }
}