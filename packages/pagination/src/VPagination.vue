<script setup lang="ts">
import {computed, ref, toRefs, watch} from 'vue';
import Pagino from 'pagino';

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
    default:
      'bg-primary-600 border-primary-600 hover:!bg-primary-700 text-white !font-semibold',
  },
  defaultClass: {
    type: String,
    default: 'text-gray-700',
  },
  simple: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

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
  <nav
    class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
    aria-label="Pagination"
  >
    <template v-for="item in pages" :key="item">
      <button
        v-if="item === 'previous'"
        :disabled="cantPrev"
        class="
          relative
          inline-flex
          items-center
          px-2
          py-2
          border border-gray-300
          bg-white
          text-sm
          font-medium
        "
        :class="{
          'rounded-l-md': !pagino.showFirst,
          'cursor-not-allowed text-gray-300': cantPrev,
          'text-gray-600 hover:bg-gray-50': !cantPrev,
        }"
        @click.prevent="pagino.previous()"
      >
        <slot name="btnPrev">
        <span class="sr-only">Previous</span>
        <!-- Heroicon name: solid/chevron-left -->
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        </slot>
      </button>

      <button
        v-else-if="item === 'next'"
        :disabled="cantNext"
        class="
          relative
          inline-flex
          items-center
          px-2
          py-2
          border border-gray-300
          bg-white
          text-sm
          font-medium
        "
        :class="{
          'rounded-r-md': !pagino.showLast,
          'cursor-not-allowed text-gray-300': cantNext,
          'text-gray-600 hover:bg-gray-50': !cantNext,
        }"
        @click.prevent="pagino.next()"
      >
        <slot name="btnNext">
        <span class="sr-only">Next</span>
        <!-- Heroicon name: solid/chevron-right -->
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        </slot>
      </button>
      <button
        v-else-if="item === 'first'"
        :disabled="isFirstPage"
        class="
          relative
          inline-flex
          items-center
          px-2
          py-2
          rounded-l-md
          border border-gray-300
          bg-white
          text-sm
          font-medium
        "
        :class="{
          'cursor-not-allowed text-gray-300': isFirstPage,
          'text-gray-600 hover:bg-gray-50': !isFirstPage,
        }"
        @click.prevent="pagino.first()"
      >
        <slot name="btnFirst">
        <span class="sr-only">First</span>
        <svg
          class="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        </slot>
      </button>
      <button
        v-else-if="item === 'last'"
        :disabled="isLastPage"
        class="
          relative
          inline-flex
          items-center
          px-2
          py-2
          rounded-r-md
          border border-gray-300
          bg-white
          text-sm
          font-medium
        "
        :class="{
          'cursor-not-allowed text-gray-300': isLastPage,
          'text-gray-600 hover:bg-gray-50': !isLastPage,
        }"
        @click.prevent="pagino.last()"
      >
        <slot name="btnLast">
          <span class="sr-only">Last</span>
          <svg
              class="h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
          >
            <path
                fill-rule="evenodd"
                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
            />
            <path
                fill-rule="evenodd"
                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
            />
          </svg>
        </slot>
      </button>
      <span
        v-else-if="item === 'start-ellipsis' || item === 'end-ellipsis'"
        class="
          relative
          inline-flex
          items-center
          px-4
          py-2
          border border-gray-300
          bg-white
          text-sm
          font-medium
          text-gray-700
        "
      >
        ...
      </span>
      <a
        v-else-if="!simple"
        href="#"
        class="
          relative
          inline-flex
          items-center
          px-4
          py-2
          border border-gray-300
          text-sm
          font-medium
          hover:bg-gray-50
        "
        :class="pagino.page === item ? activeClasses : defaultClasses"
        @click.prevent="pagino.setPage(item)"
      >
        {{ item }}
      </a>
      <span
        v-else-if="simple && pagino.page === item"
        class="
          relative
          inline-flex
          items-center
          px-4
          py-2
          border border-gray-300
          text-sm
          font-medium
          hover:bg-gray-50
        "
      >
        {{ item }}
      </span>
    </template>
  </nav>
</template>
