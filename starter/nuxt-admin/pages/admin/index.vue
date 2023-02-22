<script setup lang="ts">
import {MetricItem} from '~~/components/MetridGrid.vue';

useHead({
  title: 'Dashboard',
});

const stats = ref<MetricItem[]>([
  {
    title: 'Total customers',
    value: 2420,
    state: 'up',
    change: 40,
    series: [30, 40, 50],
  },
  {
    title: 'Members',
    value: 1210,
    state: 'down',
    change: 10,
    series: [30, 60, 50],
  },
  {
    title: 'Active now',
    value: 316,
    state: 'up',
    change: 20,
    series: [60, 80, 100],
  },
]);
</script>

<template>
  <div>
    <DashboardHeader />
    <MetridGrid :items="stats" />
    <DashboardTable />
  </div>
</template>
