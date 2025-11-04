import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DynamicProjPage from "../views/DynamicProjPage.vue";
import { routerConfig } from "../../config/router";

// 导入页面组件
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:path(.*)*", // 匹配所有路径
    component: DynamicProjPage,
    props: (route) => {
      const config = routerConfig[route.path];
      return {
        config: config || null,
      }
    },
    beforeEnter: async (to, from, next) => {
      if (routerConfig[to.path]) {
        next();
      } else {
        alert(`目标页面${to.path}不存在，已重定向到首页。`);
        next("/"); // 重定向到首页
      }
    },
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
