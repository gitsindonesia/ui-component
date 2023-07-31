<script setup lang="ts">
import {MenuButton} from '@headlessui/vue';

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <MenuButton v-slot="props">
    <slot v-bind="props" />
  </MenuButton>
</template>
