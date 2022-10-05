<script setup lang="ts">
import type {VBreadcrumbItem} from './types';
import {PropType} from 'vue';
import VBreadcrumbsItem from './VBreadcrumbsItem.vue';
import VBreadcrumbsDivider from './VBreadcrumbsDivider.vue';

defineProps({
  items: {
    type: Array as PropType<VBreadcrumbItem[]>,
    default: () => [] as VBreadcrumbItem[],
  },
  divider: {
    type: String,
    default: '/',
  },
  customClass: {
    type: String,
    default: '',
  },
  activeColor: {
    type: String,
    default: 'breadcrumbs-item--active',
  },
  tag: {
    type: String,
    default: 'li',
  },
});
</script>

<template>
  <nav aria-label="Breadcrumbs" class="breadcrumbs" :class="customClass">
    <slot>
      <template v-for="(item, index) in items" :key="index">
        <slot :name="`item.${index}`">
          <VBreadcrumbsItem
            :to="item.to"
            :title="item.title"
            :active-class="activeColor"
            :tag="tag"
          />
        </slot>
        <slot v-if="index + 1 < items.length" name="divider">
          <VBreadcrumbsDivider :text="divider" />
        </slot>
      </template>
    </slot>
  </nav>
</template>
