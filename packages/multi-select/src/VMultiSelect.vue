<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {
  computed,
  ref,
  toRefs,
  onBeforeUpdate,
  watch,
  nextTick,
  PropType,
} from 'vue';
import {CheckIcon, ChevronDownIcon, XIcon} from '@heroicons/vue/solid';
import VBadge from '@gits-id/badge';
import VTooltip from '@gits-id/tooltip';
import {onClickOutside, useDebounceFn} from '@vueuse/core';
import {ErrorMessage} from 'vee-validate';

type VMultiSelectItem = {
  text: string;
  value: any;

  [x: string]: any;
};

const props = defineProps({
  value: {
    type: Array as PropType<VMultiSelectItem[]>,
    default: () => [],
  },
  modelValue: {
    type: Array as PropType<VMultiSelectItem[]>,
    default: () => [],
  },
  items: {
    type: Array as PropType<VMultiSelectItem[]>,
    default: () => [],
  },
  itemText: {
    type: String,
    default: 'text',
  },
  itemValue: {
    type: String,
    default: 'value',
  },
  searchBy: {
    type: String,
    default: 'text',
  },
  maxBadge: {
    type: Number,
    default: 0,
  },
  placeholder: {
    type: String,
    default: 'Search...',
  },
  delay: {
    type: Number,
    default: 500,
  },
  id: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  inputProps: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
  selectAll: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits([
  'click:outside',
  'update:modelValue',
  'search',
  'selected',
]);

const {
  maxBadge,
  items,
  value,
  modelValue,
  placeholder,
  id,
  delay,
  name,
  inputProps,
  itemText,
  itemValue,
  searchBy,
  selectAll,
  loading,
} = toRefs(props);

// refs
const target = ref(null);
const isOpen = ref(false);
const search = ref('');
const selected = ref(modelValue.value);
const focus = ref(-1);
const refItems = ref<HTMLDivElement[]>([]);
const dropdown = ref<HTMLDivElement | null>(null);

const matchBy = (item: VMultiSelectItem, key: string) =>
  String(item?.[key])?.toLowerCase()?.includes(search.value.toLowerCase());

const searchItem = (item: VMultiSelectItem) => {
  const searchVal = search.value;

  if (!searchVal) return true;

  const searchable = [searchBy.value, itemText.value, itemValue.value];

  return searchable.filter(Boolean).some((query) => matchBy(item, query));
};

// computed
const filteredItems = computed(() => items.value.filter(searchItem));
const badges = computed(() =>
  maxBadge.value > 0 ? selected.value.slice(0, maxBadge.value) : selected.value,
);

// methods
const setRefItem = (el: any, index: number) => {
  if (el) refItems.value[index] = el;
};

onBeforeUpdate(() => {
  refItems.value = [];
});

const handleSelect = (item: VMultiSelectItem) => {
  const index = findIndex(item);
  if (index > -1) {
    selected.value.splice(index, 1);
  } else {
    selected.value.push(item);
  }
  emit('selected', selected);
};

const findIndex = (item: VMultiSelectItem) =>
  selected.value.findIndex(
    (sItem) => sItem[itemValue.value] === item?.[itemValue.value],
  );

const hasItem = (item: VMultiSelectItem) => findIndex(item) > -1;

const isSelected = (item: VMultiSelectItem, index: number) => {
  return item.selected || hasItem(item);
};

const clearSelected = () => {
  selected.value = [];
  focus.value = -1;
};

const deselect = (item: VMultiSelectItem) => {
  const index = findIndex(item);
  if (index > -1) {
    selected.value.splice(index, 1);
  }
};

const handleSearch = useDebounceFn((event) => {
  isOpen.value = true;
  search.value = event.target.value;
  focus.value = 0;

  emit('search', search);
}, delay.value);

const isAllSelected = computed(
  () => selected.value.length === items.value.length,
);

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    clearSelected();
  } else {
    items.value.forEach((item) => {
      const index = findIndex(item);
      if (index < 0) {
        selected.value.push(item);
      }
    });
  }
};

const onInputClick = () => {
  isOpen.value = true;
};

onClickOutside(target, () => {
  emit('click:outside');
  isOpen.value = false;
});

const onEnter = () => {
  const focused = filteredItems.value[focus.value];
  if (focused) {
    handleSelect(focused);
  }
};

const onDown = () => {
  if (!isOpen.value) {
    isOpen.value = true;
  }

  if (focus.value === null) {
    focus.value = 0;
  } else if (focus.value < items.value.length - 1) {
    focus.value++;
  }

  focusItem();
};

const onUp = () => {
  if (!isOpen.value) {
    isOpen.value = true;
  }

  if (focus.value === null) {
    focus.value = 0;
  } else if (focus.value === 0) {
    focus.value = -1;
  } else {
    focus.value--;
  }

  focusItem();
};

const onTab = (e: KeyboardEvent) => {
  if (e.shiftKey) {
    onUp();
  } else {
    onDown();
  }
};

const onEsc = () => {
  isOpen.value = false;
};

const focusItem = () => {
  nextTick(() => {
    const index = focus.value;
    const target = refItems.value[index];
    const top = target?.offsetTop - (dropdown.value!.offsetHeight - 100);

    dropdown.value?.scrollTo({top, behavior: 'smooth'});
  });
};

// watcher
watch(
  modelValue,
  (val) => {
    selected.value = val;
  },
  {immediate: true, deep: true},
);

watch(
  value,
  (val) => {
    selected.value = val;
  },
  {immediate: true, deep: true},
);

watch(
  selected,
  (val) => {
    emit('update:modelValue', val);
  },
  {deep: true},
);
</script>

<template>
  <div ref="target" class="">
    <div>
      <div class="relative mt-1">
        <div
          as="div"
          class="min-h-[50px] relative w-full py-1 pl-3 pr-10 text-left bg-white rounded-lg border cursor-default focus:outline-none sm:text-sm gap-y-1 flex flex-wrap items-center focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-offset-2"
          :class="[error ? 'v-multi-select-error' : 'v-multi-select-normal']"
          @click="(e) => e.preventDefault()"
        >
          <div v-if="selected.length" class="flex items-center gap-2 flex-wrap">
            <v-badge
              v-for="sItem in badges"
              :key="sItem.value"
              color="primary"
              dismissable
              small
              class="h-6 truncate"
              @dismiss="deselect(sItem)"
            >
              {{ sItem[itemText] }}
            </v-badge>

            <v-badge v-if="maxBadge > 0 && selected.length > maxBadge" small>
              {{ selected.length - maxBadge }} more
            </v-badge>
          </div>
          <input
            :id="id"
            type="search"
            class="border-none px-1 py-1 focus:outline-none focus:!ring-0 focus:!border-none text-sm flex-grow"
            autofill="false"
            autocomplete="off"
            :placeholder="selected.length < 1 ? placeholder : ''"
            :name="name"
            v-bind="inputProps"
            @input="handleSearch"
            @focus="onInputClick"
            @keydown.enter.prevent="onEnter"
            @keydown.down.prevent="onDown"
            @keydown.up.prevent="onUp"
            @keydown.tab.prevent="onTab"
            @keydown.esc.prevent="onEsc"
          />

          <span class="absolute inset-y-0 right-0 flex items-center pr-2">
            <v-tooltip v-if="selected.length > 1">
              <template #activator="{on}">
                <v-badge
                  outlined
                  circle
                  class="!p-1 !bg-transparent"
                  @click="clearSelected"
                  v-on="on"
                >
                  <XIcon class="text-gray-400" />
                </v-badge>
              </template>
              <span>Clear</span>
            </v-tooltip>

            <ChevronDownIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </div>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div
            v-if="isOpen"
            ref="dropdown"
            class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm px-0 z-10"
          >
            <div v-if="loading" class="pl-6 pr-4 py-2 text-gray-600">
              Loading...
            </div>
            <template v-else-if="filteredItems.length">
              <template v-if="selectAll">
                <div
                  class="bg-white hover:text-primary-500 hover:bg-primary-100 text-gray-900 cursor-default select-none py-2 pl-10 pr-4 relative"
                  @click="toggleSelectAll"
                >
                  <span
                    :class="[
                      isAllSelected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                  >
                    {{ isAllSelected ? 'Deselect All' : 'Select All' }}
                  </span>
                  <span
                    v-if="isAllSelected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-500"
                  >
                    <CheckIcon class="w-5 h-5" aria-hidden="true" />
                  </span>
                </div>
                <div class="border-b h-1"></div>
              </template>
              <div
                v-for="(item, index) in filteredItems"
                :key="item.value"
                :ref="(el) => setRefItem(el, index)"
                @click="handleSelect(item)"
                @mouseover="focus = index"
                @mouseout="focus = -1"
              >
                <div
                  class="bg-white hover:text-primary-500 hover:bg-primary-100"
                  :class="[
                    focus === index
                      ? 'text-primary-500 bg-primary-100'
                      : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-10 pr-4',
                  ]"
                >
                  <span
                    :class="[
                      isSelected(item, index) ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                  >
                    {{ item[itemText] }}
                  </span>
                  <span
                    v-if="isSelected(item, index)"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-500"
                  >
                    <CheckIcon class="w-5 h-5" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </template>
            <div v-else class="pl-6 pr-4 py-2 text-gray-600">No Data</div>
          </div>
        </transition>
      </div>
    </div>
  </div>
  <ErrorMessage
    v-if="errorMessages.length"
    class="text-error-600 text-sm"
    :name="name"
  />
</template>

<style scoped>
.v-multi-select-error {
  @apply border-error-600 focus-visible:ring-white focus-visible:ring-offset-error-300 focus-visible:border-error-500;
}

.v-multi-select-normal {
  @apply border-gray-300 focus-visible:ring-white focus-visible:ring-offset-gray-300 focus-visible:border-primary-500;
}
</style>
