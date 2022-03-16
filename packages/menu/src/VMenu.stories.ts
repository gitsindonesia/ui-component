import {Meta, Story} from '@storybook/vue3';
import VMenu from './VMenu.vue';
import vueRouter from 'storybook-vue3-router';

export default {
  title: 'Components/Menu',
  component: VMenu,
  argTypes: {},
  args: {
    menu: {
      text: 'Text',
      to: '/',
      children: [
        {
          text: 'Sub Item',
          to: '/',
        },
        {
          text: 'Sub Item 2',
          to: '/',
        },
      ],
    },
    mini: false,
    expandHover: false,
    dark: false,
    color: '',
    bgColor: '',
    darkColor: '',
    darkBgColor: '',
    classMenuParent: '',
    small: false,
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VMenu,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VMenu v-bind="args">{{ args.label }}</VMenu>`,
});

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [
  /* this is the basic setup with no params passed to the decorator */
  vueRouter(),
];

export const Small = Template.bind({});
Small.args = {small: true};
