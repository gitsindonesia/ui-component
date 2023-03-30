<script setup lang="ts">
import {computed, watch, ref, toRefs} from 'vue';
import type {PropType} from 'vue';
import VDataTablePagination from './VDataTablePagination.vue';
import type {SortDirection, VDataTableHeader, VDataTableItem} from './types';
import VSpinner from '@morpheme/spinner';
import {VCheckbox} from '@morpheme/forms';
import {get} from '@morpheme/utils';
import Icon from '@morpheme/icon';

type VDataTablePaginationProps = InstanceType<
  typeof VDataTablePagination
>['$props'];

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
  multiSort: {
    type: Boolean,
    default: false,
  },
});

const emit =
  defineEmits<{
    (e: 'update:search', value: string): void;
    (e: 'update:sortBy', value: string | string[]): void;
    (e: 'update:sortDirection', value: SortDirection | SortDirection[]): void;
    (e: 'update:page', value: number): void;
    (e: 'update:itemsPerPage', value: number): void;
    (e: 'update:totalItems', value: number): void;
    (e: 'update:pagination', value: Record<string, any>): void;
    (e: 'page:change', value: number): void;
    (e: 'itemsPerPage:change', value: number): void;
    (e: 'pagination:change', value: Record<string, any>): void;
    (e: 'update:modelValue', value: any): void;
    (e: 'update:value', value: any): void;
    (
      e: 'sort',
      payload: {
        sortBy: string | string[];
        direction: SortDirection | SortDirection[];
      },
    ): void;
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
  multiSort,
} = toRefs(props);

const page = ref(paginationPage.value);
const perPage = ref(itemsPerPage.value);
const offset = computed(() => (page.value - 1) * Number(perPage.value));
const sortBy = ref<string | string[]>(
  multiSort.value && !Array.isArray(sortByProp.value)
    ? [sortByProp.value]
    : sortByProp.value,
);
const sortDirection = ref<SortDirection | SortDirection[]>(
  multiSort.value && !Array.isArray(sortDirectionProp.value)
    ? [sortDirectionProp.value]
    : sortDirectionProp.value,
);

const sortMap = ref<Map<string, SortDirection>>(new Map());

const defaultSearchBy = computed(() => headers.value.map((item) => item.value));

const paginatedItems = computed(() => {
  let clonedItems = JSON.parse(JSON.stringify(items.value)) as VDataTableItem[];

  if (serverSide.value) return clonedItems;

  // sorting
  const sortByKey = Array.from(sortMap.value.keys());
  if (sortByKey.length && !serverSide.value) {
    clonedItems.sort((a, b) => {
      let sortVal = 0;

      // loop each sort key
      sortByKey?.forEach((key: string) => {
        // get value from path ie. user.name.first
        const valA = get(a, key) as any;
        const valB = get(b, key) as any;

        // only do sort if sort value is 0 (meaning, no sort has been done for previous key)
        // if multiSort is supported, this will sort next key only if previous key result is a === b,
        // allowing correct sort order result instead of giving last-key order result.
        if (sortVal === 0) {
          if (!isNaN(+valA) && !isNaN(+valB)) {
            sortVal = +valA - +valB;
          } else {
            sortVal = valA.localeCompare(valB);
          }

          if (sortMap.value.get(key) === 'desc') {
            sortVal = sortVal !== 0 ? -sortVal : 0;
          }
        }
      });

      return sortVal;
    });
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
  const isActive = sortMap.value.get(header.value);
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
  let initDir = sortMap?.value?.get(header.value);

  if (!initDir) {
    direction = 'asc';
  } else if (initDir === 'asc') {
    direction = 'desc';
  } else if (initDir === 'desc') {
    direction = mustSort.value ? 'asc' : '';
  }

  if (direction) {
    if (multiSort.value) {
      sortMap.value?.set(header.value, direction);
    } else {
      sortMap.value?.clear();
      sortMap.value?.set(header.value, direction);
    }
  } else {
    sortMap.value?.delete(header.value);
  }

  sortBy.value = multiSort.value
    ? Array.from(sortMap.value.keys())
    : header.value;
  sortDirection.value = multiSort.value
    ? Array.from(sortMap.value.values())
    : direction;
};

// watch sorting
watch(
  [sortBy, sortDirection, sortMap],
  ([newSortBy, newDirection, newSortMap]) => {
    emit('update:sortBy', newSortBy);
    emit('update:sortDirection', newDirection);
    emit('sort', {
      sortBy: multiSort.value ? Array.from(newSortMap.keys()) : newSortBy,
      direction: multiSort.value
        ? Array.from(newSortMap.values())
        : newDirection,
    });
  },
);

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
                    v-if="sortMap.get(header.value) === 'desc'"
                    class="v-table-sort-icon"
                  />
                  <Icon
                    name="heroicons:chevron-up"
                    v-if="sortMap.get(header.value) === 'asc'"
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

<style lang="scss" src="./VDataTable.scss"></style>
