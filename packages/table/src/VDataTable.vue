<!-- eslint-disable vue/no-dupe-keys -->
<script
  setup
  lang="ts"
  generic="T extends VDataTableItem, H extends VDataTableHeader"
>
import {computed, watch, ref, toRefs} from 'vue';
import VDataTablePagination from './VDataTablePagination.vue';
import type {SortDirection, VDataTableHeader, VDataTableItem} from './types';
import VSpinner from '@morpheme/spinner';
import {VCheckbox} from '@morpheme/forms';
import {get} from '@morpheme/utils';
import Icon from '@morpheme/icon';

type VDataTablePaginationProps = InstanceType<
  typeof VDataTablePagination
>['$props'];

const props = withDefaults(
  defineProps<{
    modelValue?: T[];
    /**
     * @deprecated use `modelValue` instead
     */
    value?: T[];
    headers: H[];
    items: T[];
    itemsPerPage?: number;
    disableSorting?: boolean;
    pagination?: VDataTablePaginationProps;
    loading?: boolean;
    search?: string;
    searchBy?: string | string[];
    loadingText?: string;
    noDataText?: string;
    footerColor?: string;
    serverSide?: boolean;
    sortBy?: string;
    sortDirection?: SortDirection;
    hover?: boolean;
    striped?: boolean;
    dense?: boolean;
    hideFooter?: boolean;
    totalItems?: number;
    page?: number;
    mustSort?: boolean;
    noShadow?: boolean;
    selectable?: boolean;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    columnActiveClass?: string;
    columnInactiveClass?: string;
    hoverClass?: string;
    stripedClass?: string;
    tdClass?: string;
    trClass?: string;
    wrapperClass?: string;
    flat?: boolean;
    roundedClass?: string;
    bordered?: boolean;
    tile?: boolean;
    multiSort?: boolean;
  }>(),
  {
    modelValue: () => [] as T[],
    value: () => [] as T[],
    headers: () => [] as H[],
    items: () => [] as T[],
    itemsPerPage: 10,
    disableSorting: false,
    pagination: () => ({}),
    loading: false,
    search: '',
    searchBy: '',
    loadingText: 'Loading...',
    noDataText: 'No results',
    footerColor: '',
    serverSide: false,
    sortBy: '',
    sortDirection: '',
    hover: false,
    striped: false,
    dense: false,
    hideFooter: false,
    totalItems: 0,
    page: 1,
    mustSort: false,
    noShadow: false,
    selectable: false,
    headerClass: '',
    bodyClass: '',
    footerClass: '',
    columnActiveClass: '',
    columnInactiveClass: '',
    hoverClass: '',
    stripedClass: '',
    tdClass: '',
    trClass: '',
    wrapperClass: '',
    flat: false,
    roundedClass: '',
    bordered: false,
    tile: false,
    multiSort: false,
  },
);

const emit = defineEmits<{
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
  (e: 'update:modelValue', value: T[]): void;
  (e: 'update:value', value: T[]): void;
  (
    e: 'sort',
    payload: {
      sortBy: string | string[];
      direction: SortDirection | SortDirection[];
    },
  ): void;
  (e: 'row:click', item: T): void;
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
  let clonedItems = JSON.parse(JSON.stringify(items.value)) as T[];

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
      } as H),
  ),
);

const getThClass = (header: H) => {
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

const getTdClass = (header: H) => {
  return [
    {
      [`v-table-td--${header.align}`]: !!header.align,
      'v-table-td--sticky': header.freeze,
      'v-table-td--sticky-right': header.positionFreeze === 'right',
      'v-table-td--sticky-left': header.positionFreeze === 'left',
    },
  ];
};

const handleSort = (header: H) => {
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

const selected = ref<T[] | any>([]);

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
    selected.value = val as any; // FIXME
  },
  {deep: true, immediate: true},
);

const start = computed(() =>
  totalItems.value > 0 ? (page.value - 1) * itemsPerPage.value + 1 : 1,
);

const handleRowClick = (item: T, index: number) => {
  if (selectable.value) {
    if (selected.value.includes(item as any)) {
      selected.value.splice(index, 1);
    } else {
      selected.value.push(item as any);
    }
  }
  emit('row:click', item);
};

defineSlots<
  {
    [K in keyof T as K extends string ? `header.${K}` : never]?: (props: {
      header: H;
      index: number;
    }) => any;
  } & {
    [K in keyof T as K extends string ? `item.${K}` : never]?: (props: {
      item: T;
      index: number;
    }) => any;
  } & {
    default?: (props: {}) => any;
    'header.selectable'?: (props: {selectAll: boolean}) => any;
    'header.index'?: (props: {index: number; item: T}) => any;
    'item.selected'?: (props: {selected: any[]; item: T}) => any;
    'item.index'?: (props: {index: number; item: T}) => any;
    empty?: (props: {}) => any;
    loading?: (props: {}) => any;
    footer?: (props: {
      pagination: VDataTablePaginationProps;
      perPage: number;
      serverSide: boolean;
      items: T[];
      totalItems: number;
      footerColor: string;
      footerClass: string;
      page: number;
    }) => any;
    header: (props: {
      headerClass: string;
      headers: H[];
      sortMap: Map<string, SortDirection>;
      selectable: boolean;
      disableSorting: boolean;
      handleSort: (header: H) => void;
    }) => any;
    body: (props: {
      bodyClass: string;
      items: T[];
      loading: boolean;
      headers: H[];
      noDataText: string;
      striped: boolean;
      hover: boolean;
      trClass: string;
      selected: T[];
      get: (item: T, key: string) => any;
      handleRowClick: (item: T, index: number) => void;
      getTdClass: typeof getTdClass;
    }) => any;
    item: (props: {
      item: T;
      index: number;
      headers: H[];
      striped: boolean;
      hover: boolean;
      trClass: string;
      selected: T[];
      get: (item: T, key: string) => any;
      handleRowClick: (item: T, index: number) => void;
      getTdClass: typeof getTdClass;
    }) => any;
  }
>();
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
        <slot
          name="header"
          v-bind="{
            headerClass,
            headers: computedHeaders,
            sortMap,
            selectable,
            disableSorting,
            handleSort,
          }"
        >
          <thead class="v-table-thead" :class="headerClass">
            <tr class="v-table-tr">
              <template
                v-for="(header, hIndex) in computedHeaders"
                :key="header.value"
              >
                <th
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
                  <slot
                    v-else
                    :name="`header.${header.value}`"
                    :header="header"
                    :index="hIndex"
                  >
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
              </template>
            </tr>
          </thead>
        </slot>
        <slot
          name="body"
          v-bind="{
            bodyClass,
            items: paginatedItems,
            loading,
            headers,
            noDataText,
            striped,
            hover,
            trClass,
            selected,
            get,
            handleRowClick,
            getTdClass,
          }"
        >
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
            <template
              v-else
              v-for="(item, index) in paginatedItems"
              :key="`item-${index}`"
            >
              <slot
                name="item"
                v-bind="{
                  item,
                  index,
                  headers,
                  striped,
                  hover,
                  trClass,
                  selected,
                  get,
                  handleRowClick,
                  getTdClass,
                }"
              >
                <tr
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
                    :class="[
                      getTdClass(header),
                      tdClass,
                      header?.tdClass || '',
                    ]"
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
              </slot>
            </template>
          </tbody>
        </slot>
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
