import { APIurls } from "../pleasehelpme/urls";
import { getbearertoken, getFormBody } from "../pleasehelpme/utils";
import {
  AUTHENTICATE_USER,
  CLEAR_ERRORRR,
  EDIT_USER_FAILED,
  EDIT_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOG_OUT,
  SIGNUP_FAILED,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "./actionTypes";

export function startlogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginsuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginfailed(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startlogin());
    const url = APIurls.login();

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //   dispatch()
        if (data.success) {
          localStorage.setItem("token", data.data.token);
          dispatch(loginsuccess(data.data.user));
          return;
        }
        dispatch(loginfailed(data.message));
      });
  };
}

export function startsignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupsuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

export function signupfailed(message) {
  return {
    type: SIGNUP_FAILED,
    message,
  };
}

export function signup(email, name, password, confirm_password) {
  return (dispatch) => {
    dispatch(startsignup());
    const urll = APIurls.signup();

    fetch(urll, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: getFormBody({ email, name, password, confirm_password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        {
          // dispatch()
          if (data.success) {
            dispatch(signupsuccess(data.data.user));
            return;
          }
          console.log(data.message);
          dispatch(signupfailed(data.message));
        }
        // });
        // };
      });
  };
}

export function authenticate(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logout() {
  return {
    type: LOG_OUT,
  };
}
export function clearerror() {
  return {
    type: CLEAR_ERRORRR,
  };
}

export function editusersuccess(user) {
  return {
    type: EDIT_USER_SUCCESS,
    user,
  };
}
export function edituserfailed(error) {
  return {
    type: EDIT_USER_FAILED,
    error,
  };
}
export function edituser(name, password, confirmpassword, id){
  return (dispatch) =>{
    const url = APIurls.edituser()

    fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization":`bearer ${getbearertoken()} `
      },
      body: getFormBody({ name, password, confirm_password:confirmpassword, id }),
    }).then(response => response.json())
    .then(data =>  {
      console.log(data);
      if(data.success){
        dispatch(editusersuccess(data.data.user))
        if(data.data.token){
          localStorage.setItem("token", data.data.token)
        }
      }
      else{
        dispatch(edituserfailed(data.message))
      }
    })
  }
}
