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
