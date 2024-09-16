import axios from "axios";

// enable axios to send cookies
axios.defaults.withCredentials = true;

const apiKey = axios.create({
  baseURL: "/api/v1",
});

export default apiKey;
