import axios from "axios";
import { base_url } from "../config/enviorment";

const api = axios.create({
  baseURL: base_url,
  timeout: 15000
});

export const postAccount = (url, body, onSuccess, onFailure) => {
  return api
    .post(url, body)
    .then(
      response =>
        response.status >= 200 && response.status < 300
          ? onSuccess()
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
