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
    to: '/cms/components/badges',
    title: 'v-badge',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Badge</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-badge>default</v-badge>
<v-badge color=&quot;primary&quot;>primary</v-badge>
<v-badge color=&quot;secondary&quot;>secondary</v-badge>
<v-badge color=&quot;info&quot;>info</v-badge>
<v-badge color=&quot;warning&quot;>warning</v-badge>
<v-badge color=&quot;success&quot;>success</v-badge>`"
  >
    <template #preview>
      <v-badge>default</v-badge>
      <v-badge color="primary">primary</v-badge>
      <v-badge color="secondary">secondary</v-badge>
      <v-badge color="info">info</v-badge>
      <v-badge color="warning">warning</v-badge>
      <v-badge color="success">success</v-badge>
    </template>
  </Docs>
</template>

<style scoped></style>
