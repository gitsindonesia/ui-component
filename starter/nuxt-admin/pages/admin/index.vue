<script setup lang="ts">
definePageMeta({
  //
});

useHead({
  title: 'Dashboard',
});

const options = ref({
  chart: {
    id: 'vuechart-example',
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
});

const series = ref([
  {
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91],
  },
]);

const {data: session} = useSession();
</script>

<template>
  <div>
    <AdminPageHeader
      :title="`Welcome back, ${session?.user?.name}`"
      subtitle="Track, manage and forecast your customers and orders."
    />

    <ClientOnly>
      <apexchart
        width="500"
        type="bar"
        :options="options"
        :series="series"
      ></apexchart>
    </ClientOnly>
  </div>
</template>
