<script setup>
const props = defineProps({
  // 视频信息
  data: {
    required: true,
  },
});
</script>

<template>
  <div
    class="video-wrapper"
    :class="props.data.videoType === 'iframe' ? 'iframe' : ''"
  >
    <video
      v-if="props.data.videoType === 'video'"
      :controls="props.data.controls"
      :autoplay="props.data.autoplay"
      :loop="props.data.loop"
      :muted="props.data.muted"
      style="width: 100%"
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
</template>

<style scoped>
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  /* padding-bottom: 56.25%; */
}

.video-wrapper.iframe {
  padding-bottom: 56.25%;
}
</style>
