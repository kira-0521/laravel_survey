import { defineStore } from "pinia";
import axiosClient from "../axiosClient";
import { UserData } from "../types/user";

interface Form {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    remember: boolean;
}
type Register = Omit<Form, "remember">;
type Login = Omit<Form, "name" | "password_confirmation">;

export const useUserStore = defineStore("user", {
    state: () => ({
        user: {
            data: {} as UserData,
            token: "",
        },
    }),
    getters: {
        token(state) {
            return state.user.token
                ? state.user.token
                : sessionStorage.getItem("TOKEN");
        },
    },
    actions: {
        setUser(userData: { token: string; user: UserData }) {
            this.user.token = userData.token;
            this.user.data = userData.user;
            sessionStorage.setItem("TOKEN", userData.token);
        },
        async register(user: Register) {
            const { data } = await axiosClient.post("/register", user);
            this.setUser(data);
            return data;
        },
        async login(user: Login) {
            console.log("user", user);
            const { data } = await axiosClient.post("/login", user);
            this.setUser(data);
            return data;
        },
        async logout() {
            const res = await axiosClient.post("/logout");
            this.user.data = {
                name: "",
                email: "",
                imageUrl: "",
            };
            this.user.token = "";
            return res;
        },
    },
});
