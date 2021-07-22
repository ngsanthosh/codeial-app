import { FETCH_FRIENDS } from "../actions/actionTypes";

export function friends(state = {results:[]}, action) {
  switch (action.type) {
    case FETCH_FRIENDS: {
      return {
          ...state,
          results:action.friends
      }
    }
    default:
      return state;
  }
}
