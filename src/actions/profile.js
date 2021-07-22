import {
  FETCH_USER_FAILED,
  FETCH_USER_START,
  FETCH_USER_SUCCESS,
} from "./actionTypes";

import { APIurls } from "../pleasehelpme/urls";
import { getbearertoken } from "../pleasehelpme/utils";

export function fetchUserSuccess(user) {
  return {
    type: FETCH_USER_SUCCESS,
    user,
  };
}
export function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILED,
    error,
  };
}
export function fetchUserStart() {
  return {
    type: FETCH_USER_START,
  };
}

export function fetchUser(userid) {
  return (dispatch) => {
    dispatch(fetchUserStart());
    const url = APIurls.fetchusers(userid);
    fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `bearer ${getbearertoken()} `,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(fetchUserSuccess(data.data.user));
          return;
        }
        dispatch(fetchUserFailure(data.message));
      });
  };
}
