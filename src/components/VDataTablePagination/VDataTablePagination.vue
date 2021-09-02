<script setup lang="ts">
import {computed, onMounted, ref, toRefs, watch} from 'vue';
import Pagination from '../VPagination/VPagination.vue';
import VSelect from '../VSelect/VSelect.vue';

interface PerPageItem {
  text: string;
  value: number;
}

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
});

const emit = defineEmits([
  'update:modelValue',
  'update:itemsPerPage',
  'update:perPage',
]);

const emitPage = (page: number) => {
  emit('update:modelValue', page);
};

const {modelValue, totalItems, itemsPerPage} = toRefs(props);
const page = ref(modelValue.value);
const start = computed(() =>
  totalItems.value > 0 ? (page.value - 1) * itemsPerPage.value + 1 : 1,
);
const end = computed(() =>
  totalItems.value > 0 ? start.value + itemsPerPage.value - 1 : null,
);

watch(
  page,
  (newVal) => {
    emitPage(newVal);
  },
  {immediate: true},
);

const perPageItems = ref<PerPageItem[]>(
  [5, 10, 15, 25, 50, 100].map((v) => ({
    text: v.toString(),
    value: v,
  })),
);

const perPage = ref<PerPageItem | null>({
  text: itemsPerPage.value.toString(),
  value: itemsPerPage.value,
});

watch(perPage, (val) => {
  emit('update:itemsPerPage', val?.value);
  emit('update:perPage', val);
});
</script>

<template>
  <div class="w-full px-6 py-3 bg-gray-50 border-t flex justify-end">
    <!-- <div>
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">{{ start }}</span>
        to
        <span class="font-medium">{{ end }}</span>
        of
        <span class="font-medium">{{ totalItems }}</span>
        results
      </p>
    </div> -->
    <div class="flex gap-2 items-center">
      <div>
        <v-select
          v-model="perPage"
          :items="perPageItems"
          hide-check-icon
          placeholder="Select"
          class="w-20"
          top
        />
      </div>
      <div>
        <Pagination
          v-model="page"
          :total-items="totalItems"
          :items-per-page="itemsPerPage"
          v-bind="$attrs"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
