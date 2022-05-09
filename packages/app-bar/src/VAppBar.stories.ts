import VAppBar from './VAppBar.vue';
import {Story, Meta} from '@storybook/vue3';

export default {
  title: 'Components/AppBar',
  component: VAppBar,
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
  components: {VAppBar},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VAppBar v-bind="args">Hello</VAppBar>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-app-bar/>`,
    },
  },
};

export const Fixed = Template.bind({});
Fixed.args = {
  fixed: true,
};
Fixed.parameters = {
  docs: {
    source: {
      code: `<v-app-bar fixed/>`,
    },
  },
};

export const Mini = Template.bind({});
Mini.args = {
  mini: true,
};
Mini.parameters = {
  docs: {
    source: {
      code: `<v-app-bar mini/>`,
    },
  },
};

export const Dark = Template.bind({});
Dark.args = {
  dark: true,
};
Dark.parameters = {
  docs: {
    source: {
      code: `<v-app-bar dark/>`,
    },
  },
};

export const Custom = Template.bind({});
Custom.args = {
  dark: true,
  class: 'rounded-lg',
};

Custom.parameters = {
  docs: {
    source: {
      code: `<v-app-bar dark class="rounded-lg"/>`,
    },
  },
};
