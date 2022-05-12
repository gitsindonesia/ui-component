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
  components: {VAppBar},
  setup() {
    return {args};
  },
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
      code: `<v-app-bar class="rounded-lg">`,
    },
  },
};
