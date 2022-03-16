<script setup lang="ts">
import {computed, toRefs} from 'vue';
import VSpinner from '@gits-id/spinner';

const props = defineProps({
  size: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: '',
  },
  to: {
    type: [String, Object],
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  text: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  ring: {
    type: Boolean,
    default: true,
  },
  tile: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
  solid: {
    type: Boolean,
    default: false,
  },
  noRing: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loadingText: {
    type: String,
    default: '',
  },
  newTab: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
});

const {disabled, ring, block, solid, noRing, loading, loadingText} =
  toRefs(props);

const computedComponent = computed(() => {
  if (props.to) {
    return 'router-link';
  } else if (props.href) {
    return 'a';
  } else {
    return 'button';
  }
});

const sizeClass = computed(() => {
  if (props.icon) {
    switch (props.size) {
      case 'xs':
        return 'text-xs p-[6px] w-[30px] h-[30px]';
      case 'sm':
        return 'text-sm p-[6px] w-[36] h-[36]';
      case 'lg':
        return 'text-base p-2 w-[50px] h-[50px]';
      case 'xl':
        return 'text-lg p-2 w-[60px] h-[60px]';
      case 'md':
      case 'base':
      default:
        return 'text-xs p-2 w-[40px] h-[40px]';
    }
  } else {
    switch (props.size) {
      case 'xs':
        return 'text-xs px-2 py-1 h-[30px]';
      case 'sm':
        return 'text-sm px-3 py-1 h-9';
      case 'lg':
        return 'text-base px-6 py-3 h-[50px]';
      case 'xl':
        return 'text-lg px-8 py-4 h-[60px]';
      case 'md':
      case 'base':
      default:
        return 'text-sm px-4 py-2 h-10';
    }
  }
});

const colorClass = computed(() => {
  if (props.text) {
    switch (props.color) {
      case 'primary':
        return 'text-primary-600';
      case 'secondary':
        return 'text-secondary-600';
      case 'info':
        return 'text-info-600';
      case 'warning':
        return 'text-warning-600';
      case 'error':
        return 'text-error-600';
      case 'success':
        return 'text-success-600';
      case 'gray-light':
        return 'text-gray-3';
      default:
        return 'text-gray-800';
    }
  } else if (props.outlined) {
    switch (props.color) {
      case 'primary':
        return 'text-primary-600 border-primary-600 hover:bg-primary-600 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'secondary':
        return 'text-secondary-600 border-secondary-600 hover:bg-secondary-600 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'info':
        return 'text-info-600 border-info-600 hover:bg-info-600 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'warning':
        return 'text-warning-600 border-warning-600 hover:bg-warning-600 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'error':
        return 'text-error-600 border-error-600 hover:bg-error-600 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'success':
        return 'text-success-600 border-success-600 hover:bg-success-600 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'gray-light':
        return 'text-gray-3 border-gray-3 hover:bg-gray-300 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      default:
        return 'text-gray-600 border-gray-600 hover:bg-gray-400 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
    }
  } else {
    switch (props.color) {
      case 'primary':
        return 'text-white border-primary-600 bg-primary-600 hover:bg-primary-700 hover:border-primary-700';
      case 'secondary':
        return 'text-white border-secondary-600 bg-secondary-600 hover:border-secondary-700 hover:bg-secondary-700';
      case 'info':
        return 'text-white border-info-600 bg-info-600 hover:border-info-700 hover:bg-info-700';
      case 'warning':
        return 'text-white border-warning-600 bg-warning-600 hover:border-warning-700 hover:bg-warning-700';
      case 'error':
        return 'text-white border-error-600 bg-error-600 hover:border-error-700 hover:bg-error-700 focus:ring-error-600';
      case 'success':
        return 'text-white border-success-600 bg-success-600 hover:border-success-700 hover:bg-success-700';
      case 'gray-light':
        return 'text-gray-3 hover:text-gray-200 hover:bg-gray-50 bg-white border-gray-300 focus:border-gray-400 hover:border-gray-400';
      default:
        return 'text-gray-800 hover:text-gray-900 hover:bg-gray-50 bg-white border-gray-300 focus:border-gray-400 hover:border-gray-400';
    }
  }
});

const disabledClass = computed(() =>
  !disabled
    ? ''
    : 'disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-gray-200 disabled:border-gray-200 disabled:shadow-none',
);

const ringClass = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'focus:ring focus:ring-offset-2 focus:ring-primary-600 focus:ring-opacity-50';
    case 'secondary':
      return 'focus:ring focus:ring-offset-2 focus:ring-secondary-600 focus:ring-opacity-50';
    case 'info':
      return 'focus:ring focus:ring-offset-2 focus:ring-info-600 focus:ring-opacity-50';
    case 'warning':
      return 'focus:ring focus:ring-offset-2 focus:ring-warning-600 focus:ring-opacity-50';
    case 'error':
      return 'focus:ring focus:ring-offset-2 focus:ring-error-600 focus:ring-opacity-50';
    case 'success':
      return 'focus:ring focus:ring-offset-2 focus:ring-success-600 focus:ring-opacity-50';
    default:
      return 'focus:ring focus:ring-offset-2 focus:ring-gray-400 focus:ring-opacity-50';
  }
});

const classes = computed(() => {
  // const borderClass = props.solid ? "border-2" : "border";

  return [
    'btn',
    `btn-${props.color || 'default'}`,
    `btn-${props.size || 'md'}`,
    // disabledClass.value,
    // colorClass.value,
    // sizeClass.value,
    // !noRing.value ? ringClass.value : "",
    // !props.text ? borderClass : "",
    // props.solid ? "font-semibold" : "font-semibold",
    {
      'btn-outlined': props.outlined,
      [`btn-outlined-${props.color}`]: props.outlined,
      'btn-text': props.text,
      [`btn-text-${props.color}`]: props.text,
      'btn-rounded': props.rounded && !props.tile,
      'btn-tile': props.tile && !props.rounded,
      'w-full': props.block,
      shadow: props.shadow,
      'btn-icon': props.icon,
      'btn-loading': props.loading,
    },
  ];
});

const attrs = computed(() => {
  const attrs: Record<string, any> | string = {};
  if (props.to) {
    attrs.to = props.to;
  } else if (props.href) {
    attrs.href = props.href;
  } else {
    attrs.type = props.type;
  }
  return attrs;
});

const spinnerColor = computed(() => {
  switch (props.color) {
    case 'primary':
    case 'info':
    case 'warning':
    case 'error':
    case 'success':
      return 'white';
    case 'white':
      return 'black';
    default:
      return props.color;
  }
});
</script>

<template>
  <component
    :is="computedComponent"
    :class="classes"
    :rel="newTab ? 'noopener' : ''"
    :target="newTab ? '_blank' : ''"
    :disabled="disabled || loading"
    v-bind="{...attrs, ...$attrs}"
  >
    <template v-if="loading">
      <slot name="loading">
        <v-spinner :color="spinnerColor" />
        <span v-if="loadingText" class="ml-2">{{ loadingText }}</span>
      </slot>
    </template>
    <slot v-else />
  </component>
</template>

<style scoped>
/* .btn {
  @apply transition duration-500 cursor-pointer inline-flex items-center justify-center;
}
.btn:focus {
  @apply outline-none;
}
.btn:active {
  @apply bg-opacity-80;
} */
</style>
