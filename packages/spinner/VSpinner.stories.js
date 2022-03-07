import VSpinner from './VSpinner.vue';
import {themeColors} from '@gits/utils';

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
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': VSpinner,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-component v-bind="args">{{ args.label }}</my-component>`,
});

export const Default = Template.bind({});
Default.args = {};

export const XSmall = Template.bind({});
XSmall.args = {
  xSmall: true,
};
XSmall.storyName = 'Extra Small';

export const Small = Template.bind({});
Small.args = {
  small: true,
};
Small.storyName = 'Small';

export const Large = Template.bind({});
Large.args = {
  large: true,
};
Large.storyName = 'Large';

export const XLarge = Template.bind({});
XLarge.args = {
  xLarge: true,
};
XLarge.storyName = 'Extra Large';
