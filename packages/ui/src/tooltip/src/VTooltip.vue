<script setup lang="ts">
import type { PropType } from 'vue';
import {
  type TooltipRootProps,
  type TooltipTriggerProps,
  type TooltipPortalProps,
  type TooltipContentProps,
  type TooltipArrowProps,
  TooltipArrow, TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger
} from 'radix-vue'

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
  /**
   * @deprecated use `align` and/or `side` instead
   */
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
  arrowWidth: {
    type: Number,
    default: 8,
  },
  contentSideOffset: {
    type: Number,
    default: 8,
  },
  hideContentWrapper: {
    type: Boolean,
    default: false,
  },
  delayDuration: {
    type: Number,
    default: 200,
  },
  hideArrow: {
    type: Boolean,
    default: false,
  },
  align: {
    type: String as PropType<'start' | 'center' | 'end'>,
    default: 'center',
  },
  side: {
    type: String as PropType<'top' | 'right' | 'bottom' | 'left'>,
    default: 'top',
  },
  rootProps: {
    type: Object as PropType<Partial<TooltipRootProps>>,
    default: () => ({}),
  },
  triggerProps: {
    type: Object as PropType<Partial<TooltipTriggerProps>>,
    default: () => ({}),
  },
  portalProps: {
    type: Object as PropType<Partial<TooltipPortalProps>>,
    default: () => ({}),
  },
  contentProps: {
    type: Object as PropType<Partial<TooltipContentProps>>,
    default: () => ({}),
  },
  arrowProps: {
    type: Object as PropType<Partial<TooltipArrowProps>>,
    default: () => ({}),
  },
});

defineSlots<{
  default?: (props: {}) => any;
  activator?: (props: {}) => any;
}>();
</script>

<template>
  <TooltipProvider>
    <TooltipRoot
      class="v-tooltip"
      :class="[
        `v-tooltip--${color}`,
        `v-tooltip--${placement}`,
        tooltipClass,
      ]" 
      :delay-duration="delayDuration" 
      v-bind="rootProps"
    >
      <TooltipTrigger 
        class="v-tooltip-trigger" 
        as-child
        v-bind="triggerProps"
      >
        <slot name="activator" v-bind="{ activatorClass }" />
      </TooltipTrigger>
      <TooltipPortal v-bind="portalProps">
        <TooltipContent 
          as-child
          class="v-tooltip-content"
          :side-offset="contentSideOffset"
          :align="align"
          :side="side"
          v-bind="contentProps"
        >
          <div v-if="!hideContentWrapper">
            <slot />
          </div>
          <slot v-else />
          <TooltipArrow v-if="!hideArrow" class="v-tooltip-arrow" :width="arrowWidth" v-bind="arrowProps" />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
