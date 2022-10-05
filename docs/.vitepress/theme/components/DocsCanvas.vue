<script setup lang="ts">
import {VCard} from '@gits-id/ui';
</script>

<template>
  <VCard
    title="Preview"
    bordered
    rounded
    hide-footer
    class="mt-4 dark:bg-gray-700"
    body-class="space-y-2"
  >
    <slot />
  </VCard>
</template>
