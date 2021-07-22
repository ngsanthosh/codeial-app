import {
  CREATE_COMMENT,
  CREATE_POST,
  UPDATE_POSTS,
} from "../actions/actionTypes";

export function posts(state = [], action) {
  switch (action.type) {
    case UPDATE_POSTS: {
      return action.posts;
    }
    case CREATE_POST: {
      return [action.post, ...state];
    }
    case CREATE_COMMENT: {
      const newArray = state.map((post) => {
        // console.log(post.comment);
        if (post._id === action.id) {
          return {
            ...post,
            comments: [action.comment, ...post.comments],
          };
        } else {
          return post;
        }
      });
      return newArray;
    }
    default:
      return state;
  }
}
