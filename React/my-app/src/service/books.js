import { api } from "../config/api";

export const getBookGallery = () => {
  return api.get("/books");
};

export const getBookInfo = id => {
  return api.get(`/books/${id}`);
};

export const getRents = id => {
  return api.get(`/books/${id}/rents`);
};

export const getSuggestions = id => {
  return api.get(`/books/${id}/suggestions`);
};

export const getComments = id => {
  return api.get(`/books/${id}/comments`);
};

export const postComment = (id, body) => {
  return api.post(`/books/${id}/comments`, body);
};

export const newBookSuggestion = body => {
  return api.post(`/book_suggestions`, body);
};
