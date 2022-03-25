<script setup lang="ts">
defineProps<{
  vertical?: boolean;
}>();
</script>

<template>
  <div
    v-if="vertical"
    class="absolute z-1 border-b border-gray-300 left-1/2 transform -translate-y-1/2 flex align-center items-center align-middle content-center stepper-divider-vertical"
  />
  <div
    v-else
    class="absolute z-1 border-b border-gray-300 top-1/2 transform -translate-x-1/2 flex align-center items-center align-middle content-center stepper-divider h-2"
  />
</template>

<style scoped>
.stepper-divider {
  width: calc(100% - 2rem);
}
</style>
