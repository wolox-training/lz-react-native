import axios from "axios";
import { BASE_URL } from "./enviorment";

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000
});
