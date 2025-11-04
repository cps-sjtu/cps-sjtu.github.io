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
import AbstractBlock from "../components/abstractBlock.vue";
import BibtexBlock from "../components/bibtexBlock.vue";

// DONOT CHANGE FOLLOWING FUNCTIONS
// =================================================
// 提取配置信息
const paperInfo = props.config.paperInfo;
const headerInfo = props.config.headerInfo;
const pageConfig = props.config.pageConfig;
const authorsInfo = props.config.authorsInfo;
const affiliationsInfo = props.config.affiliationsInfo;
const linkbtnsInfo = props.config.linkbtnsInfo;

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
      <AbstractBlock :abstract="paperInfo.abstract" />

      <!--BibTex citation -->
      <BibtexBlock v-if="paperInfo.bibtex" :bibtex="paperInfo.bibtex" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.content {
  justify-self: center;
  max-width: 80%;
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
