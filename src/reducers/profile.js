import {
  FETCH_USER_FAILED,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
} from "../actions/actionTypes";

const initialProfileState = {
  user: {},
  error: null,
  success: null,
  inprogress: false,
};

export function profile(state = initialProfileState, action) {
  switch (action.type) {
    case FETCH_USER_START: {
      return {
        ...state,
        inprogress: true,
      };
    }
    case FETCH_USER_SUCCESS: {
      return {
        ...state,
        user: action.user,
        success: true,
        inprogress: false,
      };
    }
    case FETCH_USER_FAILED: {
      return {
        ...state,
        error: action.error,
        inprogress: false,
      };
    }
    default:
      return state;
  }
}
