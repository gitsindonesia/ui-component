<script setup lang="ts">
import {ref} from 'vue';
import {Autocomplete} from '@morpheme/autocomplete';

const items = ref([
  {
    text: 'Apple',
    value: 'apple',
  },
  {
    text: 'Orange',
    value: 'orange',
  },
  {
    text: 'Pear',
    value: 'pear',
  },
]);

const selected = ref();
const modelMultiple = ref();
</script>

<template>
  <PageHeader title="Autocomplete" />

  <div class="space-y-4">
    <VCard title="Basic">
      <Autocomplete :items="items" />
    </VCard>

    <VCard title="VModel">
      <Autocomplete v-model="selected" :items="items" />
      <pre class="text-sm mt-2">{{ selected }}</pre>
    </VCard>

    <VCard title="Multiple">
      <Autocomplete v-model="modelMultiple" :items="items" multiple />
      <pre class="text-sm mt-2">{{ modelMultiple }}</pre>
    </VCard>

    <VCard title="Clearable">
      <Autocomplete clearable :items="items" />
    </VCard>

    <VCard title="Label">
      <Autocomplete
        label="Choose your favorite fruit"
        clearable
        :items="items"
      />
    </VCard>
  </div>
</template>
