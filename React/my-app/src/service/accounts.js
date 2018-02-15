import { api } from "../config/api";

export const checkUser = body => {
  return api.post("/users/sessions", body);
};

export const newUser = body => {
  return api.post("/users", body);
};

export const getUser = token => {
  api.defaults.headers.common["authorization"] = token;
  return api.get("/users/me");
};

export const getUserRents = id => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return api.get(`/users/${id}/rents`);
};

export const getUserComments = id => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return api.get(`/users/${id}/comments`);
};

export const getUserWishlist = id => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return api.get(`/users/${id}/wishes`);
};

export const addNewItemToWishlist = body => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return api.post(`/users/${window.localStorage.userId}/wishes`, body);
};
