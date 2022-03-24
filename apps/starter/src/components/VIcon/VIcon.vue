<script setup lang="ts">
import {toRefs, defineAsyncComponent} from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: '',
    required: true,
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 24,
  },
  fill: {
    type: String,
    default: 'currentColor',
  },
});

const {name, width, height, fill} = toRefs(props);

const iconComponent = defineAsyncComponent(
  () => import(`./icons/${name.value}.svg`),
);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :fill="fill"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
  >
    <g><component :is="iconComponent" class="icon"></component></g>
  </svg>
</template>

<style></style>
