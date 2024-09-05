<script setup lang="ts">
defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <div class="v-bottom-sheet-body">
    <slot />
  </div>
</template>
