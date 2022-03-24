<script setup lang="ts">
import {ref} from 'vue';
import {VEditor} from '@gits-id/ui';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/editor',
    title: 'Editor',
  },
]);

const propItems = [
  {
    prop: 'modelValue',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Model value',
  },
  {
    prop: 'value',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Vee-validate value',
  },
  {
    prop: 'name',
    type: 'string',
    required: 'false',
    default: '',
    description: 'Name',
  },
  {
    prop: 'error',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Error',
  },
  {
    prop: 'error-messages',
    type: 'array',
    required: 'false',
    default: 'false',
    description: 'Error messages',
  },
  {
    prop: 'readonly',
    type: 'boolean',
    required: 'false',
    default: 'false',
    description: 'Readonly',
  },
];

const content = ref('<p>Hello World</p>');
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Editor</DocsTitle>

  <Docs
    title="Default"
    :code="`<v-editor v-model=&quot;content&quot; />`"
    script="import {ref} from 'vue';    
import {VEditor} from '@gits-id/ui';

const content = ref('');
"
  >
    <template #preview>
      <v-editor v-model="content" />
      <div>Value: {{ content }}</div>
    </template>
  </Docs>

  <Docs
    title="Default"
    :code="`<v-editor v-model=&quot;content&quot; />`"
    script="import {ref} from 'vue';
import {VEditor} from '@gits-id/ui';

const content = ref('');
"
  >
    <template #preview>
      <v-editor v-model="content" />
    </template>
  </Docs>

  <Docs
    title="Readonly"
    :code="`<v-editor v-model=&quot;content&quot; readonly />`"
    script="import {ref} from 'vue';    
import {VEditor} from '@gits-id/ui';

const content = ref('');
"
  >
    <template #preview>
      <v-editor v-model="content" readonly />
    </template>
  </Docs>

  <Docs
    title="Error State"
    code='<v-editor
  v-model="content"
  error
  :error-messages="[&apos;This field is required&apos;]"
/>'
    script="import {ref} from 'vue';    
import {VEditor} from '@gits-id/ui';

const content = ref('');
"
  >
    <template #preview>
      <v-editor
        v-model="content"
        error
        :error-messages="['This field is required']"
      />
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>

<style scoped></style>
