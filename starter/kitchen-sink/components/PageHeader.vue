<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <div
    class="mb-6 flex flex-col lg:flex-row gap-4 justify-between lg:items-center"
  >
    <div class="flex-grow">
      <h1 class="text-4xl text-gray-900 dark:text-gray-200 font-semibold">
        {{ title }}
      </h1>
      <p class="text-gray-500" v-if="subtitle">{{ subtitle }}</p>
    </div>
    <slot name="action" />
  </div>
</template>
