const API_ROOT = "http://codeial.codingninjas.com:8000/api/v2";

export const APIurls = {
  getposts: () => `${API_ROOT}/posts?page=1&limit=25`,

  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  edituser: () => `${API_ROOT}/users/edit`,
};
