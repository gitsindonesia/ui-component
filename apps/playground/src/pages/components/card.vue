<script setup lang="ts">
import {ref} from 'vue';
import Docs from './Docs.vue';
import DocsTitle from './DocsTitle.vue';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/card',
    title: 'Card',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Card</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-card title=&quot;Header&quot;>
  <template #footer> Footer </template>
  Body
</v-card>`"
  >
    <template #preview>
      <v-card title="Header">
        <template #footer> Footer </template>
        Body
      </v-card>
    </template>
  </Docs>

  <Docs
    title="Hide Footer"
    code='<v-card title="Header" hide-footer> Body </v-card>'
  >
    <template #preview>
      <v-card title="Header" hide-footer> Body </v-card>
    </template>
  </Docs>
</template>

<style scoped></style>
