import axios from "axios";

// enable axios to send cookies
axios.defaults.withCredentials = true;

const apiKey = axios.create({
  baseURL:
    "https://dynamic-travel-assistant.vercel.app/api/v1",
});

export default apiKey;
