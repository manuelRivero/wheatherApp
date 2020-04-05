import * as actions from "../actions/ActionTypes";

const initialState = {
  user: null,
  isLoading: false,
  snackbar: { show: true, message: "test" },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_AUTH_STATE:
      return { ...state, user: action.payload };

    case actions.SHOW_SNACKBAR:
      let newSnackBar = { show: true, message: action.payload };
      return { ...state, snackbar: newSnackBar };

    case actions.HIDE_SNACKBAR:
      let newSnackBar = { show: false, message:"" };
      return { ...state, snackbar: newSnackBar };
    default:
      return state;
  }
};
