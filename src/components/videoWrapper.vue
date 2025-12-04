<script setup>
import { ref } from "vue";

const props = defineProps({
  // 视频信息
  data: {
    required: true,
  },
});

const loadingState = ref("loading");

function handleLoaded() {
  loadingState.value = "success";
}

function handleError() {
  loadingState.value = "error";
}
</script>

<template>
  <div
    class="video-wrapper"
    :class="props.data.videoType === 'iframe' ? 'iframe' : ''"
  >
    <transition name="fade" mode="out-in">
      <div v-if="loadingState === 'loading'" class="video-loading-overlay">
        <div class="spinner" />
        <span class="loading-text">Video loading...</span>
      </div>
      <div v-else-if="loadingState === 'error'" class="video-loading-overlay">
        <span class="loading-text">Video failed to load</span>
      </div>
    </transition>

    <video
      v-if="props.data.videoType === 'video'"
      :controls="props.data.controls"
      :autoplay="props.data.autoplay"
      :loop="props.data.loop"
      :muted="
        props.data.muted !== undefined ? props.data.muted : props.data.autoplay
      "
      playsinline
      style="width: 100%"
      :src="props.data.src"
      @loadeddata="handleLoaded"
      @error="handleError"
    >
      Your browser does not support the video tag.
    </video>
    <iframe
      class="video"
      v-else-if="props.data.videoType === 'iframe'"
      :src="props.data.src"
      frameborder="no"
      allowfullscreen="true"
      @load="handleLoaded"
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

.video-loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.35);
  color: white;
  font-weight: 600;
  z-index: 1;
  transition: opacity 0.2s ease;
}

.spinner {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-top-color: #ffffff;
  animation: spin 0.8s linear infinite;
  margin-bottom: 8px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.video-loading-overlay.fade-enter-active,
.video-loading-overlay.fade-leave-active {
  opacity: 1;
}
.video-loading-overlay.fade-enter-from,
.video-loading-overlay.fade-leave-to {
  opacity: 0;
}
</style>
