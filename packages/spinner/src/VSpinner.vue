<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps({
  xLarge: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  xSmall: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: '',
  },
});

const sizeClass = computed(() => {
  if (props.large) {
    return 'h-8 w-8';
  } else if (props.small) {
    return 'h-4 w-4';
  } else if (props.xLarge) {
    return 'h-10 w-10';
  } else if (props.xSmall) {
    return 'h-3 w-3';
  } else {
    return 'h-5 w-5';
  }
});

const colorClass = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'text-primary-600';
    case 'info':
      return 'text-info-600';
    case 'warning':
      return 'text-warning-600';
    case 'error':
      return 'text-error-600';
    case 'success':
      return 'text-success-600';
    case 'white':
      return 'text-white-600';
    default:
      return props.color || 'text-gray-600';
  }
});
</script>

<template>
  <svg
    class="animate-spin inline"
    :class="[sizeClass, colorClass]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="4"
    />
    <path
      class="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
</template>
