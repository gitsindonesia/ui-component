import { Story, Meta } from '@storybook/vue3';
import { themeColors } from '../../utils';
import type { VSelectProps } from './VSelect';
import MySelect from './VSelect.vue';

const items = [...Array(5)].map((item, index) => ({
  value: index,
  text: `Option ${index}`,
}));

export default {
  title: 'Components/Select',
  component: MySelect,
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    items,
    color: 'primary',
    modelValue: null,
    value: null,
    itemText: 'text',
    itemValue: 'value',
    name: '',
    error: false,
    errorMessages: [],
    searchable: false,
    placeholder: 'Select',
    hideCheckIcon: false
  },
} as Meta;

const Template: Story<VSelectProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': MySelect,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<my-component v-bind="args">{{ args.label }}</my-component>`,
});

export const Select = Template.bind({});
Select.args = {};

export const Searchable = Template.bind({});
Searchable.args = {
  searchable: true
};

export const NoCheckIcon = Template.bind({});
NoCheckIcon.args = {
  hideCheckIcon: true
};