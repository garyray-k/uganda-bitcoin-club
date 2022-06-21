import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Photos from "../views/Photos.vue";
import Resources from "../views/Resources.vue";
import Donate from "../views/Donate.vue";
import { blogRoutes } from "./blogs";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Uganda Bitcoin Meetups",
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "Uganda Bitcoin Meetups | About",
    },
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos,
    meta: {
      title: "Uganda Bitcoin Meetups | Photos",
    },
  },
  {
    path: "/resources",
    name: "Resources",
    component: Resources,
    meta: {
      title: "Uganda Bitcoin Meetups | Resources",
    },
  },
  {
    path: "/donate",
    name: "Donate",
    component: Donate,
    meta: {
      title: "Uganda Bitcoin Meetups | Donate",
    },
  },
  ...blogRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const DEFAULT_TITLE = "Uganda Bitcoin Meetups";
router.beforeEach((to) => {
  document.title = (to.meta.title as string) || DEFAULT_TITLE;
});

export default router;
