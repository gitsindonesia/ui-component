<script setup lang="ts">
import {computed, watch, ref, toRefs} from 'vue';
import type {PropType} from 'vue';
import VDataTablePagination from './VDataTablePagination.vue';
import type {SortDirection, VDataTableHeader, VDataTableItem} from './types';
import {ChevronDownIcon, ChevronUpIcon} from '@heroicons/vue/solid';
import VSpinner from '@gits-id/spinner';
import {VCheckbox} from '@gits-id/forms';
import {get} from '@gits-id/utils';

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
    type: String as PropType<SortDirection>,
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
  headerClass: {
    type: String,
    default: 'bg-gray-50',
  },
  bodyClass: {
    type: String,
    default: 'bg-white',
  },
  footerClass: {
    type: String,
    default: '',
  },
  columnActiveClass: {
    type: String,
    default: 'text-primary-500 hover:text-primary-600',
  },
  columnInactiveClass: {
    type: String,
    default: 'text-gray-600 hover:text-primary-500',
  },
  hoverClass: {
    type: String,
    default: 'transition duration-300 hover:bg-gray-100',
  },
  stripedClass: {
    type: String,
    default: 'even:bg-gray-100',
  },
  tdClass: {
    type: String,
    default: '',
  },
  trClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  flat: {
    type: Boolean,
    default: false,
  },
  roundedClass: {
    type: String,
    default: 'sm:rounded-lg',
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  tile: {
    type: Boolean,
    default: false,
  },
});

const emit =
  defineEmits<{
    (e: 'update:search', value: string): void;
    (e: 'update:sortBy', value: string): void;
    (e: 'update:sortDirection', value: SortDirection): void;
    (e: 'update:page', value: number): void;
    (e: 'update:itemsPerPage', value: number): void;
    (e: 'update:totalItems', value: number): void;
    (e: 'update:pagination', value: Record<string, any>): void;
    (e: 'page:change', value: number): void;
    (e: 'itemsPerPage:change', value: number): void;
    (e: 'pagination:change', value: Record<string, any>): void;
    (e: 'update:modelValue', value: any): void;
    (e: 'update:value', value: any): void;
    (e: 'sort', payload: {sortBy: string; direction: SortDirection}): void;
  }>();

const {
  disableSorting,
  itemsPerPage,
  pagination,
  loading,
  search,
  searchBy,
  serverSide,
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
  sortBy: sortByProp,
  sortDirection: sortDirectionProp,
} = toRefs(props);

const page = ref(paginationPage.value);
const perPage = ref(itemsPerPage.value);
const offset = computed(() => (page.value - 1) * Number(perPage.value));
const sortBy = ref(sortByProp.value);
const sortDirection = ref<SortDirection>(sortDirectionProp.value);

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
  const positionFreeze =
    header.positionFreeze === 'right' ? 'right-0' : 'left-0';
  return [
    isActive ? props.columnActiveClass : props.columnInactiveClass,
    {
      [`text-${header.align}`]: !!header.align,
    },
    header.freeze ? `sticky ${positionFreeze} bg-gray-50 drop-shadow-lg` : '',
  ];
};

const getTdClass = (header: VDataTableHeader) => {
  const positionFreeze =
    header.positionFreeze === 'right' ? 'right-0' : 'left-0';
  return [
    {
      [`text-${header.align}`]: !!header.align,
    },
    header.freeze ? `sticky ${positionFreeze} bg-white drop-shadow-lg` : '',
  ];
};

const handleSort = (header: VDataTableHeader) => {
  if (!header) return;

  let direction: SortDirection = '';
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

  sortBy.value = header.value;
  sortDirection.value = direction;
};

// watch sorting
watch([sortBy, sortDirection], ([newSortBy, newDirection]) => {
  emit('update:sortBy', newSortBy);
  emit('update:sortDirection', newDirection);
  emit('sort', {
    sortBy: newSortBy,
    direction: newDirection,
  });
});

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
  emit('update:page', val);
  onPaginationChange({page: val});
});

watch(perPage, (val) => {
  emit('itemsPerPage:change', val);
  emit('update:itemsPerPage', val);
  onPaginationChange({itemsPerPage: val});
  page.value = 1;
});

watch(paginationPage, (val) => {
  page.value = val;
});

watch(itemsPerPage, (val) => {
  perPage.value = val;
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

const start = computed(() =>
  totalItems.value > 0 ? (page.value - 1) * itemsPerPage.value + 1 : 1,
);
</script>

<template>
  <div
    class="w-full flex flex-col overflow-hidden"
    :class="[
      {
        shadow: !noShadow && !flat,
        [roundedClass]: !tile,
        border: bordered,
        'border-gray-200': bordered,
      },
      wrapperClass,
    ]"
  >
    <div class="overflow-x-auto rounded-t-md">
      <table class="w-full divide-y divide-gray-200">
        <thead :class="headerClass">
          <tr
            :class="{
              'divide divide-x': bordered,
            }"
          >
            <th
              v-for="header in computedHeaders"
              :key="header.value"
              scope="col"
              class="text-left py-3 group"
              :class="[getThClass(header), paddingClass, header.class]"
              :width="header.width"
            >
              <slot
                v-if="selectable && header.value === 'selected'"
                name="header.selectable"
              >
                <v-checkbox v-model="selectAll" />
              </slot>
              <slot v-else :name="`header.${header.value}`">
                <button
                  v-if="!disableSorting && header.sortable"
                  role="button"
                  aria-label="Sort"
                  type="button"
                  class="
                    flex
                    items-center
                    truncate
                    appearance-none
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wider
                  "
                  :class="[
                    header.align
                      ? `justify-${header.align}`
                      : 'justify-between',
                  ]"
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
                </button>
                <span
                  v-else
                  class="text-sm font-semibold uppercase tracking-wider"
                >
                  {{ header.text }}
                </span>
              </slot>
            </th>
          </tr>
        </thead>
        <tbody :class="[striped ? '' : 'divide-y divide-gray-200', bodyClass]">
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
            :class="{
              group: true,
              [stripedClass]: striped,
              [hoverClass]: hover,
              'divide-x': bordered,
              [trClass]: Boolean(trClass),
            }"
          >
            <td
              v-for="header in headers"
              :key="`header-${header.value}`"
              class="whitespace-nowrap text-sm text-gray-900"
              :class="[
                getTdClass(header),
                paddingClass,
                tdClass,
                header?.tdClass || '',
              ]"
            >
              <slot
                v-if="selectable && header.value === 'selected'"
                name="item.selected"
              >
                <v-checkbox v-model="selected" :value="(item as any)" />
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
          :class="footerClass"
          :total-items="serverSide ? totalItems : items.length"
          v-model:itemsPerPage="perPage"
          v-bind="pagination"
        />
      </slot>
    </template>
  </div>
</template>
