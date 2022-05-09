import {Story, Meta} from '@storybook/vue3';
import {themeColors} from '@gits-id/utils';
import type {VSelectProps} from './types';
import VSelect from './VSelect.vue';

const items = [...Array(5)].map((item, index) => ({
  value: index,
  text: `Option ${index}`,
}));

export default {
  title: 'Components/Select',
  component: VSelect,
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
    hideCheckIcon: false,
  },
} as Meta;

const Template: Story<VSelectProps> = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    VSelect,
  },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return {args};
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `<v-select v-bind="args" />`,
});

export const Select = Template.bind({});
Select.args = {};
Select.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" />',
    },
  },
};

export const Searchable = Template.bind({});
Searchable.args = {
  searchable: true,
};
Searchable.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" searchable />',
    },
  },
};

export const NoCheckIcon = Template.bind({});
NoCheckIcon.args = {
  hideCheckIcon: true,
};
NoCheckIcon.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" no-check-icon />',
    },
  },
};
