import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Login from "../views/Login/Login.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: `/`,
      name: "home",
      component: Home,
    },
    {
      path: `/login`,
      name: "login",
      component: Login,
    },
  ],
});
