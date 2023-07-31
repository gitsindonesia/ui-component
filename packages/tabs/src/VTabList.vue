<script setup lang="ts">
import {TabList} from '@headlessui/vue';

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <TabList class="v-tabs-items">
    <slot />
  </TabList>
</template>
