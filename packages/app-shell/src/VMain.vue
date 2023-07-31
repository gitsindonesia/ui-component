<script setup lang="ts">
defineProps<{
  padded?: boolean;
  centered?: boolean;
  fluid?: boolean;
}>();

defineSlots<{
  default?: (props: {}) => any
}>()
</script>

<template>
  <main
    class="v-main"
    :class="{
      'v-main--padded': padded,
      'v-main--centered': centered,
      'v-main--fluid': fluid,
    }"
  >
    <slot />
  </main>
</template>
