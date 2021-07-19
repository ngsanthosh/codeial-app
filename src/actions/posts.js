import { APIurls } from "../pleasehelpme/urls.js";
import { UPDATE_POSTS } from "./actionTypes.js";

export function fetchPosts() {
  return (dispatch) => {
    const url = APIurls.getposts();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updatePosts(data.data.posts));
      });
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
