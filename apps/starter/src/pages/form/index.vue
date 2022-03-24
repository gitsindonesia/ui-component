<script setup lang="ts">
import {ref} from 'vue';
import TabBasicForm from './partials/TabBasicForm.vue';
import TabInlineForm from './partials/TabInlineForm.vue';
import TabModalForm from './partials/TabModalForm.vue';
import TabInitialValues from './partials/TabInitialValues.vue';

const tabItems = ref([
  {
    text: 'Basic',
    value: 'basic',
  },
  {
    text: 'Inline',
    value: 'inline',
  },
  {
    text: 'Modal',
    value: 'modal',
  },
  {
    text: 'Initial Values',
    value: 'initial-values',
  },
]);

const activeTab = ref(0);
</script>

<template>
  <h1 class="text-2xl font-bold mb-5">Form Example</h1>

  <v-tabs v-model="activeTab" class="mb-5" :items="tabItems" />

  <template v-if="activeTab === 0">
    <tab-basic-form />
  </template>
  <template v-else-if="activeTab === 1">
    <tab-inline-form />
  </template>
  <template v-else-if="activeTab === 2">
    <tab-modal-form />
  </template>
  <template v-else-if="activeTab === 3">
    <tab-initial-values />
  </template>
</template>

<style scoped></style>
