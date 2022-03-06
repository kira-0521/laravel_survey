import {
    createRouter,
    createWebHistory,
    NavigationGuardNext,
    RouteLocationNormalized,
} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Surveys from "../views/Surveys.vue";
import SurveyView from "../views/SurveyView.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../components/AuthLayout.vue";

import { useUserStore } from "../store/user";

const routes = [
    {
        path: "/",
        redirect: "/dashboard",
        component: DefaultLayout,
        meta: {
            requiresAuth: true,
        },
        children: [
            { path: "/dashboard", name: "Dashboard", component: Dashboard },
            { path: "/surveys", name: "Surveys", component: Surveys },
            {
                path: "/surveys/create",
                name: "SurveyCreate",
                component: SurveyView,
            },
            {
                path: "/surveys/:id",
                name: "SurveyView",
                component: SurveyView,
            },
        ],
    },
    {
        path: "/auth",
        redirect: "login",
        name: "Auth",
        meta: { isGuest: true },
        component: AuthLayout,
        children: [
            { path: "/login", name: "Login", component: Login },
            { path: "/register", name: "Register", component: Register },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(
    (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => {
        // ここに書かないと「getActivePinia was called with no active Pinia.」エラー
        const userStore = useUserStore();
        // 未認証はログインへリダイレクト
        if (to.meta.requiresAuth && !userStore.token) {
            next({ name: "Login" });
        } else if (
            // 認証済みはdashboardへリダイレクト
            userStore.token &&
            to.meta.isGuest
        ) {
            next({ name: "Dashboard" });
        } else {
            next();
        }
    }
);

export default router;
