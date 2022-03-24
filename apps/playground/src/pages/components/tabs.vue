<script setup>
import {ref} from 'vue';
import Docs from './Docs.vue';
import DocsTitle from './DocsTitle.vue';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/tabs',
    title: 'Tabs',
  },
]);

const items = Array.from({length: 5}, (v, k) => ({
  text: `Tab ${k}`,
  value: k,
}));

const selected = ref(1);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Tabs</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-tabs :items=&quot;items&quot; />`"
    script="const items = Array.from({length: 5}, (v, k) => ({
  text: `Tab ${k}`,
  value: k,
}));"
  >
    <template #preview>
      <v-tabs :items="items" />
    </template>
  </Docs>

  <Docs
    title="v-model"
    :code="`<v-tabs v-model=&quot;selected&quot; :items=&quot;items&quot; />`"
    script="const items = Array.from({length: 5}, (v, k) => ({
  text: `Tab ${k}`,
  value: k,
}));

const selected = ref(1);"
  >
    <template #preview>
      <v-tabs v-model="selected" :items="items" />
    </template>
  </Docs>

  <Docs
    title="Center Active"
    :code="`<v-tabs :items=&quot;items&quot; center-active/>`"
    script="const items = Array.from({length: 5}, (v, k) => ({
  text: `Tab ${k}`,
  value: k,
}));"
  >
    <template #preview>
      <v-tabs :items="items" center-active />
    </template>
  </Docs>

  <Docs
    title="Props"
    lang="javascript"
    :code="`const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: 0,
  },
  items: {
    type: Array,
    default: () => [],
  },
  itemText: {
    type: String,
    default: 'text',
  },
  color: {
    type: String,
    default: 'primary',
  },
  showArrows: {
    type: Boolean,
    default: false,
  },
  centerActive: {
    type: Boolean,
    default: false,
  },
  removeable: {
    type: Boolean,
    default: false,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  defaultWrapperClass: {
    type: String,
    default: 'flex items-center',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  hideSlider: {
    type: Boolean,
    default: false,
  },
  activeClass: {
    type: String,
    default: 'font-semibold',
  },
  inactiveClass: {
    type: String,
    default: '',
  },
  defaultClass: {
    type: String,
    default: '',
  },
  contentClass: {
    type: String,
    default: '',
  },
});`"
  >
  </Docs>
</template>

<style scoped></style>
