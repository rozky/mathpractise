import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    redirect: "matrix",
    component: () => import("@/App.vue"),
    children: [
      {
        path: "matrix",
        name: "matrix",
        component: () => import("@/views/MatrixMultiplication.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
