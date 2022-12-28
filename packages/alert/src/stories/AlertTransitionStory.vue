<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';
import VAlert from '../VAlert.vue';
import '@gits-id/button/src/VBtn.scss';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert
    v-model="isOpen"
    color="primary"
    class="mt-4"
    solid
    transition="slide-down"
  >
    Alert text
  </VAlert>
</template>
