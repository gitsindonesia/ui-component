<script setup lang="ts">
import {TabPanels} from '@headlessui/vue';

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <TabPanels class="v-tabs-panels">
    <slot />
  </TabPanels>
</template>
