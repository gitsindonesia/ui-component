<script setup lang="ts">
import {computed, toRefs} from 'vue';
import VSpinner from '../VSpinner/VSpinner.vue'

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
});

const {disabled, ring, block, solid, noRing, loading, loadingText} = toRefs(props);

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
        return 'text-primary-500';
      case 'secondary':
        return 'text-secondary-500';
      case 'info':
        return 'text-info-500';
      case 'warning':
        return 'text-warning-500';
      case 'error':
        return 'text-error-500';
      case 'success':
        return 'text-success-500';
      default:
        return 'text-gray-800';
    }
  } else if (props.outlined) {
    switch (props.color) {
      case 'primary':
        return 'text-primary-500 border-primary-500 hover:bg-primary-500 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'secondary':
        return 'text-secondary-500 border-secondary-500 hover:bg-secondary-500 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'info':
        return 'text-info-500 border-info-500 hover:bg-info-500 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'warning':
        return 'text-warning-500 border-warning-500 hover:bg-warning-500 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'error':
        return 'text-error-500 border-error-500 hover:bg-error-500 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      case 'success':
        return 'text-success-500 border-success-500 hover:bg-success-500 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
      default:
        return 'text-gray-600 border-gray-500 hover:bg-gray-400 hover:bg-opacity-20 disabled:bg-opacity-50 disabled:border-opacity-50 disabled:bg-opacity-50 disabled:text-opacity-50 hover:disabled:bg-transparent';
    }
  } else {
    switch (props.color) {
      case 'primary':
        return 'text-white shadow border-primary-500 bg-primary-500 hover:bg-primary-700 hover:border-primary-700';
      case 'secondary':
        return 'text-white shadow border-secondary-500 bg-secondary-500 hover:border-secondary-700 hover:bg-secondary-700';
      case 'info':
        return 'text-white shadow border-info-500 bg-info-500 hover:border-info-700 hover:bg-info-700';
      case 'warning':
        return 'text-white shadow border-warning-500 bg-warning-500 hover:border-warning-700 hover:bg-warning-700';
      case 'error':
        return 'text-white shadow border-error-500 bg-error-500 hover:border-error-700 hover:bg-error-700 focus:ring-error-500';
      case 'success':
        return 'text-white shadow border-success-500 bg-success-500 hover:border-success-700 hover:bg-success-700';
      default:
        return 'text-gray-800 hover:text-gray-900 hover:bg-gray-50 shadow bg-white border-gray-300 focus:border-gray-400 hover:border-gray-400';
    }
  }
});

const disabledClass = computed(() => loading ? '' : 'disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-gray-200 disabled:border-gray-200 disabled:shadow-none')

const ringClass = computed(() => {
  switch (props.color) {
    case 'primary':
      return 'focus:ring focus:ring-offset-2 focus:ring-primary-500 focus:ring-opacity-50';
    case 'secondary':
      return 'focus:ring focus:ring-offset-2 focus:ring-secondary-500 focus:ring-opacity-50';
    case 'info':
      return 'focus:ring focus:ring-offset-2 focus:ring-info-500 focus:ring-opacity-50';
    case 'warning':
      return 'focus:ring focus:ring-offset-2 focus:ring-warning-500 focus:ring-opacity-50';
    case 'error':
      return 'focus:ring focus:ring-offset-2 focus:ring-error-500 focus:ring-opacity-50';
    case 'success':
      return 'focus:ring focus:ring-offset-2 focus:ring-success-500 focus:ring-opacity-50';
    default:
      return 'focus:ring focus:ring-offset-2 focus:ring-gray-400 focus:ring-opacity-50';
  }
});

const classes = computed(() => {
  const borderClass = props.solid ? 'border-2' : 'border';

  return [
    disabledClass.value,
    colorClass.value,
    sizeClass.value,
    !noRing.value ? ringClass.value : '',
    !props.text ? borderClass : '',
    props.solid ? 'font-extrabold' : 'font-bold',
    {
      'rounded-full': props.rounded,
      'rounded-none': props.tile,
      rounded: !props.rounded && !props.tile,
      'w-full': props.block,
    },
  ];
});

const attrs = computed(() => {
  const attrs: Record<string, string> = {};
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
      return 'white'
    case 'white':
      return 'black';
    default:
      return props.color;
  }
})
</script>

<template>
  <component
    :is="computedComponent"
    class="btn"
    :class="classes"
    :disabled="disabled || loading"
    v-bind="{...attrs, ...$attrs}"
  >
    <slot v-if="loading" name="loading"> 
      <v-spinner :color="spinnerColor"/>
      <span v-if="loadingText" class="ml-2">{{ loadingText }}</span>
     </slot>
    <slot v-else />
  </component>
</template>

<style scoped>
.btn {
  @apply transition duration-500 cursor-pointer inline-flex items-center justify-center;
}
.btn:focus {
  @apply outline-none;
}
.btn:active {
  @apply bg-opacity-80;
}
</style>
