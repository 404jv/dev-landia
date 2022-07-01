import axios from "axios";

const baseURL = process.env.BASE_URL;

const api = axios.create({
  baseURL: "http://192.168.71.47:3333",
});

export { api };
