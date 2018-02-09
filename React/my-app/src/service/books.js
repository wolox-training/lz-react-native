import { api } from "../config/api";

export const getBooks = url => {
  return api.get(url);
};

export const getBookGallery = () => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return getBooks("/books");
};

export const getBookInfo = id => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return getBooks(`/books/${id}`);
};

export const getRents = id => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return getBooks(`/books/${id}/rents`);
};
