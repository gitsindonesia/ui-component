import VProgressBar from '../src/VProgressBar.vue';
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
    color: 'default',
    size: '',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {VProgressBar},
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args, themeColors};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <VProgressBar v-for="color in themeColors" :key="color" v-bind='args' :color="color" />
  `,
});

export const Variants = Template.bind({});
Variants.args = {};
Variants.parameters = {
  docs: {
    source: {
      code: `
<v-progress-bar color="default" :width="70" />
<v-progress-bar color="primary" :width="70" />
<v-progress-bar color="secondary" :width="70" />
<v-progress-bar color="info" :width="70" />
<v-progress-bar color="warning" :width="70" />
<v-progress-bar color="success" :width="70" />
<v-progress-bar color="error" :width="70" />
<v-progress-bar color="dark" :width="70" />
      `,
    },
  },
};
