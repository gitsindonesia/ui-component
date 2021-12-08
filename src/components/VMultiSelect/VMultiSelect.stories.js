import MyMultiSelect from './VMultiSelect.vue';

const items = [...Array(200)].map((item, index) => ({
  value: index + 1,
  text: `Option ${index + 1}`,
}));

export default {
  title: 'Components/MultiSelect',
  component: MyMultiSelect,
  argTypes: {},
  args: {
    items,
    modelValue: [],
    itemText: 'text',
    itemValue: 'value',
    searchBy: '',
    placeholder: 'Search...',
    name: '',
    error: false,
    errorMessages: [],
    clearable: false,
    maxBadge: 0,
    delay: 500,
    id: '',
    inputProps: {},
    selectAll: false,
    loading: false,
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': MyMultiSelect,
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

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
};

export const MaxBadge = Template.bind({});
MaxBadge.args = {
  clearable: true,
  maxBadge: 3,
};
