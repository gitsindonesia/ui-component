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
    to: '/cms/components/switchs',
    title: 'v-switch',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Switch</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-switch :model-value=&quot;true&quot; label=&quot;Choose&quot; />
<v-switch :model-value=&quot;true&quot; label=&quot;Choose&quot; color=&quot;secondary&quot; />
<v-switch :model-value=&quot;true&quot; label=&quot;Choose&quot; color=&quot;info&quot; />
<v-switch :model-value=&quot;true&quot; label=&quot;Choose&quot; color=&quot;warning&quot; />
<v-switch :model-value=&quot;true&quot; label=&quot;Choose&quot; color=&quot;error&quot; />`"
  >
    <template #preview>
      <v-switch :model-value="true" label="default" />
      <v-switch :model-value="true" label="secondary" color="secondary" />
      <v-switch :model-value="true" label="info" color="info" />
      <v-switch :model-value="true" label="warning" color="warning" />
      <v-switch :model-value="true" label="error" color="error" />
    </template>
  </Docs>
</template>
