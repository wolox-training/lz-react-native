import { api } from "../config/api";

export const getBookGallery = () => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return api.get("/books");
};

export const getBookInfo = id => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return api.get(`/books/${id}`);
};

export const getRents = id => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return api.get(`/books/${id}/rents`);
};
