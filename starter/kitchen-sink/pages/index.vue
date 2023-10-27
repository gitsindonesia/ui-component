<script setup lang="ts">
const stats = ref([
  {
    label: 'Total Revenue',
    icon: 'ph:currency-circle-dollar-bold',
    value: '$45,231.89',
    changes: '+20.1% from last month',
  },
  {
    label: 'Subscriptions',
    icon: 'ph:users-bold',
    value: '+2350',
    changes: '+180.1% from last month',
  },
  {
    label: 'Sales',
    icon: 'ph:credit-card',
    value: '+12,234',
    changes: '+19% from last month',
  },
  {
    label: 'Active Now',
    icon: 'ph:activity',
    value: '+572',
    changes: '+201 since last hour',
  },
]);

const tabs = ref([
  {
    label: 'Overview',
    value: 'overview',
  },
  {
    label: 'Analytics',
    value: 'analytics',
  },
  {
    label: 'Reports',
    value: 'reports',
  },
  {
    label: 'Notifications',
    value: 'notifications',
    disabled: true,
  },
]);
</script>

<template>
  <PageHeader title="Dashboard">
    <template #action>
      <div
        class="flex w-full flex-col lg:flex-row justify-end lg:items-center gap-2"
      >
        <VInput
          wrapper-class="lg:w-64"
          prepend-icon="ph:calendar"
          model-value="Jan 03, 2023 - Feb 28, 2023"
        />
        <VBtn
          v-tooltip="{
            content: 'Download',
            theme: 'tooltip-white',
          }"
          color="primary"
        >
          Download
        </VBtn>
      </div>
    </template>
  </PageHeader>

  <VTabGroup color="info" class="!-mx-4 overflow-x-auto">
    <VTabList>
      <VTabItem
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        :disabled="tab.disabled"
      >
        {{ tab.label }}
      </VTabItem>
    </VTabList>
  </VTabGroup>

  <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
    <VCard v-for="stat in stats" :key="stat.label" bodyless class="p-4">
      <div class="flex justify-between items-center">
        <h3 class="font-medium">
          {{ stat.label }}
        </h3>
        <VIcon :name="stat.icon" size="sm" class="text-gray-700" />
      </div>
      <div class="mt-3">
        <h2 class="text-2xl font-semibold">{{ stat.value }}</h2>
        <p class="text-sm text-gray-500 dark:text-neutral-500">
          {{ stat.changes }}
        </p>
      </div>
    </VCard>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
    <DashboardOverviewChart />
    <DashboardRecentSales />
  </div>
</template>
