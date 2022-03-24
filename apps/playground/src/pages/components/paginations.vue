<script setup lang="ts">
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
    to: '/cms/components/paginations',
    title: 'v-pagination',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Pagination</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-pagination :total-items=&quot;50&quot; :items-per-page=&quot;10&quot; />`"
  >
    <template #preview>
      <v-pagination :total-items="50" :items-per-page="10" />
    </template>
  </Docs>
</template>

<style scoped></style>
