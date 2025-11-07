<script setup>
defineProps({
  title: String,
  authors: Array,
  affiliations: Array,
  addAndBetweenLastTwoNames: Boolean,
  showAffiliationSup: Boolean,
  showAffiliationInfo: Boolean,
});
</script>

<template>
  <div class="container">
    <!-- 标题 -->
    <h1>
      {{ title }}
    </h1>

    <!-- 作者信息 -->
    <div class="author-block">
      <span v-for="(author, index) in authors" :key="index">
        <a
          v-if="author.link"
          class="author-name hover-underline"
          :href="author.link"
          target="_blank"
        >
          {{ author.name }}
        </a>
        <span class="author-name" v-else>
          {{ author.name }}
        </span>
        <sup v-if="showAffiliationSup && author.sup !== null">
          {{ author.affiliationIndex }}
        </sup>
        <span
          v-if="addAndBetweenLastTwoNames && index === authors.length - 2"
          style="margin: 0 0.4ch"
        >
          and
        </span>
        <span v-else-if="index !== authors.length - 1" style="margin-right: 1ch"
          >,</span
        >
      </span>
    </div>

    <!-- 单位信息 -->
    <div v-if="showAffiliationInfo" class="affiliation-block">
      <div v-for="(affiliation, index) in affiliations" :key="index">
        <sup style="margin-right: 0.5ch">{{ affiliation.index }}</sup>
        <span>{{ affiliation.name }}</span>
      </div>
    </div>

    <!-- 论文/代码链接 -->
    <slot name="linkbtns" />
  </div>
</template>

<style lang="css" scoped>
.container {
  padding-top: 2rem;
  width: 100%;
}

h1 {
  font-size: 2.5rem;
  margin-top: 4rem;
  font-weight: 800;
}

.author-block {
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.03rem;
  word-wrap: break-word;
}

.author-name {
  font-weight: 600;
  color: var(--font-color-primary);
  text-decoration: none;
  transition: color 0.2s;
  white-space: nowrap;
}

a:hover {
  cursor: pointer;
  color: var(--font-hover-primary);
}

a.hover-underline {
  position: relative;
  padding-bottom: 2px;
}

a.hover-underline::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: var(--font-hover-primary);
  transition: width 0.3s ease;
}

a.hover-underline:hover::after {
  width: 100%;
}

.affiliation-block {
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>
