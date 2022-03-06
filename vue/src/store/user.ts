import { defineStore } from "pinia";
import axiosClient from "../axios";
import { UserData } from "../types/user";

interface Form {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
type Register = Form;
type Login = Omit<Form, "password_confirmation">;

export const useMainStore = defineStore("user", {
    state: () => ({
        user: {
            data: {
                name: "tanaka",
                email: "email",
                imageUrl:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            token: "",
        },
    }),
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
