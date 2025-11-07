<script setup>
import upIcon from "../assets/up.svg?component";
defineProps({
  scrollToTop: Function,
  isScrolled: Boolean,
});
</script>

<template>
  <button
    class="scroll-to-top"
    @click="scrollToTop()"
    :class="{ scrolled: isScrolled }"
  >
    <upIcon class="icon" />
  </button>
</template>

<style lang="css" scoped>
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: var(--primary-color);
  color: white;
  border: none;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: var(--shadow-lg);
  transition: background 0.2s;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease-in-out;
}

.scroll-to-top:hover {
  background: var(--primary-hover);
}

.scroll-to-top .icon {
  height: 1.2rem;
  width: 1.2rem;
  fill: white;
}

.scroll-to-top.scrolled {
  opacity: 1;
  pointer-events: auto;
}
</style>
