import Blog from "../views/Blog.vue";
import Blog1 from "@/views/blogs/Blog1.vue";
import Blog2 from "@/views/blogs/Blog2.vue";
import Blog3 from "@/views/blogs/Blog3.vue";
import Blog4 from "@/views/blogs/Blog4.vue";
import Blog5 from "@/views/blogs/Blog5.vue";
import Blog6 from "@/views/blogs/Blog6.vue";
import Blog7 from "@/views/blogs/Blog7.vue";
import Blog8 from "@/views/blogs/Blog8.vue";
import Blog9 from "@/views/blogs/Blog9.vue";
import Blog10 from "@/views/blogs/Blog10.vue";
import Blog11 from "@/views/blogs/Blog11.vue";
import Blog12 from "@/views/blogs/Blog12.vue";
import Blog13 from "@/views/blogs/Blog13.vue";
import Blog14 from "@/views/blogs/Blog14.vue";

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
  {
    path: "/blog/7",
    name: "Blog7",
    component: Blog7,
    meta: {
      title: "Kings of Bitcoin by Maali Marvin",
    },
  },
  {
    path: "/blog/8",
    name: "Blog8",
    component: Blog8,
    meta: {
      title: "Miniaturized Nuclear Energy by Maali Marvin",
    },
  },
  {
    path: "/blog/9",
    name: "Blog9",
    component: Blog9,
    meta: {
      title: "Pleb-onomics by Maali Marvin",
    },
  },
  {
    path: "/blog/10",
    name: "Blog10",
    component: Blog10,
    meta: {
      title: "Monetary Theory on Steroids by Maali Marvin",
    },
  },
  {
    path: "/blog/11",
    name: "Blog11",
    component: Blog11,
    meta: {
      title: "Bitcoin at $100K",
    },
  },
  {
    path: "/blog/12",
    name: "Blog12",
    component: Blog12,
    meta: {
      title: "Bitcoin is the Key to More of Nature's Secrets",
    },
  },
  {
    path: "/blog/13",
    name: "Blog13",
    component: Blog13,
    meta: {
      title: "The Untold Wonders of Deflationary Economics",
    },
  },
  {
    path: "/blog/14",
    name: "Blog14",
    component: Blog14,
    meta: {
      title:
        "The Mathematics of Bitcoin – A Tale of Ants and Difficulty Adjustment",
    },
  },
];
