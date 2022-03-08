import MyBadge from './VBadge.vue';
import {themeColors} from '@gits-id/utils/colors';
import type {VBadgeProps} from './VBadge';
import {Story, Meta} from '@storybook/vue3';

export default {
  title: 'Components/Badge',
  component: MyBadge,
  argTypes: {
    color: {
      control: {type: 'select', options: themeColors},
    },
  },
  args: {
    label: 'Badge text',
    dismissable: false,
    icon: false,
  },
} as Meta;

const Template: Story<VBadgeProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': MyBadge,
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

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Info = Template.bind({});
Info.args = {
  color: 'info',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};

export const Success = Template.bind({});
Success.args = {
  color: 'success',
};

export const Error = Template.bind({});
Error.args = {
  color: 'error',
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
  color: 'success',
};

export const Circle = Template.bind({});
Circle.args = {
  circle: true,
  label: 20,
  color: 'error',
};

export const Large = Template.bind({});
Large.args = {
  color: 'success',
  large: true,
};

export const Small = Template.bind({});
Small.args = {
  color: 'success',
  small: true,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  bgColor: 'bg-white',
  textColor: 'text-info',
  class: 'border border-info',
};
