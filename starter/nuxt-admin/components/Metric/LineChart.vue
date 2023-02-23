<script setup lang="ts">
interface Props {
  title: string;
  series: number[];
  categories?: string[];
}

const props = defineProps<Props>();

const options = ref({
  chart: {
    id: 'vuechart-example',
    toolbar: {
      show: false,
    },
  },
  xaxis: {
    categories: props.categories,
    labels: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  stroke: {
    curve: 'smooth',
  },
  fill: {
    // type: 'gradient',
  },
  grid: {
    show: false,
  },
  tooltip: {
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
});
</script>

<template>
  <ClientOnly>
    <apexchart
      width="128"
      type="line"
      :options="options"
      :series="[
        {
          name: title,
          data: series,
        },
      ]"
    ></apexchart>
  </ClientOnly>
</template>
