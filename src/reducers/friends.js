import { ADD_FRIENDS, FETCH_FRIENDS } from "../actions/actionTypes";

export function friends(state = [], action) {
  switch (action.type) {
    case FETCH_FRIENDS: {
      return [...action.friends];
    }
    case ADD_FRIENDS:{
        return state.concat(action.friendship)
    }
    default:
      return state;
  }
}
