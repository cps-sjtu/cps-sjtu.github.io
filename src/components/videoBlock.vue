<script setup>
import BasicBlock from "./basicBlock.vue";
import MarkdownSpan from "./markdownSpan.vue";
import VideoWrapper from "./videoWrapper.vue";
const props = defineProps({
  // 视频信息
  data: {
    required: true,
  },
});
</script>

<template>
  <BasicBlock v-bind="$attrs">
    <div class="inner-content">
      <VideoWrapper :data="props.data" />
      <MarkdownSpan
        v-if="props.data.description"
        :content="props.data.description"
        style="margin-top: 0.5rem"
      />
    </div>
  </BasicBlock>
</template>

<style scoped>
.inner-content {
  margin: 0 2rem;
  margin-top: 0.5rem;
}
.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
}
</style>
