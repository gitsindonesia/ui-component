import VProgressBar from './VProgressBar.vue';
import {themeColors} from '@gits-id/utils/colors';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/ProgressBar',
  component: VProgressBar,
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    width: 70,
    modelValue: '',
    label: 'ProgressBar',
    color: 'primary',
    size: '',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VProgressBar},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<VProgressBar v-bind='args' />`,
});

export const ProgressBar = Template.bind({});
ProgressBar.args = {};
