import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { User } from "../types/user";
import axiosClient from "../axios";

export interface State {
    user: User;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        user: {
            data: {
                name: "tantaka",
                email: "email",
                imageUrl:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            token: null,
        },
    },
    mutations: {
        logout(state) {
            state.user.data = {};
            state.user.token = null;
        },
        setUser(state, userData: { token: string; user: User["data"] }) {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem("TOKEN", userData.token);
        },
    },
    actions: {
        async register({ commit }, user) {
            return fetch(`http://localhost:8000/api/register`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                method: "POST",
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((res) => {
                    commit("setUser", res);
                    return res;
                });
        },
        async login({ commit }, user) {
            return fetch(`http://localhost:8000/api/login`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                method: "POST",
                body: JSON.stringify(user),
            })
                .then((res) => res.json())
                .then((res) => {
                    commit("setUser", res);
                    return res;
                });
        },
    },
});
