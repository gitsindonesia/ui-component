<script setup lang="ts">
import {DialogTitle} from '@headlessui/vue';
</script>

<template>
  <DialogTitle as="div" class="v-modal-header">
    <slot />
  </DialogTitle>
</template>
