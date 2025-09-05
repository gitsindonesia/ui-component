<script setup lang="ts">
withDefaults(
  defineProps<{
    vertical?: boolean;
    setRef?: (el: any) => void;
  }>(),
  {
    vertical: false,
  },
);
</script>

<template>
  <div
    id="tab-slider"
    class="v-tabs-slider"
    :ref="(el) => setRef && setRef(el)"
    :class="{
      'v-tabs-slider--vertical': vertical,
    }"
  />
</template>
