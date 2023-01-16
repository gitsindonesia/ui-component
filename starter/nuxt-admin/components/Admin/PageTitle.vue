<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <div class="mb-5">
    <h1 class="text-xl font-semibold mb-1">{{ title }}</h1>
    <p class="text-gray-500">{{ subtitle }}</p>
  </div>
</template>
