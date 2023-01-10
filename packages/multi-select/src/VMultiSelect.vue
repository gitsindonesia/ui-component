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
import '@gits-id/tooltip/dist/style.css';
import {VMultiSelectItem} from './types';

type SearchByFunction = (item: VMultiSelectItem, search: string) => boolean;

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
    type: [String, Function] as PropType<string | SearchByFunction>,
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
  iconSize: {
    type: String,
    default: 'sm',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
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
  disabled,
  readonly,
} = toRefs(props);

// refs
const uncontrolledValue = ref<VMultiSelectItem[]>([]);
const target = ref(null);
const isOpen = ref(false);
const search = ref('');
const focus = ref(-1);
const refItems = ref<HTMLDivElement[]>([]);
const dropdown = ref<HTMLDivElement | null>(null);

const {value: vvValue, errorMessage, setValue} = useField(name, rules, {
  initialValue: modelValue.value,
  syncVModel: true,
});

const matchBy = (item: VMultiSelectItem, key: string) => {
  return String(item?.[key])
    ?.toLowerCase()
    ?.includes(search.value.toLowerCase());
};

const searchItem = (item: VMultiSelectItem) => {
  if (!search.value) return true;

  return [
    typeof searchBy.value === 'string' ? searchBy.value : '',
    itemText.value,
    itemValue.value,
  ]
    .filter(Boolean)
    .some((query) => {
      if (typeof searchBy.value === 'function') {
        return searchBy.value(item, search.value);
      }

      return matchBy(item, query);
    });
};

// computed
const filteredItems = computed(() => items.value.filter(searchItem));
const badges = computed(() =>
  maxBadge.value > 0 ? uncontrolledValue.value.slice(0, maxBadge.value) : uncontrolledValue.value,
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
    uncontrolledValue.value.splice(index, 1);
  } else {
    uncontrolledValue.value.push(item);
  }
  emit('selected', uncontrolledValue);
};

const findIndex = (item: VMultiSelectItem) => {
  return uncontrolledValue.value?.findIndex(
    (sItem) => sItem[itemValue.value] === item?.[itemValue.value],
  );
};
const hasItem = (item: VMultiSelectItem) => findIndex(item) > -1;

const isSelected = (item: VMultiSelectItem, index: number) => {
  return item.selected || hasItem(item);
};

const clearSelected = () => {
  uncontrolledValue.value = [];
  focus.value = -1;
};

const deselect = (item: VMultiSelectItem) => {
  const index = findIndex(item);
  if (index > -1) {
    uncontrolledValue.value.splice(index, 1);
  }
};

const handleSearch = useDebounceFn((event) => {
  isOpen.value = true;
  search.value = event.target.value;
  focus.value = 0;

  emit('search', search);
}, delay.value);

const isAllSelected = computed(
  () => uncontrolledValue.value.length === items.value.length,
);

const toggleSelectAll = () => {
  if (isAllSelected.value) {
    clearSelected();
  } else {
    items.value.forEach((item) => {
      const index = findIndex(item);
      if (index < 0) {
        uncontrolledValue.value.push(item);
      }
    });
  }
};

const onInputClick = () => {
  if (!readonly.value && !disabled.value) {
    isOpen.value = true;
  }
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
    uncontrolledValue.value = val;
  },
  {deep: true},
);

watch(
  vvValue,
  (val) => {
    if (name.value) {
      uncontrolledValue.value = val;
    }
  },
  {deep: true},
);

watch(uncontrolledValue, (val) => {
  if (name.value) {
    setValue(val);
  }

  emit('update:modelValue', val);
}, {
  deep: true,
});
</script>

<template>
  <label
    v-if="label"
    :for="id || name"
    class="v-multi-select-label"
    :class="labelClass"
  >
    {{ label }}
  </label>
  <div
    ref="target"
    class="v-multi-select"
    :class="{
      'v-multi-select--error': !!errorMessage || error,
    }"
    v-bind="$attrs"
  >
    <div>
      <div class="v-multi-select-panel">
        <div
          class="v-multi-select-input"
          :class="[
            {
              'v-multi-select-normal': error || !!errorMessage,
            },
            wrapperClass,
          ]"
          @click="onInputClick"
        >
          <div class="v-multi-select-badges">
            <template v-if="uncontrolledValue.length">
              <template v-for="(sItem, index) in badges" :key="sItem.value">
                <slot
                  name="selection"
                  :index="index"
                  :item="sItem"
                  :value="sItem[itemText]"
                  :onRemove="() => deselect(sItem)"
                >
                  <v-badge
                    :color="badgeColor"
                    dismissable
                    class="truncate"
                    :class="badgeClass"
                    @dismiss="deselect(sItem)"
                    v-bind="badgeProps"
                  >
                    {{ sItem[itemText] }}
                  </v-badge>
                </slot>
              </template>
            </template>

            <template v-if="maxBadge > 0 && uncontrolledValue.length > maxBadge">
              <slot name="max-selection">
                <v-badge small> {{ uncontrolledValue.length - maxBadge }} more</v-badge>
              </slot>
            </template>

            <input
              :id="id"
              type="text"
              class="v-multi-select-input-control"
              :class="inputClass"
              autofill="false"
              autocomplete="off"
              :placeholder="placeholder"
              :name="name"
              v-bind="inputProps"
              :readonly="readonly"
              :disabled="disabled"
              @input="handleSearch"
              @focus="onInputClick"
              @keydown.enter.prevent="onEnter"
              @keydown.down.prevent="onDown"
              @keydown.up.prevent="onUp"
              @keydown.tab.prevent="onTab"
              @keydown.esc.prevent="onEsc"
            />
          </div>

          <div class="v-multi-select-action">
            <v-tooltip v-if="uncontrolledValue.length > 1">
              <template #activator="{on}">
                <v-badge
                  circle
                  class="!p-1 !bg-transparent"
                  @click="clearSelected"
                  v-on="on"
                >
                  <Icon
                    name="ri:close-line"
                    :size="iconSize"
                    class="v-multi-select-icon"
                    aria-hidden="true"
                  />
                </v-badge>
              </template>
              <span>Clear</span>
            </v-tooltip>

            <Icon
              name="heroicons:chevron-down"
              :size="iconSize"
              class="v-multi-select-icon"
              aria-hidden="true"
            />
          </div>
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
                <slot
                  name="select-all"
                  :onClick="toggleSelectAll"
                  :isSelected="isAllSelected"
                >
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
                </slot>
              </template>

              <slot name="prepend.item" />

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
                      :size="iconSize"
                      class="v-multi-select-check-icon"
                      :class="checkIconClass"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="v-multi-select-item-text">
                    <slot
                      name="item.label"
                      :index="index"
                      :item="item"
                      :value="item[itemText]"
                      :isSelected="isSelected(item, index)"
                    >
                      {{ item[itemText] }}
                    </slot>
                  </div>
                </div>
              </template>

              <slot name="append.item" />
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
    class="text-error-500 text-sm"
    :name="name"
  />
  <div v-else-if="errorMessage" :class="errorClass">
    {{ errorMessage }}
  </div>
</template>

<style src="./VMultiSelect.scss" lang="scss"></style>
