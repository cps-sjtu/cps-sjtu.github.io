<script setup>
import BasicBlock from "./basicBlock.vue";
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
      <div class="video-wrapper">
        <video
          class="video"
          v-if="props.data.videoType === 'video'"
          controls
          :src="props.data.src"
        >
          Your browser does not support the video tag.
        </video>
        <iframe
          class="video"
          v-else-if="props.data.videoType === 'iframe'"
          :src="props.data.src"
          frameborder="no"
          allowfullscreen="true"
        ></iframe>
      </div>
      <div
        v-if="props.data.caption"
        style="text-align: center; margin-top: 0.5rem"
      >
        {{ props.data.caption }}
      </div>
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
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
