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
    to: '/cms/components/alerts',
    title: 'v-alert',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Alert</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-alert color=&quot;primary&quot;>primary</v-alert>
<v-alert color=&quot;secondary&quot;>secondary</v-alert>
<v-alert color=&quot;error&quot;>error</v-alert>
<v-alert color=&quot;warning&quot;>warning</v-alert>
<v-alert color=&quot;success&quot;>success</v-alert>
<v-alert color=&quot;dark&quot;>dark</v-alert>
`"
  >
    <template #preview>
      <v-alert color="primary">primary</v-alert>
      <v-alert color="secondary">secondary</v-alert>
      <v-alert color="error">error</v-alert>
      <v-alert color="warning">warning</v-alert>
      <v-alert color="success">success</v-alert>
      <v-alert color="dark">dark</v-alert>
    </template>
  </Docs>

  <Docs
    title="Outlined"
    :code="`<v-alert outlined color=&quot;primary&quot;>primary</v-alert>
<v-alert outlined color=&quot;secondary&quot;>secondary</v-alert>
<v-alert outlined color=&quot;error&quot;>error</v-alert>
<v-alert outlined color=&quot;warning&quot;>warning</v-alert>
<v-alert outlined color=&quot;success&quot;>success</v-alert>
<v-alert outlined color=&quot;dark&quot;>dark</v-alert>
`"
  >
    <template #preview>
      <v-alert outlined color="primary">primary</v-alert>
      <v-alert outlined color="secondary">secondary</v-alert>
      <v-alert outlined color="error">error</v-alert>
      <v-alert outlined color="warning">warning</v-alert>
      <v-alert outlined color="success">success</v-alert>
      <v-alert outlined color="dark">dark</v-alert>
    </template>
  </Docs>

  <Docs
    title="Dismissable"
    :code="`<v-alert dismissable color=&quot;primary&quot;>primary</v-alert>
<v-alert dismissable color=&quot;secondary&quot;>secondary</v-alert>
<v-alert dismissable color=&quot;error&quot;>error</v-alert>
<v-alert dismissable color=&quot;warning&quot;>warning</v-alert>
<v-alert dismissable color=&quot;success&quot;>success</v-alert>
<v-alert dismissable color=&quot;dark&quot;>dark</v-alert>
`"
  >
    <template #preview>
      <v-alert dismissable color="primary">primary</v-alert>
      <v-alert dismissable color="secondary">secondary</v-alert>
      <v-alert dismissable color="error">error</v-alert>
      <v-alert dismissable color="warning">warning</v-alert>
      <v-alert dismissable color="success">success</v-alert>
      <v-alert dismissable color="dark">dark</v-alert>
    </template>
  </Docs>
</template>

<style scoped></style>
