<script setup lang="ts">
import type {VFormSelectItem} from '@morpheme/forms';

const items = ref<VFormSelectItem[]>([
  {
    text: 'Item 1',
    value: '1',
  },
  {
    text: 'Item 2',
    value: '2',
  },
  {
    text: 'Item 3',
    value: '3',
  },
]);
</script>

<template>
  <PageHeader title="FormSelect" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VFormSelect label="Label" name="option" :items="items" />
      </div>
    </VCard>

    <VCard title="Disabled">
      <div>
        <VFormSelect label="Label" name="option" :items="items" disabled />
      </div>
    </VCard>

    <VCard title="Error">
      <div>
        <VFormSelect label="Label" name="option" :items="items" error />
      </div>
    </VCard>
  </div>
</template>
