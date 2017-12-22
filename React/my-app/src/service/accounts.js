import axios from "axios";

const api = axios.create({
  baseURL: "https://wbooks-api-stage.herokuapp.com/api/v1/",
  timeout: 15000
});

export const getAccount = () => {};

export const postAccount = (url, body, onSucces, onFailure) => {
  return api
    .post(url, body)
    .then(response => (response.status === 200 ? onSucces() : onFailure()))
    .catch(e => onFailure());
};
