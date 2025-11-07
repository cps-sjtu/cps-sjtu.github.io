<script setup>
import BasicBlock from "./basicBlock.vue";
import MarkdownSpan from "./markdownSpan.vue";

defineProps({
  content: String,
});
</script>

<template>
  <BasicBlock v-bind="$attrs">
    <div class="inner-content">
      <MarkdownSpan class="p" :content="content" />
    </div>
  </BasicBlock>
</template>

<style scoped>
.inner-content {
  margin: 0 2rem;
  margin-top: 0.5rem;
  text-align: justify;
}

.p {
  line-height: 1.6;
  font-size: 1.1rem;
}
</style>
