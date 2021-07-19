const API_ROOT = "http://codeial.codingninjas.com:8000/api/v2";

export const APIurls = {
  getposts: () => `${API_ROOT}/posts?page=2&limit=10`,

  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
};
