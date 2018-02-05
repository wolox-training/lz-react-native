import { api } from "../config/api";

const failure = () => {
  console.log("Request Failed");
};

export const getBooks = (url, onSuccess, onFailure) => {
  return api.get(url);
};

export const getBookGallery = (onSuccess, onFailure = failure) => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return getBooks("/books", onSuccess, onFailure);
};

export const getBookInfo = (id, onSuccess, onFailure = failure) => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return getBooks(`/books/${id}`, onSuccess, onFailure);
};
