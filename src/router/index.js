import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    index: 1,
  },
  {
    path: "/forms",
    name: "Form",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( "../views/FormPage.vue"),
    index: 2,
  },
  {
    path: "/hubs",
    name: "USB Hubs",
    component: () =>
      import( "../views/HubsPage.vue"),
    index: 3,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
