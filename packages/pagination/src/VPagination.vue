<script setup lang="ts">
import {computed, ref, toRefs, watch} from 'vue';
import Pagino from 'pagino';
import VPaginationItem from './VPaginationItem.vue';
import VIcon from '@gits-id/icon';
import '@gits-id/icon/dist/style.css';

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

<style>
:root {
  --v-pagination-shadow: theme('boxShadow.sm');

  /* item */
  --v-pagination-item-padding-x: theme('padding.4');
  --v-pagination-item-padding-y: theme('padding.2');
  --v-pagination-item-bg-color: theme('colors.white');
  --v-pagination-item-text-color: theme('colors.gray.700');
  --v-pagination-item-border-color: theme('colors.gray.300');
  --v-pagination-item-border-radius: theme('borderRadius.DEFAULT');
  --v-pagination-item-border-width: theme('borderWidth.DEFAULT');
  --v-pagination-item-font-size: theme('fontSize.sm');
  --v-pagination-item-font-weight: theme('fontWeight.medium');
  --v-pagination-item-height: 38px;
  --v-pagination-item-gap: theme('padding.2');

  /* item active */
  --v-pagination-item-active-bg-color: theme('colors.primary.500');
  --v-pagination-item-active-border-color: theme('colors.primary.500');
  --v-pagination-item-active-text-color: theme('colors.white');

  /* item hover */
  --v-pagination-item-hover-bg-color: theme('colors.gray.50');

  /* item disabled */
  --v-pagination-item-disabled-bg-color: inherit;
  --v-pagination-item-disabled-text-color: theme('colors.gray.400');

  /* item action */
  --v-pagination-item-action-padding-x: theme('padding.2');
  --v-pagination-item-action-padding-y: theme('padding.2');
  /* action sm */
  --v-pagination-sm-item-action-padding-x: theme('padding.2');
  --v-pagination-sm-item-action-padding-y: theme('padding.2');
  /* action sm */
  --v-pagination-lg-item-action-padding-x: theme('padding.4');
  --v-pagination-lg-item-action-padding-y: theme('padding.4');
}

.v-pagination {
  box-shadow: var(--v-pagination-shadow);

  @apply inline-flex items-center -space-x-px;
}

.v-pagination--flat {
  --v-pagination-shadow: none;
}

.v-pagination-item {
  background: var(--v-pagination-item-bg-color);
  color: var(--v-pagination-item-text-color);
  border: 1px solid var(--v-pagination-item-border-color);
  padding: var(--v-pagination-item-padding-y) var(--v-pagination-item-padding-x);
  font-size: var(--v-pagination-item-font-size);
  font-weight: var(--v-pagination-item-font-weight);
  height: var(--v-pagination-item-height);
  gap: var(--v-pagination-item-gap);

  @apply relative inline-flex items-center;
}

.v-pagination-item:disabled {
  background: var(--v-pagination-item-disabled-bg-color);
  color: var(--v-pagination-item-disabled-text-color);

  @apply cursor-not-allowed;
}

.v-pagination-item:first-child {
  border-top-left-radius: var(--v-pagination-item-border-radius);
  border-bottom-left-radius: var(--v-pagination-item-border-radius);
}

.v-pagination-item:last-child {
  border-top-right-radius: var(--v-pagination-item-border-radius);
  border-bottom-right-radius: var(--v-pagination-item-border-radius);
}

.v-pagination-item:hover:not(.v-pagination-item--active):not(.v-pagination-item--ellipsis):not(:disabled) {
  background: var(--v-pagination-item-hover-bg-color);
  color: var(--v-pagination-item-hover-text-color);
}

.v-pagination-item.v-pagination-item--action {
  padding: var(--v-pagination-item-action-padding-y)
    var(--v-pagination-item-action-padding-x);
}

.v-pagination-item.v-pagination-item--active,
.v-pagination-item.v-pagination-item--active:hover {
  --v-pagination-item-bg-color: var(--v-pagination-item-active-bg-color);
  --v-pagination-item-border-color: var(
    --v-pagination-item-active-border-color
  );
  --v-pagination-item-text-color: var(--v-pagination-item-active-text-color);
}

.v-pagination-item.v-pagination--ellipsis {
  --v-pagination-bg-color: transparent;
  --v-pagination-border-color: transparent;
}

/* sizes */
.v-pagination--sm {
  --v-pagination-item-height: 30px;
  --v-pagination-item-font-size: theme('fontSize.xs');
  --v-pagination-item-padding-x: theme('spacing.3');
  --v-pagination-item-padding-y: theme('spacing.1');
}
.v-pagination--sm .v-pagination-item.v-pagination-item--action {
  padding: var(--v-pagination-sm-item-action-padding-y)
    var(--v-pagination-sm-item-action-padding-x);
}

.v-pagination--lg {
  --v-pagination-item-height: 46px;
  --v-pagination-item-font-size: theme('fontSize.base');
  --v-pagination-item-padding-x: theme('spacing.5');
  --v-pagination-item-padding-y: theme('spacing.3');
}
.v-pagination--lg .v-pagination-item.v-pagination-item--action {
  padding: var(--v-pagination-lg-item-action-padding-y)
    var(--v-pagination-lg-item-action-padding-x);
}
</style>
