import VMultiSelect from './VMultiSelect.vue';

const items = [...Array(200)].map((item, index) => ({
  value: index + 1,
  text: `Option ${index + 1}`,
}));

export default {
  title: 'Components/MultiSelect',
  component: VMultiSelect,
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
  components: {
    VMultiSelect,
  },
  setup() {
    return {args};
  },
  template: `<v-multi-select v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-multi-select :items="items" />',
    },
  },
};

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
};
Clearable.parameters = {
  docs: {
    source: {
      code: '<v-multi-select :items="items" clearable />',
    },
  },
};

export const MaxBadge = Template.bind({});
MaxBadge.args = {
  clearable: true,
  maxBadge: 3,
};
MaxBadge.parameters = {
  docs: {
    source: {
      code: '<v-multi-select :items="items" :max-badge="3" />',
    },
  },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  wrapperClass: '!rounded-full !border-orange-500 focus-within:!border-orange-600',
  inputClass: '!italic',
  dropdownClass: 'bg-black/50',
  itemClass: 'bg-black/50 text-white hover:bg-warning-500 hover:text-white',
  badgeColor: 'warning',
  checkWrapperClass: 'text-orange-500'
};
CustomStyle.parameters = {
  docs: {
    source: {
      code: '<v-multi-select :items="items" :max-badge="3" />',
    },
  },
};
