<script setup lang="ts">
import Metric from './Metric.vue';

export type MetricItem = InstanceType<typeof Metric>['$props'];

interface Props {
  items?: MetricItem[];
}

defineProps<Props>();
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
    <Metric v-for="item in items" :key="item.title" v-bind="item" />
  </div>
</template>
