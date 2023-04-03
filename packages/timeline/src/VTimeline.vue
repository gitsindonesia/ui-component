<script setup lang="ts">
import VTimelineDivider from './VTimelineDivider.vue';

withDefaults(
  defineProps<{
    dashed?: boolean;
    horizontal?: boolean;
  }>(),
  {},
);
</script>

<template>
  <ol
    class="v-timeline"
    :class="{
      'v-timeline--dashed': dashed,
      'v-timeline--horizontal': horizontal,
    }"
  >
    <slot name="divider">
      <VTimelineDivider />
    </slot>
    <slot />
  </ol>
</template>
