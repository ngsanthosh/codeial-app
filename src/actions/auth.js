import { APIurls } from "../pleasehelpme/urls";
import { getFormBody } from "../pleasehelpme/utils";
import { LOGIN_START } from "./actionTypes";

export function startlogin() {
  return {
    type: LOGIN_START,
  };
}

export function login() {
  return (dispatch) => {
    const url = APIurls.login();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({email, password})
    });
  };
}
