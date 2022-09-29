<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {toRefs, ref, watch, PropType} from 'vue';
import type {DefaultColors} from '@gits-id/theme/defaultTheme';

export type AppBarShadow =
  | boolean
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'inner'
  | 'none';

export type AppBarColors = DefaultColors | 'default';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: true,
  },
  fixed: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: [Boolean, String] as PropType<AppBarShadow>,
    default: false,
  },
  color: {
    type: String as PropType<AppBarColors>,
    default: 'default',
  },
  transition: {
    type: String,
    default: 'fade',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

const {modelValue} = toRefs(props);

const isOpen = ref(modelValue.value);

watch(isOpen, (val) => {
  emit('update:modelValue', val);
});

watch(modelValue, (val) => {
  isOpen.value = val;
});

const toggle = () => (isOpen.value = !isOpen.value);

defineExpose(toggle);
</script>

<template>
  <transition :name="transition">
    <header
      v-if="isOpen"
      class="app-bar"
      :class="[
        `app-bar-${color}`,
        typeof shadow === 'string'
          ? `app-bar--shadow-${shadow}`
          : shadow
          ? 'app-bar--shadow'
          : '',
        size ? `app-bar--${size}` : '',
        {
          'app-bar--fixed': fixed,
          'app-bar--sticky': sticky,
          'app-bar--bordered': bordered,
        },
      ]"
      v-bind="$attrs"
    >
      <slot :toggle="toggle" />
    </header>
  </transition>
</template>

<style>
:root {
  --app-bar-height: 54px;
  --app-bar-padding-x: theme('padding.4');
  --app-bar-padding-y: theme('padding.3');
  --app-bar-bg-color: theme('colors.white');
  --app-bar-color: theme('colors.gray.800');
  --app-bar-transition: all 0.3s ease;
  --app-bar-border-style: solid;
  --app-bar-border-width: theme('borderWidth.DEFAULT');
  --app-bar-border-color: theme('borderColor.DEFAULT');
}

.app-bar {
  @apply flex items-center;

  height: var(--app-bar-height);
  padding: var(--app-bar-padding-y) var(--app-bar-padding-x);
  background-color: var(--app-bar-bg-color);
  color: var(--app-bar-color);
  transition: var(--app-bar-transition);
}

.app-bar--fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.app-bar--sticky {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.app-bar--bordered {
  border-bottom-style: var(--app-bar-border-style);
  border-bottom-width: var(--app-bar-border-width);
  border-bottom-color: var(--app-bar-border-color);
}

/* Shadows */
.app-bar--shadow {
  @apply shadow;
}

.app-bar--shadow-sm {
  @apply shadow-sm;
}
.app-bar--shadow-md {
  @apply shadow-md;
}
.app-bar--shadow-lg {
  @apply shadow-lg;
}
.app-bar--shadow-xl {
  @apply shadow-xl;
}
.app-bar--shadow-2xl {
  @apply shadow-2xl;
}
.app-bar--shadow-inner {
  @apply shadow-inner;
}
.app-bar--shadow-none {
  @apply shadow-none;
}

/* Colors */
.app-bar-primary {
  --app-bar-bg-color: theme('colors.primary.500');
  --app-bar-color: theme('colors.white');
}
.app-bar-secondary {
  --app-bar-bg-color: theme('colors.secondary.500');
  --app-bar-color: theme('colors.white');
}
.app-bar-info {
  --app-bar-bg-color: theme('colors.info.500');
  --app-bar-color: theme('colors.white');
}
.app-bar-warning {
  --app-bar-bg-color: theme('colors.warning.500');
  --app-bar-color: theme('colors.white');
}
.app-bar-success {
  --app-bar-bg-color: theme('colors.success.500');
  --app-bar-color: theme('colors.white');
}
.app-bar-error {
  --app-bar-bg-color: theme('colors.error.500');
  --app-bar-color: theme('colors.white');
}

/* sizes */
.app-bar--sm {
  --app-bar-height: 48px;
}

.app-bar--md {
  --app-bar-height: 54px;
}

.app-bar--lg {
  @apply flex-col items-start;

  --app-bar-height: 94px;
}
</style>
