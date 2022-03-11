<script setup lang="ts">
defineProps<{
  title?: string;
  breadcrumbs?: any[];
}>();
</script>

<template>
  <div class="mb-5">
    <h1 class="font-bold mb-1 text-xl text-primary-500">
      <slot>{{ title }}</slot>
    </h1>
    <v-breadcrumbs :items="breadcrumbs" />
  </div>
</template>

<style scoped></style>
