import {Meta, Story} from '@storybook/vue3';
import MyDataTable from './VDataTable.vue';

const items = [...Array(30)].map((item, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
}));

export default {
  title: 'Components/DataTable',
  component: MyDataTable,
  argTypes: {},
  args: {
    itemsPerPage: 10,
    items,
    headers: [
      {
        value: 'index',
        text: 'ID',
      },
      {
        value: 'name',
        text: 'Name',
      },
      {
        value: 'email',
        text: 'Email',
      },
    ],
    striped: false,
    hover: false,
    dense: false,
  },
} as Meta;

const Template: Story = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: {
    'my-component': MyDataTable,
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

export const Striped = Template.bind({});
Striped.args = {
  striped: true,
};

export const Hover = Template.bind({});
Hover.args = {
  hover: true,
};

export const Dense = Template.bind({});
Dense.args = {
  dense: true,
};
