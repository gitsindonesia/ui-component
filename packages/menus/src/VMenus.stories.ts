import {Meta, Story} from '@storybook/vue3';
import VMenus from './VMenus.vue';
import vueRouter from 'storybook-vue3-router';
import VAppBar from '@gits-id/app-bar';

export default {
  title: 'Components/Menus',
  component: VMenus,
  argTypes: {},
  args: {
    right: false,
    rightIcon: false,
    btnClass: '',
    items: [
      {
        text: 'Item',
        to: '/',
      },
      {
        text: 'Item 2',
        to: '/',
      },
      {
        text: 'Item 3',
        to: '/',
      },
    ],
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
