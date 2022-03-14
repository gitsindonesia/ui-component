<script setup lang="ts">
import type {VBreadcrumbItem} from './types';
import type {PropType} from 'vue';

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
</script>

<template>
  <div class="mb-3 flex gap-2 items-center">
    <template v-for="(item, index) in props.items" :key="index">
      <slot :name="`item.${index}`">
        <router-link
          :to="item.to"
          :class="[customClass]"
          class="font-medium hover:text-primary-700"
          :exact-active-class="props.activeColor"
        >
          <slot :name="`title.${index}`">
            {{ item.title }}
          </slot>
        </router-link>
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

<style scoped></style>
