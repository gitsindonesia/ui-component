<script setup lang="ts">
import {ref} from 'vue';
import VAlert from '../VAlert.vue';

const isOpen = ref(true);
</script>

<template>
  <VAlert v-model="isOpen" color="indigo"> Alert text </VAlert>
</template>

<style scoped>
.alert-indigo {
  --alert-bg-color: var(--color-indigo-600);
  --alert-text-color: var(--color-white);
  --alert-border-radius: var(--border-radius-lg);
  --alert-border-color: var(--color-indigo-600);
  --alert-border-width: 2px;
  --alert-padding-x: var(--size-spacing-6);
  --alert-padding-y: var(--size-spacing-4);
}
</style>
