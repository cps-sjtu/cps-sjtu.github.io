<script setup>
import { useHead } from "@unhead/vue";
import router from "../../../../src/router";
import { onMounted, onUnmounted } from "vue";
import { useScrollToTop } from "../../../../src/components/utilFuncs";
import { getHeaderFromInfo } from "../../../../src/components/utilFuncs";
import { configAll } from "./config";
import HeaderBar from "../../../../src/components/headerBar.vue";
import ScrollBtn from "../../../../src/components/scrollBtn.vue";
import TitleBlock from "../../../../src/components/titleBlock.vue";
import LinkBtn from "../../../../src/components/linkBtn.vue";
import PuretextBlock from "../../../../src/components/puretextBlock.vue";
import BibtexBlock from "../../../../src/components/bibtexBlock.vue";
import CarouselBlock from "../../../../src/components/carouselBlock.vue";
import GridviewBlock from "../../../../src/components/gridviewBlock.vue";
import VideoBlock from "../../../../src/components/videoBlock.vue";
import FooterBar from "../../../../src/components/footerBar.vue";
import FlexviewBlock from "../../../../src/components/flexviewBlock.vue";

// DONOT CHANGE FOLLOWING FUNCTIONS
// =================================================
// 提取配置信息
const pageConfig = configAll.pageConfig;
const paperInfo = configAll.paperInfo;
const headerInfo = configAll.headerInfo;
const titleBlockInfo = configAll.titleBlockInfo;
const blocksInfo = configAll.blocksInfo;

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
