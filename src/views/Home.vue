<script setup>
import { useHead } from "@unhead/vue";
import router from "../router";
import { routerConfig } from "../../config/router";
import {
  formatDateToMonthYear,
  sortProjectsByDate,
} from "../components/utilFuncs.js";
import canlendarIcon from "../assets/canlendar.svg?component";
import MarkdownSpan from "../components/markdownSpan.vue";
useHead({
  title: "CPS Group SJTU",
  meta: [
    {
      name: "description",
      content: "Cyber Physical Systems Lab, Shanghai Jiao Tong University",
    },
    { name: "robots", content: "index, follow" },
    { name: "language", content: "English" },
  ],
});

// 按照时间排序项目
const routerConfigSorted = sortProjectsByDate(routerConfig);
</script>

<template>
  <div class="main-page-container">
    <div class="main-page-header">CPS Group SJTU</div>

    <div class="content">
      <div
        class="proj-card"
        v-for="(config, link) in routerConfigSorted"
        :key="link"
        @click="router.push(link)"
      >
        <div class="title">
          {{ config.paperInfo.title }}
        </div>
        <div class="authors">
          <span v-for="(author, index) in config.authorsInfo" :key="index">
            <a :key="author.name" :class="author.style">{{ author.name }}</a>
            <span
              v-if="
                config.pageConfig.addAndBetweenLastTwoNames &&
                index === config.authorsInfo.length - 2
              "
              style="margin: 0 0.3ch"
            >
              and
            </span>
            <span
              v-else-if="index !== config.authorsInfo.length - 1"
              style="margin-right: 0.6ch"
              >,</span
            >
          </span>
        </div>
        <div class="abstract">
          <b>Abstract: </b>
          <MarkdownSpan :content="config.paperInfo.abstract" />
        </div>
        <div
          class="bandages-container"
          v-if="
            config.homeConfig.bandages.length !== 0 ||
            formatDateToMonthYear(config.paperInfo.date) !== null
          "
        >
          <div
            class="bandage"
            v-if="formatDateToMonthYear(config.paperInfo.date)"
            :style="{
              '--bandage-color': 'var(--primary-color)',
            }"
          >
            <canlendar-icon class="icon" />
            {{ formatDateToMonthYear(config.paperInfo.date) }}
          </div>
          <div
            class="bandage"
            v-for="(bandage, index) in config.homeConfig?.bandages"
            :key="index"
            :style="{
              '--bandage-color': bandage.color || 'var(--primary-color)',
            }"
          >
            <component
              v-if="bandage.icon && bandage.icon_type === 'svg'"
              :is="'span'"
              class="icon"
              v-html="bandage.icon"
            />
            <img
              v-else-if="bandage.icon && bandage.icon_type === 'url'"
              :src="bandage.icon"
              class="icon"
            />
            {{ bandage.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.main-page-container {
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color-secondary);
  margin: 0;
  font-family: "Arial", sans-serif;
}

.main-page-header {
  width: 100%;
  height: 8rem;
  font-size: 2rem;
  font-weight: bold;
  color: var(--font-color);
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.proj-card {
  background-color: var(--background-color);
  padding: 2rem;
  margin: 1rem 0;
  border-radius: 20px;
  flex: 1;
  border: 1.5px solid var(--border-color);
  text-align: center;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
}

.proj-card:hover {
  cursor: pointer;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px var(--shadow-color);
}

.proj-card > .title {
  font-size: 1.2rem;
  font-weight: bold;
  line-height: 1.5;
  text-align: start;
}

.proj-card > .authors {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--font-color-tertiary);
  text-align: start;
}

.proj-card > .authors a {
  color: var(--font-color-tertiary);
  font-weight: normal;
  text-decoration: none;
}

.proj-card > .authors .underline {
  text-decoration: underline;
}

.proj-card > .authors .bold {
  font-weight: bold;
}

.proj-card > .abstract {
  margin-top: 1rem;
  color: var(--font-color-secondary);
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
}

.proj-card > .abstract > .innermd {
  color: var(--font-color-secondary);
  line-height: 1.6;
  font-size: inherit;
}

.content {
  justify-self: center;
  max-width: 80%;
  margin: 0 2rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
}

.bandages-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 0.8rem;
  gap: 0.6rem;
}

.bandage {
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  border-radius: 10px;
  color: var(--bandage-color);
  border: 1px solid var(--bandage-color);
  padding: 0.3rem 0.8rem;
  width: fit-content;
}

.icon {
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;
  fill: var(--bandage-color);
}
</style>
