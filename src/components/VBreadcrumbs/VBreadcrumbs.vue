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
  <div class="mb-3">
    <template v-for="(item, index) in props.items" :key="index">
      <router-link
        :to="item.to"
        class="text-sm text-gray-800 font-medium hover:text-primary-500"
      >
        {{ item.title }}
      </router-link>
      <span
        v-if="index + 1 < props.items.length"
        class="text-sm text-gray-400 font-medium mx-2"
      >
        {{ props.divider }}
      </span>
    </template>
  </div>
</template>

<style scoped></style>
