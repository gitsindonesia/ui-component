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
import VBadge from '@gits-id/badge';
import VTooltip from '@gits-id/tooltip';
import {onClickOutside, useDebounceFn} from '@vueuse/core';
import {ErrorMessage, useField} from 'vee-validate';
import Icon from '@gits-id/icon';
import '@gits-id/icon/dist/style.css';
import '@gits-id/tooltip/dist/style.css';

type VMultiSelectItem = {
  text: string;
  value: any;

  [x: string]: any;
};

const props = defineProps({
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
  wrapperClass: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  badgeColor: {
    type: String,
    default: 'primary',
  },
  badgeClass: {
    type: String,
    default: '',
  },
  badgeProps: {
    type: Object,
    default: () => ({}),
  },
  dropdownClass: {
    type: String,
    default: '',
  },
  itemClass: {
    type: String,
    default: '',
  },
  checkWrapperClass: {
    type: String,
    default: '',
  },
  checkIconClass: {
    type: String,
    default: '',
  },
  noDataClass: {
    type: String,
    default: '',
  },
  loadingClass: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: 'mb-2 block',
  },
  rules: {
    type: String,
    default: '',
  },
  errorClass: {
    type: String,
    default: 'text-error-600 mt-1 text-sm',
  },
  transition: {
    type: String,
    default: 'fade',
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
  rules,
} = toRefs(props);

// refs
const target = ref(null);
const isOpen = ref(false);
const search = ref('');
const focus = ref(-1);
const refItems = ref<HTMLDivElement[]>([]);
const dropdown = ref<HTMLDivElement | null>(null);

const {value: selected, errorMessage} = useField(name, rules, {
  initialValue: modelValue.value,
});

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
  selected,
  (val) => {
    emit('update:modelValue', val);
  },
  {deep: true},
);
</script>

<template>
  <div ref="target" class="v-multi-select">
    <div>
      <label :for="id || name" class="v-multi-select-label" :class="labelClass">
        {{ label }}
      </label>
      <div class="v-multi-select-panel">
        <div
          class="v-multi-select-input"
          :class="[
            error || errorMessage
              ? `v-multi-select-error border-error-500`
              : 'v-multi-select-normal border-gray-300 hover:border-gray-400',
            wrapperClass,
          ]"
          @click="isOpen = true"
        >
          <div v-if="selected.length" class="v-multi-select-badges">
            <v-badge
              v-for="sItem in badges"
              :key="sItem.value"
              :color="badgeColor"
              dismissable
              class="truncate"
              :class="badgeClass"
              @dismiss="deselect(sItem)"
              v-bind="badgeProps"
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
            class="v-multi-select-input-control"
            :class="inputClass"
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

          <span class="v-multi-select-action">
            <v-tooltip v-if="selected.length > 1">
              <template #activator="{on}">
                <v-badge
                  circle
                  class="!p-1 !bg-transparent"
                  @click="clearSelected"
                  v-on="on"
                >
                  <Icon name="ri:close-line" class="text-gray-400 w-5 h-5" />
                </v-badge>
              </template>
              <span>Clear</span>
            </v-tooltip>

            <Icon
              name="heroicons:chevron-down"
              class="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </div>

        <transition :name="transition">
          <div
            v-if="isOpen"
            ref="dropdown"
            class="v-multi-select-dropdown"
            :class="dropdownClass"
          >
            <div
              v-if="loading"
              class="v-multi-select-dropdown-loading"
              :class="loadingClass"
            >
              Loading...
            </div>
            <template v-else-if="filteredItems.length">
              <template v-if="selectAll">
                <div class="v-multi-select-item" @click="toggleSelectAll">
                  <div
                    :class="[
                      isAllSelected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                  >
                    {{ isAllSelected ? 'Deselect All' : 'Select All' }}
                  </div>
                  <div v-if="isAllSelected" class="v-multi-select-item-check">
                    <Icon
                      name="heroicons:check"
                      class="w-5 h-5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div class="border-b h-1"></div>
              </template>
              <template
                v-for="(item, index) in filteredItems"
                :key="item.value"
              >
                <div
                  :ref="(el) => setRefItem(el, index)"
                  @click="handleSelect(item)"
                  @mouseover="focus = index"
                  @mouseout="focus = -1"
                  class="v-multi-select-item group"
                  :class="[
                    itemClass,
                    {
                      'v-multi-select-item--focused': focus === index,
                      'v-multi-select-item--active': isSelected(item, index),
                    },
                  ]"
                >
                  <div
                    class="v-multi-select-item-check"
                    :class="checkWrapperClass"
                  >
                    <Icon
                      name="heroicons:check"
                      class="w-5 h-5"
                      :class="checkIconClass"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="v-multi-select-item-text">
                    {{ item[itemText] }}
                  </div>
                </div>
              </template>
            </template>
            <div
              v-else
              class="pl-6 pr-4 py-2 text-gray-600"
              :class="noDataClass"
            >
              No Data
            </div>
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
  <div v-else-if="errorMessage" :class="errorClass">
    {{ errorMessage }}
  </div>
</template>

<style>
.v-multi-select-error {
  @apply border-error-600 focus-visible:ring-white focus-visible:ring-offset-error-300 focus-visible:border-error-500;
}

.v-multi-select-normal {
  @apply border-gray-300 focus-visible:ring-white focus-visible:ring-offset-gray-300 focus-visible:border-primary-500;
}

.v-multi-select-input {
  @apply relative
    w-full
    py-2
    pl-3
    pr-10
    text-left
    bg-white
    rounded-md
    border
    cursor-default
    focus:outline-none
    sm:text-sm
    gap-y-1
    flex flex-wrap
    items-center
    focus-visible:ring-2
    focus-visible:ring-opacity-75
    focus-visible:ring-offset-2;
}

.v-multi-select-panel {
  @apply relative mt-1;
}

.v-multi-select-badges {
  @apply flex items-center gap-2 flex-wrap;
}

.v-multi-select-dropdown {
  @apply absolute
    w-full
    py-1
    mt-1
    overflow-auto
    text-base
    bg-white
    rounded-md
    shadow-lg
    max-h-60
    ring-1 ring-black ring-opacity-5
    focus:outline-none
    sm:text-sm
    px-0
    z-10;
}

.v-multi-select-input-control {
  @apply border-none
    px-1
    py-1
    focus:outline-none
    focus:!ring-0
    focus:!border-none
    text-sm
    flex-grow;
}

.v-multi-select-action {
  @apply absolute inset-y-0 right-0 flex items-center pr-2;
}

.v-multi-select-item {
  @apply bg-white
    hover:text-white
    hover:bg-primary-500
    text-gray-800
    cursor-default
    select-none
    px-3 py-2
    relative flex gap-2 items-center;
}

.v-multi-select-item--focused {
  @apply text-white bg-primary-500;
}

.v-multi-select-dropdown-loading {
  @apply pl-6 pr-4 py-2 text-gray-500;
}

.v-multi-select-item-check {
  @apply invisible flex items-center text-white group-hover:text-white group-focus:text-white;
}

.v-multi-select-item--active .v-multi-select-item-check {
  @apply visible text-primary-500;
}

.v-multi-select-item-text {
  @apply block truncate;
}
</style>
