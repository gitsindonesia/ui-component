<script setup lang="ts">
import {ref} from 'vue';
import Docs from './Docs.vue';
import DocsTitle from './DocsTitle.vue';
import DocsTable from './DocsTable.vue';
import {VCollapsible} from '@gits-id/ui';

const breadcrumbs = ref([
  {
    to: '/components',
    title: 'Components',
  },
  {
    to: '/components/collapsible',
    title: 'Collapsible',
  },
]);

// const propItems = [
//   {
//     prop: 'color',
//     type: 'string',
//     required: 'false',
//     default: 'default',
//     description: `Alert color.
//       <br/>Default: <code>default</code>,
//       <code class="text-primary">primary</code>,
//       <code class="text-secondary">secondary</code>,
//       <code class="text-info-500">info</code>,
//       <code class="text-warning-500">warning</code>,
//       <code class="text-error-500">error</code>,
//       <code class="text-gray-900">dark</code>.`,
//   },
//   {
//     prop: 'rounded',
//     type: 'string',
//     required: 'false',
//     default: '',
//     description: 'Rounded style',
//   },
//   {
//     prop: 'small',
//     type: 'boolean',
//     required: 'false',
//     default: 'false',
//     description: 'Small size',
//   },
//   {
//     prop: 'large',
//     type: 'boolean',
//     required: 'false',
//     default: 'false',
//     description: 'Large size',
//   },
//   {
//     prop: 'circle',
//     type: 'boolean',
//     required: 'false',
//     default: 'false',
//     description: 'Circle styles',
//   },
//   {
//     prop: 'dismissable',
//     type: 'boolean',
//     required: 'false',
//     default: 'false',
//     description: 'Add x button to badge',
//   },
//   {
//     prop: 'bgColor',
//     type: 'string',
//     required: 'false',
//     default: '',
//     description: 'Custom background color',
//   },
//   {
//     prop: 'textColor',
//     type: 'string',
//     required: 'false',
//     default: '',
//     description: 'Custom text color',
//   },
// ];

const isOpen = ref(false);

const items = ref(
  Array.from({length: 5}, (v, k) => ({
    title: `Item ${k + 1}`,
    content: `Content ${k + 1}1`,
  })),
);

const items2 = ref(
  Array.from({length: 5}, (v, k) => ({
    title: `Item ${k + 1}`,
    content: `Content ${k + 1}1`,
  })),
);

const propItems = [];
const cProps = VCollapsible.props;
Object.keys(cProps).forEach((key) => {
  propItems.push({
    prop: key,
    type: cProps[key].type,
    default: cProps[key].default,
  });
});
console.log(propItems);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Breadcrumbs</DocsTitle>

  <Docs
    title="v-collapse"
    :code="`<v-btn @click=&quot;isOpen = !isOpen&quot;>Collapse</v-btn>
<v-collapse :show=&quot;isOpen&quot;>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore
  odit inventore ex saepe. Debitis repellendus magni pariatur maiores
  deleniti obcaecati, dicta repudiandae, eaque neque voluptatibus deserunt
  culpa ea! Eum!
</v-collapse>`"
  >
    <template #preview>
      <v-btn @click="isOpen = !isOpen">Collapse</v-btn>
      <v-collapse :show="isOpen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore
        odit inventore ex saepe. Debitis repellendus magni pariatur maiores
        deleniti obcaecati, dicta repudiandae, eaque neque voluptatibus deserunt
        culpa ea! Eum!
      </v-collapse>
    </template>
  </Docs>

  <Docs
    title="v-collapsible"
    :code="`<v-collapsible title=&quot;Header&quot;>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore
  odit inventore ex saepe. Debitis repellendus magni pariatur maiores
  deleniti obcaecati, dicta repudiandae, eaque neque voluptatibus deserunt
  culpa ea! Eum!
</v-collapsible>`"
  >
    <template #preview>
      <v-collapsible title="Header">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolore
        odit inventore ex saepe. Debitis repellendus magni pariatur maiores
        deleniti obcaecati, dicta repudiandae, eaque neque voluptatibus deserunt
        culpa ea! Eum!
      </v-collapsible>
    </template>
  </Docs>

  <Docs
    title="v-collapsible-group"
    code='<v-collapsible-group :items="items"/>'
  >
    <template #preview>
      <v-collapsible-group :items="items" />
    </template>
  </Docs>

  <Docs
    title="Accordion"
    code='<v-collapsible-group :items="items" accordion/>'
  >
    <template #preview>
      <v-collapsible-group :items="items2" accordion />
    </template>
  </Docs>

  <DocsTable title="Props" :items="propItems" />
</template>

<style scoped></style>
