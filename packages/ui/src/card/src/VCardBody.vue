<script setup lang="ts">
defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <div class="card-content">
    <slot />
  </div>
</template>
