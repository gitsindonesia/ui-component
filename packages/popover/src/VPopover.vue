<script setup lang="ts">
import {Popover} from '@headlessui/vue';
import {VPopoverPlacement} from './api';

withDefaults(
  defineProps<{
    placement?: VPopoverPlacement;
  }>(),
  {
    placement: 'bottom-start',
  },
);
</script>

<template>
  <Popover
    class="v-popover"
    :class="['v-popover--' + placement]"
    v-slot="slotProps"
  >
    <slot v-bind="slotProps" />
  </Popover>
</template>
