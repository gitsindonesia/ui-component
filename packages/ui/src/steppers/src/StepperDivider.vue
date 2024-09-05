<script setup lang="ts">
defineProps<{
  vertical?: boolean;
  isActive?: boolean;
}>();
</script>

<template>
  <div
    v-if="vertical"
    class="absolute z-1 top-8 left-4 transform translate-y-[1px] stepper-divider-vertical w-[1px] h-full"
    :class="
      isActive
        ? 'border-l-4 border-blue-300 -translate-x-[2px]'
        : 'border-l-2 border-gray-300 -translate-x-[1px]'
    "
  />
  <div
    v-else
    class="absolute z-1 top-4 left-0 transform -translate-x-1/2 flex align-center items-center align-middle content-center stepper-divider w-[calc(100%-2rem)] h-[1px]"
    :class="
      isActive ? 'border-b-4 border-blue-300' : 'border-b-2 border-gray-300'
    "
  />
</template>
