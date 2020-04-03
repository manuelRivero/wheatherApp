import * as actions from "../actions/ActionTypes"

const initialState = {
    user:null,
    isLoading:false
}


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case actions.SET_AUTH_STATE:
        return { ...state, user: action.payload };
      default:
        return state;
    }
  };