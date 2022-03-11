import {Story, Meta} from '@storybook/vue3';
import {sizes} from '@gits-id/utils/sizes';
import type {VFormSelectProps} from './types';
import MySelect from './VFormSelect.vue';

const items = [...Array(5)].map((item, index) => ({
  value: index,
  text: `Option ${index}`,
}));

export default {
  title: 'Components/Form/Select',
  component: MySelect,
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
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': MySelect,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-component v-bind="args">{{ args.label }}</my-component>`,
});

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  errorMessages: ['Field is required'],
};
