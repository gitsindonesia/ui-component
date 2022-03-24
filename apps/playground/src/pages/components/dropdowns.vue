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
    to: '/cms/components/breadcrumbs',
    title: 'v-breadcrumbs',
  },
]);

const items = ref([
  {
    text: 'Profile',
  },
  {
    text: 'Setting',
  },
  {
    text: 'Logout',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Dropdown</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-dropdown label=&quot;Open&quot;>
  <v-dropdown-item>Profile</v-dropdown-item>
  <v-dropdown-item>Settings</v-dropdown-item>
  <v-dropdown-item>Logout</v-dropdown-item>
</v-dropdown>`"
  >
    <template #preview>
      <v-dropdown label="Open">
        <v-dropdown-item>Profile</v-dropdown-item>
        <v-dropdown-item>Settings</v-dropdown-item>
        <v-dropdown-item>Logout</v-dropdown-item>
      </v-dropdown>
    </template>
  </Docs>

  <Docs
    title="Items Array"
    :code="`<v-dropdown label=&quot;Open&quot; :items=&quot;items&quot;> </v-dropdown>`"
  >
    <template #preview>
      <v-dropdown label="Open" :items="items"> </v-dropdown>
    </template>
  </Docs>
</template>

<style scoped></style>
