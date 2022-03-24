<script setup lang="ts">
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/app-bar',
    title: 'AppBar',
  },
]);

const propItems = [
  {
    prop: 'mini',
    type: 'boolean',
    required: 'false',
    default: '',
    description: 'Add space for mini sidebar',
  },
  {
    prop: 'drawer',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Add space for navigation drawer',
  },
  {
    prop: 'modelValue',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Model value',
  },
  {
    prop: 'fixed',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Fixed style',
  },
  {
    prop: 'dark',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Dark style',
  },
  {
    prop: 'hide-toggle',
    type: 'boolean',
    required: 'false',
    default: '',
    description: 'Hide default toggle button',
  },
  {
    prop: 'default-hidden',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Set default app-bar to hidden',
  },
];
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">AppBar</DocsTitle>

  <Docs title="Default" code="<v-app-bar />">
    <template #preview>
      <v-app-bar>
        <v-logo img-class="h-10" />
      </v-app-bar>
    </template>
  </Docs>

  <Docs title="Mini" code="<v-app-bar mini />">
    <template #preview>
      <v-app-bar mini>
        <v-logo img-class="h-10" />
      </v-app-bar>
    </template>
  </Docs>

  <!-- <Docs title="Fixed" code="<v-app-bar fixed />">
    <template #preview>
      <v-app-bar fixed>
        <v-logo img-class="h-10" />
      </v-app-bar>
    </template>
  </Docs> -->

  <Docs title="Drawer" code="<v-app-bar drawer />">
    <template #preview>
      <v-app-bar drawer>
        <v-logo img-class="h-10" />
      </v-app-bar>
    </template>
  </Docs>

  <Docs title="Hide Toogle Button" code="<v-app-bar hide-toggle />">
    <template #preview>
      <v-app-bar hide-toggle>
        <v-logo img-class="h-10" />
      </v-app-bar>
    </template>
  </Docs>

  <Docs title="Dark" code="<v-app-bar dark />">
    <template #preview>
      <v-app-bar dark>
        <v-logo img-class="h-10" />
      </v-app-bar>
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>

<style scoped></style>
