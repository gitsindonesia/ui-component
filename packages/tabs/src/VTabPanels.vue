<script setup lang="ts">
import {TabPanels} from '@headlessui/vue';
</script>

<template>
  <TabPanels class="v-tabs-panels">
    <slot />
  </TabPanels>
</template>
