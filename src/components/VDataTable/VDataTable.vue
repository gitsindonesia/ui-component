<script setup lang="ts">
import {computed, watch, ref, toRefs} from 'vue';
import type {PropType} from 'vue';
import VDataTablePagination from '../VDataTablePagination/VDataTablePagination.vue';
import type {
  VDataTableHeader,
  VDataTableItem,
  VDataTableProps,
} from './VDataTable';
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/vue/solid';
import VSpinner from '../VSpinner/VSpinner.vue';
import VCheckbox from '../VCheckbox/VCheckbox.vue';
// import get from 'lodash/get';
import {get} from '../../utils';

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  value: {
    type: Array,
    default: () => [],
  },
  headers: {
    type: Array as PropType<VDataTableHeader[]>,
    default: () => [],
  },
  items: {
    type: Array as PropType<VDataTableItem[]>,
    default: () => [],
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
  disableSorting: {
    type: Boolean,
    default: false,
  },
  pagination: {
    type: Object,
    default() {
      return {};
    },
  },
  loading: {
    type: Boolean,
    default: false,
  },
  search: {
    type: String,
    default: '',
  },
  searchBy: {
    type: [String, Array] as PropType<string | string[]>,
    default: '',
  },
  loadingText: {
    type: String,
    default: 'Loading...',
  },
  noDataText: {
    type: String,
    default: 'Data tidak ditemukan',
  },
  footerColor: {
    type: String,
    default: '',
  },
  serverSide: {
    type: Boolean,
    default: false,
  },
  sortBy: {
    type: String,
    default: '',
  },
  sortDirection: {
    type: String,
    default: '',
  },
  hover: {
    type: Boolean,
    default: false,
  },
  striped: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
  totalItems: {
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 1,
  },
  mustSort: {
    type: Boolean,
    default: false,
  },
  noShadow: {
    type: Boolean,
    default: false,
  },
  selectable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'update:search',
  'sort',
  'update:sortBy',
  'update:sortDirection',
  'update:page',
  'update:itemsPerPage',
  'update:pagination',
  'page:change',
  'itemsPerPage:change',
  'pagination:change',
  'update:modelValue',
  'update:value',
]);

const {
  disableSorting,
  itemsPerPage,
  pagination,
  loading,
  search,
  searchBy,
  serverSide,
  sortBy,
  sortDirection,
  items,
  hover,
  striped,
  dense,
  footerColor,
  headers,
  totalItems,
  page: paginationPage,
  mustSort,
  selectable,
  modelValue,
  value,
} = toRefs(props);

const page = ref<number>(props.page);
const perPage = ref(itemsPerPage.value);
const offset = computed(() => (page.value - 1) * Number(perPage.value));

const defaultSearchBy = computed(() => headers.value.map((item) => item.value));

const paginatedItems = computed(() => {
  let clonedItems = JSON.parse(JSON.stringify(items.value)) as VDataTableItem[];

  if (serverSide.value) return clonedItems;

  // sorting
  if (sortBy.value && sortBy.value && !serverSide.value) {
    clonedItems.sort((a, b) => {
      const aValue = +a[sortBy.value];
      const bValue = +b[sortBy.value];
      if (!isNaN(aValue) && !isNaN(bValue))
        return Number(aValue) - Number(bValue);

      return String(aValue).localeCompare(String(bValue));
    });
    if (sortDirection.value === 'desc') {
      clonedItems.reverse();
    }
  }
  // filter
  if (search.value && !serverSide.value) {
    clonedItems = clonedItems.filter((item) => {
      return [...defaultSearchBy.value, searchBy.value]
        .flat()
        .some((key) =>
          String(item[key!])
            .toLowerCase()
            .includes(search.value.toLocaleLowerCase()),
        );
    });
  }
  return clonedItems.slice(offset.value).slice(0, perPage.value);
});

const computedHeaders = computed(() =>
  props.headers.map(
    (header) =>
      ({
        ...header,
        sortable: header.hasOwnProperty('sortable') ? header.sortable : true,
        sorting: 'asc',
      } as VDataTableHeader),
  ),
);

const getThClass = (header: VDataTableHeader) => {
  const isActive = header.sorting && sortBy.value === header.value;
  const positionFreeze = header.positionFreeze === 'right' ? 'right-0' : 'left-0';
  return [
    isActive
      ? 'text-primary-500 hover:text-primary-600'
      : 'text-gray-600 hover:text-primary-500',
    {
      [`text-${header.align}`]: !!header.align,
    },
    header.freeze ? `sticky ${positionFreeze} bg-gray-50 drop-shadow-lg` : '', 
  ];
};

const getTdClass = (header: VDataTableHeader) => {
  const positionFreeze = header.positionFreeze === 'right' ? 'right-0' : 'left-0';
  return [
    {
      [`text-${header.align}`]: !!header.align,
    },
    header.freeze ? `sticky ${positionFreeze} bg-white drop-shadow-lg` : '',
  ];
};

const handleSort = (header: VDataTableHeader) => {
  if (!header) return;

  let direction = '';
  if (mustSort.value) {
    if (sortDirection.value === 'asc') {
      direction = 'desc';
    } else {
      direction = 'asc';
    }
  } else {
    if (sortDirection.value === '') {
      direction = 'asc';
    } else if (sortDirection.value === 'asc') {
      direction = 'desc';
    } else if (sortDirection.value === 'desc') {
      direction = '';
    }
  }

  header.sorting = direction;

  emit('update:sortBy', header.value);
  emit('update:sortDirection', direction);
  emit('sort', {
    sortBy: header.value,
    direction: direction,
  });
};

const onPerPageChange = (perPage: {text: string; value: number}) => {
  emit('update:itemsPerPage', perPage.value);
};

const paddingClass = computed(() => (dense.value ? 'px-4 py-2' : 'px-6 py-3'));

const onPaginationChange = (params = {}) => {
  emit('pagination:change', {
    page: page.value,
    itemsPerPage: perPage.value,
    ...params,
  });
};

watch(page, (val) => {
  emit('page:change', val);
  onPaginationChange({page: val});
});

watch(perPage, (val) => {
  emit('itemsPerPage:change', val);
  onPaginationChange({itemsPerPage: val});
});

watch(paginationPage, (val) => {
  page.value = val;
});

const selected = ref<any>([]);

const selectAll = computed<boolean>({
  get() {
    return items.value.length
      ? selected.value.length == items.value.length
      : false;
  },
  set(value) {
    const selectedItems: any = [];

    if (value) {
      items.value.forEach(function (item) {
        selectedItems.push(item);
      });
    }

    selected.value = selectedItems;
  },
});

watch(
  selected,
  (val) => {
    emit('update:modelValue', val);
  },
  {deep: true, immediate: true},
);

watch(
  modelValue,
  (val) => {
    selected.value = val;
  },
  {deep: true, immediate: true},
);

// watch(
//   value,
//   (val) => {
//     selected.value = val;
//   },
//   {deep: true, immediate: true},
// );

const start = computed(() =>
  totalItems.value > 0 ? (page.value - 1) * itemsPerPage.value + 1 : 1,
);
const end = computed(() =>
  totalItems.value > 0 ? start.value + itemsPerPage.value - 1 : null,
);
</script>

<template>
  <div
    class="w-full flex flex-col border-gray-200 rounded sm:rounded-lg"
    :class="[!noShadow ? 'shadow' : '']"
  >
    <div class="overflow-x-auto rounded-t-md">
      <table class="w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              v-for="header in computedHeaders"
              :key="header.value"
              scope="col"
              class="text-left py-3 text-sm font-bold uppercase tracking-wider"
              :class="[getThClass(header), paddingClass, header.class]"
            >
              <slot
                v-if="selectable && header.value === 'selected'"
                name="header.selectable"
              >
                <v-checkbox v-model="selectAll" />
              </slot>
              <slot v-else :name="`header.${header.value}`">
                <a
                  v-if="!disableSorting && header.sortable"
                  href="#"
                  class="flex items-center truncate"
                  :class="[header.align ? `justify-${header.align}` : 'justify-between']"
                  @click.prevent="handleSort(header)"
                >
                  <span>
                    {{ header.text }}
                  </span>
                  <ChevronDownIcon
                    v-if="header.sorting === 'desc'"
                    class="ml-2 h-5 w-5"
                  />
                  <ChevronUpIcon
                    v-if="header.sorting === 'asc'"
                    class="ml-2 h-5 w-5"
                  />
                </a>
                <span v-else>
                  {{ header.text }}
                </span>
              </slot>
            </th>
          </tr>
        </thead>
        <tbody
          class="bg-white"
          :class="[striped ? '' : 'divide-y divide-gray-200']"
        >
          <template v-if="paginatedItems.length < 1 && !loading">
            <slot name="empty">
              <tr>
                <td
                  :colspan="headers.length"
                  class="text-center text-gray-600 text-sm whitespace-nowrap"
                  :class="[paddingClass]"
                >
                  {{ noDataText }}
                </td>
              </tr>
            </slot>
          </template>
          <template v-if="loading">
            <slot name="loading">
              <tr>
                <td
                  :colspan="headers.length"
                  class="text-center text-gray-600 text-sm whitespace-nowrap"
                  :class="[paddingClass]"
                >
                  <v-spinner color="primary" class="mr-1" />

                  {{ loadingText }}
                </td>
              </tr>
            </slot>
          </template>
          <tr
            v-else
            v-for="(item, index) in paginatedItems"
            :key="`item-${index}`"
            :class="[
              striped ? 'even:bg-gray-100' : '',
              hover ? 'transition duration-300 hover:bg-gray-100' : '',
            ]"
          >
            <td
              v-for="header in headers"
              :key="`header-${header.value}`"
              class="whitespace-nowrap text-sm text-gray-900"
              :class="[getTdClass(header), paddingClass]"
            >
              <slot
                v-if="selectable && header.value === 'selected'"
                name="item.selected"
              >
                <v-checkbox v-model="selected" :value="item" />
              </slot>
              <slot v-else-if="header.value === 'index'" name="item.index">
                {{ start + index }}
              </slot>
              <slot
                v-else
                :name="`item.${header.value}`"
                :item="item"
                :index="index"
              >
                {{ get(item, header.value) }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <template v-if="!hideFooter">
      <slot name="footer">
        <VDataTablePagination
          v-model="page"
          :background-color="footerColor ? footerColor : ''"
          class="rounded-b-md"
          :total-items="serverSide ? totalItems : items.length"
          v-model:itemsPerPage="perPage"
          v-bind="pagination"
        />
      </slot>
    </template>
  </div>
</template>

<style scoped></style>
