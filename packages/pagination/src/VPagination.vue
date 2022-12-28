<script setup lang="ts">
import {computed, ref, toRefs, watch} from 'vue';
import Pagino from 'pagino';
import VPaginationItem from './VPaginationItem.vue';
import VIcon from '@gits-id/icon';

const props = defineProps({
  modelValue: {
    type: Number,
    default: 1,
  },
  showFirst: {
    type: Boolean,
    default: true,
  },
  showPrevious: {
    type: Boolean,
    default: true,
  },
  showNext: {
    type: Boolean,
    default: true,
  },
  showLast: {
    type: Boolean,
    default: true,
  },
  totalItems: {
    type: Number,
    default: 0,
  },
  siblingCount: {
    type: Number,
    default: 1,
  },
  boundaryCount: {
    type: Number,
    default: 1,
  },
  itemsPerPage: {
    type: Number,
    default: 10,
  },
  activeClass: {
    type: String,
    default: 'v-pagination--active',
  },
  defaultClass: {
    type: String,
    default: '',
  },
  simple: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
  },
  prevIcon: {
    type: String,
    default: 'heroicons:chevron-left-20-solid',
  },
  nextIcon: {
    type: String,
    default: 'heroicons:chevron-right-20-solid',
  },
  firstIcon: {
    type: String,
    default: 'heroicons:chevron-double-left-20-solid',
  },
  lastIcon: {
    type: String,
    default: 'heroicons:chevron-double-right-20-solid',
  },
  iconSize: {
    type: String,
    default: 'sm',
  },
  iconClass: {
    type: String,
    default: '',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: number): void;
  }>();

const {
  totalItems,
  modelValue,
  itemsPerPage,
  activeClass,
  defaultClass,
  simple,
} = toRefs(props);

const page = ref(modelValue.value);

const totalPages = computed(() =>
  Math.ceil(totalItems.value / itemsPerPage.value),
);

const pagino = computed<any>(() => {
  return new (Pagino as any)({
    ...props,
    page: page.value,
    count: totalPages.value,
    onChange: (localPage: number) => {
      if (Number.isNaN(localPage)) return;
      page.value = localPage;
      emitPage(localPage);
    },
  });
});

const pages = computed(() => pagino.value.getPages());
const isFirstPage = computed(() => page.value === 1);
const isLastPage = computed(() => page.value === totalPages.value);
const cantNext = computed(() => page.value >= totalPages.value);
const cantPrev = computed(() => page.value <= 1);

const activeClasses = computed(() => activeClass.value);
const defaultClasses = computed(() => defaultClass.value);

const emitPage = (newPage: number) => {
  emit('update:modelValue', newPage);
};

watch(
  page,
  (val) => {
    emitPage(val);
  },
  {immediate: true},
);

watch(
  modelValue,
  (val) => {
    page.value = val;
  },
  {immediate: true},
);
</script>

<template>
  <div
    aria-label="Pagination"
    class="v-pagination"
    :class="[
      `v-pagination--${size}`,
      {
        'v-pagination--flat': flat,
      },
    ]"
  >
    <template v-for="item in pages" :key="item">
      <VPaginationItem
        v-if="item === 'previous'"
        :disabled="cantPrev"
        sr-text="Previous"
        action
        @click="pagino.previous()"
      >
        <VIcon
          v-if="prevIcon"
          :name="prevIcon"
          :size="iconSize"
          :class="iconClass"
        />
        <slot name="btnPrev" />
      </VPaginationItem>
      <VPaginationItem
        v-else-if="item === 'next'"
        :disabled="cantNext"
        sr-text="Next"
        action
        @click="pagino.next()"
      >
        <slot name="btnNext" />
        <VIcon
          v-if="nextIcon"
          :name="nextIcon"
          :size="iconSize"
          :class="iconClass"
        />
      </VPaginationItem>
      <VPaginationItem
        v-else-if="item === 'first'"
        :disabled="isFirstPage"
        sr-text="First"
        first
        action
        @click="pagino.first()"
      >
        <VIcon
          v-if="firstIcon"
          :name="firstIcon"
          :size="iconSize"
          :class="iconClass"
        />
        <slot name="btnFirst" />
      </VPaginationItem>
      <VPaginationItem
        v-else-if="item === 'last'"
        :disabled="isLastPage"
        sr-text="Last"
        last
        action
        @click="pagino.last()"
      >
        <slot name="btnLast" />
        <VIcon
          v-if="lastIcon"
          :name="lastIcon"
          :size="iconSize"
          :class="iconClass"
        />
      </VPaginationItem>
      <VPaginationItem
        v-else-if="['start-ellipsis', 'end-ellipsis'].includes(item) && !simple"
        ellipsis
      >
        <slot name="ellipsis"> ... </slot>
      </VPaginationItem>
      <VPaginationItem
        v-else-if="!simple"
        :active="pagino.page === item"
        :class="[
          defaultClasses,
          {
            [activeClasses]: pagino.page === item,
          },
        ]"
        @click="pagino.setPage(item)"
      >
        {{ item }}
      </VPaginationItem>
      <VPaginationItem
        v-else-if="simple && pagino.page === item"
        simple
        :active="pagino.page === item"
      >
        {{ item }}
      </VPaginationItem>
    </template>
  </div>
</template>

<style src="./VPagination.scss" lang="scss"></style>
