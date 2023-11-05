<script setup lang="ts">
import {type PropType, resolveComponent} from 'vue';
import type {VBreadcrumbItemProps} from './types';

defineProps({
  tag: {
    type: String,
    default: 'li',
  },
  title: {
    type: String,
    default: '',
  },
  to: {
    type: String as PropType<VBreadcrumbItemProps['to']>,
    default: '',
  },
  activeClass: {
    type: String,
    default: 'breadcrumbs-item--active',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const RouterLink = resolveComponent('RouterLink');
</script>

<template>
  <component
    :is="to ? RouterLink : tag"
    :to="to"
    class="breadcrumbs-item"
    :class="{
      'breadcrumbs-item--disabled': disabled,
      [activeClass]: active,
    }"
    :exact-active-class="activeClass"
  >
    <slot>
      {{ title }}
    </slot>
  </component>
</template>
