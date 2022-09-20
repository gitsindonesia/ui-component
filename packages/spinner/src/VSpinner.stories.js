import VSpinner from './VSpinner.vue';
import {themeColors} from '@gits-id/utils';

export default {
  title: 'Components/Spinner',
  component: VSpinner,
  argTypes: {
    color: {
      control: {type: 'select', options: themeColors},
    },
  },
  args: {
    color: 'primary',
    large: false,
    small: false,
    inverse: false,
  },
};

const Template = (args) => ({
  components: {
    VSpinner,
  },
  setup() {
    return {args};
  },
  template: `<v-spinner v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-spinner color="primary" />',
    },
  },
};

export const XSmall = Template.bind({});
XSmall.args = {
  xSmall: true,
};
XSmall.storyName = 'Extra Small';
XSmall.parameters = {
  docs: {
    source: {
      code: '<v-spinner color="primary" x-small />',
    },
  },
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};
Small.parameters = {
  docs: {
    source: {
      code: '<v-spinner color="primary" small />',
    },
  },
};

export const Large = Template.bind({});
Large.args = {
  large: true,
};
Large.parameters = {
  docs: {
    source: {
      code: '<v-spinner color="primary" large />',
    },
  },
};

export const XLarge = Template.bind({});
XLarge.args = {
  xLarge: true,
};
XLarge.storyName = 'Extra Large';
XLarge.parameters = {
  docs: {
    source: {
      code: '<v-spinner color="primary" x-large />',
    },
  },
};
