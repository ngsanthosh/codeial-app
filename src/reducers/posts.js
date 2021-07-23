import {
  CREATE_COMMENT,
  CREATE_POST,
  UPDATE_POSTS,
  UPDATE_POST_LIKE,
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
    case UPDATE_POST_LIKE: {
      const newArray1 = state.map((post) => {
        // console.log(post.comment);
        if (post._id === action.postid) {
          return {
            ...post,
            likes: [...post.likes, action.userid],
          };
        } else {
          return post;
        }
      });
      return newArray1;
    }
    default:
      return state;
  }
}
