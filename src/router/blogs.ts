import Blog from "../views/Blog.vue";
import Blog1 from "@/views/blogs/Blog1.vue";
import Blog2 from "@/views/blogs/Blog2.vue";
import Blog3 from "@/views/blogs/Blog3.vue";
import Blog4 from "@/views/blogs/Blog4.vue";
import Blog5 from "@/views/blogs/Blog5.vue";
import Blog6 from "@/views/blogs/Blog6.vue";

export const blogRoutes = [
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
  {
    path: "/blog/4",
    name: "Blog4",
    component: Blog4,
    meta: {
      title: "The Proof-of-Work Train",
    },
  },
  {
    path: "/blog/5",
    name: "Blog5",
    component: Blog5,
    meta: {
      title:
        "Bitcoin, Climate Change and The Unstoppable Rise of Consumerist Culture",
    },
  },
  {
    path: "/blog/6",
    name: "Blog6",
    component: Blog6,
    meta: {
      title: '"Bitcoin is Responsibility-Go-Up Technology" - Svetski',
    },
  },
];
