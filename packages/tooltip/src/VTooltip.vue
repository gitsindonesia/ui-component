<script setup lang="ts">
import FloatingVue, {Tooltip} from 'floating-vue';
import {PropType} from 'vue';

export type VTooltipPlacement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

defineProps({
  placement: {
    type: String as PropType<VTooltipPlacement>,
    default: 'bottom',
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
  disposeTimeout: 100000,
};
FloatingVue.options.themes['tooltip-white'] = {
  $extend: 'tooltip',
  $resetCss: true,
  disposeTimeout: 100000,
};

defineSlots<{
  default?: (props: {}) => any;
  activator?: (props: {}) => any;
}>();
</script>

<template>
  <Tooltip :placement="placement" :theme="`tooltip-${color}`">
    <slot name="activator" />
    <template #popper>
      <slot />
    </template>
  </Tooltip>
</template>
