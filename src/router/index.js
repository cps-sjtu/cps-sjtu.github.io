import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import DynamicProjPage from "../views/DynamicProjPage.vue";
import { routerConfig } from "../../config/router";
import { splitRoutes } from "../components/utilFuncs";

// 分离模板页面和自定义页面配置
const { templateRoutes, customRoutes } = splitRoutes(routerConfig);

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
  // 自定义页面路由
  ...Object.keys(customRoutes).map((path) => ({
    path: path,
    component: customRoutes[path].component,
    props: {
      config: customRoutes[path].config,
    },
  })),
  // 模板生成页面路由
  {
    path: "/:path(.*)*", // 匹配所有路径
    component: DynamicProjPage,
    props: (route) => {
      const normalizedPath = normalizePath(route.path);
      const config = templateRoutes[normalizedPath];
      return {
        config: config || null,
      };
    },
    beforeEnter: async (to, from, next) => {
      const normalizedPath = normalizePath(to.path);
      const config = templateRoutes[normalizedPath];
      // 处理重定向逻辑
      if (config && config.routeConfig && config.routeConfig.redirect) {
        const redirectPath = config.routeConfig.redirect;
        next(redirectPath);
        return;
      }

      if (config) {
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
