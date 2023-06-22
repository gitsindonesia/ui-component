<script setup lang="ts">
import {Select as VSelect} from '@morpheme/select';

const items = ref([
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

const selected = ref();
const modelMultiple = ref();
</script>

<template>
  <PageHeader title="Select" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VSelect :items="items" />
      </div>
    </VCard>

    <VCard title="VModel">
      <div>
        <VSelect :items="items" v-model="selected" />
        <pre class="text-sm mt-2">{{ selected }}</pre>
      </div>
    </VCard>

    <VCard title="Multiple">
      <div>
        <VSelect :items="items" v-model="modelMultiple" multiple />
        <pre class="text-sm mt-2">{{ modelMultiple }}</pre>
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
