import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.tun06.tech/public/",
});
