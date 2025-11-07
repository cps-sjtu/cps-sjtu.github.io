<script setup>
import arxivIcon from "../assets/arxiv.svg?component";
import pdfIcon from "../assets/pdf.svg?component";
import githubIcon from "../assets/github.svg?component";
defineProps({
  info: Object,
  customBtn: Boolean,
});
const iconTypeMap = {
  arxiv: arxivIcon,
  pdf: pdfIcon,
  github: githubIcon,
};
</script>

<template setup>
  <button class="btn">
    <a :href="info.url">
      <div v-if="!customBtn" class="container">
        <component :is="iconTypeMap[info.type]" class="icon" />
        <span class="label">{{ info.label }}</span>
      </div>
      <slot v-else />
    </a>
  </button>
</template>

<style lang="css" scoped>
.btn {
  height: 3rem;
  min-width: 7rem;
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
  margin-right: 0.5rem;
  vertical-align: middle;
  color: currentColor;
  fill: currentColor;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.label {
  font-size: 1rem;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
