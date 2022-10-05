<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';
import {VAlert} from '@gits-id/ui';

const isOpen = ref(true);
</script>

<template>
  <Button color="primary" @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert v-model="isOpen"> Alert text </VAlert>
</template>
