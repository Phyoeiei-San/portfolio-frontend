import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Projects from "../pages/Projects.vue";
import Contact from "../pages/Contact.vue";
import Login from "../pages/Login.vue";
import Dashboard from "../pages/Dashboard.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/about",
            component: About,
        },
          {
            path: "/projects",
            name: "projects",
            component: Projects,
        },
        {
            path: "/contact",
            component: Contact,
        },
        {
            path: "/login",
            component: Login,
        },
        {
            path: "/dashboard",
            component: Dashboard,
        },
    ],
});

export default router;