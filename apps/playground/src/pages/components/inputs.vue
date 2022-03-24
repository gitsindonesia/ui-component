<script setup>
import {ref} from 'vue';
import {RiSearchLine} from 'vue-remix-icons';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/inputs',
    title: 'Input',
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
  <DocsTitle :breadcrumbs="breadcrumbs">Input</DocsTitle>

  <Docs title="Default" :code="`<v-input placeholder=&quot;Search...&quot; />`">
    <template #preview>
      <v-input placeholder="Search..." />
    </template>
  </Docs>

  <Docs
    title="Error State"
    :code="`<v-input placeholder=&quot;Search...&quot; error />`"
  >
    <template #preview>
      <v-input placeholder="Search..." error />
    </template>
  </Docs>

  <Docs
    title="Append & Prepend Slots"
    :code="`<div class=&quot;space-y-2&quot;>
  <v-input placeholder=&quot;Search...&quot;>
    <template #prepend>
      <RiSearchLine class=&quot;fill-current ml-3 w-6 h-6&quot; />
    </template>
  </v-input>

  <v-input placeholder=&quot;Search...&quot;>
    <template #append>
      <v-btn class=&quot;m-1&quot; color=&quot;primary&quot;>Search</v-btn>
    </template>
  </v-input>
</div>`"
  >
    <template #preview>
      <div class="space-y-2">
        <v-input placeholder="Search...">
          <template #prepend>
            <RiSearchLine class="fill-current ml-3 w-6 h-6" />
          </template>
        </v-input>

        <v-input placeholder="Search...">
          <template #append>
            <v-btn class="m-1" color="primary">Search</v-btn>
          </template>
        </v-input>
      </div>
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>

<style scoped></style>
