import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { User } from "../types/user";

export interface State {
    user: User;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
    state: {
        user: {
            data: {
                name: "Kira Tanaka",
                email: "pyscripthon@gmail.com",
                imageUrl:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            },
            token: "dfsafjdsakl;",
        },
    },
    mutations: {
        logout(state) {
            state.user.data = {};
            state.user.token = "";
        },
    },
});
