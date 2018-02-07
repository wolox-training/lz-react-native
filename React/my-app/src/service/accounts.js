import { api } from "../config/api";

export const postAccount = (url, body) => {
  return api.post(url, body);
};

export const checkUser = body => {
  return postAccount("/users/sessions", body);
};

export const newUser = body => {
  return postAccount("/users", body);
};
