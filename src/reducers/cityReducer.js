import {SET_CITY, ADD_CITY} from '../actions/ActionTypes';

const initialState ={
    selectedcity:null,
    cities:[]
}

export const cityReducer = ( state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return  {...state, selectedCity:action.payload};
        case ADD_CITY:
            let newCitiesList = [...state.cities, action.payload]
            return {...state, cities:newCitiesList }
        default:
        return state;
    }
}