import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Photos from "../views/Photos.vue";
import Resources from "../views/Resources.vue";
import Donate from "../views/Donate.vue";
import Blog from "../views/Blog.vue";
import Blog1 from "@/views/blogs/Blog1.vue";
import Blog2 from "@/views/blogs/Blog2.vue";
import Blog3 from "@/views/blogs/Blog3.vue";

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
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    meta: {
      title: "Uganda Bitcoin Meetups | Blog",
    },
  },
  {
    path: "/blog/1",
    name: "Blog1",
    component: Blog1,
    meta: {
      title: "Uganda Bitcoin Meetups | Money and Bitcoin, Keys and Coins",
    },
  },
  {
    path: "/blog/2",
    name: "Blog2",
    component: Blog2,
    meta: {
      title: "Bitcoin: A Tool for Social Justice",
    },
  },
  {
    path: "/blog/3",
    name: "Blog3",
    component: Blog3,
    meta: {
      title: "Bitcoin – Gold version 2.0",
    },
  },
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
