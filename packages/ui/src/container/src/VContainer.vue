<script setup lang="ts">
import type {PropType} from 'vue';

type ToggleClass = {
  open: string;
  close: string;
};

defineProps({
  padded: {
    type: Boolean,
    default: false,
  },
  centered: {
    type: Boolean,
    default: false,
  },
  fluid: {
    type: Boolean,
    default: false,
  },
  mini: {
    type: Boolean,
    default: false,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated
   * Use `mini` instead.
   */
  miniClass: {
    type: Object as PropType<ToggleClass>,
    default: () => ({
      open: '',
      close: '',
    }),
  },
  /**
   * @deprecated
   * Use `fixed` instead.
   */
  fixedClass: {
    type: Object as PropType<ToggleClass>,
    default: () => ({
      open: '',
      close: '',
    }),
  },
  tag: {
    type: String,
    default: 'div',
  },
});

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <component
    :is="tag"
    class="v-container"
    :class="[
      {
        'v-container--padded': padded,
        'v-container--centered': centered,
        'v-container--fluid': fluid,
        'v-container--fixed': fixed,
        'v-container--mini': mini,
      },
    ]"
  >
    <slot />
  </component>
</template>
