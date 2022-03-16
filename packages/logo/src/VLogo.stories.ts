import {Meta, Story} from '@storybook/vue3';
import VLogo from './VLogo.vue';

export default {
  title: 'Components/Logo',
  component: VLogo,
  argTypes: {},
  args: {
    white: false,
    to: '/',
    imgClass: 'h-7',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'v-logo': VLogo,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<div class="p-2 rounded" :class="[args.white ? 'bg-primary' : '']"><v-logo v-bind="args">{{ args.label }}</v-logo></div>`,
});

export const Default = Template.bind({});
Default.args = {};

export const White = Template.bind({});
White.args = {white: true};

export const CustomClass = Template.bind({});
CustomClass.args = {
  imgClass: 'h-10',
};
