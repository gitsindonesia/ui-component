<script setup lang="ts">
withDefaults(
  defineProps<{
    tag?: string;
  }>(),
  {
    tag: 'div',
  },
);
</script>

<template>
  <component :is="tag" class="v-banner-text">
    <slot />
  </component>
</template>
