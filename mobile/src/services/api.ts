import axios from "axios";

const api = axios.create({
  baseURL: "http://XXXXXXXXXX:3333",
});

export default api;
