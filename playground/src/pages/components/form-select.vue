<script setup>
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/form-select',
    title: 'Form Select',
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

const items = ref([
  {
    text: 'Male',
    value: 'male',
  },
  {
    text: 'Female',
    value: 'female',
  },
]);
const selected = ref('male');
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Form Select</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-form-select v-model=&quot;selected&quot; placeholder=&quot;Gender&quot; :items=&quot;items&quot; />`"
  >
    <template #preview>
      <v-form-select v-model="selected" placeholder="Gender" :items="items" />
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>
