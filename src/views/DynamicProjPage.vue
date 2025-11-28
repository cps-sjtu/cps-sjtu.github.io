<script setup>
const props = defineProps({
  config: Object,
});
import { useHead } from "@unhead/vue";
import router from "../router";
import { onMounted, onUnmounted } from "vue";
import { useScrollToTop } from "../components/utilFuncs";
import { getHeaderFromInfo } from "../components/utilFuncs";
import HeaderBar from "../components/headerBar.vue";
import ScrollBtn from "../components/scrollBtn.vue";
import TitleBlock from "../components/titleBlock.vue";
import LinkBtn from "../components/linkBtn.vue";
import BibtexBlock from "../components/bibtexBlock.vue";
import CarouselBlock from "../components/carouselBlock.vue";
import GridviewBlock from "../components/gridviewBlock.vue";
import VideoBlock from "../components/videoBlock.vue";
import FooterBar from "../components/footerBar.vue";
import PuretextBlock from "../components/puretextBlock.vue";
import FlexviewBlock from "../components/flexviewBlock.vue";

// DONOT CHANGE FOLLOWING FUNCTIONS
// =================================================
// 提取配置信息
const pageConfig = props.config.pageConfig;
const paperInfo = props.config.paperInfo;
const headerInfo = props.config.headerInfo;
const titleBlockInfo = props.config.titleBlockInfo;
const blocksInfo = props.config.blocksInfo;

// Info id 到 组件映射
const componentMap = {
  puretext: PuretextBlock,
  carousel: CarouselBlock,
  gridview: GridviewBlock,
  flexview: FlexviewBlock,
  video: VideoBlock,
  bibtex: BibtexBlock,
};

// 设置页面头信息
useHead(getHeaderFromInfo(headerInfo));

// 滚动到顶部按钮
const { isScrolled, scrollToTop, startWatchingScroll, stopWatchingScroll } =
  useScrollToTop();
onMounted(() => {
  window.scrollTo(0, 0);
  startWatchingScroll();
});
onUnmounted(() => {
  stopWatchingScroll();
});
// =================================================
</script>

<template>
  <div class="proj-page-container">
    <!-- Header -->
    <HeaderBar :router="router" :shortTitle="paperInfo.shortTitle" />

    <!-- Scroll to Top Button -->
    <ScrollBtn
      v-if="pageConfig.showScrollBtn"
      :scrollToTop="scrollToTop"
      :isScrolled="isScrolled"
    />

    <div class="content">
      <!-- Title Block -->
      <TitleBlock
        :title="titleBlockInfo.title"
        :authors="titleBlockInfo.authors"
        :affiliations="titleBlockInfo.affiliations"
        :addAndBetweenLastTwoNames="pageConfig.addAndBetweenLastTwoNames"
        :showAffiliationSup="pageConfig.showAffiliationSup"
        :showAffiliationInfo="pageConfig.showAffiliationInfo"
      >
        <template #linkbtns>
          <div class="link-btns-container">
            <LinkBtn
              v-for="linkbtnInfo in titleBlockInfo.linkbtns"
              :info="linkbtnInfo"
              :customBtn="false"
            />
            <!-- 此处可以添加更多自定义按钮 -->
          </div>
        </template>
      </TitleBlock>

      <!-- Dynamic Blocks -->
      <component
        v-for="info in blocksInfo"
        :is="componentMap[info.id]"
        v-bind="info.getProps()"
      />
    </div>

    <FooterBar />
  </div>
</template>

<style lang="css" scoped>
.content {
  justify-self: center;
  width: 80%;
  max-width: 1200px;
  padding-bottom: 2rem;
  margin: auto;
}

.proj-page-container {
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
}

.link-btns-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
