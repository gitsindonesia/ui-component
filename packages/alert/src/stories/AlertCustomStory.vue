<script setup lang="ts">
import {ref} from 'vue';
import VAlert from '../VAlert.vue';

const isOpen = ref(true);
</script>

<template>
  <VAlert v-model="isOpen" color="indigo"> Alert text </VAlert>
</template>

<style>
.alert-indigo {
  --alert-bg-color: theme('colors.indigo.600');
  --alert-text-color: theme('colors.white');
  --alert-border-radius: theme('borderRadius.lg');
  --alert-border-color: theme('colors.indigo.600');
  --alert-border-width: theme('borderWidth.2');
  --alert-padding-x: theme('padding.6');
  --alert-padding-y: theme('padding.4');
}
</style>
