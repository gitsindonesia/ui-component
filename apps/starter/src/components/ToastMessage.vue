<script setup lang="ts">
import {useToastStore} from '@gits-id/toast';
import {storeToRefs} from 'pinia';

const toast = useToastStore();
const {isOpen, message, options} = storeToRefs(toast);

const onClose = () => toast.$reset();
</script>

<template>
  <v-toast :model-value="isOpen" v-bind="options" @close="onClose">
    {{ message }}
  </v-toast>
</template>

<style scoped></style>
