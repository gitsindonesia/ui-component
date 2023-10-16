<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="mb-6">
    <h1 class="text-xl text-gray-900 dark:text-gray-200 font-semibold">
      {{ title }}
    </h1>
    <p class="text-gray-500" v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>
