<script setup lang="ts">
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/container',
    title: 'Container',
  },
]);

const propItems = [
  {
    prop: 'mini',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Mini container',
  },
  {
    prop: 'fixed',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Fixed container',
  },
];
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Container</DocsTitle>

  <Docs title="Default" code="<v-container> Main content </v-container>">
    <template #preview>
      <v-container> Main content </v-container>
    </template>
  </Docs>

  <Docs title="Mini" code="<v-container mini> Main content </v-container>">
    <template #preview>
      <v-container mini> Main content </v-container>
    </template>
  </Docs>

  <Docs title="Fixed" code="<v-container fixed> Main content </v-container>">
    <template #preview>
      <v-container fixed> Main content </v-container>
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>
