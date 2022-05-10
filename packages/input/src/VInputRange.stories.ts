import {Meta, Story} from '@storybook/vue3';
import {ref} from 'vue';
import VInputRange from './VInputRange.vue';

export default {
  title: 'Components/Form/InputRange',
  component: VInputRange,
  argTypes: {},
  args: {
    modelValue: 1,
    showInput: false,
  },
} as Meta;

export const Default: Story = (args) => ({
  components: {VInputRange},
  setup() {
    const val = ref('');
    return {args, val};
  },
  template: '<VInputRange v-model="val" v-bind="args" />',
});
Default.parameters = {
  docs: {
    source: {
      code: '<v-input-range />',
    },
  },
};

export const WithInput: Story = (args) => ({
  components: {VInputRange},
  setup() {
    return {args};
  },
  template: '<VInputRange v-bind="args" />',
});
WithInput.args = {
  showInput: true,
};
WithInput.parameters = {
  docs: {
    source: {
      code: '<v-input-range show-input />',
    },
  },
};
