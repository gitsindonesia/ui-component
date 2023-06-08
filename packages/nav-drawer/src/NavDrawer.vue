<script setup lang="ts">
import {useVModel} from '@vueuse/core';
import {computed} from 'vue';
import {Colors} from './colors';
import {navDrawerHeights, NavDrawerHeights} from './types';

export interface Props {
  color?: Colors | string;
  modelValue?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | boolean;
  bordered?: boolean;
  sticky?: boolean;
  fixed?: boolean;
  right?: boolean;
  left?: boolean;
  top?: boolean;
  bottom?: boolean;
  transition?: string;
  overlay?: boolean;
  overlayTransition?: string;
  closeOnOverlayClick?: boolean;
  mini?: boolean;
  expandOnHover?: boolean;
  expanded?: boolean;
  height?: NavDrawerHeights | string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: true,
  color: 'default',
  transition: 'nav-drawer-transition',
  overlayTransition: 'nav-drawer-overlay-transition',
  closeOnOverlayClick: true,
  mini: false,
  height: 'screen',
});

defineOptions({
  inheritAttrs: false,
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'update:expanded', value: boolean): void;
    (e: 'clickOverlay'): void;
  }>();

const isOpen = useVModel(props, 'modelValue', emit);
const isExpanded = useVModel(props, 'expanded', emit);

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
      'nav-drawer--bottom': props.bottom,
      'nav-drawer--top': props.top,
      'nav-drawer--mini': props.mini,
      'nav-drawer--expand-on-hover': props.expandOnHover,
      'nav-drawer--expanded': isExpanded.value,
    },
  ];
});

const transitionName = computed(() => {
  if (props.top) return 'nav-drawer-top-transition';

  if (props.bottom) return 'nav-drawer-bottom-transition';

  return props.right ? 'nav-drawer-right-transition' : props.transition;
});

const onOverlayClick = () => {
  emit('clickOverlay');

  if (props.closeOnOverlayClick) isOpen.value = false;
};

const onMouseOver = () => {
  if (props.expandOnHover) isExpanded.value = true;
};

const onMouseOut = () => {
  if (props.expandOnHover) isExpanded.value = false;
};

const NAV_DRAWER_HEIGHT: Record<string, string | undefined> = {
  screen: '100vh',
  auto: 'auto',
  fit: 'fit-content',
  max: 'max-content',
  'screen-dvh': '100dvh',
  'screen-lvh': '100lvh',
  'screen-svh': '100svh',
  unset: 'unset',
  initial: 'initial',
  inherit: 'inherit',
  'min-content': 'min-content',
  revert: 'revert',
  none: undefined,
};

const styles = computed(() => {
  if (props.top || props.bottom) return {};

  const styles: Partial<HTMLDivElement['style']> = {};

  if (navDrawerHeights.includes(props.height as any)) {
    styles.height = NAV_DRAWER_HEIGHT[props.height];
  } else if (props.height) {
    styles.height = props.height;
  }

  return styles;
});
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
    <aside
      v-if="isOpen"
      :class="classes"
      v-bind="$attrs"
      :style="styles"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
    >
      <slot />
    </aside>
  </transition>
</template>
