import MyDataTablePagination from './VDataTablePagination.vue';
import {themeColors} from '../../utils/colors';
import {Meta, Story} from '@storybook/vue3';

export default {
  title: 'Components/DataTablePagination',
  component: MyDataTablePagination,
  argTypes: {
    color: {
      control: {type: 'select', options: themeColors},
    },
  },
  args: {
    totalItems: 30,
    itemsPerPage: 10,
    large: false,
    small: false,
    showNumber: true,
    color: '',
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': MyDataTablePagination,
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

export const Small = Template.bind({});
Small.args = {
  small: true,
};

export const Large = Template.bind({});
Large.args = {
  large: true,
};

export const HideFirstAndLast = Template.bind({});
HideFirstAndLast.args = {
  large: true,
  showFirst: false,
  showLast: false,
};
