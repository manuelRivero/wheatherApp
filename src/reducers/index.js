import {combineReducers} from 'redux';
import {extendedForecastReducer} from './forecastExtendedReducer.js'
import {cityReducer} from './cityReducer.js';
import {userReducer} from './userReducer'

export default combineReducers({
    cityReducer, extendedForecastReducer, userReducer
})
