import axios from "axios";
export const BASE_URL = "http://127.0.0.1:8000";
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        Accept: "application/json",
    },
});
export default api;