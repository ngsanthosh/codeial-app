import { APIurls } from "../pleasehelpme/urls";
import { getbearertoken } from "../pleasehelpme/utils";
import { ADD_FRIENDS, FETCH_FRIENDS, REMOVE_FRIENDS } from "./actionTypes";

export function fetchfriends(friends) {
  return {
    type: FETCH_FRIENDS,
    friends,
  };
}

export function fetchbuddies() {
  return (dispatch) => {
    const url = APIurls.fetchbuddies();
    fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `bearer ${getbearertoken()}`,
      },
    }).then(response=>response.json()).then(data=>{
        if(data.success){
            dispatch(fetchfriends(data.data.friends))
        }
    })
  };
}

export function addbuddy(friendship){
    return{
        type: ADD_FRIENDS,
        friendship
    }
}
export function removebuddy(){
    return{
        type: REMOVE_FRIENDS,
    }
}
