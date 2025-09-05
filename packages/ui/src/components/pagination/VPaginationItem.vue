<script setup lang="ts">
import VIcon from '@morpheme/icon';

withDefaults(
  defineProps<{
    srText?: string;
    disabled?: boolean;
    icon?: string;
    iconClass?: string;
    iconSize?: string;
    ellipsis?: boolean;
    active?: boolean;
    simple?: boolean;
    first?: boolean;
    last?: boolean;
    action?: boolean;
  }>(),
  {
    srText: '',
    disabled: false,
    iconSize: 'sm',
  },
);

defineSlots<{
  default?: (props: {}) => any;
}>();
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :aria-disabled="disabled"
    class="v-pagination-item"
    :class="{
      'v-pagination-item--disabled': disabled,
      'v-pagination-item--active': active,
      'v-pagination-item--ellipsis': ellipsis,
      'v-pagination-item--simple': simple,
      'v-pagination-item--first': first,
      'v-pagination-item--last': last,
      'v-pagination-item--action': action,
    }"
  >
    <VIcon v-if="icon" :name="icon" :size="iconSize" :class="iconClass" />
    <slot></slot>
    <span v-if="srText" class="sr-only">{{ srText }}</span>
  </button>
</template>
