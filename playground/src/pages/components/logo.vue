<script setup lang="ts">
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/logo',
    title: 'Logo',
  },
]);

const propItems = [
  {
    prop: 'white',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'White logo',
  },
  {
    prop: 'img-class',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Custom image class',
  },
  {
    prop: 'to',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Vue router path',
  },
];
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Logo</DocsTitle>

  <Docs title="Default" :code="`<v-logo />`">
    <template #preview>
      <v-logo />
    </template>
  </Docs>

  <Docs title="Link" :code="`<v-logo to=&quot;/components&quot; />`">
    <template #preview>
      <v-logo to="/components" img-class="h-10" />
    </template>
  </Docs>

  <Docs
    title="White"
    :code="`<div class=&quot;bg-primary p-3 rounded&quot;>
  <v-logo white img-class=&quot;h-10&quot; />
</div>`"
  >
    <template #preview>
      <div class="bg-primary p-3 rounded">
        <v-logo white img-class="h-10" />
      </div>
    </template>
  </Docs>

  <Docs title="Image Class" :code="`<v-logo img-class=&quot;h-10&quot; />`">
    <template #preview>
      <v-logo img-class="h-10" />
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>
