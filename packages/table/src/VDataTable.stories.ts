import {Meta, Story} from '@storybook/vue3';
import VDataTable from './VDataTable.vue';

const items = [...Array(30)].map((item, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
}));

export default {
  title: 'Components/DataTable',
  component: VDataTable,
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
    loading: false,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {
    VDataTable,
  },
  setup() {
    return {args};
  },
  template: `<v-data-table v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" />`,
    },
  },
};

export const Striped = Template.bind({});
Striped.args = {
  striped: true,
};
Striped.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" striped />`,
    },
  },
};

export const Hover = Template.bind({});
Hover.args = {
  hover: true,
};
Hover.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" hover />`,
    },
  },
};

export const Dense = Template.bind({});
Dense.args = {
  dense: true,
};
Dense.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" dense />`,
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
Loading.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" loading />`,
    },
  },
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
};
Empty.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="[]" />`,
    },
  },
};

export const Flat = Template.bind({});
Flat.args = {
  flat: true,
};
Flat.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" flat />`,
    },
  },
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
};
Bordered.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" bordered />`,
    },
  },
};

export const Tile = Template.bind({});
Tile.args = {
  tile: true,
  bordered: true,
  flat: true,
};
Tile.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" tile />`,
    },
  },
};

export const CustomWrapperClass = Template.bind({});
CustomWrapperClass.args = {
  wrapperClass: 'border border-blue-500 shadow-blue-500',
};
CustomWrapperClass.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" wrapperClass="border border-blue-500 shadow-blue-500" />`,
    },
  },
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  headerClass: 'bg-blue-600 text-white',
  bodyClass: 'bg-blue-100',
  footerClass: 'bg-gray-100',
  columnInactiveClass: 'text-blue-50 hover:text-blue-200',
  hover: true,
  hoverClass: 'transition duration-300 hover:bg-blue-500 hover:text-white',
  tdClass: 'group-hover:text-white',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: `
<v-data-table
  :headers="headers"
  :items="items"
  header-class="bg-blue-600"
  body-class="bg-gray-100"
  footer-class="bg-gray-100"
  column-inactive-class="text-blue-50 hover:text-blue-200"
  hover
  hover-class="transition duration-300 hover:bg-blue-500 hover:text-white"
  td-class="group-hover:text-white"
/>
      `,
    },
  },
};
