<script setup lang="ts">
import {MenuButton} from '@headlessui/vue';
import {VBtn} from '../../button/src';

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <MenuButton v-slot="props" :as="VBtn">
    <slot v-bind="props" />
  </MenuButton>
</template>
