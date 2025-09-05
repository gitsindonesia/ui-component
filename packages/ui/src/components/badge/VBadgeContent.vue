<script setup lang="ts">
defineSlots<{
  default?: (props: {}) => any;
}>()
</script>

<template>
  <div class="badge-content">
    <slot />
  </div>
</template>
