import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DynamicProjPage from "../views/DynamicProjPage.vue";
import { routerConfig } from "../../config/router";

// 工具函数：标准化路径（去除末尾 /，保留根路径）
function normalizePath(path) {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

// 导入页面组件
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // 自定义页面路由可以在此添加
  // ...

  // 动态生成页面路由
  {
    path: "/:path(.*)*", // 匹配所有路径
    component: DynamicProjPage,
    props: (route) => {
      const normalizedPath = normalizePath(route.path);
      const config = routerConfig[normalizedPath];
      return {
        config: config || null,
      };
    },
    beforeEnter: async (to, from, next) => {
      const normalizedPath = normalizePath(to.path);
      if (routerConfig[normalizedPath]) {
        next();
      } else {
        alert(`目标页面${normalizedPath}不存在，已重定向到首页。`);
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
