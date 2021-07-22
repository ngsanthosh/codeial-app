import {
  ADD_FRIENDS,
  FETCH_FRIENDS,
  REMOVE_FRIENDS,
} from "../actions/actionTypes";

export function friends(state = [], action) {
  switch (action.type) {
    case FETCH_FRIENDS: {
      return [...action.friends];
    }
    case ADD_FRIENDS: {
      return state.concat(action.friendship);
    }
    case REMOVE_FRIENDS: {
      const hello = state.filter((state) => state.to_user._id !== action.id);
      return hello;
    }
    default:
      return state;
  }
}
