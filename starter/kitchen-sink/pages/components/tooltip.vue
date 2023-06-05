<script setup lang="ts">
const placements = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'right',
  'right-start',
  'right-end',
  'left',
  'left-start',
  'left-end',
];
</script>

<template>
  <PageHeader title="Tooltip" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div class="flex gap-4">
        <VTooltip class="inline-block">
          <template #activator>
            <VBtn> Button </VBtn>
          </template>
          <span>Hello :)</span>
        </VTooltip>
        <VTooltip class="mt-4 inline-block">
          <template #activator>
            <p>Hove on text</p>
          </template>
          <span>Hello :)</span>
        </VTooltip>
      </div>
    </VCard>

    <VCard title="Placement">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <VTooltip
          v-for="placement in placements"
          :key="placement"
          :placement="placement"
          class="inline-block"
        >
          <template #activator>
            <VBtn block> {{ placement }} </VBtn>
          </template>
          <span>Hello :)</span>
        </VTooltip>
      </div>
    </VCard>
  </div>
</template>
