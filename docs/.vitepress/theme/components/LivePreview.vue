<script setup lang="ts">
import {computed} from 'vue';

const props = withDefaults(
  defineProps<{
    src: string;
    width?: string | number;
    height?: string | number;
  }>(),
  {
    height: 400,
  },
);

const source = computed(() => {
  return `https://gits-ui.web.app/iframe.html?args=&id=${props.src}&viewMode=story`;
});
</script>

<template>
  <iframe
    :src="source"
    class="live-preview"
    :width="width"
    :height="height"
  ></iframe>
</template>

<style>
.live-preview {
  width: 100%;
  margin-top: 0.5em;
  border: 1px solid #ddd;
  border-radius: 0.5em;
}
</style>
