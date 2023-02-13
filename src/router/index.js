import { createRouter, createWebHistory } from "vue-router";

// 开启历史模式
const routerHistory = createWebHistory();

import Canvas from "@/pages/Canvas/index.vue";
import Canvas01 from "@/pages/Canvas/Chaptor01/index.vue";
import WebGL from "@/pages/WebGL/index.vue";
import WebGL01 from "@/pages/WebGL/Chaptor01/index.vue";

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      redirect: "/canvas",
    },
    {
      path: "/canvas",
      component: Canvas,
      redirect: "/canvas01",
      children: [
        {
          path: "/canvas01",
          component: Canvas01,
        },
      ],
    },
    {
      path: "/webgl",
      component: WebGL,
      redirect: "/webgl01",
      children: [
        {
          path: "/webgl01",
          component: WebGL01,
        },
      ],
    },
  ],
});

export default router;
