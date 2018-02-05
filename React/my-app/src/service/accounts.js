import { api } from "../config/api";

const failure = () => {
  console.log("Request Failed");
};

export const postAccount = (url, body) => {
  return api.post(url, body);
};

export const checkUser = body => {
  return postAccount("/users/sessions", body);
};

export const newUser = (body, onSuccess, onFailure) => {
  return postAccount("/users", body, onSuccess, onFailure);
};
