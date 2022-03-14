<script setup lang="ts">
import {ref} from 'vue';
import Docs from './Docs.vue';

const props = withDefaults(
  defineProps<{
    title: string;
    headers?: any[];
    items: any[];
  }>(),
  {
    headers: () => [
      {
        text: 'Name',
        value: 'prop',
        sortable: false,
      },
      {
        text: 'Type',
        value: 'type',
        sortable: false,
      },
      {
        text: 'Required',
        value: 'required',
        sortable: false,
      },
      {
        text: 'Default',
        value: 'default',
        sortable: false,
      },
      {
        text: 'Description',
        value: 'description',
        sortable: false,
      },
    ],
  },
);

const search = ref('');
</script>

<template>
  <Docs :title="title">
    <div class="m-2">
      <v-input v-model="search" placeholder="Search..." />
    </div>

    <v-data-table
      :headers="headers"
      :items="items"
      v-model:search="search"
      hide-footer
      no-shadow
      class="mb-1 border-t !rounded-none"
    >
      <template #item.prop="{item}">
        <code v-text="item.prop"></code>
      </template>
      <template #item.type="{item}">
        <code v-text="item.type"></code>
      </template>
      <template #item.required="{item}">
        <code v-text="item.required"></code>
      </template>
      <template #item.default="{item}">
        <code v-text="item.default"></code>
      </template>
      <template #item.description="{item}">
        <div v-html="item.description"></div>
      </template>
    </v-data-table>
  </Docs>
</template>
