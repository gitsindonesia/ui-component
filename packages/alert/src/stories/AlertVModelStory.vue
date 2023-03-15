<script setup lang="ts">
import {ref} from 'vue';
import Button from '@morpheme/button';
import VAlert from '../VAlert.vue';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert v-model="isOpen" color="primary" class="mt-4" solid dismissable>
    Alert text
  </VAlert>
</template>
