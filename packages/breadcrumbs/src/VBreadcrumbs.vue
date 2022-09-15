<script setup lang="ts">
import type {VBreadcrumbItem} from './types';
import {PropType, resolveComponent} from 'vue';

const props = defineProps({
  items: {
    type: Array as PropType<VBreadcrumbItem[]>,
    default: () => [],
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
    default: '!text-primary-500',
  },
});

const RouterLink = resolveComponent('RouterLink');
</script>

<template>
  <div class="mb-3 flex gap-2 items-center">
    <template v-for="(item, index) in props.items" :key="index">
      <slot :name="`item.${index}`">
        <component
          :is="item.to ? RouterLink : 'span'"
          :to="item.to"
          :class="[customClass]"
          class="font-medium hover:text-primary-700"
          :exact-active-class="props.activeColor"
        >
          <slot :name="`title.${index}`">
            {{ item.title }}
          </slot>
        </component>
        <template v-if="index + 1 < props.items.length">
          <slot name="divider">
            <span class="text-sm text-gray-400 font-medium mx-0">
              {{ props.divider }}
            </span>
          </slot>
        </template>
      </slot>
    </template>
  </div>
</template>
