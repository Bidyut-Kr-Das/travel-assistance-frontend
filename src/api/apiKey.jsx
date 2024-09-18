import axios from "axios";

// enable axios to send cookies
axios.defaults.withCredentials = true;

const apiKey = axios.create({
  baseURL:
    "http://ec2-3-108-254-223.ap-south-1.compute.amazonaws.com:8080/api/v1/",
});

export default apiKey;
