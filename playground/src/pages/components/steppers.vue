<script setup lang="ts">
import {ref} from 'vue';
import Stepper from '@gits-id/stepper';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/steppers',
    title: 'v-stepper',
  },
]);

const items = Array.from({length: 5}, (v, k) => ({
  title: 'Title',
  subtitle: 'Subtitle',
  path: '/step/' + k,
}));

const script = `const items = Array.from({length: 5}, (v, k) => ({
  title: 'Title',
  subtitle: 'Subtitle',
  path: '/step/' + k,
}));
`;
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Stepper</DocsTitle>

  <Docs title="Default" code='<Stepper :items="items" />' :script="script">
    <template #preview>
      <Stepper :items="items" />
    </template>
  </Docs>

  <Docs
    title="Vertical"
    code='<Stepper :items="items" vertical />'
    :script="script"
  >
    <template #preview>
      <Stepper :items="items" vertical />
    </template>
  </Docs>
</template>
