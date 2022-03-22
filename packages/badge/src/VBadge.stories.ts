import VBadge from './VBadge.vue';
import {themeColors} from '@gits-id/utils/colors';
import type {VBadgeProps} from './types';
import {Story, Meta} from '@storybook/vue3';

export default {
  title: 'Components/Badge',
  component: VBadge,
  argTypes: {
    color: {
      control: {type: 'select', options: themeColors},
    },
  },
  args: {
    label: '',
    dismissable: false,
    icon: false,
    outlined: false,
  },
} as Meta;

const Template: Story<VBadgeProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VBadge,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args, themeColors};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
<div class="flex flex-row flex-wrap gap-2">
  <VBadge v-for="color in themeColors" :key="color" v-bind="args" :color="color">{{ args.label || color }}</VBadge>
</div>
  `,
});

export const Variants = Template.bind({});
Variants.args = {};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const Circle = Template.bind({});
Circle.args = {
  circle: true,
  label: 20,
};

export const Large = Template.bind({});
Large.args = {
  large: true,
};

export const Small = Template.bind({});
Small.args = {
  small: true,
};

export const Dismissable = Template.bind({});
Dismissable.args = {
  dismissable: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};

// export const CustomColor = Template.bind({});
// CustomColor.args = {
//   bgColor: 'bg-white',
//   textColor: 'text-info-500',
//   class: 'border border-info-500',
// };

const SingleTemplate: Story<VBadgeProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VBadge,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VBadge v-bind="args">{{ args.label || 'Text' }}</VBadge>`,
});

export const CustomClass = SingleTemplate.bind({});
CustomClass.args = {
  bgColor: 'bg-teal-500',
  textColor: 'text-white',
  class: 'uppercase text-sm',
};
