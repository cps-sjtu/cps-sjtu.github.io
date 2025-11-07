<script setup>
const props = defineProps({
  // 本节标题
  title: String,
  description: String,
});
</script>

<template>
  <div class="block">
    <div v-if="props.title" class="block-title">{{ props.title }}</div>
    <div v-if="props.description" class="description">
      {{ props.description }}
    </div>
    <slot />
  </div>
</template>

<style scoped>
.description {
  margin: 1rem 2rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
}
</style>
