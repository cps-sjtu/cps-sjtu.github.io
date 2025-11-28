<script setup lang="ts">
import { computed } from "vue";
import MarkdownIt from "markdown-it";
import markdownItKatex from "@vscode/markdown-it-katex";

if (!window.katex) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css";
  link.crossOrigin = "anonymous";
  document.head.appendChild(link);
}

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
});

const md = new MarkdownIt().use(markdownItKatex);
const renderedContent = computed(() => md.render(props.content));
</script>

<template>
  <div class="markdown-body innermd" v-html="renderedContent" />
</template>

<style scoped>
/* 引入 GitHub 风格样式 */
@import "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown-light.min.css";

.markdown-body {
  color: var(--font-color);
  background-color: transparent;
}

.markdown-body::before {
  display: none;
}
</style>
