<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {useVModel} from '@vueuse/core';
import {computed} from 'vue';
import {Colors} from './colors';

export interface Props {
  color?: Colors;
  modelValue?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | boolean;
  bordered?: boolean;
  sticky?: boolean;
  fixed?: boolean;
  right?: boolean;
  left?: boolean;
  transition?: string;
  overlay?: boolean;
  overlayTransition?: string;
  closeOnOverlayClick?: boolean;
  mini?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  color: 'default',
  transition: 'nav-drawer-transition',
  overlayTransition: 'nav-drawer-overlay-transition',
  closeOnOverlayClick: true,
  mini: false,
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'clickOverlay'): void;
  }>();

const isOpen = useVModel(props, 'modelValue', emit);

const classes = computed(() => {
  const shadowClass =
    typeof props.shadow === 'string'
      ? `nav-drawer--shadow-${props.shadow}`
      : 'nav-drawer--shadow';

  return [
    'nav-drawer',
    `nav-drawer-${props.color}`,
    {
      [shadowClass]: !!props.shadow,
      'nav-drawer--bordered': props.bordered,
      'nav-drawer--sticky': props.sticky,
      'nav-drawer--fixed': props.fixed,
      'nav-drawer--right': props.right,
      'nav-drawer--left': props.left,
      'nav-drawer--mini': props.mini,
    },
  ];
});

const transitionName = computed(() => {
  return props.right ? 'nav-drawer-right-transition' : props.transition;
});

const onOverlayClick = () => {
  emit('clickOverlay');

  if (props.closeOnOverlayClick) isOpen.value = false;
};
</script>

<template>
  <teleport to="body">
    <transition :name="overlayTransition">
      <div
        v-if="overlay && isOpen"
        aria-label="Overlay"
        class="nav-drawer-overlay"
        @click="onOverlayClick"
      />
    </transition>
  </teleport>
  <transition :name="transitionName">
    <aside v-if="isOpen" :class="classes" v-bind="$attrs">
      <slot />
    </aside>
  </transition>
</template>

<style>
:root {
  --nav-drawer-width: 248px;
  --nav-drawer-transition: all 0.3s ease-out;
  --nav-drawer-bg-color: #fff;
  --nav-drawer-text-color: theme('colors.gray.800');
  --nav-drawer-shadow: 'none';
}

.nav-drawer {
  width: var(--nav-drawer-width);
  transition: var(--nav-drawer-transition);
  background-color: var(--nav-drawer-bg-color);
  color: var(--nav-drawer-text-color);
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-shrink: 0;
  box-shadow: var(--nav-drawer-shadow);
  border: var(--nav-drawer-border);
}

/* variants */
.nav-drawer-default {
  --nav-drawer-bg-color: theme('colors.white');
}

.nav-drawer-primary {
  --nav-drawer-bg-color: theme('colors.primary.500');
  --nav-drawer-text-color: theme('colors.white');
}

.nav-drawer-dark {
  --nav-drawer-bg-color: theme('colors.gray.800');
  --nav-drawer-text-color: theme('colors.white');
}

.nav-drawer-secondary {
  --nav-drawer-bg-color: theme('colors.secondary.500');
  --nav-drawer-text-color: theme('colors.white');
}

/* modifiers */
.nav-drawer--mini {
  --nav-drawer-width: 62px;
}

.nav-drawer--shadow {
  --nav-drawer-shadow: theme('boxShadow.DEFAULT');
}

.nav-drawer--shadow-sm {
  --nav-drawer-shadow: theme('boxShadow.sm');
}

.nav-drawer--shadow-md {
  --nav-drawer-shadow: theme('boxShadow.md');
}

.nav-drawer--shadow-lg {
  --nav-drawer-shadow: theme('boxShadow.lg');
}

.nav-drawer--shadow-xl {
  --nav-drawer-shadow: theme('boxShadow.xl');
}

.nav-drawer--bordered {
  --nav-drawer-border: 1px solid theme('colors.gray.200');
}

.nav-drawer--sticky {
  position: sticky;
  top: 0;
}

.nav-drawer--fixed {
  position: fixed;
  top: 0;
}

.nav-drawer--right {
  right: 0;
}

.nav-drawer--left {
  left: 0;
}

/* nav-drawer-transition */
.nav-drawer-transition-enter-active {
  transition: all 0.3s ease-out;
}

.nav-drawer-transition-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.nav-drawer-transition-enter-from,
.nav-drawer-transition-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* nav-drawer-right-transition */
.nav-drawer-right-transition-enter-active {
  transition: all 0.3s ease-out;
}

.nav-drawer-right-transition-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.nav-drawer-right-transition-enter-from,
.nav-drawer-right-transition-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

/* overlay */
.nav-drawer-overlay {
  @apply inset-0 bg-black opacity-50 fixed z-10 transition duration-300;
}

.nav-drawer-overlay-transition-enter-active,
.nav-drawer-overlay-transition-leave-active {
  transition: opacity 0.3s ease-out;
}

.nav-drawer-overlay-transition-enter-from,
.nav-drawer-overlay-transition-leave-to {
  opacity: 0;
}
</style>
