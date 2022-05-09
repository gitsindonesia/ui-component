import {Meta, Story} from '@storybook/vue3';
import VMenus from './VMenus.vue';
import vueRouter from 'storybook-vue3-router';

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
  // Components used in your story `template` are defined in the `components` object
  components: {
    VMenus,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div class="flex justify-center">
  <VMenus v-bind="args">Menu</VMenus>
</div>
  `,
});

Template.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter(),
];

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
