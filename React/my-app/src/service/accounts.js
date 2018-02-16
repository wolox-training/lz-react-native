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

export const addNewItemToWishlist = body => {
  return api.post(`/users/${window.localStorage.userId}/wishes`, body);
};
