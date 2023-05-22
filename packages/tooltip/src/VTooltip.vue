<script setup lang="ts">
import 'floating-vue/dist/style.css';
import FloatingVue, {Tooltip} from 'floating-vue';
import {PropType} from 'vue';

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
  color: {
    type: String as PropType<'black' | 'white'>,
    default: 'black',
  },
});

FloatingVue.options.themes['tooltip-black'] = {
  $extend: 'tooltip',
  $resetCss: true,
};
FloatingVue.options.themes['tooltip-white'] = {
  $extend: 'tooltip',
  $resetCss: true,
};
</script>

<template>
  <Tooltip :placement="placement" :theme="`tooltip-${color}`">
    <slot name="activator" />
    <template #popper>
      <slot />
    </template>
  </Tooltip>
</template>
