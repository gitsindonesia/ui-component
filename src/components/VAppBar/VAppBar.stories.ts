import MyAppBar from './VAppBar.vue';
import {UserIcon, HomeIcon, FlagIcon} from '@heroicons/vue/solid';
import {Story, Meta} from '@storybook/vue3';

export default {
  title: 'Components/AppBar',
  component: MyAppBar,
  argTypes: {},
  args: {
    mini: false,
    fixed: false,
    user: null,
    dark: false,
  },
} as Meta;

const Template: Story<{}> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {MyAppBar},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<MyAppBar v-bind="args">Hello</MyAppBar>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Fixed = Template.bind({});
Fixed.args = {
  fixed: true,
};

export const Mini = Template.bind({});
Mini.args = {
  mini: true,
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
};

export const Custom = Template.bind({});
Custom.args = {
  dark: true,
  class: 'rounded-lg',
};
