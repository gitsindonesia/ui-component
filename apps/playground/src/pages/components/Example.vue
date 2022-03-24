<script setup lang="ts">
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/breadcrumbs',
    title: 'v-breadcrumbs',
  },
]);

const propItems = [
  {
    prop: 'modelValue',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Model value',
  },
  {
    prop: 'value',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Vee-validate value',
  },
  {
    prop: 'name',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Name',
  },
  {
    prop: 'error',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Error',
  },
  {
    prop: 'error-messages',
    type: 'array',
    required: 'false',
    default: 'false',
    description: 'Error messages',
  },
  {
    prop: 'readonly',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Readonly',
  },
];
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Component</DocsTitle>

  <Docs title="Default" :code="`<v-component />`">
    <template #preview>
      <v-component />
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>

<style scoped></style>
