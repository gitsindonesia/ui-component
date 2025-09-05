<script setup lang="ts">
import type {PropType} from 'vue';
import { defineAsyncComponent } from 'vue';

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

defineSlots<{
  default?: (props: {}) => any;
  activator?: (props: {}) => any;
}>();

// Import floating-vue only on client side
const Tooltip = defineAsyncComponent(async () => {
  if (typeof window === 'undefined') {
    // Return a dummy component for SSR
    return {
      name: 'TooltipSSR',
      template: '<div><slot name="activator" /><slot /></div>'
    };
  }
  const { Tooltip } = await import('floating-vue');
  return Tooltip;
});
</script>

<template>
  <Tooltip :placement="placement" :theme="`tooltip-${color}`">
    <slot name="activator" />
    <template #popper>
      <slot />
    </template>
  </Tooltip>
</template>
