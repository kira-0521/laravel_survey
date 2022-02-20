import axios from "axios";
import { useStore } from "vuex";

const store = useStore();

const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api",
});

axiosClient.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${store.state.user.token}`;
    }
    return config;
});

export default axiosClient;
