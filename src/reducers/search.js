import { FETCH_USER_FROM_SEARCH } from "../actions/actionTypes";
const initialSearchState = {
  results: [],
};
export default function search(state = initialSearchState, action) {
  switch (action.type) {
    case FETCH_USER_FROM_SEARCH:
      return {
        // ...state,
        results: action.users,
      };
    default:
      return state;
  }
}
