<script setup lang="ts">
import {computed, toRefs} from 'vue';
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

const {disabled, noRing, loading, loadingText} = toRefs(props);

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

<style src="./VBtn.styles.css"></style>
