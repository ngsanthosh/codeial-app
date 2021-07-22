import { APIurls } from "../pleasehelpme/urls.js";
import { getbearertoken, getFormBody } from "../pleasehelpme/utils.js";
import { UPDATE_POSTS, CREATE_POST } from "./actionTypes.js";

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

export function createPosts(post) {
  return {
    type: CREATE_POST,
    post,
  };
}

export function postKaro(content) {
  return (dispatch) => {
    const url = APIurls.createposts();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `bearer ${getbearertoken()} `,
      },
      body: getFormBody({
        content,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(createPosts(data.data.post))
      });
  };
}
