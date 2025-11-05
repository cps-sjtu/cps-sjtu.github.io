<script setup>
import BasicBlock from "./basicBlock.vue";

defineProps({
  abstract: String,
});
</script>

<template>
  <BasicBlock v-bind="$attrs">
    <div class="inner-content">
      <p>
        {{ abstract }}
      </p>
    </div>
  </BasicBlock>
</template>

<style scoped>
.inner-content {
  margin: 0 2rem;
  margin-top: 0.5rem;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
}
</style>
