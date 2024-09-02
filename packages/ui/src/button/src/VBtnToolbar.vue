<script setup lang="ts">
defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <div class="v-btn-toolbar">
    <slot />
  </div>
</template>
