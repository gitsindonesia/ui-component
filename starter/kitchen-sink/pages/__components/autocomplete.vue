<script setup lang="ts">
import {ref} from 'vue';

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
</script>

<template>
  <PageHeader title="Autocomplete" />

  <div class="space-y-4">
    <VCard title="Basic">
      <VAutocomplete :items="items" />
    </VCard>

    <VCard title="VModel">
      <VAutocomplete v-model="selected" :items="items" />
      <pre class="text-sm mt-2">{{ selected }}</pre>
    </VCard>

    <VCard title="Clearable">
      <VAutocomplete clearable :items="items" />
    </VCard>

    <VCard title="Label">
      <VAutocomplete
        label="Choose your favorite fruit"
        clearable
        :items="items"
      />
    </VCard>

    <VCard title="Dark Mode" class="dark">
      <VAutocomplete
        label="Choose your favorite fruit"
        clearable
        :items="items"
      />
    </VCard>
  </div>
</template>
