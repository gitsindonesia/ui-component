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
    to: '/cms/components/breadcrumbs',
    title: 'v-breadcrumbs',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Breadcrumbs</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-breadcrumbs :items=&quot;breadcrumbs&quot; />`"
  >
    <template #preview>
      <v-breadcrumbs :items="breadcrumbs" />
    </template>
  </Docs>
</template>

<style scoped></style>
