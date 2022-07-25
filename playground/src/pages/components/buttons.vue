<script setup>
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/buttons',
    title: 'Buttons',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Button</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-btn> Default </v-btn>
<v-btn color=&quot;primary&quot;> Primary </v-btn>
<v-btn color=&quot;secondary&quot;> Secondary </v-btn>
<v-btn color=&quot;info&quot;> Info </v-btn>
<v-btn color=&quot;warning&quot;> Warning </v-btn>
<v-btn color=&quot;success&quot;> Success </v-btn>
<v-btn color=&quot;error&quot;> Error </v-btn>
<v-btn color=&quot;dark&quot;> Dark </v-btn>`"
  >
    <template #preview>
      <v-btn> Default </v-btn>
      <v-btn color="primary"> Primary </v-btn>
      <v-btn color="secondary"> Secondary </v-btn>
      <v-btn color="info"> Info </v-btn>
      <v-btn color="warning"> Warning </v-btn>
      <v-btn color="success"> Success </v-btn>
      <v-btn color="error"> Error </v-btn>
      <v-btn color="dark"> Dark </v-btn>
    </template>
  </Docs>

  <Docs
    title="Sizing"
    :code="`<v-btn size=&quot;xs&quot; color=&quot;primary&quot;> xs </v-btn>
<v-btn size=&quot;sm&quot; color=&quot;primary&quot;> sm </v-btn>
<v-btn size=&quot;md&quot; color=&quot;primary&quot;> md </v-btn>
<v-btn size=&quot;lg&quot; color=&quot;primary&quot;> lg </v-btn>
<v-btn size=&quot;xl&quot; color=&quot;primary&quot;> lg </v-btn>`"
  >
    <template #preview>
      <v-btn size="xs" color="primary"> xs </v-btn>
      <v-btn size="sm" color="primary"> sm </v-btn>
      <v-btn size="md" color="primary"> md </v-btn>
      <v-btn size="lg" color="primary"> lg </v-btn>
      <v-btn size="xl" color="primary"> lg </v-btn>
    </template>
  </Docs>

  <Docs
    title="Rounded"
    :code="`<v-btn rounded> Default </v-btn>
<v-btn rounded color=&quot;primary&quot;> Primary </v-btn>
<v-btn rounded color=&quot;secondary&quot;> Secondary </v-btn>
<v-btn rounded color=&quot;info&quot;> Info </v-btn>
<v-btn rounded color=&quot;warning&quot;> Warning </v-btn>
<v-btn rounded color=&quot;success&quot;> Success </v-btn>
<v-btn rounded color=&quot;error&quot;> Error </v-btn>`"
  >
    <template #preview>
      <v-btn rounded> Default </v-btn>
      <v-btn rounded color="primary"> Primary </v-btn>
      <v-btn rounded color="secondary"> Secondary </v-btn>
      <v-btn rounded color="info"> Info </v-btn>
      <v-btn rounded color="warning"> Warning </v-btn>
      <v-btn rounded color="success"> Success </v-btn>
      <v-btn rounded color="error"> Error </v-btn>
    </template>
  </Docs>

  <Docs
    title="Outlined"
    :code="`<v-btn outlined> Default </v-btn>
<v-btn outlined color=&quot;primary&quot;> Primary </v-btn>
<v-btn outlined color=&quot;secondary&quot;> Secondary </v-btn>
<v-btn outlined color=&quot;info&quot;> Info </v-btn>
<v-btn outlined color=&quot;warning&quot;> Warning </v-btn>
<v-btn outlined color=&quot;success&quot;> Success </v-btn>
<v-btn outlined color=&quot;error&quot;> Error </v-btn>`"
  >
    <template #preview>
      <v-btn outlined> Default </v-btn>
      <v-btn outlined color="primary"> Primary </v-btn>
      <v-btn outlined color="secondary"> Secondary </v-btn>
      <v-btn outlined color="info"> Info </v-btn>
      <v-btn outlined color="warning"> Warning </v-btn>
      <v-btn outlined color="success"> Success </v-btn>
      <v-btn outlined color="error"> Error </v-btn>
    </template>
  </Docs>

  <Docs
    title="Text"
    :code="`<v-btn text> Default </v-btn>
<v-btn text color=&quot;primary&quot;> Primary </v-btn>
<v-btn text color=&quot;secondary&quot;> Secondary </v-btn>
<v-btn text color=&quot;info&quot;> Info </v-btn>
<v-btn text color=&quot;warning&quot;> Warning </v-btn>
<v-btn text color=&quot;success&quot;> Success </v-btn>
<v-btn text color=&quot;error&quot;> Error </v-btn>`"
  >
    <template #preview>
      <v-btn text> Default </v-btn>
      <v-btn text color="primary"> Primary </v-btn>
      <v-btn text color="secondary"> Secondary </v-btn>
      <v-btn text color="info"> Info </v-btn>
      <v-btn text color="warning"> Warning </v-btn>
      <v-btn text color="success"> Success </v-btn>
      <v-btn text color="error"> Error </v-btn>
    </template>
  </Docs>

  <Docs
    title="Icon"
    :code="`<v-btn icon> Default </v-btn>
<v-btn icon color=&quot;primary&quot;> Primary </v-btn>
<v-btn icon color=&quot;secondary&quot;> Secondary </v-btn>
<v-btn icon color=&quot;info&quot;> Info </v-btn>
<v-btn icon color=&quot;warning&quot;> Warning </v-btn>
<v-btn icon color=&quot;success&quot;> Success </v-btn>
<v-btn icon color=&quot;error&quot;> Error </v-btn>`"
  >
    <template #preview>
      <v-btn icon> Default </v-btn>
      <v-btn icon color="primary"> Primary </v-btn>
      <v-btn icon color="secondary"> Secondary </v-btn>
      <v-btn icon color="info"> Info </v-btn>
      <v-btn icon color="warning"> Warning </v-btn>
      <v-btn icon color="success"> Success </v-btn>
      <v-btn icon color="error"> Error </v-btn>
    </template>
  </Docs>
  <Docs
    title="Loading"
    :code="`<v-btn loading> Default </v-btn>
<v-btn loading color=&quot;primary&quot;> Primary </v-btn>
<v-btn loading color=&quot;secondary&quot;> Secondary </v-btn>
<v-btn loading color=&quot;info&quot;> Info </v-btn>
<v-btn loading color=&quot;warning&quot;> Warning </v-btn>
<v-btn loading color=&quot;success&quot;> Success </v-btn>
<v-btn loading color=&quot;error&quot;> Error </v-btn>`"
  >
    <template #preview>
      <v-btn loading> Default </v-btn>
      <v-btn loading color="primary"> Primary </v-btn>
      <v-btn loading color="secondary"> Secondary </v-btn>
      <v-btn loading color="info"> Info </v-btn>
      <v-btn loading color="warning"> Warning </v-btn>
      <v-btn loading color="success"> Success </v-btn>
      <v-btn loading color="error"> Error </v-btn>
    </template>
  </Docs>
  <Docs
    title="Disabled"
    :code="`<v-btn disabled> Default </v-btn>
<v-btn disabled color=&quot;primary&quot;> Primary </v-btn>
<v-btn disabled color=&quot;secondary&quot;> Secondary </v-btn>
<v-btn disabled color=&quot;info&quot;> Info </v-btn>
<v-btn disabled color=&quot;warning&quot;> Warning </v-btn>
<v-btn disabled color=&quot;success&quot;> Success </v-btn>
<v-btn disabled color=&quot;error&quot;> Error </v-btn>`"
  >
    <template #preview>
      <v-btn disabled> Default </v-btn>
      <v-btn disabled color="primary"> Primary </v-btn>
      <v-btn disabled color="secondary"> Secondary </v-btn>
      <v-btn disabled color="info"> Info </v-btn>
      <v-btn disabled color="warning"> Warning </v-btn>
      <v-btn disabled color="success"> Success </v-btn>
      <v-btn disabled color="error"> Error </v-btn>
    </template>
  </Docs>
</template>
