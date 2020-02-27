import {combineReducers} from 'redux';
import {cities} from './cities.js';
import {city} from './city.js';

export default combineReducers({
    city, cities
})
