import axios from "axios";
import { useUserStore } from "./store/user";

const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api",
});

axiosClient.interceptors.request.use((config) => {
    const userStore = useUserStore();
    if (config.headers) {
        config.headers.Authorization = `Bearer ${userStore.user.token}`;
    }
    return config;
});

export default axiosClient;
