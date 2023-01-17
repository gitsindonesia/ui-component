import {Meta, Story} from '@storybook/vue3';
import VMenus from './VMenus.vue';
import VMenusItem from './VMenusItem.vue';
import vueRouter from 'storybook-vue3-router';
import VAppBar from '@gits-id/app-bar';
import VMenusCustom from './stories/VMenusCustom.vue';
import './VMenus.dark.scss';

const items = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'About',
    to: '/faq',
  },
  {
    text: 'FAQ',
    to: '/faq',
  },
];

export default {
  title: 'Components/Menus',
  component: VMenus,
  argTypes: {},
  args: {
    items,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VMenus,
  },
  setup() {
    return {args};
  },
  template: `
<VMenus v-bind="args" />
  `,
});

Template.decorators = [vueRouter()];

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-menus :items="items" />',
    },
  },
};

export const Right = Template.bind({});
Right.args = {right: true};
Right.parameters = {
  docs: {
    source: {
      code: '<v-menus :items="items" right />',
    },
  },
};

export const Small = Template.bind({});
Small.args = {small: true};
Small.parameters = {
  docs: {
    source: {
      code: '<v-menus :items="items" small />',
    },
  },
};

export const Hover = Template.bind({});
Hover.args = {hover: true};
Hover.parameters = {
  docs: {
    source: {
      code: '<v-menus :items="items" hover />',
    },
  },
};

export const MenuIcons: Story = (args) => ({
  components: {
    VMenus,
  },
  setup() {
    const items = [
      {
        text: 'Home',
        to: '/',
        prependIcon: 'ri:home-line',
      },
      {
        text: 'User',
        to: '/',
        prependIcon: 'ri:user-line',
      },
      {
        text: 'Search',
        to: '/',
        prependIcon: 'ri:search-line',
      },
      {
        divider: true,
      },
      {
        text: 'New Post',
        to: '/',
        appendIcon: 'ri:add-line',
      },
      {
        text: 'New User',
        to: '/',
        appendIcon: 'ri:add-box-line',
      },
    ];
    return {args, items};
  },
  template: `
<VMenus v-bind="args" :items="items" />
  `,
});

export const Href: Story = (args) => ({
  components: {
    VMenus,
  },
  setup() {
    const items = [
      {
        text: 'Google.com',
        href: 'https://www.google.com',
      },
      {
        text: '(New Tab) Google.com',
        href: 'https://www.google.com',
        newTab: true,
      },
    ];
    return {args, items};
  },
  template: `
<VMenus v-bind="args" :items="items" />
<router-view />
  `,
});

Template.decorators = [
  vueRouter([
    {
      component: {
        template: '<div>Home</div>',
      },
      path: '/',
    },
    {
      component: {
        template: '<div>About</div>',
      },
      path: '/about',
    },
    {
      component: {
        template: '<div>FAQ</div>',
      },
      path: '/faq',
    },
  ]),
];

export const CustomIcon = Template.bind({});
CustomIcon.args = {'btn-icon': 'ri:arrow-down-line'};
CustomIcon.parameters = {
  docs: {
    source: {
      code: '<v-menus :items="items" btn-icon="ri:arrow-down-line" />',
    },
  },
};

export const InAppBar: Story = (args) => ({
  components: {
    VMenus,
    VAppBar,
  },
  setup() {
    return {args};
  },
  template: `
<div class="space-y-2">
  <VAppBar shadow>
    <span class="font-semibold mr-4">Default</span>
    <nav aria-label="Nav" class="flex gap-3 items-center">  
      <VMenus label="Home" v-bind="args" />
      <VMenus label="About" v-bind="args" />
      <VMenus label="Profile" v-bind="args" />
    </nav>
  </VAppBar>
  <VAppBar shadow>
    <span class="font-semibold mr-4">Small</span>
    <nav aria-label="Nav" class="flex gap-3 items-center">  
      <VMenus label="Home" v-bind="args" small />
      <VMenus label="About" v-bind="args" small />
      <VMenus label="Profile" v-bind="args" small />
    </nav>
  </VAppBar>
  <VAppBar shadow class="flex justify-between">
    <span class="font-semibold mr-4">Right</span>
    <nav aria-label="Nav" class="flex gap-3 items-center">  
      <VMenus label="Home" v-bind="args" right />
      <VMenus label="About" v-bind="args" right />
      <VMenus label="Profile" v-bind="args" right />
    </nav>
  </VAppBar>
</div>
  `,
});

export const Slots: Story = (args) => ({
  components: {
    VAppBar,
    VMenus,
    VMenusItem,
  },
  setup() {
    return {args};
  },
  template: `
<VAppBar shadow>
  <VMenus label="Account">
    <template #items>
      <VMenusItem prepend-icon="ri:user-line">Profile</VMenusItem>
      <VMenusItem prepend-icon="ri:settings-4-line"> Preferences </VMenusItem>
      <VMenusItem divider />
      <VMenusItem prepend-icon="ri:logout-box-line">Logout</VMenusItem>
    </template>
  </VMenus>
</VAppBar>
  `,
});

export const CustomStyle: Story = (args) => ({
  components: {
    VMenusCustom,
  },
  setup() {
    return {args};
  },
  template: `
  <VMenusCustom />
  `,
});

export const DarkMode: Story = (args) => ({
  components: {VMenus},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VMenus v-bind='args'/>
  </div>
  `,
});
