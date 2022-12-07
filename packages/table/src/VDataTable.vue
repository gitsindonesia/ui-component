<script setup lang="ts">
import {computed, watch, ref, toRefs} from 'vue';
import type {PropType} from 'vue';
import VDataTablePagination from './VDataTablePagination.vue';
import type {SortDirection, VDataTableHeader, VDataTableItem} from './types';
import VSpinner from '@gits-id/spinner';
import {VCheckbox} from '@gits-id/forms';
import {get} from '@gits-id/utils';
import Icon from '@gits-id/icon';
import '@gits-id/forms/dist/style.css';
import '@gits-id/pagination/dist/style.css';

type VDataTablePaginationProps = InstanceType<typeof VDataTablePagination>['$props']

const props = defineProps({
  modelValue: {
    type: Array as PropType<VDataTableItem[]>,
    default: () => [],
  },
  /**
   * @deprecated use `modelValue` instead
   */
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
    type: Object as PropType<VDataTablePaginationProps>,
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
    default: '',
  },
  bodyClass: {
    type: String,
    default: '',
  },
  footerClass: {
    type: String,
    default: '',
  },
  columnActiveClass: {
    type: String,
    default: '',
  },
  columnInactiveClass: {
    type: String,
    default: '',
  },
  hoverClass: {
    type: String,
    default: '',
  },
  stripedClass: {
    type: String,
    default: '',
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
    default: '',
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
    (e: 'row:click', item: VDataTableItem): void;
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
  if (sortBy.value && !serverSide.value) {
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
        sorting: '',
      } as VDataTableHeader),
  ),
);

const getThClass = (header: VDataTableHeader) => {
  const isActive = header.sorting && sortBy.value === header.value;
  return [
    {
      [`v-table-th--${header.align}`]: !!header.align,
      'v-table-th--active': isActive,
      [props.columnActiveClass]: isActive,
      [props.columnInactiveClass]: !isActive,
      'v-table-th--sticky': header.freeze,
      'v-table-th--sticky-right': header.positionFreeze === 'right',
      'v-table-th--sticky-left': header.positionFreeze === 'left',
    },
  ];
};

const getTdClass = (header: VDataTableHeader) => {
  return [
    {
      [`v-table-td--${header.align}`]: !!header.align,
      'v-table-td--sticky': header.freeze,
      'v-table-td--sticky-right': header.positionFreeze === 'right',
      'v-table-td--sticky-left': header.positionFreeze === 'left',
    },
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

const handleRowClick = (item: VDataTableItem, index: number) => {
  if (selectable.value) {
    if (selected.value.includes(item)) {
      selected.value.splice(index, 1);
    } else {
      selected.value.push(item);
    }
  }
  emit('row:click', item);
};
</script>

<template>
  <div
    class="v-table"
    :class="[
      {
        'v-table--shadow': !noShadow && !flat,
        'v-table--rounded': !tile,
        'v-table--bordered': bordered,
        'v-table--striped': striped,
        'v-table--empty': !items.length,
        'v-table--loading': loading,
        'v-table--flat': flat,
        'v-table--dense': dense,
        'v-table--tile': tile,
        'v-table--hover': hover,
        'v-table--selectable': selectable,
      },
      wrapperClass,
    ]"
  >
    <div class="v-table-overflow">
      <table class="v-table-table">
        <thead class="v-table-thead" :class="headerClass">
          <tr class="v-table-tr">
            <th
              v-for="header in computedHeaders"
              :key="header.value"
              scope="col"
              class="v-table-th group"
              :class="[getThClass(header), header.class]"
              :width="header.width"
            >
              <slot
                v-if="selectable && header.value === 'selected'"
                name="header.selectable"
                :selectAll="selectAll"
              >
                <v-checkbox v-model="selectAll" />
              </slot>
              <slot v-else :name="`header.${header.value}`">
                <button
                  v-if="!disableSorting && header.sortable"
                  role="button"
                  aria-label="Sort"
                  type="button"
                  class="v-table-sort-button"
                  :class="[
                    header.align
                      ? `justify-${header.align}`
                      : 'justify-between',
                  ]"
                  @click="handleSort(header)"
                >
                  <span class="v-table-sort-header-text">
                    {{ header.text }}
                  </span>
                  <Icon
                    name="heroicons:chevron-down"
                    v-if="header.sorting === 'desc'"
                    class="v-table-sort-icon"
                  />
                  <Icon
                    name="heroicons:chevron-up"
                    v-if="header.sorting === 'asc'"
                    class="v-table-sort-icon"
                  />
                </button>
                <span v-else class="v-table-header-text">
                  {{ header.text }}
                </span>
              </slot>
            </th>
          </tr>
        </thead>
        <tbody class="v-table-tbody" :class="bodyClass">
          <template v-if="paginatedItems.length < 1 && !loading">
            <slot name="empty">
              <tr class="v-table-tr group">
                <td :colspan="headers.length" class="v-table-td">
                  {{ noDataText }}
                </td>
              </tr>
            </slot>
          </template>
          <template v-if="loading">
            <slot name="loading">
              <tr class="v-table-tr group">
                <td :colspan="headers.length" class="v-table-td">
                  <v-spinner color="primary" class="mr-1 v-table-spinner" />
                  {{ loadingText }}
                </td>
              </tr>
            </slot>
          </template>
          <tr
            v-else
            v-for="(item, index) in paginatedItems"
            :key="`item-${index}`"
            class="group v-table-tr"
            :class="{
              [stripedClass]: striped,
              [hoverClass]: hover,
              [trClass]: Boolean(trClass),
            }"
            @click="handleRowClick(item, index)"
          >
            <td
              v-for="header in headers"
              :key="`header-${header.value}`"
              class="v-table-td"
              :class="[getTdClass(header), tdClass, header?.tdClass || '']"
            >
              <slot
                v-if="selectable && header.value === 'selected'"
                name="item.selected"
                :selected="selected"
                :item="item"
              >
                <v-checkbox
                  v-model="selected"
                  wrapper-class="v-table-checkbox"
                  :value="(item as any)"
                />
              </slot>
              <slot
                v-else-if="header.value === 'index'"
                name="item.index"
                :index="index"
                :item="item"
              >
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
      <slot
        name="footer"
        v-bind="{
          pagination,
          perPage,
          serverSide,
          items,
          totalItems,
          footerColor,
          footerClass,
          page,
        }"
      >
        <VDataTablePagination
          v-model="page"
          :background-color="footerColor ? footerColor : ''"
          class="v-table-pagination"
          :class="footerClass"
          :total-items="serverSide ? totalItems : items.length"
          v-model:itemsPerPage="perPage"
          v-bind="pagination"
        />
      </slot>
    </template>
  </div>
</template>

<style>
:root {
  /* spacing */
  --v-table-padding-x: theme('spacing.6');
  --v-table-padding-y: theme('spacing.3');
  /* thead */
  --v-table-thead-bg-color: theme('colors.gray.50');
  /* th */
  --v-table-th-color: theme('colors.gray.800');
  --v-table-th-font-size: theme('fontSize.sm');
  --v-table-th-font-weight: theme('fontWeight.semibold');
  --v-table-th-white-space: nowrap;
  --v-table-th-text-align: left;

  /* th active */
  --v-table-th-active-color: theme('colors.primary.500');

  /* th active hover */
  --v-table-th-active-hover-color: theme('colors.primary.600');
  
  /* td */
  --v-table-td-color: theme('colors.gray.800');
  --v-table-td-bg-color: theme('colors.white');
  --v-table-td-font-size: theme('fontSize.sm');
  --v-table-td-font-weight: theme('fontWeight.normal');
  --v-table-td-white-space: nowrap;
  --v-table-td-text-align: left;
  /* dense */
  --v-table-dense-padding-x: theme('spacing.4');
  --v-table-dense-padding-y: theme('spacing.2');

  /* striped */
  --v-table-striped-bg-color: theme('colors.gray.100');

  /* hover */
  --v-table-hover-bg-color: theme('colors.gray.100');
}

.v-table {
  @apply w-full flex flex-col overflow-hidden sm:rounded-lg shadow;
}

.v-table.v-table--flat {
  @apply shadow-none;
}

.v-table.v-table--bordered {
  @apply border shadow-none;
}

.v-table.v-table--tile {
  @apply rounded-none;
}

.v-table.v-table--rounded {
  @apply rounded-lg;
}

.v-table-thead {
  background-color: var(--v-table-thead-bg-color);
}

.v-table-overflow {
  @apply overflow-x-auto rounded-t-md;
}

.v-table-table {
  @apply w-full divide-y divide-gray-200;
}

.v-table-sort-button {
  font-size: var(--v-table-th-font-size);
  font-weight: var(--v-table-th-font-weight);

  @apply flex
    items-center
    truncate
    appearance-none
    uppercase
    tracking-wider gap-2;
}

.v-table-header-text {
  @apply text-sm font-semibold uppercase tracking-wider;
}

.v-table-th {
  padding: var(--v-table-padding-y) var(--v-table-padding-x);
  font-size: var(--v-table-th-font-size);
  font-weight: var(--v-table-th-font-weight);
  white-space: var(--v-table-th-white-space);
  color: var(--v-table-th-color);
  text-align: var(--v-table-th-text-align);
}

.v-table-th--active {
  color: var(--v-table-th-active-color);
}

.v-table-th--active:hover {
  color: var(--v-table-th-active-hover-color);
}

.v-table-td {
  padding: var(--v-table-padding-y) var(--v-table-padding-x);
  font-size: var(--v-table-td-font-size);
  font-weight: var(--v-table-td-font-weight);
  white-space: var(--v-table-td-white-space);
  color: var(--v-table-td-color);
  background: var(--v-table-td-bg-color);
  text-align: var(--v-table-td-text-align);
}

.v-table-pagination {
  @apply rounded-b-md;
}

.v-table-tbody {
  @apply divide-y;
}

/* striped */
.v-table--striped .v-table-tbody {
  @apply divide-gray-200;
}

.v-table--striped .v-table-tr:nth-child(odd) {
  background-color: var(--v-table-striped-bg-color);
}

.v-table--selectable .v-table-td,
.v-table--striped .v-table-td,
.v-table--hover .v-table-td {
  --v-table-td-bg-color: transparent;
}

/* hover */
.v-table--selectable .v-table-tr:hover,
.v-table--hover .v-table-tr:hover {
  background-color: var(--v-table-hover-bg-color);

  @apply transition duration-200;
}

/* selectable */
.v-table--selectable .v-table-tr {
  @apply cursor-pointer;
}

/* loading */
.v-table--loading .v-table-td,
.v-table--empty .v-table-td {
  @apply text-center text-gray-600 text-sm whitespace-nowrap;
}

/* bordered */
.v-table--bordered .v-table-tr {
  @apply divide-x;
}

/* dense */
.v-table--dense .v-table-th,
.v-table--dense .v-table-td {
  padding: var(--v-table-dense-padding-y) var(--v-table-dense-padding-x);
}

/* sticky */
.v-table-th--sticky,
.v-table-td--sticky {
  @apply sticky bg-gray-50 drop-shadow-lg;
}
.v-table-th--sticky-right {
  @apply right-0;
}
.v-table-th--sticky-left {
  @apply left-0;
}

.v-table-td--sticky-right {
  @apply right-0;
}
.v-table-td--sticky-left {
  @apply left-0;
}

/* alignment */
.v-table-th--left {
  --v-table-th-text-align: left;
}
.v-table-th--right {
  --v-table-th-text-align: right;
}
.v-table-th--center {
  --v-table-th-text-align: center;
}
.v-table-td--left {
  --v-table-td-text-align: left;
}
.v-table-td--right {
  --v-table-td-text-align: right;
}
.v-table-td--center {
  --v-table-td-text-align: center;
}
</style>
