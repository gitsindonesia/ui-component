import {Story} from '@storybook/vue3';
import VProgressCircular from './VProgressCircular.vue';

export default {
  title: 'Components/ProgressCircular',
  component: VProgressCircular,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    value: 50,
  },
};

export const Default: Story<{}> = (args) => ({
  components: {
    VProgressCircular,
  },
  setup() {
    return {args};
  },
  template: `
    <VProgressCircular v-bind="args" />
  `,
});

export const Text = Default.bind({});
Text.args = {
  text: '50%',
};

export const Indeterminate = Default.bind({});
Indeterminate.args = {
  indeterminate: true,
};
