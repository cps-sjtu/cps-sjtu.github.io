// 导入模板页面配置
import { configAll as DAG_STLconfig } from "./pages/template/DAG-STL";
import { configAll as Zero_Shot_STLconfig } from "./pages/template/Zero-Shot STL";
import { configAll as Example1Config } from "./pages/template/example";

// 导入自定义页面组件和配置
import ExampleComp from "./pages/custom/example/example.vue";
import { configAll as Example2Config } from "./pages/custom/example/config";

export const routerConfig = {
  // 主页上的卡片顺序按时间先后顺序排列，最新的在最前面
  "/Zero-Shot-STL": Zero_Shot_STLconfig,
  "/DAG-STL": DAG_STLconfig,

  // ================= 以下为快速配置示例 =================
  // "/example": Example1Config,
  // ================ 以下为自定义配置示例 ================
  // "/example": {
  //   // 自定义页面配置
  //   component: ExampleComp,
  //   ...Example2Config,
  // },
  // ===================================================
};
