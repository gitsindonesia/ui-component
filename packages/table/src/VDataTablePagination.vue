<script setup lang="ts">
import {computed, PropType, ref, toRefs, watch} from 'vue';
import Pagination from '@gits-id/pagination';
import VSelect from '@gits-id/select';

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
});

const emit = defineEmits([
  'update:modelValue',
  'update:itemsPerPage',
  'update:perPage',
  'update:itemsPerPageOptions',
]);

const {modelValue, totalItems, itemsPerPage, itemsPerPageOptions} =
  toRefs(props);
const page = ref(modelValue.value);

const start = computed(() =>
  totalItems.value > 0 ? (page.value - 1) * itemsPerPage.value + 1 : 1,
);
const end = computed(() =>
  totalItems.value > 0 ? start.value + itemsPerPage.value - 1 : null,
);

const emitPage = (page: number) => {
  emit('update:modelValue', page);
};

watch(
  page,
  (newVal) => {
    emitPage(newVal);
  },
  {immediate: true},
);

const perPageItems = computed(() =>
  itemsPerPageOptions.value.map((v) => ({
    text: v.toString(),
    value: v,
  })),
);

const itemsPerPageValue = ref<string | number>(itemsPerPage.value);

watch(itemsPerPageValue, (val) => {
  emit('update:itemsPerPage', val);
  emit('update:perPage', val);
});

watch(
  itemsPerPage,
  (val) => {
    itemsPerPageValue.value = val;
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
    :class="backgroundColor"
    class="
      w-full
      px-6
      py-3
      border-t
      flex flex-row
      items-center
      gap-4
      justify-center
      sm:justify-between
    "
  >
    <v-select
      v-model="itemsPerPageValue"
      :items="perPageItems"
      hide-check-icon
      placeholder="Select"
      class="w-30 order-1"
      top
    />

    <p
      class="
        w-auto
        hidden
        sm:flex
        gap-1
        items-center
        text-sm text-gray-700
        order-2
      "
    >
      <span class="hidden sm:inline"> {{ showingText }} </span>
      <span class="font-semibold">{{ start }}</span>
      <span>-</span>
      <span class="font-semibold">{{ end }}</span>
      <span>{{ fromText }}</span>
      <span class="font-semibold">{{ totalItems }}</span>
      <span class="hidden sm:inline"> {{ dataText }} </span>
    </p>
    <div class="flex-grow order-1 sm:order-3">&nbsp;</div>
    <div class="w-auto flex justify-center sm:justify-end order-3 sm:order-4">
      <Pagination
        v-model="page"
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        v-bind="$attrs"
      />
    </div>
  </div>
</template>
