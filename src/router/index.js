import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DashboardLayout from "../layouts/DashboardLayout.vue";
import AuthLayout from "../layouts/AuthLayout.vue";
import NotFound from "../views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: DashboardLayout,
        isLogin: true,
      },
      props: {
        isLoading: false,
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      meta: {
        layout: DashboardLayout,
        isLogin: true,
      },
      children: [
        {
          path: "",
          name: "dashboard",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "products",
          name: "products",
          component: () => import("../views/Products.vue"),
        },
      ],
    },
    {
      path: "/user/:id",
      name: "user-detail",
      component: () => import("../views/User.vue"),
      meta: {
        layout: DashboardLayout,
      },
    },
    {
      path: "/login",
      name: "LoginPage",
      component: () => import("../views/Login.vue"),
      meta: {
        layout: AuthLayout,
      },
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});
// router.beforeEach((to, from, next) => {
//   if (to.meta.isLogin) {
//     next("/login");
//   } else {
//     next();
//   }
// });
export default router;
