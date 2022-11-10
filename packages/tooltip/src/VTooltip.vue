<script setup lang="ts">
import 'floating-vue/dist/style.css';
import {Tooltip} from 'floating-vue';

defineProps({
  placement: {
    type: String,
    default: 'top',
  },
  /**
   * @deprecated no longer used
   */
  options: {
    type: Object,
    default: () => ({}),
  },
  /**
   * @deprecated place class in the slot instead
   */
  activatorClass: {
    type: String,
    default: '',
  },
  /**
   * @deprecated use `class` instead
   */
  tooltipClass: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <Tooltip :placement="placement">
    <slot name="activator" />
    <template #popper>
      <slot />
    </template>
  </Tooltip>
</template>
