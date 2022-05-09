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
Variants.parameters = {
  docs: {
    source: {
      code: `<v-badge> text </v-badge>
<v-badge color="primary"> text </v-badge>
<v-badge color="secondary"> text </v-badge>
<v-badge color="info"> text </v-badge>
<v-badge color="warning"> text </v-badge>
<v-badge color="success"> text </v-badge>
<v-badge color="error"> text </v-badge>
<v-badge color="dark"> text </v-badge>
      `,
    },
  },
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};
Rounded.parameters = {
  docs: {
    source: {
      code: `<v-badge rounded> text </v-badge>`,
    },
  },
};

export const Circle = Template.bind({});
Circle.args = {
  circle: true,
  label: 20,
};
Circle.parameters = {
  docs: {
    source: {
      code: `<v-badge circle> 20 </v-badge>`,
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
      code: `<v-badge large> text </v-badge>`,
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
      code: `<v-badge small> text </v-badge>`,
    },
  },
};

export const Dismissable = Template.bind({});
Dismissable.args = {
  dismissable: true,
};
Dismissable.parameters = {
  docs: {
    source: {
      code: `<v-badge dismissable> text </v-badge>`,
    },
  },
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
};
Outlined.parameters = {
  docs: {
    source: {
      code: `<v-badge outlined> text </v-badge>`,
    },
  },
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

CustomClass.parameters = {
  docs: {
    source: {
      code: `<v-badge bg-color="bg-teal-500" text-color="text-white" class="uppercase text-sm"> text </v-badge>`,
    },
  },
};
