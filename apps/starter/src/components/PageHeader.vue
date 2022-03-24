<script setup lang="ts">
import {toRefs} from 'vue';
import type {VBreadcrumbItem} from '@gits-id/ui/src/components/VBreadcrumbs/VBreadcrumbs';

interface Props {
  title: string;
  breadcrumbs?: VBreadcrumbItem[];
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
});

const {title, breadcrumbs} = toRefs(props);

// const emit = defineEmits(['update:title']);
</script>

<template>
  <v-breadcrumbs :items="breadcrumbs" />

  <div class="mb-6">
    <h1 class="text-2xl font-semibold">{{ title }}</h1>
  </div>
</template>

<style scoped></style>
