<script setup lang="ts">
import {PopoverPanel} from '@headlessui/vue';

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <transition name="dropdown">
    <PopoverPanel class="v-popover__panel" v-bind="$attrs">
      <slot />
    </PopoverPanel>
  </transition>
</template>
