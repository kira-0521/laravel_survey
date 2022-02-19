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
                name: "kira",
            },
            token: "fdsafdsaf",
        },
    },
});
