import {Meta, Story} from '@storybook/vue3';
import VLogo from './VLogo.vue';
import {sizes} from './types';

export default {
  title: 'Components/Logo',
  component: VLogo,
  args: {
    to: '/',
    size: 'md',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VLogo,
  },
  setup() {
    return {args};
  },
  template: `
<div class="p-2 rounded" :class="[args.white ? 'bg-primary' : '']">
  <v-logo v-bind="args">{{ args.label }}</v-logo>
</div>
`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-logo />',
    },
  },
};

export const White = Template.bind({});
White.args = {white: true};
White.parameters = {
  docs: {
    source: {
      code: '<v-logo white />',
    },
  },
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  imgClass: 'h-10',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: '<v-editor img-class="h-10" />',
    },
  },
};

export const Sizes: Story = (args) => ({
  components: {
    VLogo,
  },
  setup() {
    return {args, sizes};
  },
  template: `
  <v-logo v-for="size in sizes" :key="size" :size="size" />
  <v-logo :width="300" />
  <v-logo width="auto" :height="175"  />
`,
});
