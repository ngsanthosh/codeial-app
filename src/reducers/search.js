import { FETCH_USER_FROM_SEARCH } from "../actions/actionTypes";

export function search(state = { results: [] }, action) {
  switch (action.type) {
    case FETCH_USER_FROM_SEARCH:
      return {
        ...state,
        results: action.users,
      };
  }
}
