<script setup lang="ts">
import {ref} from 'vue';
import Docs from './Docs.vue';
import DocsTitle from './DocsTitle.vue';
import DocsTable from './DocsTable.vue';

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
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Model value',
  },
  {
    prop: 'value',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'VeeValidate value',
  },
  {
    prop: 'color',
    type: 'string',
    required: 'false',
    default: 'default',
    description: `Alert color.
      <br/>Default: <code>default</code>,
      <code class="text-primary">primary</code>,
      <code class="text-secondary">secondary</code>,
      <code class="text-info-500">info</code>,
      <code class="text-warning-500">warning</code>,
      <code class="text-error-500">error</code>,
      <code class="text-gray-900">dark</code>.`,
  },
  {
    prop: 'inputClass',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Custom Input Class',
  },
  {
    prop: 'disabled',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Disabled attribute',
  },
  {
    prop: 'size',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Checkbox size',
  },
];
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Checkbox</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-checkbox label=&quot;I agree with ToC&quot; />`"
  >
    <template #preview>
      <v-checkbox label="I agree with ToC" />
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>

<style scoped></style>
