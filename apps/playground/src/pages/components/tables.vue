<script setup>
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/cms',
    title: 'Dashboard',
  },
  {
    to: '/cms/components',
    title: 'Components',
  },
  {
    to: '/cms/components/datatable',
    title: 'v-datatable',
  },
]);

const headers = [
  {
    text: '#',
    value: 'index',
    align: 'center',
  },
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Email',
    value: 'email',
  },
  {
    text: 'Action',
    value: 'action',
    align: 'center',
  },
];

const items = Array.from({length: 30}, (v, k) => ({
  name: `User ${k}`,
  email: `user.${k}@example.com`,
}));
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">DataTable</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-data-table :headers=&quot;headers&quot; :items=&quot;items&quot;>
  <template #item.action>
    <v-btn text size=&quot;sm&quot; color=&quot;secondary&quot;>Edit</v-btn>
    <v-btn text size=&quot;sm&quot; color=&quot;error&quot;>Delete</v-btn>
  </template>
</v-data-table>`"
  >
    <template #preview>
      <v-data-table :headers="headers" :items="items">
        <template #item.email="{item}">
          <v-btn
            text
            size="sm"
            color="primary"
            :href="`mailto:${item.email}`"
            class="underline hover:no-underline"
          >
            {{ item.email }}
          </v-btn>
        </template>
        <template #item.action>
          <v-btn text size="sm" color="secondary">Edit</v-btn>
          <v-btn text size="sm" color="error">Delete</v-btn>
        </template>
      </v-data-table>
    </template>
  </Docs>
</template>

<style scoped></style>
