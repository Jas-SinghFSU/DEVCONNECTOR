import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"), //get the token from the local storage
  isAuthenticated: null, //used to check if the user is logged in/authenticated
  loading: true, //set to false when we know that data has been loaded
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED: //if user is loaded after the api/users route, set isAuth to true, and pass in user data
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };

    case REGISTER_SUCCESS: //if the registration is successful, put token in local storage, set isAuthenticated to true
    case LOGIN_SUCCESS: //same as register success
      localStorage.setItem("token", payload.token); //put token in local storage
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL: //if registration fails, remove token from local storage, set token to null, isAuth to false
    case AUTH_ERROR: //does same thing as register fail
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
}
