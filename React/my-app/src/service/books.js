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

export const getComments = id => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return getBooks(`/books/${id}/comments`);
};

export const postComment = (id, body) => {
  return api.post(`/books/${id}/comments`, body);
};
