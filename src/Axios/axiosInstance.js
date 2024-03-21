import axios from "axios";
import { baseURL } from "./baseUrl";
const axiosInstance = axios.create({ baseURL });
export const setAuthHeader = (token = undefined) => {
  axiosInstance.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : undefined;
};
export default axiosInstance;