import { api } from "../config/api";

const failure = () => {
  console.log("Request Failed");
};

export const getBooks = (url, onSuccess, onFailure) => {
  api
    .get(url)
    .then(
      response =>
        response.status >= 200 && response.status < 300
          ? onSuccess(response)
          : onFailure()
    )
    .catch(e => onFailure());
  delete api.defaults.headers.common["authorization"];
};

export const getBookGallery = (onSuccess, onFailure = failure) => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return getBooks("/books", onSuccess, onFailure);
};

export const getBookInfo = (id, onSuccess, onFailure = failure) => {
  api.defaults.headers.common["authorization"] = window.localStorage.token;
  return getBooks(`/books/${id}`, onSuccess, onFailure);
};
