<script setup>
import basicBlock from "./basicBlock.vue";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const props = defineProps({
  // 本节标题
  imgFit: {
    // 图片适应方式， 可选值有 [cover, contain, fill, scale-down]
    type: String,
    default: "contain",
  },
  gap: {
    // 轮播图间隔，单位 px
    type: Number,
    default: 10,
  },
  autoPlay: {
    // 是否自动播放，0 表示不自动播放，单位 ms
    type: Number,
    default: 0,
  },
  dataList: {
    // 轮播图数据列表
    type: Array,
    default: () => {
      return [];
    },
  },
  carouselType: {
    // 轮播图类型，可选值有 [image]
    type: String,
    default: null,
  },
});

const carouselConfig = {
  autoPlay: props.autoPlay,
  gap: props.gap,
  itemsToShow: 2.5,
  wrapAround: true,
};
</script>

<template>
  <basicBlock v-bind="$attrs">
    <div class="inner-content">
      <Carousel v-bind="carouselConfig" style="padding: 0 40px">
        <Slide
          v-if="dataList.length !== 0"
          v-for="(data, index) in dataList"
          :key="index"
        >
          <img
            v-if="props.carouselType === 'image'"
            :src="data"
            :style="{ objectFit: props.imgFit }"
          />
          <slot v-else :data="data"></slot>
        </Slide>
        <div
          v-else
          style="display: flex; justify-content: center; align-items: center"
        >
          No data available.
        </div>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </basicBlock>
</template>

<style scoped>
.inner-content {
  margin-top: 0.5rem;
}
.carousel {
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
</style>
