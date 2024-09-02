<script setup lang="ts">
import VIcon from '../../icon/src';
import {VBottomNavigationInjectionKey} from './api';
import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  ref,
  resolveComponent,
} from 'vue';
import {type RouteLocation} from 'vue-router';

const props = withDefaults(
  defineProps<{
    icon?: string;
    iconSize?: string;
    text?: string;
    to?: string | RouteLocation;
    href?: string;
    nuxt?: boolean;
    as?: string | any;
    exactActiveClass?: string;
  }>(),
  {
    iconSize: 'sm',
    as: 'button',
    exactActiveClass: 'v-bottom-navigation__item--active',
  },
);

const api = inject(VBottomNavigationInjectionKey) as any;
const itemRef = ref();

onMounted(() => {
  api.registerItem(itemRef.value);
});

onUnmounted(() => {
  api.unregisterItem(itemRef.value);
});

function onClick() {
  api.setActive(itemRef.value);
}

const tag = computed(() => {
  if (props.to) {
    return props.nuxt
      ? resolveComponent('NuxtLink')
      : resolveComponent('RouterLink');
  }

  return props.href ? 'a' : props.as;
});

const attributes = computed(() => {
  const attrs: Record<string, any> = {};

  if (props.to) {
    attrs.to = props.to;
    attrs.exactActiveClass = props.exactActiveClass;
  }

  if (props.href) {
    attrs.href = props.href;
  }

  return attrs;
});

defineSlots<{
  default?: (props: {}) => any;
  icon?: (props: {}) => any;
}>();
</script>

<template>
  <component
    :is="tag"
    ref="itemRef"
    class="v-bottom-navigation__item"
    :class="{
      'v-bottom-navigation__item--active': api.isActive(itemRef),
    }"
    :aria-selected="api.isActive(itemRef)"
    :aria-label="text"
    @click="onClick"
    v-bind="attributes"
  >
    <slot name="icon">
      <VIcon v-if="icon" :name="icon" :size="iconSize" />
    </slot>
    <span class="v-btn-navigation__item__content">
      <slot>
        {{ text }}
      </slot>
    </span>
  </component>
</template>
