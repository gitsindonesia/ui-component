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

const items = Array.from({length: 5}, (v, k) => ({
  text: `Item ${k}`,
  value: k,
}));

const selected = ref(items[0]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Select</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-select v-model=&quot;selected&quot; :items=&quot;items&quot; placeholder=&quot;Choose&quot; />`"
  >
    <template #preview>
      <v-select v-model="selected" :items="items" placeholder="Choose" />
    </template>
  </Docs>

  <Docs
    title="Searchable"
    :code="`<v-select
  v-model=&quot;selected&quot;
  :items=&quot;items&quot;
  placeholder=&quot;Choose&quot;
  searchable
/>`"
  >
    <template #preview>
      <v-select
        v-model="selected"
        :items="items"
        placeholder="Choose"
        searchable
      />
    </template>
  </Docs>

  <Docs
    title="Hide Check Icon"
    :code="`<v-select
  v-model=&quot;selected&quot;
  :items=&quot;items&quot;
  placeholder=&quot;Choose&quot;
  hide-check-icon
/>`"
  >
    <template #preview>
      <v-select
        v-model="selected"
        :items="items"
        placeholder="Choose"
        hide-check-icon
      />
    </template>
  </Docs>

  <Docs
    title="Clearable"
    :code="`<v-select
  v-model=&quot;selected&quot;
  :items=&quot;items&quot;
  placeholder=&quot;Choose&quot;
  clearable
/>`"
  >
    <template #preview>
      <v-select
        v-model="selected"
        :items="items"
        placeholder="Choose"
        clearable
      />
    </template>
  </Docs>

  <Docs
    title="Props and Types"
    language="javascript"
    :code="`interface SelectItem {
  text: string;
  value: any;

  [x: string]: any;
}

const props = defineProps({
  value: {
    type: [Object, String, Number, Boolean],
    default: null,
  },
  modelValue: {
    type: [Object, String, Number, Boolean],
    default: null,
  },
  items: {
    type: Array as PropType<SelectItem[]>,
    default: () => [],
  },
  color: {
    type: String,
    default: &quot;primary&quot;,
  },
  placeholder: {
    type: String,
    default: &quot;Select&quot;,
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  hideCheckIcon: {
    type: Boolean,
    default: false,
  },
  btnClass: {
    type: String,
    default: &quot;&quot;,
  },
  top: {
    type: Boolean,
    default: false,
  },
  itemText: {
    type: String,
    default: &quot;text&quot;,
  },
  itemValue: {
    type: String,
    default: &quot;value&quot;,
  },
  name: {
    type: String,
    default: &quot;&quot;,
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  clearText: {
    type: String,
    default: &quot;Clear&quot;,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});`"
  >
  </Docs>
</template>
