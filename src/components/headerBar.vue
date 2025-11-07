<script setup>
import backIcon from "../assets/back.svg?component";
const props = defineProps({
  router: Object,
  shortTitle: String,
});
</script>

<template>
  <div class="header">
    <button class="homepage-btn" @click="props.router.push('/')">
      <backIcon class="icon" />
      <span>View more works</span>
    </button>
    <div class="header-text">{{ props.shortTitle }}</div>
  </div>
</template>

<style lang="css" scoped>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--primary-light-50);
  backdrop-filter: blur(7.5px);
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header .header-text {
  flex-grow: 1;
  text-align: end;
  font-weight: bold;
  margin-right: 1.5rem;
}

.homepage-btn {
  padding: 1rem 1.5rem;
  height: 100%;
  background: var(--primary-color);
  color: white;
  border: none;
  cursor: pointer;
  transition: var(--transition);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  box-shadow: var(--shadow-lg);
  transition: background 0.2s;
}

.homepage-btn > span {
  margin-left: 0.5rem;
}

.homepage-btn:hover {
  background: var(--primary-hover);
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
  fill: white;
  margin-right: 0.5rem;
}
</style>
