import {Story, Meta} from '@storybook/vue3';
import {sizes} from '@gits-id/utils/sizes';
import type {VFormSelectProps} from './types';
import VFormSelect from './VFormSelect.vue';

const items = [...Array(5)].map((item, index) => ({
  value: index,
  text: `Option ${index}`,
}));

export default {
  title: 'Forms/Select',
  component: VFormSelect,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
  },
  args: {
    items,
    modelValue: '1',
    value: '',
    size: '',
    itemText: 'text',
    itemValue: 'value',
    name: '',
    error: false,
    errorMessages: [],
  },
} as Meta;

const Template: Story<VFormSelectProps> = (args) => ({
  components: {
    VFormSelect,
  },
  setup() {
    return {args};
  },
  template: `<v-form-select v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-form-select :items="items" />',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<v-form-select :items="items" disabled />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  errorMessages: ['Field is required'],
};
Error.parameters = {
  docs: {
    source: {
      code: `<v-form-select :items="items" error :error-messages="['Field is required']" />`,
    },
  },
};
