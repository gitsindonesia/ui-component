<script setup lang="ts">
import {computed, type PropType, ref, toRefs, watch} from 'vue';
import Pagination from '@morpheme/pagination';

type PaginationProps = InstanceType<typeof Pagination>['$props'];

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  totalItems: {
    type: Number,
    default: 0,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
  itemsPerPageOptions: {
    type: Array as PropType<number[]>,
    default: () => [10, 25, 50, 100],
  },
  showingText: {
    type: String,
    default: 'Showing',
  },
  /**
   * @deprecated Use `class` instead
   */
  backgroundColor: {
    type: String,
    default: '',
  },
  dataText: {
    type: String,
    default: 'data',
  },
  fromText: {
    type: String,
    default: 'from',
  },
  pagination: {
    type: Object as PropType<PaginationProps>,
    default: () => ({}),
  },
  itemsPerPageProps: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits([
  'update:modelValue',
  'update:itemsPerPage',
  'update:itemsPerPageOptions',
]);

const {
  modelValue: pageProp,
  itemsPerPage: itemsPerPageProp,
  itemsPerPageOptions: itemsPerPageOptionsProp,
} = toRefs(props);

const page = ref(pageProp.value);
const itemsPerPage = ref(itemsPerPageProp.value);
const itemsPerPageOptions = ref(itemsPerPageOptionsProp.value);

watch(pageProp, (v) => (page.value = v));
watch(itemsPerPageProp, (v) => (itemsPerPage.value = v));
watch(itemsPerPageOptionsProp, (v) => (itemsPerPageOptions.value = v));

watch(page, (v) => emit('update:modelValue', v));
watch(itemsPerPage, (v) => emit('update:itemsPerPage', v));
watch(itemsPerPageOptions, (v) => emit('update:itemsPerPageOptions', v));

const start = computed(() =>
  props.totalItems > 0 ? (page.value - 1) * itemsPerPage.value + 1 : 1,
);

const end = computed(() =>
  props.totalItems > 0 ? start.value + itemsPerPage.value - 1 : null,
);

const perPageItems = computed(() =>
  itemsPerPageOptions.value.map((v) => ({
    text: v.toString(),
    value: v,
  })),
);
</script>

<template>
  <div :class="backgroundColor" class="v-data-table-pagination">
    <slot
      name="rowsPerPage"
      v-bind="{value: itemsPerPage, items: perPageItems}"
    >
      <select
        v-model="itemsPerPage"
        class="v-data-table-pagination-items-per-page"
        v-bind="itemsPerPageProps"
      >
        <option
          v-for="item in perPageItems"
          :value="item.value"
          :key="item.text"
        >
          {{ item.text }}
        </option>
      </select>
    </slot>

    <p class="v-data-table-pagination-meta">
      <slot
        name="meta"
        v-bind="{showingText, start, end, fromText, totalItems, dataText}"
      >
        <span class="v-data-table-pagination-meta-showing-text">
          {{ showingText }}
        </span>
        <span class="v-data-table-pagination-meta-start-text">{{ start }}</span>
        <span class="v-data-table-pagination-meta-separator-text">-</span>
        <span class="v-data-table-pagination-meta-end-text">{{ end }}</span>
        <span class="v-data-table-pagination-meta-from-text">{{
          fromText
        }}</span>
        <span class="v-data-table-pagination-meta-total-items-text">{{
          totalItems
        }}</span>
        <span class="v-data-table-pagination-meta-data-text">
          {{ dataText }}
        </span>
      </slot>
    </p>
    <div class="v-data-table-pagination-pagination">
      <Pagination
        v-model="page"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        v-bind="pagination"
      >
        <template v-for="(_, name) in $slots" v-slot:[name]>
          <slot :name="name" />
        </template>
      </Pagination>
    </div>
  </div>
</template>
