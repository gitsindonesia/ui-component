import VBreadcrumbs from './VBreadcrumbs.vue';
import {Meta, Story} from '@storybook/vue3';
import {Icon} from '@gits-id/icon';
import vueRouter from 'storybook-vue3-router';
import type {VBreadcrumbItem} from './types';
import {ref} from 'vue';

const items = [...Array(5)].map((v, k) => ({
  title: `Link ${k + 1}`,
  to: '/',
}));

export default {
  title: 'Components/Breadcrumbs',
  component: VBreadcrumbs,
  argTypes: {},
  args: {
    items,
    divider: '/',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VBreadcrumbs},
  setup() {
    return {args};
  },
  template: `<VBreadcrumbs v-bind='args'/>`,
});

Template.decorators = [vueRouter()];

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-breadcrumbs :items="items"/>`,
    },
  },
};

export const CustomDivider = Template.bind({});
CustomDivider.args = {
  divider: '-',
};
CustomDivider.parameters = {
  docs: {
    source: {
      code: `<v-breadcrumbs :items="items" divider="-"/>`,
    },
  },
};

export const CustomDividerSlots: Story = (args) => ({
  components: {VBreadcrumbs, Icon},
  setup() {
    return {args};
  },
  template: `<div class="container mx-auto">
  <v-breadcrumbs v-bind="args">
    <template #divider>
      <Icon name="ri:arrow-right-line" class="fill-current w-5 h-5 text-gray-500" />
    </template>
  </v-breadcrumbs>
</div>`,
});
CustomDividerSlots.parameters = {
  docs: {
    source: {
      code: `
<v-breadcrumbs :items="items">
  <template #divider>
  <Icon name="ri:arrow-right-line" class="fill-current w-5 h-5 text-gray-500" />
  </template>
</v-breadcrumbs>
`,
    },
  },
};

CustomDividerSlots.decorators = [vueRouter()];

export const OptionalRouterLink: Story = (args) => ({
  components: {VBreadcrumbs, Icon},
  setup() {
    const items = ref<VBreadcrumbItem[]>([
      {
        title: 'Item 1',
      },
      {
        title: 'Item 2',
      },
    ]);
    return {args, items};
  },
  template: `
<v-breadcrumbs v-bind="args" />
`,
});

OptionalRouterLink.parameters = {
  docs: {
    source: {
      language: 'html',
      code: `
<script setup lang="ts">
import { ref } from 'vue';

const items = ref<VBreadcrumbItem[]>([
  {
    title: 'Item 1',
  },
  {
    title: 'Item 2',
  },
]);
</script>

<template>
  <v-breadcrumbs :items="items" />
</template>
`,
    },
  },
};
