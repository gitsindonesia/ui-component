<script setup lang="ts">
import type {VBreadcrumbItem} from './VBreadcrumbs';
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
});
</script>

<template>
  <div class="mb-3 flex gap-2 items-center">
    <template v-for="(item, index) in props.items" :key="index">
      <router-link
        :to="item.to"
        exact-active-class="text-primary-500"
        class="font-medium hover:text-primary-600"
      >
        {{ item.title }}
      </router-link>
      <template v-if="index + 1 < props.items.length">
        <slot name="divider">
          <span class="text-sm text-gray-400 font-medium mx-2">
            {{ props.divider }}
          </span>
        </slot>
      </template>
    </template>
  </div>
</template>

<style scoped></style>
