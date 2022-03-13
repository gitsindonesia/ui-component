<script setup lang="ts">
import Docs from './Docs.vue';

defineProps<{
  title: string;
  headers: any[];
  items: any[];
}>();
</script>

<template>
  <Docs :title="title">
    <v-data-table
      :headers="headers"
      :items="items"
      hide-footer
      no-shadow
      class="mb-1"
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
