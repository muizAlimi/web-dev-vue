import Vue from "vue";
import VueRouter from "vue-router";
import CreatePolicy from "../views/CreatePolicy.vue";
import Finish from "../views/Finish.vue";
import StoreUtils from "../utils/BaseUtils/StoreUtils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/create-policy/:requestId/:categoryId/:insuranceCompanyId/:username",
    name: "create-policy",
    component: CreatePolicy,
    beforeEnter(to, from, next) {
      StoreUtils.commit("auth/SET_USER_OPTIONS", {
        requestId: to.params.requestId,
        categoryId: to.params.categoryId,
        insuranceCompanyId: to.params.insuranceCompanyId,
        username: to.params.username
      });
      next();
    }
  },
  {
    path: "/finish",
    name: "finish",
    component: Finish
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
