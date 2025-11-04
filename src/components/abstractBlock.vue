<script setup>
defineProps({
    abstract: String,
})
</script>

<template>
  <div class="block">
    <div class="block-title">Abstract</div>
    <div class="inner-content">
        <p>
            {{ abstract }}
        </p>
    </div>
  </div>
</template>

<style scoped>
.inner-content {
    margin: 0 2em;
    margin-top: 0.5em;
    font-size: 1.1em;
    line-height: 1.6;
    text-align: justify;
}
</style>
