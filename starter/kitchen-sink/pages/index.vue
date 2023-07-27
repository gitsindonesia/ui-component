<script setup lang="ts">
// import {VRow} from '@morpheme/layouts';

const stats = ref([
  {
    label: 'Total Users',
    value: '1,600',
    color: 'primary',
  },
  {
    label: 'Total Orders',
    value: '2,400',
    color: 'success',
  },
  {
    label: 'Total Sales',
    value: '$ 1,025,000',
    color: 'warning',
  },
  {
    label: 'Total Revenue',
    value: '$ 1,025,000',
    color: 'error',
  },
]);

const headers = ref([
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Email',
    value: 'email',
  },
  {
    text: 'Phone',
    value: 'phone',
  },
  {
    text: 'City',
    value: 'city',
  },
  {
    text: 'State',
    value: 'state',
  },
  {
    text: 'Country',
    value: 'country',
  },
]);

const items = ref([
  {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 890',
    city: 'New York',
    state: 'New York',
    country: 'USA',
  },
  {
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '+1 234 567 890',
    city: 'New York',
    state: 'New York',
    country: 'USA',
  },
]);
</script>

<template>
  <PageHeader title="Dashboard" subtitle="Welcome to Morpheme UI Gallery!" />
  
  <div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
    <VCard
      v-for="stat in stats"
      :key="stat.label"
      bordered
      flat
      :color="stat.color"
      border-position="left"
      :title="stat.label"
    >
      <span class="font-medium text-lg sm:text-2xl">{{ stat.value }}</span>
    </VCard>
  </div>

  <VDataTable class="mt-8" :items="items" :headers="headers" />
</template>
