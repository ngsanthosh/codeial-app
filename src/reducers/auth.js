import {
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  AUTHENTICATE_USER,
  LOG_OUT,
  CLEAR_ERRORRR,
} from "../actions/actionTypes";

const initialAuthState = {
  user: {},
  error: null,
  isloggedin: false,
  inprogress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
      return {
        ...state,
        inprogress: true,
      };

    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isloggedin: true,
        inprogress: false,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        inprogress: false,
        error: action.error,
      };

    case SIGNUP_FAILED:
      return {
        ...state,
        inprogress: false,
        message: action.message,
      };

    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isloggedin: true,
        inprogress: false,
        error: null,
      };
    case LOG_OUT:
      return {
        user: {},
        isloggedin: false,
      };
    case CLEAR_ERRORRR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
