// 导入模板页面配置
import { configAll as DAG_STLconfig } from "./pages/template/DAG-STL";
import { configAll as Zero_Shot_STLconfig } from "./pages/template/Zero-Shot STL";

// 导入自定义页面组件和配置
import ExampleComp from "./pages/custom/example/example.vue";
import { configAll as ExampleConfig } from "./pages/custom/example/config";

export const routerConfig = {
  "/Zero-Shot-STL": Zero_Shot_STLconfig,
  "/DAG-STL": DAG_STLconfig,
  // "/example": {
  //   // 自定义页面配置
  //   component: ExampleComp,
  //   ...ExampleConfig,
  // },
};
