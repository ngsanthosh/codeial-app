import { APIurls } from "../pleasehelpme/urls";
import { getbearertoken } from "../pleasehelpme/utils";
import { FETCH_USER_FROM_SEARCH } from "./actionTypes";

export function fetchuserfromsearch(toSearch) {
  return (dispatch) => {
    const url = APIurls.fetchusersfromsearch(toSearch);

    fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `bearer ${getbearertoken()} `,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
            dispatch(fetchsearchusers(data.data.users))
        }
      });
  };
}

export function fetchsearchusers(users) {
  return {
    type: FETCH_USER_FROM_SEARCH,
    users,
  };
}
