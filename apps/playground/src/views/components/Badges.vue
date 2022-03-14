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
<v-badge color=&quot;success&quot;>success</v-badge>
<v-badge color=&quot;error&quot;>error</v-badge>`"
  >
    <template #preview>
      <v-badge>default</v-badge>
      <v-badge color="primary">primary</v-badge>
      <v-badge color="secondary">secondary</v-badge>
      <v-badge color="info">info</v-badge>
      <v-badge color="warning">warning</v-badge>
      <v-badge color="success">success</v-badge>
      <v-badge color="error">error</v-badge>
    </template>
  </Docs>

  <Docs
    title="Rounded"
    :code="`<v-badge rounded>default</v-badge>
<v-badge rounded color=&quot;primary&quot;>primary</v-badge>
<v-badge rounded color=&quot;secondary&quot;>secondary</v-badge>
<v-badge rounded color=&quot;info&quot;>info</v-badge>
<v-badge rounded color=&quot;warning&quot;>warning</v-badge>
<v-badge rounded color=&quot;success&quot;>success</v-badge>
<v-badge rounded color=&quot;error&quot;>error</v-badge>
`"
  >
    <template #preview>
      <v-badge rounded>default</v-badge>
      <v-badge rounded color="primary">primary</v-badge>
      <v-badge rounded color="secondary">secondary</v-badge>
      <v-badge rounded color="info">info</v-badge>
      <v-badge rounded color="warning">warning</v-badge>
      <v-badge rounded color="success">success</v-badge>
      <v-badge rounded color="error">error</v-badge>
    </template>
  </Docs>

  <Docs
    title="Dismissable"
    :code="`<v-badge dismissable>default</v-badge>
<v-badge dismissable color=&quot;primary&quot;>primary</v-badge>
<v-badge dismissable color=&quot;secondary&quot;>secondary</v-badge>
<v-badge dismissable color=&quot;info&quot;>info</v-badge>
<v-badge dismissable color=&quot;warning&quot;>warning</v-badge>
<v-badge dismissable color=&quot;success&quot;>success</v-badge>
<v-badge dismissable color=&quot;error&quot;>error</v-badge>`"
  >
    <template #preview>
      <v-badge dismissable>default</v-badge>
      <v-badge dismissable color="primary">primary</v-badge>
      <v-badge dismissable color="secondary">secondary</v-badge>
      <v-badge dismissable color="info">info</v-badge>
      <v-badge dismissable color="warning">warning</v-badge>
      <v-badge dismissable color="success">success</v-badge>
      <v-badge dismissable color="error">error</v-badge>
    </template>
  </Docs>

  <Docs
    title="Circle"
    :code="`<v-badge circle>default</v-badge>
<v-badge circle color=&quot;primary&quot;>primary</v-badge>
<v-badge circle color=&quot;secondary&quot;>secondary</v-badge>
<v-badge circle color=&quot;info&quot;>info</v-badge>
<v-badge circle color=&quot;warning&quot;>warning</v-badge>
<v-badge circle color=&quot;success&quot;>success</v-badge>
<v-badge circle color=&quot;error&quot;>error</v-badge>`"
  >
    <template #preview>
      <v-badge circle>10</v-badge>
      <v-badge circle color="primary">10</v-badge>
      <v-badge circle color="secondary">10</v-badge>
      <v-badge circle color="info">10</v-badge>
      <v-badge circle color="warning">10</v-badge>
      <v-badge circle color="success">10</v-badge>
      <v-badge circle color="error">10</v-badge>
    </template>
  </Docs>

  <Docs
    title="Sizing"
    :code="`<v-badge color=&quot;primary&quot; small>small</v-badge>
<v-badge color=&quot;primary&quot;>default</v-badge>
<v-badge color=&quot;primary&quot; large>large</v-badge>`"
  >
    <template #preview>
      <v-badge color="primary" small>small</v-badge>
      <v-badge color="primary">default</v-badge>
      <v-badge color="primary" large>large</v-badge>
    </template>
  </Docs>
</template>

<style scoped></style>
