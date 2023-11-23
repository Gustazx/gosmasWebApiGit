import { AUTH_TOKEN } from "@env";
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
});

export default api;
