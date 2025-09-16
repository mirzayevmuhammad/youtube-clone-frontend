import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.35.44:4000/api",
  withCredentials: true
});

export default api;
