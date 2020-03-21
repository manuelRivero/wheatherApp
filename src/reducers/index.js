import {combineReducers} from 'redux';
import {extendedForecastReducer} from './forecastExtendedReducer.js'
import {cityReducer} from './cityReducer.js';

export default combineReducers({
    cityReducer, extendedForecastReducer
})
