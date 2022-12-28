<script setup lang="ts">
export type Props = {
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  lines?: number;
};

withDefaults(defineProps<Props>(), {
  width: 100,
  height: 16,
  lines: 1,
});

const normalizeValue = (value: string | number) => {
  return typeof value === 'number' ? `${value}px` : value;
};
</script>

<template>
  <div
    v-for="i in lines"
    :key="i"
    class="shimmer"
    :class="{'shimmer--rounded': rounded}"
    :style="{width: normalizeValue(width), height: normalizeValue(height)}"
    v-bind="$attrs"
  ></div>
</template>

<style src="./Shimmer.scss" lang="scss"></style>
