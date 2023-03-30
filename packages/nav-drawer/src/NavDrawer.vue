<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

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

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'update:expanded', value: boolean): void;
    (e: 'clickOverlay'): void;
  }>();

const isOpen = useVModel(props, 'modelValue', emit);
const isExpanded = useVModel(props, 'expanded', emit);

const heightClass = computed(() => {
  if (navDrawerHeights.includes(props.height as any)) {
    return `nav-drawer--${props.height}`;
  }

  return '';
});

const classes = computed(() => {
  const shadowClass =
    typeof props.shadow === 'string'
      ? `nav-drawer--shadow-${props.shadow}`
      : 'nav-drawer--shadow';

  return [
    'nav-drawer',
    `nav-drawer-${props.color}`,
    heightClass.value,
    {
      [shadowClass]: !!props.shadow,
      'nav-drawer--bordered': props.bordered,
      'nav-drawer--sticky': props.sticky,
      'nav-drawer--fixed': props.fixed,
      'nav-drawer--right': props.right,
      'nav-drawer--left': props.left,
      'nav-drawer--mini': props.mini,
      'nav-drawer--expand-on-hover': props.expandOnHover,
      'nav-drawer--expanded': isExpanded.value,
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

const onMouseOver = () => {
  if (props.expandOnHover) isExpanded.value = true;
};

const onMouseOut = () => {
  if (props.expandOnHover) isExpanded.value = false;
};

const heightAttrs = computed(() => {
  if (!navDrawerHeights.includes(props.height as any)) {
    return {
      height: props.height,
    };
  }

  return {};
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
      v-bind="{...$attrs, ...heightAttrs}"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
    >
      <slot />
    </aside>
  </transition>
</template>

<style src="./NavDrawer.scss" lang="scss"></style>
