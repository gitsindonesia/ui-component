<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: '',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: String,
    default: '',
  },
  textColor: {
    type: String,
    default: 'text-white',
  },
  circle: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([]);

const colorClass = computed(() => {
  if (props.bgColor) {
    return `${props.bgColor} ${props.textColor}`;
  }

  switch (props.color) {
    case 'primary':
      return 'bg-primary-600 text-white';
    case 'error':
      return 'bg-error-600 text-white';
    case 'info':
      return 'bg-info-600 text-white';
    case 'warning':
      return 'bg-warning-600 text-white';
    case 'success':
      return 'bg-success-600 text-white';
    default:
      return 'bg-gray-300 text-gray-900';
  }
});

const sizeClass = computed(() => {
  if (props.small) {
    return 'px-2 py-1 text-xs';
  } else if (props.large) {
    return 'px-3 py-2 text-lg';
  } else {
    return 'px-2 py-1 text-sm';
  }
});

const roundedClass = computed(() => {
  let rounded = 'rounded-md';
  if (props.small) {
    rounded = 'rounded';
  } else if (props.large) {
    rounded = 'rounded-lg';
  }

  return props.rounded ? `rounded-full` : rounded;
});

const circleClass = computed(() => {
  let size = 'w-7 h-7';
  if (props.small) {
    size = 'w-6 h-6';
  } else if (props.large) {
    size = 'w-10 h-10';
  }

  return props.circle
    ? 'inline-flex items-center justify-center rounded-full ' + size
    : '';
});
</script>

<template>
  <span :class="[colorClass, roundedClass, sizeClass, circleClass]">
    <slot />
  </span>
</template>

<style scoped></style>
