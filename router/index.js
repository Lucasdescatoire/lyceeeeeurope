import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../home.vue")
  },
  {
    path: "/lycee",
    name: "lycee",
    component: () => import("../lycee.vue")
  },
  {
    path: "/bac2021",
    name: "bac2021",
    component: () => import("../bac2021.vue")
  },
  {
    path: "/rentree",
    name: "rentree",
    component: () => import("../rentree.vue")
  },
  {
    path: "/bac",
    name: "bac",
    component: () => import("../bac.vue")
  },
  {
    path: "/BTS",
    name: "BTS",
    component: () => import("../bts.vue")
  },
  {
    path: "/prepa",
    name: "prepa",
    component: () => import("../prepa.vue")
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../contact.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];
const router = new VueRouter({
  routes
});

export default router;
