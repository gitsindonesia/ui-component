<script setup lang="ts">
withDefaults(
  defineProps<{
    tag?: string;
  }>(),
  {
    tag: 'div',
  },
);

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <component :is="tag" class="v-banner-text">
    <slot />
  </component>
</template>
