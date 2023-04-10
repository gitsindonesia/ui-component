import VBadge from './VBadge.vue';
import type {VBadgeProps} from './types';
import {Story, Meta} from '@storybook/vue3';
import {defaultRounded, defaultColors} from '@morpheme/theme/defaultTheme';

const colors = [
  ...defaultColors,
  'purple',
  'indigo',
  'blue',
  'blue-light',
  'pink',
  'rose',
  'orange',
  'blue-gray',
];

export default {
  title: 'Components/Badge',
  component: VBadge,
} as Meta;

const Template: Story<VBadgeProps> = (args) => ({
  components: {
    VBadge,
  },
  setup() {
    return {args, colors};
  },
  template: `
<div class="flex flex-row flex-wrap gap-2">
  <VBadge
    v-for="color in colors"
    :key="color"
    v-bind="args"
    :color="color"
    >
    {{ args.label || color }}
  </VBadge>
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

export const Rounded: Story<VBadgeProps> = (args) => ({
  components: {
    VBadge,
  },
  setup() {
    return {args, defaultRounded};
  },
  template: `
<div class="flex flex-row flex-wrap gap-2">
  <VBadge
    v-for="rounded in defaultRounded"
    :key="rounded"
    v-bind="args"
    :rounded="rounded"
    color="primary"
    >
    {{ args.label || rounded }}
  </VBadge>
</div>
  `,
});

export const Dismissable: Story<VBadgeProps> = (args) => ({
  components: {
    VBadge,
  },
  setup() {
    return {args};
  },
  template: `
<div class="space-x-2">
  <VBadge
    color="primary"
    small
    dismissable
  >
    small
  </VBadge>
  <VBadge
    color="primary"
    dismissable
  >
    default
  </VBadge>
  <VBadge
    color="primary"
    large
    dismissable
  >
    large
  </VBadge>
</div>
  `,
});

export const Sizes: Story<VBadgeProps> = (args) => ({
  components: {
    VBadge,
  },
  setup() {
    return {args, defaultRounded};
  },
  template: `
<div class="space-x-2">
  <VBadge
    color="primary"
    small
  >
    small
  </VBadge>
  <VBadge
    color="primary"
  >
    default
  </VBadge>
  <VBadge
    color="primary"
    large
  >
    large
  </VBadge>
</div>
  `,
});

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

const SingleTemplate: Story<VBadgeProps> = (args) => ({
  components: {
    VBadge,
  },
  setup() {
    return {args};
  },
  template: `<VBadge v-bind="args">{{ args.label || 'Text' }}</VBadge>`,
});

export const CustomClass = SingleTemplate.bind({});
CustomClass.args = {
  class: 'uppercase text-sm bg-teal-500 text-white',
};

CustomClass.parameters = {
  docs: {
    source: {
      code: `<v-badge class="uppercase text-sm bg-teal-500 text-white"> text </v-badge>`,
    },
  },
};

export const DarkMode = () => ({
  components: {VBadge},
  setup() {
    return {
      colors,
      variants: ['default', 'outlined'],
    };
  },
  template: `
<div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
  <div v-for="variant in variants" :key="variant" class="mb-5">  
    <p>{{ variant }}</p>
    <div class="space-x-2 space-y-2">
      <VBadge
        v-for="color in colors"
        :color="color"
        :key="color"
        v-bind:[variant]="true"
      >
        {{ color }}
      </VBadge>
    </div>
  </div>
</div>
  `,
});
