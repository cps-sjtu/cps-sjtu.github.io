<script setup>
import BasicBlock from "./basicBlock.vue";
import MarkdownSpan from "./markdownSpan.vue";
import videoWrapper from "./videoWrapper.vue";

const props = defineProps({
  imgFit: {
    // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    type: String,
    default: "contain",
  },
  showImageCaption: {
    type: Boolean,
    default: true,
  },
  rows: {
    type: Number,
    required: true,
  },
  columns: {
    type: Number,
    required: true,
  },
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "auto",
  },
  dataList: {
    type: Array,
    default: () => {
      return [];
    },
  },
});
</script>

<template>
  <BasicBlock v-bind="$attrs">
    <div
      class="container"
      :style="`grid-template-rows: repeat(${props.rows}, 1fr); grid-template-columns: repeat(${props.columns}, 1fr); `"
    >
      <div
        v-for="data in dataList"
        class="grid-item"
        :style="{
          width: props.width,
          height: props.height,
        }"
      >
        <videoWrapper class="video-wrapper" :data="data" v-if="data.isVideo" />
        <img
          v-else
          :src="data.src"
          :style="{
            objectFit: props.imgFit,
            marginBottom: showImageCaption ? '0.5rem' : '0',
          }"
        />
        <MarkdownSpan
          v-if="showImageCaption && data.caption"
          :content="data.caption"
        />
      </div>
    </div>
  </BasicBlock>
</template>

<style scoped>
.container {
  display: grid;
  max-width: 100%;
  margin: 0 2rem;
  column-gap: 0.5rem;
  row-gap: 1.2rem;
  margin-top: 0.5rem;
}
.description {
  margin: 1rem 2rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
}
.grid-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.video-wrapper {
  height: unset;
}
</style>
