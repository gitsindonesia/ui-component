import {Meta, Story} from '@storybook/vue3';
import qs from 'qs';
import {onMounted, ref, watch} from 'vue';
import VDataTable from './VDataTable.vue';
import type {VDataTableHeader} from './types';

const states = ['active', 'inactive'];

const items = [...Array(30)].map((_, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
  age: index + 1 * 10,
  state: states[Math.floor(Math.random() * states.length)],
}));

const headers = [
  {
    value: 'index',
    text: 'ID',
    class: '',
    tdClass: '',
  },
  {
    value: 'name',
    text: 'Name',
    class: '',
    tdClass: '',
  },
  {
    value: 'email',
    text: 'Email',
    class: '',
    tdClass: '',
  },
];

const selectableHeaders = [
  {
    text: 'Checkox',
    value: 'selected',
  },
  ...headers.slice(1),
];

export default {
  title: 'Components/DataTable',
  component: VDataTable,
  argTypes: {},
  args: {
    itemsPerPage: 10,
    items,
    headers,
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

export const MustSort = Template.bind({});
MustSort.args = {
  mustSort: true,
};
MustSort.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" mustSort />`,
    },
  },
};

export const DisableSorting = Template.bind({});
DisableSorting.args = {
  disableSorting: true,
};
DisableSorting.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" disableSorting />`,
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
  tdClass: 'group-hover:text-white __GLOBAL_TD_CLASS__',
  headers: headers.map((e, idx) => ({
    ...e,
    class: `__CLASS_${idx}__`,
    tdClass: `__TD_HEAD_CLASS_${idx}__`,
  })),
  trClass: 'hover:!bg-gray-700 border-2 __TR__CLASS__',
};
CustomClass.parameters = {
  docs: {
    source: {
      code: `
<v-data-table
  :headers="${JSON.stringify(CustomClass.args.headers).replaceAll('"', "'")}"
  :items="items"
  header-class="bg-blue-600"
  body-class="bg-gray-100"
  footer-class="bg-gray-100"
  column-inactive-class="text-blue-50 hover:text-blue-200"
  hover
  hover-class="transition duration-300 hover:bg-blue-500 hover:text-white"
  td-class="group-hover:text-white"
  tr-class="!hover:bg-gray-700 __TR__CLASS__"
/>
      `,
    },
  },
};

export const Selectable: Story = (args) => ({
  components: {
    VDataTable,
  },
  setup() {
    const selected = ref([]);
    return {args, selected, selectableHeaders};
  },
  template: `
    <v-data-table
      v-bind="args"
      :headers="selectableHeaders"
      v-model="selected"
      selectable
    />
    <pre class="mt-4">Selected: {{ {total: selected.length, items: selected} }}
    </pre>
  `,
});

export const ServerSide: Story = (args) => ({
  components: {
    VDataTable,
  },
  setup() {
    const headers = ref<VDataTableHeader[]>([
      {
        text: 'Image',
        value: 'image',
        sortable: false,
      },
      {
        text: 'Title',
        value: 'attributes.title',
      },
      {
        text: 'Published At',
        value: 'publishedAt',
      },
    ]);

    const items = ref([]);
    const page = ref(1);
    const itemsPerPage = ref(10);
    const totalItems = ref(0);
    const loading = ref(false);

    const API_URL = 'https://bapi.warsono.id';

    const strapiUrl = (image: any) => API_URL + image?.data?.attributes?.url;

    const toDate = (date: string) => {
      const d = new Date(date);
      return d.toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };

    const fetchData = (
      params: {
        page?: number;
        itemsPerPage?: number;
      } = {},
    ) => {
      loading.value = true;

      const query = qs.stringify(
        {
          populate: 'image',
          pagination: {
            page: params.page || page.value,
            pageSize: params.itemsPerPage || itemsPerPage.value,
          },
        },
        {
          encodeValuesOnly: true, // prettify URL
        },
      );

      fetch(`${API_URL}/api/articles?${query}`)
        .then((res) => res.json())
        .then((res) => {
          items.value = res.data;
          totalItems.value = res.meta.pagination.total;
          itemsPerPage.value = res.meta.pagination.pageSize;
          page.value = res.meta.pagination.page;
        })
        .finally(() => {
          loading.value = false;
        });
    };

    watch(page, (val) => {
      fetchData({
        page: val,
      });
    });

    watch(itemsPerPage, (val) => {
      fetchData({
        itemsPerPage: val,
      });
    });

    onMounted(() => {
      fetchData();
    });

    return {
      args,
      headers,
      items,
      strapiUrl,
      toDate,
      page,
      itemsPerPage,
      totalItems,
      loading,
    };
  },
  template: `
    <v-data-table
      v-model:page="page"
      v-model:itemsPerPage="itemsPerPage"
      :headers="headers"
      :items="items"
      :total-items="totalItems"
      :loading="loading"
      server-side
    >
      <template #item.image="{item}">
        <img
          :src="strapiUrl(item.attributes.image)"
          width="50"
          height="50"
          class="max-w-full rounded shadow"
        />
      </template>
      <template #item.publishedAt="{item}">
        {{ toDate(item.attributes.publishedAt) }}
      </template>
    </v-data-table>

    <pre class="mt-5">{{ {page, itemsPerPage, totalItems} }}</pre>
  `,
});

export const StickyColumn: Story = (args) => ({
  components: {
    VDataTable,
  },
  setup() {
    const headers = ref<VDataTableHeader[]>([
      {
        value: 'index',
        text: 'ID',

        freeze: true,
        positionFreeze: 'left',
        sortable: false,
        align: 'center',
      },
      {
        value: 'name',
        text: 'First Name',
      },
      {
        value: 'name',
        text: 'Last Name',
      },
      {
        value: 'email',
        text: 'Email',
      },
      {
        value: 'age',
        text: 'Age',
      },
      {
        value: 'state',
        text: 'State',
      },
      {
        value: 'action',
        text: 'Action',
        freeze: true,
        positionFreeze: 'right',
        sortable: false,
        align: 'center',
      },
    ]);

    return {args, headers};
  },
  template: `
<v-data-table v-bind="args" :headers="headers">
  <template #item.action>
    ...
  </template>
</v-data-table>
  `,
});
