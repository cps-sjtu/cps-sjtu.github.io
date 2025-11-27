// metadata转换
export function getHeaderFromInfo(headerInfo) {
  const title = headerInfo.title || "CPS@SJTU";
  const meta = Object.entries(headerInfo).flatMap(([key, value]) => {
    if (key === "citation_authors") {
      return value.map((author, index) => ({
        // 特殊处理作者列表
        name: "citation_author",
        content: author,
        // 添加唯一 key，防止被合并
        key: `citation-author-${index}`,
      }));
    }
    return {
      name: key,
      content: value,
    };
  });
  return { title: title, meta: meta };
}

// 滚动到顶部按钮
import { ref } from "vue";
import { throttle } from "lodash";

export function useScrollToTop() {
  const isScrolled = ref(false);

  // 滚动到顶部
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 监听滚动
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 10;
  };

  // 绑定事件（在组件 onMounted 中调用）
  const startWatchingScroll = () => {
    window.addEventListener("scroll", throttle(handleScroll, 100));
  };

  // 解绑事件（在组件 onUnmounted 中调用）
  const stopWatchingScroll = () => {
    window.removeEventListener("scroll", handleScroll);
  };

  return {
    isScrolled, // 是否已滚动一定距离（用于显示按钮）
    scrollToTop, // 滚动到顶部的方法
    startWatchingScroll, // 开始监听滚动
    stopWatchingScroll, // 停止监听滚动
  };
}

// 根据是否有{component}字段分离模板页面和自定义页面
export function splitRoutes(routerConfig) {
  const templateRoutes = {};
  const customRoutes = {};
  Object.keys(routerConfig).map((path) => {
    const config = routerConfig[path];
    if (config.component) {
      customRoutes[path] = config;
    } else {
      templateRoutes[path] = config;
    }
  });
  return { templateRoutes, customRoutes };
}

// 按照时间先后排序项目（支持传入数组或 path:config 映射的字典）
// 时间相同则按 paperInfo.title 的字母顺序 a-z 排序（不区分大小写）
export function sortProjectsByDate(projects) {
  // 比较函数：接受两个 project 配置对象
  const compare = (a, b) => {
    const dateA = new Date(a.paperInfo?.date);
    const dateB = new Date(b.paperInfo?.date);

    // 处理无效日期的情况：将无日期的项排到后面
    const invalidA = Number.isNaN(dateA.getTime());
    const invalidB = Number.isNaN(dateB.getTime());
    if (invalidA && invalidB) return 0;
    if (invalidA) return 1;
    if (invalidB) return -1;

    // 降序排列，最新的在前面
    const timeDiff = dateB.getTime() - dateA.getTime();
    if (timeDiff !== 0) return timeDiff;

    // 时间相同：按 paperInfo.title 的字母顺序 a-z（不区分大小写）
    const titleA = String(a.paperInfo?.title ?? "");
    const titleB = String(b.paperInfo?.title ?? "");
    return titleA.localeCompare(titleB, undefined, { sensitivity: "base" });
  };

  // 如果是对象（path -> config），按排序后的键顺序构建一个新对象并返回（保持输入为对象结构）
  const entries = Object.entries(projects || {});
  entries.sort(([, a], [, b]) => compare(a, b));
  const sortedObj = {};
  for (const [key, value] of entries) {
    sortedObj[key] = value;
  }
  return sortedObj;
}

// 讲日期字符串格式化为主页需要的 Oct, 2024 格式
export function formatDateToMonthYear(dateStr) {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) {
    return null; // 无效日期返回null
  }
  const options = { year: "numeric", month: "short" };
  return date.toLocaleDateString("en-US", options);
}
