<script setup>
import { useHead } from "@unhead/vue";
import router from "../router";
import { routerConfig } from "../../config/router";
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
</script>

<template>
  <div class="main-page-container">
    <div class="main-page-header">CPS Group SJTU</div>

    <div class="content">
      <div
        class="proj-card"
        v-for="(config, link) in routerConfig"
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
          <b>Abstract:</b>
          {{ config.paperInfo.abstract }}
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
  background-color: #f6f8fa;
  margin: 0;
  font-family: "Arial", sans-serif;
}

.main-page-header {
  width: 100%;
  height: 8rem;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.proj-card {
  background-color: white;
  padding: 2.5rem;
  margin: 1rem 0;
  border-radius: 20px;
  flex: 1;
  border: 1.5px solid #ddd;
  text-align: center;
  font-size: 1.2rem;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
}

.proj-card:hover {
  cursor: pointer;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.proj-card > .title {
  font-weight: bold;
  line-height: 1.5;
  text-align: start;
}

.proj-card > .authors {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  text-align: start;
}

.proj-card > .authors .underline {
  text-decoration: underline;
}

.proj-card > .authors .bold {
  font-weight: bold;
}

.proj-card > .abstract {
  margin-top: 1rem;
  font-size: 1rem;
  color: #666;
  text-align: start;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
}

.content {
  justify-self: center;
  max-width: 80%;
  margin: 0 2rem;
  margin-top: 1rem;
  margin-bottom: 3rem;
}
</style>
