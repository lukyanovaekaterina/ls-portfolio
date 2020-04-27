import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: () => import("../admin/components/pages/about.vue"),
    meta: {
      title: "Блок «Обо мне»"
  }
},
{
  path: "/work",
  component: () => import("../admin/components/pages/work.vue"),
  meta: {
    title: "Блок «Работы»"
  }
},
{
  path: "/reviews",
  component: () => import("../admin/components/pages/reviews.vue"),
  meta: {
    title: "Блок «Отзывы»"
  }
},
{
  path: "/login",
  component: () => import("../admin/components/pages/login.vue"),
  meta: {
    public: true
  }
}

];

export default new VueRouter({ 
  base: '/admin',
  routes,  
});