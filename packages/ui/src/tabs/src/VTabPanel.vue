<script setup lang="ts">
import {TabPanel} from '@headlessui/vue';

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <TabPanel class="v-tabs-panel">
    <slot />
  </TabPanel>
</template>
