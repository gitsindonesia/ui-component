import {Dropdown, DropdownBtn, DropdownItem} from '@morpheme/dropdown';
import VBreadcrumbs from './VBreadcrumbs.vue';
import type {Meta, StoryFn} from '@storybook/vue3';
import Icon from '@morpheme/icon';
import type {VBreadcrumbItemProps} from './types';
import {ref} from 'vue';
import VBreadcrumbsDivider from './VBreadcrumbsDivider.vue';
import VBreadcrumbsItem from './VBreadcrumbsItem.vue';

const items = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'Account',
    to: '/account',
  },
  {
    title: 'Profile',
    to: '/account/profile',
  },
  {
    title: 'Settings',
    to: '/account/profile/settings',
    disabled: true,
  },
];

export default {
  title: 'Components/Breadcrumbs',
  component: VBreadcrumbs,
  argTypes: {},
  args: {
    items,
    divider: '/',
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: {VBreadcrumbs},
  setup() {
    return {args};
  },
  template: `<VBreadcrumbs v-bind='args'/>`,
});

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

export const CustomDividerSlots: StoryFn = (args) => ({
  components: {VBreadcrumbs, Icon},
  setup() {
    return {args};
  },
  template: `<div class="container mx-auto">
  <v-breadcrumbs v-bind="args">
    <template #divider>
      <Icon name="ri:arrow-right-s-line" size="sm" class="breadcrumbs-divider-icon" />
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
  <Icon name="ri:arrow-right-line" class="w-5 h-5 text-gray-500" />
  </template>
</v-breadcrumbs>
`,
    },
  },
};

export const OptionalRouterLink: StoryFn = (args) => ({
  components: {VBreadcrumbs, Icon},
  setup() {
    const items = ref<VBreadcrumbItemProps[]>([
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

export const Bare: StoryFn = (args) => ({
  components: {VBreadcrumbs, VBreadcrumbsItem, VBreadcrumbsDivider, Icon},
  setup() {
    return {args};
  },
  template: `
<v-breadcrumbs>
  <v-breadcrumbs-item to="/">
    Home
  </v-breadcrumbs-item>
  <v-breadcrumbs-divider />
  <v-breadcrumbs-item to="/account">
    Account
  </v-breadcrumbs-item>
  <v-breadcrumbs-divider />
  <v-breadcrumbs-item to="/account/profile" disabled>
    Profile
  </v-breadcrumbs-item>
</v-breadcrumbs>
`,
});
Bare.parameters = {
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

export const WithDropdown: StoryFn = (args) => ({
  components: {
    VBreadcrumbs,
    VBreadcrumbsItem,
    VBreadcrumbsDivider,
    Icon,
    Dropdown,
    DropdownBtn,
    DropdownItem,
  },
  setup() {
    return {args};
  },
  template: `
<v-breadcrumbs>
  <v-breadcrumbs-item to="/">
    Home
  </v-breadcrumbs-item>
  <v-breadcrumbs-divider />
  <v-breadcrumbs-item to="/account">
    Account
  </v-breadcrumbs-item>
  <v-breadcrumbs-divider />
  <Dropdown>
    <template #activator>
      <DropdownBtn text icon fab size="sm">...</DropdownBtn>
    </template>
    <DropdownItem to="/account/profile">
      Profile
    </DropdownItem>
    <DropdownItem to="/account/settings">
      Settings
    </DropdownItem>
  </Dropdown>
  <v-breadcrumbs-divider />
  <v-breadcrumbs-item to="/account/profile" disabled>
    Profile
  </v-breadcrumbs-item>
</v-breadcrumbs>
`,
});

export const DarkMode = () => ({
  components: {VBreadcrumbs},
  setup() {
    return {
      items,
    };
  },
  template: `
<div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
  <VBreadcrumbs :items="items" />
</div>
  `,
});
