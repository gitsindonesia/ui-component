<script setup lang="ts">
import VDataTable from '../VDataTable.vue';
import {items, headers} from './data';
</script>

<template>
  <VDataTable :headers="headers" :items="items">
    <template #header.name="{header}">
      <div class="uppercase">{{ header.text }}</div>
    </template>
  </VDataTable>
</template>
