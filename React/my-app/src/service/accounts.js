import { api } from "../config/api";

export const postAccount = (url, body) => {
  return api.post(url, body);
};

export const getAccount = url => {
  return api.get(url);
};

export const checkUser = body => {
  return postAccount("/users/sessions", body);
};

export const newUser = body => {
  return postAccount("/users", body);
};

export const getUser = body => {
  return postAccount("/users", body);
};

export const getWishlist = id => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return getAccount(`/users/${id}/wishes`);
};

export const createWishlist = (id, body) => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return postAccount(`/users/${id}/wishes`, body);
};
