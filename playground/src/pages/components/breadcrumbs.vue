<script setup lang="ts">
import {ref} from 'vue';
import {RiArrowRightSLine} from 'vue-remix-icons';

const breadcrumbs = ref([
  {
    to: '/',
    title: 'Dashboard',
  },
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/breadcrumbs',
    title: 'v-breadcrumbs',
  },
]);

const propItems = [
  {
    prop: 'color',
    type: 'string',
    required: 'false',
    default: 'default',
    description: `Alert color.
      <br/>Default: <code>default</code>,
      <code class="text-primary">primary</code>,
      <code class="text-secondary">secondary</code>,
      <code class="text-info-500">info</code>,
      <code class="text-warning-500">warning</code>,
      <code class="text-error-500">error</code>,
      <code class="text-gray-900">dark</code>.`,
  },
  {
    prop: 'rounded',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Rounded style',
  },
  {
    prop: 'small',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Small size',
  },
  {
    prop: 'large',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Large size',
  },
  {
    prop: 'circle',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Circle styles',
  },
  {
    prop: 'dismissable',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Add x button to badge',
  },
  {
    prop: 'bgColor',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Custom background color',
  },
  {
    prop: 'textColor',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Custom text color',
  },
];
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Breadcrumbs</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-breadcrumbs :items=&quot;breadcrumbs&quot; />`"
  >
    <template #preview>
      <v-breadcrumbs :items="breadcrumbs" />
    </template>
  </Docs>

  <Docs
    title="Custom Divider"
    :code="`<v-breadcrumbs divider=&quot;-&quot; :items=&quot;breadcrumbs&quot; />`"
  >
    <template #preview>
      <v-breadcrumbs divider="-" :items="breadcrumbs" />
    </template>
  </Docs>

  <Docs
    title="Divider Slot"
    :code="`<v-breadcrumbs :items=&quot;breadcrumbs&quot;>
  <template #divider>
    <RiArrowRightSLine class=&quot;fill-current w-5 h-5 text-gray-500&quot; />
  </template>
</v-breadcrumbs>`"
    script="import {ref} from 'vue';
import {RiArrowRightSLine} from 'vue-remix-icons';

const breadcrumbs = ref([
  {
    to: '/',
    title: 'Dashboard',
  },
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/breadcrumbs',
    title: 'v-breadcrumbs',
  },
]);"
  >
    <template #preview>
      <v-breadcrumbs :items="breadcrumbs">
        <template #divider>
          <RiArrowRightSLine class="fill-current w-5 h-5 text-gray-500" />
        </template>
      </v-breadcrumbs>
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>
