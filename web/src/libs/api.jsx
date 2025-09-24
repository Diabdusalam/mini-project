import axios from "axios";
import { config } from "./config";

const axiosInstance = axios.create({
  baseURL: config.API_URL,
  setTimeout: 1000,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
export { axiosInstance };
