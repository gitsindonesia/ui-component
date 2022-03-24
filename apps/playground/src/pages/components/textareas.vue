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
    to: '/cms/components/textareas',
    title: 'v-textarea',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Textarea</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-textarea placeholder=&quot;Describe...&quot; />`"
  >
    <template #preview>
      <v-textarea placeholder="Describe..." />
    </template>
  </Docs>
</template>

<style scoped></style>
