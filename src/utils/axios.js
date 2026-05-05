import Axios from "axios";
export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const axios = Axios.create({
  baseURL: BASE_URL,
});

export default axios;
