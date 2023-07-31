<script setup lang="ts">
defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <div class="v-btn-group">
    <slot />
  </div>
</template>
