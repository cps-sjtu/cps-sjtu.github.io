<script setup>
import BasicBlock from "./basicBlock.vue";

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
      <div v-for="data in dataList" class="grid-item">
        <img
          :src="data.src"
          :style="{
            objectFit: props.imgFit,
            width: props.width,
            height: props.height,
          }"
        />
        <div
          v-if="showImageCaption"
          style="text-align: center; margin-top: 0.5rem"
        >
          {{ data.caption }}
        </div>
      </div>
    </div>
  </BasicBlock>
</template>

<style scoped>
.container {
  display: grid;
  max-width: 100%;
  margin: 0 2rem;
  column-gap: 10px;
  row-gap: 15px;
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
}
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
