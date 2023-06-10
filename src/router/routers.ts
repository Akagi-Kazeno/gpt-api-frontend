import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "User",
    children: [
      {
        path: "/login",
        name: "UserLogin",
        component: () => import("../components/user/UserLogin.vue"),
      },
      {
        path: "/register",
        name: "UserRegister",
        component: () => import("../components/user/UserRegister.vue"),
      },
      {
        path: "/user",
        name: "UserInfo",
        component: () => import("../components/user/UserInfo.vue"),
      },
      {
        path: "/update",
        name: "UserUpdate",
        component: () => import("../components/user/UserUpdate.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("../components/home/Home.vue"),
  },
  {
    path: "/:category",
    component: () => import("../components/home/Home.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
