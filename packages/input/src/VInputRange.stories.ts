import {Meta, Story} from '@storybook/vue3';
import VInputRange from './VInputRange.vue';

export default {
  title: 'Components/Form/InputRange',
  component: VInputRange,
  argTypes: {},
  args: {
    modelValue: '',
  },
} as Meta;

export const InputRange: Story = (args) => ({
  components: {VInputRange},
  setup() {
    return {args};
  },
  template: '<VInputRange v-bind="args" />',
});
InputRange.parameters = {
  docs: {
    source: {
      code: '<v-input-range />',
    },
  },
};
InputRange.storyName = 'InputRange';
