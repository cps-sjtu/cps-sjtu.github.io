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
import AbstractBlock from "../../../../src/components/abstractBlock.vue";
import BibtexBlock from "../../../../src/components/bibtexBlock.vue";
import CarouselBlock from "../../../../src/components/carouselBlock.vue";
import GridviewImageBlock from "../../../../src/components/gridviewImageBlock.vue";
import VideoBlock from "../../../../src/components/videoBlock.vue";

// DONOT CHANGE FOLLOWING FUNCTIONS
// =================================================
// 提取配置信息
const paperInfo = configAll.paperInfo;
const headerInfo = configAll.headerInfo;
const pageConfig = configAll.pageConfig;
const authorsInfo = configAll.authorsInfo;
const affiliationsInfo = configAll.affiliationsInfo;
const linkbtnsInfo = configAll.linkbtnsInfo;
const carouselsInfo = configAll.carouselsInfo;
const gridviewImagesInfo = configAll.gridviewImagesInfo;
const videosInfo = configAll.videosInfo;

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
    <HeaderBar :router="router" :paperInfo="paperInfo" />

    <!-- Scroll to Top Button -->
    <ScrollBtn
      v-if="pageConfig.showScrollBtn"
      :scrollToTop="scrollToTop"
      :isScrolled="isScrolled"
    />

    <div class="content">
      <!-- Title Block -->
      <TitleBlock
        :title="paperInfo.title"
        :authors="authorsInfo"
        :affiliations="affiliationsInfo"
        :addAndBetweenLastTwoNames="pageConfig.addAndBetweenLastTwoNames"
        :showAffiliationSup="pageConfig.titleBlock.showAffiliationSup"
        :showAffiliationInfo="pageConfig.titleBlock.showAffiliationInfo"
        :showLinkBtns="pageConfig.titleBlock.showLinkBtns"
      >
        <template #linkbtns>
          <div class="link-btns-container">
            <LinkBtn
              v-for="linkbtnInfo in linkbtnsInfo"
              :info="linkbtnInfo"
              :customBtn="false"
            />
            <!-- 此处可以添加更多自定义按钮 -->
          </div>
        </template>
      </TitleBlock>

      <!-- Paper abstract -->
      <AbstractBlock
        v-if="pageConfig.showAbstractBlock"
        :blockTitle="'Abstract'"
        :abstract="paperInfo.abstract"
      />

      <!-- carousel -->
      <CarouselBlock
        v-for="info in carouselsInfo"
        :description="info.description"
        :imgFit="info.imgFit"
        :blockTitle="info.title"
        :dataList="info.dataList"
        :style="info.style"
      />

      <!-- gridview images -->
      <GridviewImageBlock
        v-for="info in gridviewImagesInfo"
        :imgFit="info.imgFit"
        :description="info.description"
        :blockTitle="info.title"
        :showImageCaption="info.showImageCaption"
        :rows="info.rows"
        :columns="info.columns"
        :dataList="info.dataList"
      />

      <!-- video block -->
      <VideoBlock
        v-for="info in videosInfo"
        :blockTitle="info.title"
        :description="info.description"
        :data="info.data"
      />

      <!--BibTex citation -->
      <BibtexBlock
        v-if="paperInfo.bibtex && pageConfig.showBibtexBlock"
        :bibtex="paperInfo.bibtex"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.content {
  justify-self: center;
  width: 80%;
  max-width: 1200px;
  margin: 0 2rem;
  padding-bottom: 4rem;
}

.proj-page-container {
  min-height: 100vh;
  margin: 0;
}

.link-btns-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
