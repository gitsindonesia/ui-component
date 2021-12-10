<script setup lang="ts">
import { computed, toRefs } from 'vue';
import VSpinner from '../VSpinner/VSpinner.vue';

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

const { disabled, noRing, loading, loadingText } = toRefs(props);

const computedComponent = computed(() => {
  if (props.to) {
    return 'router-link';
  } else if (props.href) {
    return 'a';
  } else {
    return 'button';
  }
});

const disabledClass = computed(() =>
  loading
    ? ''
    : 'disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-gray-200 disabled:border-gray-200 disabled:shadow-none',
);

// const ringClass = computed(() => {
//   switch (props.color) {
//     case 'primary':
//       return 'focus:ring focus:ring-offset-2 focus:ring-primary-500 focus:ring-opacity-50';
//     case 'secondary':
//       return 'focus:ring focus:ring-offset-2 focus:ring-secondary-500 focus:ring-opacity-50';
//     case 'info':
//       return 'focus:ring focus:ring-offset-2 focus:ring-info-500 focus:ring-opacity-50';
//     case 'warning':
//       return 'focus:ring focus:ring-offset-2 focus:ring-warning-500 focus:ring-opacity-50';
//     case 'error':
//       return 'focus:ring focus:ring-offset-2 focus:ring-error-500 focus:ring-opacity-50';
//     case 'success':
//       return 'focus:ring focus:ring-offset-2 focus:ring-success-500 focus:ring-opacity-50';
//     default:
//       return 'focus:ring focus:ring-offset-2 focus:ring-gray-400 focus:ring-opacity-50';
//   }
// });

const classes = computed(() => {
  const borderClass = props.solid ? 'border-2' : 'border';

  return [
    disabledClass.value,
    // colorClass.value,
    // sizeClass.value,
    !noRing.value ? 'btn--ring' : '',
    !props.text ? borderClass : '',
    props.solid ? 'font-bold' : 'font-semibold',
    `btn--${props.color}`,
    `btn--${props.size}`,
    {
      'btn--outlined': props.outlined,
      'btn--text': props.text,
      'btn--icon': props.icon,
      'rounded-full': props.rounded,
      'rounded-none': props.tile,
      rounded: !props.rounded && !props.tile,
      'w-full': props.block,
      shadow: props.shadow,
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
    class="btn"
    :class="classes"
    :rel="newTab ? 'noopener' : ''"
    :target="newTab ? '_blank' : ''"
    :disabled="disabled || loading"
    v-bind="{ ...attrs, ...$attrs }"
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
.btn {
  @apply transition duration-300 cursor-pointer inline-flex items-center justify-center
    focus:outline-none font-semibold px-4 py-2 text-sm;
}
.btn--xs {
  @apply px-1.5 py-0.5;
}

.btn--sm {
  @apply px-2 py-1;
}

.btn--md {
}

.btn--lg {
  @apply px-5 py-3;
}

.btn--xl {
  @apply px-6 py-4;
}

.btn--ring {
  @apply focus:ring focus:ring-offset-2 focus:ring-opacity-50;
}

/** button icons **/
.btn--icon {
  @apply p-0;
}

.btn--icon.btn--xs {
  @apply w-[30px] h-[30px];
}

.btn--icon.btn--sm {
  @apply w-[36px] h-[36px];
}

.btn--icon.btn--md {
  @apply w-[40px] h-[40px];
}

.btn--icon.btn--lg {
  @apply w-[50px] h-[50px];
}

.btn--icon.btn--xl {
  @apply w-[60px] h-[60px];
}

/** variants */

.btn--default:not(.btn--outlined):not(.btn--text) {
  @apply border-gray-800 text-gray-800
    hover:text-gray-900 hover:border-gray-900 active:text-gray-600 active:border-gray-600;
}

.btn--dark:not(.btn--outlined):not(.btn--text) {
  @apply border-gray-800 bg-gray-800 text-white
    hover:bg-gray-900 hover:border-gray-900 active:text-gray-200 active:border-gray-200;
}

.btn--primary:not(.btn--outlined):not(.btn--text) {
  @apply border-primary-500 bg-primary-500 text-white
    hover:bg-primary-600 hover:border-primary-600
    active:bg-primary-700 active:border-primary-700;
}

.btn--secondary:not(.btn--outlined):not(.btn--text) {
  @apply border-secondary-500 bg-secondary-500 text-white
    hover:bg-secondary-600 hover:border-secondary-600
    active:bg-secondary-700 active:border-secondary-700;
}

.btn--info:not(.btn--outlined):not(.btn--text) {
  @apply border-info-500 bg-info-500 text-white
    hover:bg-info-600 hover:border-info-600
    active:bg-info-700 active:border-info-700;
}

.btn--success:not(.btn--outlined):not(.btn--text) {
  @apply border-success-500 bg-success-500 text-white
    hover:bg-success-600 hover:border-success-600
    active:bg-success-700 active:border-success-700;
}

.btn--warning:not(.btn--outlined):not(.btn--text) {
  @apply border-warning-500 bg-warning-500 text-white
    hover:bg-warning-600 hover:border-warning-600
    active:bg-warning-700 active:border-warning-700;
}

.btn--error:not(.btn--outlined):not(.btn--text) {
  @apply border-error-500 bg-error-500 text-white
    hover:bg-error-600 hover:border-error-600
    active:bg-error-700 active:border-error-700;
}

/** outlined */
.btn--outlined {
  @apply bg-transparent;
}

.btn--default.btn--outlined {
  @apply border-gray-800 text-gray-800
    hover:bg-gray-900 hover:text-white hover:border-gray-900 active:text-gray-300 active:border-gray-300;
}
.btn--dark.btn--outlined {
  @apply border-gray-800 text-gray-800 hover:text-white
    hover:bg-gray-900 hover:border-gray-900 active:text-gray-200 active:border-gray-200;
}
.btn--primary.btn--outlined {
  @apply border-primary-500 text-primary-500
    hover:bg-primary-600 hover:text-white hover:border-primary-600
    active:text-primary-100;
}

.btn--secondary.btn--outlined {
  @apply border-secondary-500 text-secondary-500
    hover:bg-secondary-600 hover:text-white hover:border-secondary-600
    active:text-secondary-100;
}
.btn--info.btn--outlined {
  @apply border-info-500 text-info-500
    hover:bg-info-600 hover:text-white hover:border-info-600
    active:text-info-100;
}
.btn--warning.btn--outlined {
  @apply border-warning-500 text-warning-500
    hover:bg-warning-600 hover:text-white hover:border-warning-600
    active:text-warning-100;
}
.btn--success.btn--outlined {
  @apply border-success-500 text-success-500
    hover:bg-success-600 hover:text-white hover:border-success-600
    active:text-success-100;
}
.btn--error.btn--outlined {
  @apply border-error-500 text-error-500
    hover:bg-error-600 hover:text-white hover:border-error-600
    active:text-error-100;
}

/** text */
.btn--text {
  @apply bg-transparent border-none;
}

.btn--default.btn--text {
  @apply text-gray-800 hover:text-gray-900 active:text-gray-700;
}
.btn--dark.btn--text {
  @apply text-gray-800 hover:text-gray-900 active:text-gray-700;
}
.btn--primary.btn--text {
  @apply text-primary-500 hover:text-primary-600 active:text-primary-400;
}
.btn--secondary.btn--text {
  @apply text-secondary-500 hover:text-secondary-600 active:text-secondary-400;
}
.btn--info.btn--text {
  @apply text-info-500 hover:text-info-600 active:text-info-400;
}
.btn--warning.btn--text {
  @apply text-warning-500 hover:text-warning-600 active:text-warning-400;
}
.btn--success.btn--text {
  @apply text-success-500 hover:text-success-600 active:text-success-400;
}
.btn--error.btn--text {
  @apply text-error-500 hover:text-error-600 active:text-error-400;
}
</style>
