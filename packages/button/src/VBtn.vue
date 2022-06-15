<script setup lang="ts">
import {computed, toRefs} from 'vue';
import VSpinner from '@gits-id/spinner';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (v: string) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v),
  },
  color: {
    type: String,
    default: 'default',
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

const {disabled, loading, loadingText} = toRefs(props);

const computedComponent = computed(() => {
  if (props.to) {
    return 'router-link';
  } else if (props.href) {
    return 'a';
  } else {
    return 'button';
  }
});

const attrs = computed(() => {
  const attributes: Record<string, any> | string = {};
  if (props.to) {
    attributes.to = props.to;
  } else if (props.href) {
    attributes.href = props.href;
  } else {
    attributes.type = props.type;
  }
  return attributes;
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

const defaultVariants: Record<string, any> = {
  default:
    'border-gray-400 text-gray-700 bg-white hover:border-gray-500 active:bg-gray-50 active:border-gray-600 active:text-gray-600',
  primary:
    'border-primary-500 bg-primary-500 text-white hover:bg-primary-600 hover:border-primary-600 active:bg-primary-400 active:border-primary-400',
  secondary:
    'border-secondary-500 bg-secondary-500 text-white hover:bg-secondary-600 hover:border-secondary-600 active:bg-secondary-400 active:border-secondary-400',
  info: 'border-info-500 bg-info-500 text-white hover:bg-info-600 hover:border-info-600 active:bg-info-400 active:border-info-400',
  warning:
    'border-warning-500 bg-warning-500 text-white hover:bg-warning-600 hover:border-warning-600 active:bg-warning-400 active:border-warning-400',
  success:
    'border-success-500 bg-success-500 text-white hover:bg-success-600 hover:border-success-600 active:bg-success-400 active:border-success-400',
  error:
    'border-error-500 bg-error-500 text-white hover:bg-error-600 hover:border-error-600 active:bg-error-400 active:border-error-400',
  dark: 'border-gray-800 bg-gray-800 text-white hover:bg-gray-900 hover:border-gray-900 active:bg-gray-700 active:border-gray-700',
};

const outlinedVariants: Record<string, any> = {
  default:
    'border-gray-400 text-gray-700 hover:bg-gray-700 hover:border-gray-700 hover:text-white active:bg-gray-50 active:border-gray-600 active:text-gray-600',
  primary:
    'border-primary-500 bg-transparent text-primary-500 hover:bg-primary-600 hover:border-primary-600 hover:text-white active:bg-primary-400 active:border-primary-400',
  secondary:
    'border-secondary-500 bg-transparent text-secondary-500 hover:bg-secondary-600 hover:border-secondary-600 hover:text-white active:bg-secondary-400 active:border-secondary-400',
  info: 'border-info-500 bg-transparent text-info-500 hover:bg-info-600 hover:border-info-600 hover:text-white active:bg-info-400 active:border-info-400',
  warning:
    'border-warning-500 bg-transparent text-warning-500 hover:bg-warning-600 hover:border-warning-600 hover:text-white active:bg-warning-400 active:border-warning-400',
  success:
    'border-success-500 bg-transparent text-success-500 hover:bg-success-600 hover:border-success-600 hover:text-white active:bg-success-400 active:border-success-400',
  error:
    'border-error-500 bg-transparent text-error-500 hover:bg-error-600 hover:border-error-600 hover:text-white active:bg-error-400 active:border-error-400',
  dark: 'border-gray-800 bg-transparent text-gray-800 hover:bg-gray-900 hover:border-gray-900 hover:text-white active:bg-gray-700 active:border-gray-700',
};

const textVariants: Record<string, any> = {
  default:
    'border-transparent bg-transparent text-gray-700 hover:text-gray-900 active:text-gray-600',
  primary:
    'border-transparent bg-transparent text-primary-500 hover:text-primary-600 active:text-primary-400',
  secondary:
    'border-transparent bg-transparent text-secondary-500 hover:text-secondary-600 active:text-secondary-400',
  info: 'border-transparent bg-transparent text-info-500 hover:text-info-600 active:text-info-400',
  warning:
    'border-transparent bg-transparent text-warning-500 hover:text-warning-600 active:text-warning-400',
  success:
    'border-transparent bg-transparent text-success-500 hover:text-success-600 active:text-success-400',
  error:
    'border-transparent bg-transparent text-error-500 hover:text-error-600 active:text-error-400',
  dark: 'border-transparent bg-transparent text-gray-800 hover:text-gray-900 active:text-gray-600',
};

const sizeVariants: Record<string, any> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
  xl: 'px-6 py-4 text-xl',
};

const ringVariants: Record<string, any> = {
  default: '',
  primary: 'focus:ring-primary-300',
  secondary: 'focus:ring-secondary-300',
  info: 'focus:ring-info-300',
  warning: 'focus:ring-warning-300',
  success: 'focus:ring-success-300',
  error: 'focus:ring-error-300',
  dark: 'focus:ring-gray-300',
};

const colorClass = computed(() => {
  let color = defaultVariants[props.color];
  if (props.outlined) {
    color = outlinedVariants[props.color];
  } else if (props.text) {
    color = textVariants[props.color];
  }
  return color;
});

const disabledClass = computed(() => {
  let classes =
    'disabled:cursor-not-allowed disabled:shadow-none disabled:text-gray-400';
  if (props.outlined) {
    classes +=
      ' disabled:border-gray-300 disabled:hover:bg-transparent disabled:hover:text-gray-400';
  } else {
    classes += ' disabled:bg-gray-300 disabled:border-gray-300';
  }

  const disabledHoverVariants: Record<string, any> = {
    default: 'disabled:hover:bg-transparent disabled:active:bg-transparent',
    primary:
      'disabled:hover:bg-primary-500 disabled:hover:border-primary-500 disabled:active:bg-primary-500',
    secondary:
      'disabled:hover:bg-secondary-500 disabled:hover:border-secondary-500 disabled:active:bg-secondary-500',
    info: 'disabled:hover:bg-info-500 disabled:hover:border-info-500 disabled:active:bg-info-500',
    warning:
      'disabled:hover:bg-warning-500 disabled:hover:border-warning-500 disabled:active:bg-warning-500',
    error:
      'disabled:hover:bg-error-500 disabled:hover:border-error-500 disabled:active:bg-error-500',
    success:
      'disabled:hover:bg-success-500 disabled:hover:border-success-500 disabled:active:bg-success-500',
    dark: 'disabled:hover:bg-gray-800 disabled:hover:border-gray-800 disabled:active:bg-gray-800',
  };

  return props.loading
    ? [
        'disabled:cursor-not-allowed disabled:shadow-none',
        disabledHoverVariants[props.color],
      ]
    : classes;
});

const iconClass = computed(() => {
  const iconSizes: Record<string, any> = {
    xs: 'w-[26px] h-[26px]',
    sm: 'w-[34px] h-[34px]',
    md: 'w-[42px] h-[42px]',
    lg: 'w-[54px] h-[54px]',
    xl: 'w-[62px] h-[62px]',
  };

  const iconPadding: Record<string, any> = {
    xs: 'px-1',
    sm: 'px-1.5',
    md: 'px-2',
    lg: 'px-2.5',
    xl: 'px-3',
  };
  return [
    iconSizes[props.size],
    props.text ? 'p-0' : iconPadding[props.size],
  ].join(' ');
});

const classes = computed(() => {
  return [
    'inline-flex justify-center items-center border rounded-md font-medium transition duration-300',
    disabledClass.value,
    colorClass.value,
    {
      'focus:ring focus:ring-offset-2 focus:outline-none': !props.noRing,
      [ringVariants[props.color]]: !props.noRing,
      'rounded-full': props.rounded,
      'rounded-none': props.tile,
      shadow: props.shadow,
      'w-full': props.block,
      'btn-loading': props.loading,
      [sizeVariants[props.size]]: !props.icon,
      [iconClass.value]: props.icon,
    },
  ];
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
