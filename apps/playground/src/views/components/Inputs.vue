<script setup>
import {ref} from 'vue';
import Docs from './Docs.vue';
import DocsTitle from './DocsTitle.vue';

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
    to: '/cms/components/inputs',
    title: 'v-input',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Input</DocsTitle>

  <Docs title="Default" :code="`<v-input placeholder=&quot;Search...&quot; />`">
    <template #preview>
      <v-input placeholder="Search..." />
    </template>
  </Docs>
</template>

<style scoped></style>
