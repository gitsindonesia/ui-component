<script setup lang="ts">
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
    to: '/cms/components/progressbars',
    title: 'v-progress-bar',
  },
]);

const model = ref(80);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Progress Bar</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-progress-bar :width=&quot;50&quot; />
<v-progress-bar :width=&quot;50&quot; color=&quot;primary&quot; />
<v-progress-bar :width=&quot;50&quot; color=&quot;secondary&quot; />
<v-progress-bar :width=&quot;50&quot; color=&quot;info&quot; />
<v-progress-bar :width=&quot;50&quot; color=&quot;warning&quot; />
<v-progress-bar :width=&quot;50&quot; color=&quot;error&quot; />`"
  >
    <template #preview>
      <v-progress-bar :width="50" />
      <v-progress-bar :width="50" color="primary" />
      <v-progress-bar :width="50" color="secondary" />
      <v-progress-bar :width="50" color="info" />
      <v-progress-bar :width="50" color="warning" />
      <v-progress-bar :width="50" color="error" />
    </template>
  </Docs>
</template>

<style scoped></style>
