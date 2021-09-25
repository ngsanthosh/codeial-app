const API_ROOT = "https://codeial.codingninjas.com:8000/api/v2";

export const APIurls = {
  getposts: () => `${API_ROOT}/posts?page=1&limit=25`,

  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  edituser: () => `${API_ROOT}/users/edit`,
  fetchusers: (userid) => `${API_ROOT}/users/${userid}`,
  fetchbuddies: () => `${API_ROOT}/friendship/fetch_user_friends`,
  addfriend: (userid) =>
    `${API_ROOT}/friendship/create_friendship?user_id=${userid}`,
  removefriend: (userid) =>
    `${API_ROOT}/friendship/remove_friendship?user_id=${userid}`,
  createposts: () => `${API_ROOT}/posts/create`,
  createcomment: () => `${API_ROOT}/comments`,
  createlikes: (id, LikeType) =>
    `${API_ROOT}/likes/toggle?likeable_id=${id}&likeable_type=${LikeType}`,
  fetchusersfromsearch: (toSearch) =>
    `${API_ROOT}/users/search?text=${toSearch}`,
};
