import axios from "axios";
import { backendUrl } from "./backendUrl";

export const axiosInstance = axios.create({
  baseURL: backendUrl,
});
