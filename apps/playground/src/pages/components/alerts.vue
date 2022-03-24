<script setup lang="ts">
import {ref} from 'vue';
import {RiInformationFill, RiCloseCircleFill} from 'vue-remix-icons';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/alerts',
    title: 'Alerts',
  },
]);

const propHeaders = [
  {
    text: 'Name',
    value: 'prop',
    sortable: false,
  },
  {
    text: 'Type',
    value: 'type',
    sortable: false,
  },
  {
    text: 'Required',
    value: 'required',
    sortable: false,
  },
  {
    text: 'Default',
    value: 'default',
    sortable: false,
  },
  {
    text: 'Description',
    value: 'description',
    sortable: false,
  },
];

const propItems = [
  {
    prop: 'modelValue',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Model Value for v-model',
  },
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
    prop: 'icon',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Icon name',
  },
  {
    prop: 'dismissable',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Make alert dismissable',
  },
  {
    prop: 'outlined',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Outlined styles',
  },
  {
    prop: 'solid',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Solid styles',
  },
  {
    prop: 'border',
    type: 'string',
    required: 'false',
    default: '',
    description:
      'Add border accent to alert.<br>Options: top, left, right & bottom',
  },
];
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Alert</DocsTitle>

  <Docs
    title="Default"
    preview-class="space-y-2"
    :code="`<v-alert color=&quot;default&quot;>default</v-alert>
<v-alert color=&quot;primary&quot;>primary</v-alert>
<v-alert color=&quot;secondary&quot;>secondary</v-alert>
<v-alert color=&quot;error&quot;>error</v-alert>
<v-alert color=&quot;warning&quot;>warning</v-alert>
<v-alert color=&quot;success&quot;>success</v-alert>
<v-alert color=&quot;dark&quot;>dark</v-alert>
`"
  >
    <template #preview>
      <v-alert>default</v-alert>
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
    preview-class="space-y-2"
    :code="`<v-alert outlined color=&quot;default&quot;>default</v-alert>
<v-alert outlined color=&quot;primary&quot;>primary</v-alert>
<v-alert outlined color=&quot;secondary&quot;>secondary</v-alert>
<v-alert outlined color=&quot;error&quot;>error</v-alert>
<v-alert outlined color=&quot;warning&quot;>warning</v-alert>
<v-alert outlined color=&quot;success&quot;>success</v-alert>
<v-alert outlined color=&quot;dark&quot;>dark</v-alert>
`"
  >
    <template #preview>
      <v-alert outlined color="default">default</v-alert>
      <v-alert outlined color="primary">primary</v-alert>
      <v-alert outlined color="secondary">secondary</v-alert>
      <v-alert outlined color="error">error</v-alert>
      <v-alert outlined color="warning">warning</v-alert>
      <v-alert outlined color="success">success</v-alert>
      <v-alert outlined color="dark">dark</v-alert>
    </template>
  </Docs>

  <Docs
    title="Solid"
    preview-class="space-y-2"
    :code="`<v-alert solid color=&quot;default&quot;>default</v-alert>
<v-alert solid color=&quot;primary&quot;>primary</v-alert>
<v-alert solid color=&quot;secondary&quot;>secondary</v-alert>
<v-alert solid color=&quot;error&quot;>error</v-alert>
<v-alert solid color=&quot;warning&quot;>warning</v-alert>
<v-alert solid color=&quot;success&quot;>success</v-alert>
<v-alert solid color=&quot;dark&quot;>dark</v-alert>
`"
  >
    <template #preview>
      <v-alert solid color="default">default</v-alert>
      <v-alert solid color="primary">primary</v-alert>
      <v-alert solid color="secondary">secondary</v-alert>
      <v-alert solid color="error">error</v-alert>
      <v-alert solid color="warning">warning</v-alert>
      <v-alert solid color="success">success</v-alert>
      <v-alert solid color="dark">dark</v-alert>
    </template>
  </Docs>

  <Docs
    title="Border"
    preview-class="space-y-2"
    :code="`<v-alert solid color=&quot;default&quot;>default</v-alert>
<v-alert solid color=&quot;primary&quot;>primary</v-alert>
<v-alert solid color=&quot;secondary&quot;>secondary</v-alert>
<v-alert solid color=&quot;error&quot;>error</v-alert>
<v-alert solid color=&quot;warning&quot;>warning</v-alert>
<v-alert solid color=&quot;success&quot;>success</v-alert>
<v-alert solid color=&quot;dark&quot;>dark</v-alert>
`"
  >
    <template #preview>
      <v-alert border="top" color="default">default</v-alert>
      <v-alert border="left" color="primary">primary</v-alert>
      <v-alert border="right" color="secondary">secondary</v-alert>
      <v-alert border="bottom" color="info">info</v-alert>
      <v-alert border="left" color="warning">warning</v-alert>
      <v-alert border="left" color="error">error</v-alert>
      <v-alert border="left" color="dark">dark</v-alert>
    </template>
  </Docs>

  <Docs
    title="Dismissable"
    preview-class="space-y-2"
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

  <Docs
    title="Icon Slots"
    preview-class="space-y-2"
    :code="`<v-alert color=&quot;primary&quot; dismissable>
  <template #icon>
    <RiInformationFill class=&quot;fill-current w-6 h-6 mr-2&quot; />
  </template>
  <template #x-icon>
    <RiCloseCircleFill class=&quot;fill-current w-6 h-6 text-error-500&quot; />
  </template>

  Change a few things up and try submitting again.
</v-alert>`"
  >
    <template #preview>
      <v-alert color="primary" dismissable>
        <template #icon>
          <RiInformationFill class="fill-current w-6 h-6 mr-2" />
        </template>
        <template #x-icon>
          <RiCloseCircleFill class="fill-current w-6 h-6 text-error-500" />
        </template>

        Change a few things up and try submitting again.
      </v-alert>
    </template>
  </Docs>

  <Docs
    title="Custom Close Button"
    preview-class="space-y-2"
    :code="`<v-alert icon=&quot;error&quot; color=&quot;error&quot; dismissable>
  <template #x-button=&quot;{dismiss}&quot;>
    <v-btn text class=&quot;px-2&quot; @click=&quot;dismiss&quot;>
      <RiCloseCircleFill class=&quot;fill-current w-6 h-6 text-error-500&quot; />
    </v-btn>
  </template>

  Change a few things up and try submitting again.
</v-alert>`"
  >
    <template #preview>
      <v-alert icon="error" color="error" dismissable>
        <template #x-button="{dismiss}">
          <v-btn text class="px-2" @click="dismiss">
            <RiCloseCircleFill class="fill-current w-6 h-6 text-error-500" />
          </v-btn>
        </template>

        Change a few things up and try submitting again.
      </v-alert>
    </template>
  </Docs>

  <DocsTable title="Props" :headers="propHeaders" :items="propItems" />
</template>

<style scoped></style>
