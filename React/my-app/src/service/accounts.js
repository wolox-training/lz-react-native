import { api } from "../config/api";

export const postAccount = (url, body, onSuccess, onFailure) => {
  return api
    .post(url, body)
    .then(
      response =>
        response.status >= 200 && response.status < 300
          ? onSuccess(response)
          : onFailure()
    )
    .catch(e => onFailure());
};

export const checkUser = (body, onSuccess, onFailure) => {
  return postAccount("/users/sessions", body, onSuccess, onFailure);
};

export const newUser = (body, onSuccess, onFailure) => {
  return postAccount("/users", body, onSuccess, onFailure);
};
