<script setup lang="ts">
import {PopoverGroup} from '@headlessui/vue';

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <PopoverGroup class="v-popover-group">
    <slot />
  </PopoverGroup>
</template>
