import { VInput } from '@morpheme/forms';
import { Meta, StoryFn } from '@storybook/vue3';
import { ref, watchEffect } from 'vue';
import VDataTable from './VDataTable.vue';
import type { VDataTableHeader } from './types';
import HeaderSlotStory from './stories/HeaderSlotStory.vue'
import HeaderItemSlotStory from './stories/HeaderItemSlotStory.vue'
import BodySlotStory from './stories/BodySlotStory.vue'
import { items, headers, selectableHeaders } from './stories/data'

export default {
  title: 'Components/DataTable',
  component: VDataTable,
  argTypes: {},
  args: {
    itemsPerPage: 10,
    items,
    headers,
  },
} as Meta;

const Template: StoryFn<typeof VDataTable> = (args) => ({
  components: {
    VDataTable,
  },
  setup() {
    return { args };
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

export const StripedHover = Template.bind({});
StripedHover.args = {
  hover: true,
  striped: true
};
StripedHover.parameters = {
  docs: {
    source: {
      code: `<v-data-table :headers="headers" :items="items" hover striped />`,
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

export const Selectable: StoryFn<typeof VDataTable> = (args) => ({
  components: {
    VDataTable,
  },
  setup() {
    const selected = ref([]);
    return { args, selected, selectableHeaders };
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

export const Search: StoryFn<typeof VDataTable> = (args) => ({
  components: {
    VDataTable,
    VInput,
  },
  setup() {
    const search = ref('');
    return { args, search };
  },
  template: `
    <VInput
      v-model="search"
      placeholder="Search..."
      wrapper-class="mb-4"
      prepend-icon="ri:search-line"
    />
    <VDataTable
      v-bind="args"
      v-model:search="search"
    />
  `,
});

function numberToStars(num: number) {
  // Round the number to the nearest half integer
  num = Math.round(num * 2) / 2;

  // Calculate the number of full stars to display
  const fullStars = Math.floor(num);

  // Calculate whether to display a half star or not
  const halfStar = num % 1 === 0.5 ? '½' : '';

  // Calculate the number of empty stars to display
  const emptyStars = 5 - fullStars - halfStar.length;

  // Use the String.repeat() method to generate the appropriate number of full, half, and empty stars
  return '★'.repeat(fullStars) + halfStar + '☆'.repeat(emptyStars);
}

export const ServerSide: StoryFn<typeof VDataTable> = (args) => ({
  components: {
    VDataTable,
  },
  setup() {
    const headers = ref<VDataTableHeader[]>([
      {
        text: 'Image',
        value: 'thumbnail',
        sortable: false,
      },
      {
        text: 'Title',
        value: 'title',
      },
      {
        text: 'Price',
        value: 'price',
      },
      {
        text: 'Rating',
        value: 'rating',
        align: 'center',
      },
      {
        text: 'Stock',
        value: 'stock',
        align: 'center',
      },
    ]);

    const items = ref([]);
    const page = ref(1);
    const itemsPerPage = ref(10);
    const totalItems = ref(0);
    const loading = ref(false);

    const API_URL = 'https://dummyjson.com/products';

    const fetchData = () => {
      loading.value = true;

      const skip = (page.value - 1) * itemsPerPage.value;

      const query = new URLSearchParams({
        limit: itemsPerPage.value.toString(),
        skip: skip.toString(),
      });

      fetch(`${API_URL}?${query}`)
        .then((res) => res.json())
        .then((res) => {
          items.value = res.products;
          totalItems.value = res.total;
        })
        .finally(() => {
          loading.value = false;
        });
    };

    watchEffect(fetchData);

    return {
      args,
      headers,
      items,
      page,
      itemsPerPage,
      totalItems,
      loading,
      numberToStars,
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
      <template #item.thumbnail="{item}">
        <img
          :src="item.thumbnail"
          width="50"
          height="50"
          class="max-w-full rounded shadow"
        />
      </template>
      <template #item.price="{item}">
        {{ item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
      </template>
      <template #item.rating="{item}">
        {{ numberToStars(item.rating) }}
      </template>
    </v-data-table>

    <pre class="mt-5">{{ {page, itemsPerPage, totalItems} }}</pre>
  `,
});

export const StickyColumn: StoryFn<typeof VDataTable> = (args) => ({
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

    return { args, headers };
  },
  template: `
<v-data-table v-bind="args" :headers="headers">
  <template #item.action>
    ...
  </template>
</v-data-table>
  `,
});

export const DarkMode: StoryFn<typeof VDataTable> = (args) => ({
  components: { VDataTable },
  setup() {
    return { args };
  },
  template: `
<main class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6 space-y-2">
  <VDataTable v-bind="args" />

  <p class="mt-10 mb-3">Bordered Variant</p>
  <VDataTable v-bind="args" bordered />
</main>
`,
});

export const RowColors: StoryFn<typeof VDataTable> = (args) => ({
  components: { VDataTable },
  setup() {
    return { args };
  },
  template: `
  <VDataTable
    v-bind="args"
    tr-class="v-table-tr--primary"
  />
`,
});

export const RowClass: StoryFn<typeof VDataTable> = (args) => ({
  components: { VDataTable },
  setup() {
    return { args };
  },
  template: `
  <VDataTable
    v-bind="args"
    :row-class="(item, index) => {
      return index % 2 === 0 ? 'v-table-tr--primary' : 'v-table-tr--success'
    }"
  />
`,
});

export const ItemClass: StoryFn<typeof VDataTable> = (args) => ({
  components: { VDataTable },
  setup() {
    return { args };
  },
  template: `
  <VDataTable
    v-bind="args"
    :item-class="(item, index) => {
      return index % 2 === 0 ? 'v-table-tr--error' : 'v-table-tr--warning'
    }"
  />
`,
});

export const ItemSlot: StoryFn<typeof VDataTable> = (args) => ({
  components: { VDataTable },
  setup() {
    return { args };
  },
  template: `
  <VDataTable
    v-bind="args"
  >
    <template #item="{item, handleRowClick, headers, getTdClass, tdClass, get}">
      <tr
        @click="handleRowClick(item)"
      >
        <td
          v-for="(header, index) in headers"
          :key="index"
          class="v-table-td"
          :class="[
            getTdClass(header),
            tdClass,
            header?.tdClass || '',
          ]"
        >
          {{ get(item, header.value) }}
        </td>
      </tr>
    </template>
  </VDataTable>
`,
});

export const HeaderSlot: StoryFn<typeof VDataTable> = () => ({
  components: { HeaderSlotStory },
  template: `
    <HeaderSlotStory />
  `,
});

export const HeaderItemSlot: StoryFn<typeof VDataTable> = () => ({
  components: { HeaderItemSlotStory },
  template: `
    <HeaderItemSlotStory />
  `,
});

export const BodySlot: StoryFn<typeof VDataTable> = () => ({
  components: { BodySlotStory },
  template: `
    <BodySlotStory />
  `,
});
