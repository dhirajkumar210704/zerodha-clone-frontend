import axios from "axios";

const api = axios.create({
  baseURL: "https://zerodha-clone-backend-sztq.onrender.com",
  withCredentials: true,
});

export default api;