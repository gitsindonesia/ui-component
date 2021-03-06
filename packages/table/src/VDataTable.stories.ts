import {Meta, Story} from '@storybook/vue3';
import qs from 'qs';
import {onMounted, reactive, ref, watch} from 'vue';
import {VDataTableHeader} from './types';
import VDataTable from './VDataTable.vue';

const items = [...Array(30)].map((item, index) => ({
  index,
  name: `User-${index}`,
  email: `user-${index}@example.com`,
}));

const headers = [
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
