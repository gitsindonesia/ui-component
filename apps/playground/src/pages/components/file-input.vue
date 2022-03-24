<script setup>
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/file-input',
    title: 'File Input',
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
  <DocsTitle :breadcrumbs="breadcrumbs">File Input</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-file-upload placeholder=&quot;Search...&quot; />`"
  >
    <template #preview>
      <v-file-upload placeholder="Select File..." />
    </template>
  </Docs>

  <Docs
    title="Button Theme"
    :code="`<v-file-upload placeholder=&quot;Search...&quot; />`"
  >
    <template #preview>
      <v-file-upload theme="button" />
    </template>
  </Docs>

  <Docs
    title="Image Theme"
    :code="`<v-file-upload placeholder=&quot;Search...&quot; />`"
  >
    <template #preview>
      <v-file-upload theme="image" />
    </template>
  </Docs>

  <Docs
    title="Dropzone Theme"
    :code="`<v-file-upload placeholder=&quot;Search...&quot; />`"
  >
    <template #preview>
      <v-file-upload theme="dropzone" />
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>

<style scoped></style>
