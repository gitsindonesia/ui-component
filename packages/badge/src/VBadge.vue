<script setup lang="ts">
import {computed, toRefs} from 'vue';
import {XIcon} from '@heroicons/vue/outline';

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
  dismissable: {
    type: Boolean,
    default: false,
  },
});

const {dismissable} = toRefs(props);

const emit = defineEmits(['dismiss']);

const colorClass = computed(() => {
  if (props.bgColor) {
    return `${props.bgColor} ${props.textColor}`;
  }

  switch (props.color) {
    case 'primary':
      return 'bg-primary-500 text-white';
    case 'secondary':
      return 'bg-secondary-500 text-white';
    case 'error':
      return 'bg-error-500 text-white';
    case 'info':
      return 'bg-info-500 text-white';
    case 'warning':
      return 'bg-warning-500 text-white';
    case 'success':
      return 'bg-success-500 text-white';
    default:
      return 'bg-gray-200 text-gray-900';
  }
});

const sizeClass = computed(() => {
  if (props.small) {
    return 'px-2 py-1 text-xs';
  } else if (props.large) {
    return 'px-4 py-2 text-lg';
  } else {
    return 'px-2 py-1 text-sm';
  }
});

const roundedClass = computed(() => {
  let rounded = 'rounded-md';
  if (props.small) {
    rounded = 'rounded-md';
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

const dismissableColor = computed(() => {
  const colors = {
    default: 'hover:bg-gray-400 active:bg-gray-300 hover:text-white',
    primary: 'hover:bg-primary-400 active:bg-primary-300',
    secondary: 'hover:bg-secondary-400 active:bg-secondary-300',
    info: 'hover:bg-info-400 active:bg-info-300',
    warning: 'hover:bg-warning-400 active:bg-warning-300',
    success: 'hover:bg-success-400 active:bg-success-300',
    error: 'hover:bg-error-400 active:bg-error-300',
  };

  return colors[props.color || 'default'];
});

const onDismiss = () => {
  emit('dismiss');
};
</script>

<template>
  <span
    class="inline-flex items-center gap-2"
    :class="[colorClass, roundedClass, sizeClass, circleClass]"
  >
    <slot />
    <button
      v-if="dismissable"
      class="bg-transparent rounded-sm !p-0"
      :class="[dismissableColor]"
      type="button"
      @click="onDismiss"
    >
      <XIcon class="h-4 w-4" />
    </button>
  </span>
</template>

<style scoped></style>
