<script setup lang="ts">
import {PopoverButton} from '@headlessui/vue';
import {VBtn} from '../../button/src';

defineSlots<{
  default?: (props: {open: boolean}) => any;
}>();
</script>

<template>
  <PopoverButton class="v-popover__button" :as="VBtn" v-slot="{open}">
    <slot :open="open" />
  </PopoverButton>
</template>
