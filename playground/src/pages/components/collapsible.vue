<script setup lang="ts">
import {ref} from 'vue';
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

const propItems: Record<string, any> = [];
const cProps = VCollapsible.props;
Object.keys(cProps).forEach((key) => {
  propItems.push({
    prop: key,
    type: cProps[key].type,
    default: cProps[key].default,
  });
});
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
