<script setup lang="ts">
import type {VSelectItem} from '@morpheme/select';

const items = ref<VSelectItem[]>([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
]);
</script>

<template>
  <PageHeader title="Select" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VSelect :items="items" />
      </div>
    </VCard>

    <VCard title="Searchable">
      <div>
        <VSelect :items="items" searchable />
      </div>
    </VCard>

    <VCard title="No check icon">
      <div>
        <VSelect :items="items" no-check-icon />
      </div>
    </VCard>

    <VCard title="Label">
      <div>
        <VSelect :items="items" label="Label" />
      </div>
    </VCard>

    <VCard title="Shadow">
      <div>
        <VSelect :items="items" shadow />
      </div>
    </VCard>

    <VCard title="Error">
      <div>
        <VSelect :items="items" error />
      </div>
    </VCard>

    <VCard title="Clearable">
      <div>
        <VSelect :items="items" clearable />
      </div>
    </VCard>

    <VCard title="Custom Transition">
      <div>
        <VSelect :items="items" transition="slide-down" />
      </div>
    </VCard>

    <VCard title="Sizes">
      <div>
        <VSelect :items="items" size="sm" />
        <VSelect :items="items" size="md" />
        <VSelect :items="items" size="lg" />
      </div>
    </VCard>
  </div>
</template>
