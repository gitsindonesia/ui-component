<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';
import VAlert from '../VAlert.vue';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert v-model="isOpen" dismissable> Alert text </VAlert>
</template>
