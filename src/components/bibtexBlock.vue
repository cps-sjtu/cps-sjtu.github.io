<template>
  <div class="block">
    <div class="bib-header">
      <div class="block-title">BibTeX</div>
      <div class="bib-actions">
        <button class="btn" @click="copy">复制</button>
        <button class="btn" @click="download">下载 .bib</button>
      </div>
    </div>

    <div class="inner-content">
      <div class="bib-raw">
        <pre><code>{{ bibtex }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  bibtex: { type: String, default: "" },
});

async function copy() {
  const text = props.bibtex;
  try {
    await navigator.clipboard.writeText(text);
    // 可选：提示
  } catch (e) {
    // 退回到旧式方法
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}

function download() {
  const blob = new Blob([props.bibtex], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `references.bib`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
</script>

<style scoped>
.inner-content {
  margin: 0 2rem;
  margin-top: 0.5rem;
}
.block-title {
  width: unset;
}
.bib-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}
.bib-actions {
  display: flex;
  gap: 8px;
  flex: 1;
  justify-content: flex-end;
}
.btn {
  height: 2.5rem;
  padding: 0 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 10px;
  background-color: #f5f6ff;
  border: 1px solid #dae2ff;
  transition: background-color 0.15s;
  white-space: nowrap;
}
.btn:hover {
  cursor: pointer;
  background-color: #dae2ff;
}
.bib-raw pre {
  overflow-x: auto;
  white-space: pre;
  margin: 0;
  word-wrap: normal;
  padding: 1rem 3rem;
  background: #f3f3f3;
  border-radius: 16px;
  border: 1px solid #e0e0e0;
  text-align: left;
  font-size: 0.9rem;
}
</style>
