import axios from "axios";

// enable axios to send cookies
axios.defaults.withCredentials = true;

const apiKey = axios.create({
  baseURL: "http://192.0.0.2:8080/api/v1/",
});

export default apiKey;
