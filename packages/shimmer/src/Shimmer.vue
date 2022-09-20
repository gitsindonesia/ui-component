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

<style>
.shimmer {
  animation: a-background-move 1.5s infinite;
  background-image: linear-gradient(
    to right,
    rgb(247, 247, 247),
    rgb(220, 220, 220),
    rgb(247, 247, 247)
  );
  background-size: 200%;
  border-radius: var(--size-border-radius-base);
}

.shimmer--rounded {
  @apply rounded-full;
}

@keyframes a-background-move {
  0% {
    background-position: 100%;
  }

  100% {
    background-position: -100%;
  }
}
</style>
