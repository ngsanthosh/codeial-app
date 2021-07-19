import { APIurls } from "../pleasehelpme/urls";
import { getFormBody } from "../pleasehelpme/utils";
import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "./actionTypes";

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
    const url = APIurls.signup();

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
          dispatch(loginsuccess(data.data.user));
          return;
        }
        dispatch(loginfailed(data.message));
      });
  };
}

// export function signup(email, name, password, confirm_password) {
//     return (dispatch) => {
//     //   dispatch(startlogin());
//       const url = APIurls.signup();
  
//       fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: getFormBody({ email, password }),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           console.log(data);
//           //   dispatch()
//           if (data.success) {
//             dispatch(loginsuccess(data.data.user));
//             return;
//           }
//           dispatch(loginfailed(data.message));
//         });
//     };
//   }
