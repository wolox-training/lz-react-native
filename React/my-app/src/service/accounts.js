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

export const getProfileInfo = id => {
  return api.get(`/users/${id}`);
};

export const getProfileNotification = id => {
  return api.get(`/users/${id}/notifications`);
};

export const markAsRead = id => {
  return api.post(`/users/${id}/notifications/read_all`);
};

export const getUserRents = id => {
  return api.get(`/users/${id}/rents`);
};

export const getUserComments = id => {
  return api.get(`/users/${id}/comments`);
};

export const getUserWishlist = id => {
  return api.get(`/users/${id}/wishes`);
};

export const addNewItemToWishlist = body => {
  return api.post(`/users/${window.localStorage.userId}/wishes`, body);
};
