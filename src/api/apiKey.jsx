import axios from "axios";

// enable axios to send cookies
axios.defaults.withCredentials = true;

const apiKey = axios.create({
  baseURL: "http://192.168.2.123:8080/api/v1",
});

export default apiKey;
