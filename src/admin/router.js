import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../admin/components/about.vue"),
    meta: {
      title: "Блок «Обо мне»"
  }
},
{
  path: "/work",
  component: () => import("../admin/components/work.vue"),
  meta: {
    title: "Блок «Работы»"
  }
},
{
  path: "/reviews",
  component: () => import("../admin/components/reviews.vue"),
  meta: {
    title: "Блок «Отзывы»"
  }
},

];

export default new VueRouter({ routes, mode: 'history' });