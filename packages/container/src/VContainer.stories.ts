import {Meta, Story} from '@storybook/vue3';
import VContainer from './VContainer.vue';

export default {
  title: 'Components/Container',
  component: VContainer,
  argTypes: {},
  args: {
    mini: false,
    fixed: false,
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VContainer,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VContainer v-bind="args">Content</VContainer>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Mini = Template.bind({});
Mini.args = {mini: true};

export const Fixed = Template.bind({});
Fixed.args = {mini: true};
