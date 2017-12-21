//import axios from "axios";
import { create } from "apisauce";

const api = create({
  baseURL: "https://wbooks-api-stage.herokuapp.com/api/v1/",
  timeout: 15000
});

// const api = axios.create({
//   baseURL: "https://wbooks-api-stage.herokuapp.com/api/v1/"
// });

export const getAccount = () => {};

export const postAccount = (url, body, onSucces, onFailure) => {
  return api
    .post(url, body)
    .then(response => (response.ok ? onSucces() : onFailure()));
};
