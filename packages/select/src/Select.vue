<!-- eslint-disable vue/no-mutating-props -->
<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel,
  Combobox,
  ComboboxOptions,
  ComboboxOption,
  ComboboxButton,
  ComboboxLabel,
} from '@headlessui/vue';
import VIcon from '@morpheme/icon';
import VTooltip from '@morpheme/tooltip';
import {computed, ref} from 'vue';
import VBadge from '@morpheme/badge';
import {Float} from '@headlessui-float/vue';
import type {Placement} from '@floating-ui/vue';
import SelectSearchInput, {ExposedProps} from './SelectSearchInput.vue';

export interface SelectOption extends Record<string, any> {
  [key: string]: any;
}

type T = SelectOption;

type ModelValue = T | T[] | undefined;
type Shadow =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | 'inner'
  | 'none';

interface Props {
  items?: T[];
  multiple?: boolean;
  itemText?: string;
  itemValue?: string;
  placeholder?: string;
  label?: string;
  transition?: string;
  clearable?: boolean;
  clearText?: string;
  error?: boolean;
  hint?: string;
  errorMessage?: string;
  hideError?: boolean;
  shadow?: boolean | Shadow | (string & {});
  searchable?: boolean;
  disabled?: boolean;
  emptyText?: string;
  searchBy?: string;
  selectionItemProps?: InstanceType<typeof VBadge>['$props'];
  displayValue?: (item: T) => string;
  placement?: Placement;
  offset?: number;
  shift?: boolean | number;
  flip?: boolean | number;
  searchPlacement?: 'inside' | 'outside';
  searchPlaceholder?: string;
  chips?: boolean;
  icon?: string;
  iconSize?: string;
  iconClass?: string;
  dropdownIcon?: string;
  dropdownIconSize?: string;
  dropdownIconClass?: string;
  checkIcon?: string;
  checkIconSize?: string;
  checkIconClass?: string;
  clearIcon?: string;
  clearIconSize?: string;
  clearIconClass?: string;
  searchPrefixIcon?: string;
  searchPrefixIconSize?: string;
  searchPrefixIconClass?: string;
  searchSuffixIcon?: string;
  searchSuffixIconSize?: string;
  searchSuffixIconClass?: string;
  wrapperClass?: string;
  selectedIconPlacement?: 'left' | 'right';
  by?: string;
  name?: string;
  loading?: boolean;
  loadingIcon?: string;
  loadingText?: string;
  tooltip?: InstanceType<typeof VTooltip>['$props'];
  selectedText?: string;
  allowCustomValues?: boolean;
  modelValue?: ModelValue;
}

const props = withDefaults(defineProps<Props>(), {
  itemText: 'text',
  itemValue: 'value',
  placeholder: 'Choose',
  transition: 'dropdown',
  clearText: 'Clear',
  emptyText: 'No results.',
  items: () => [],
  placement: 'bottom',
  offset: 8,
  shift: true,
  flip: true,
  hideError: false,
  searchPlacement: 'inside',
  searchPlaceholder: 'Search...',
  dropdownIcon: 'heroicons:chevron-down',
  dropdownIconSize: 'sm',
  icon: '',
  iconSize: 'sm',
  checkIcon: 'heroicons:check',
  checkIconSize: 'sm',
  clearIcon: 'heroicons:x-mark',
  clearIconSize: 'sm',
  searchPrefixIconSize: 'sm',
  searchSuffixIconSize: 'sm',
  selectedIconPlacement: 'left',
  tooltip: () => ({
    placement: 'top',
  }),
  loadingIcon: 'ri:loader-5-fill',
  loadingText: 'Loading...',
  selectedText: 'selected',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: ModelValue): void;
  (e: 'change', value: ModelValue): void;
}>();

const query = ref('');
const searchInputInside = ref<ExposedProps>();
const searchInputOutside = ref<ExposedProps>();

const emitValue = (value: ModelValue) => {
  emit('update:modelValue', value);
  emit('change', value);
};

const onUpdate = (event: any) => {
  if (query.value) {
    query.value = '';
    // explicitly set input text because `ComboboxInput` `displayValue` is not reactive
    if (props.searchPlacement === 'inside') {
      if (searchInputInside.value) {
        searchInputInside.value.clear();
      }
    } else {
      if (searchInputOutside.value) {
        searchInputOutside.value.clear();
      }
    }
  }

  emitValue(event);
};

const clear = () => {
  const newValue = props.multiple ? ([] as T[]) : undefined;
  emitValue(newValue);
};

const hasValue = computed(() => {
  if (props.multiple) {
    return props.modelValue && props.modelValue.length > 0;
  }

  return props.modelValue !== undefined && props.modelValue !== null;
});

const filteredItems = computed(() =>
  query.value === ''
    ? props.items
    : props.items.filter((item) =>
        String(item[props.searchBy || props.itemText || props.itemValue])
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, '')),
      ),
);

const defaultDisplayValue = (item: any) => {
  if (props.searchPlacement === 'outside') {
    return query.value;
  }

  return item?.[props.itemText] || '';
};

const displayValue = computed(() => {
  return props.displayValue ?? defaultDisplayValue;
});

const shadowClass = computed(() => {
  if (props.shadow === true) return 'v-select--shadow';

  return props.shadow ? `v-select--shadow-${props.shadow}` : '';
});

const newItem = computed(() => {
  const uniqueId = crypto.randomUUID();
  return query.value === ''
    ? null
    : {[props.itemValue]: uniqueId, [props.itemText]: query.value};
});

defineSlots<{
  default?: (props: {
    modelValue: ModelValue;
    multiple: boolean;
    itemValue: string;
    itemText: string;
    selectionItemProps: InstanceType<typeof VBadge>['$props'];
  }) => any;
  button?: (props: {open: boolean}) => any;
  'selection-item'?: (props: {
    item: T;
    idx: any;
    itemText: string;
    itemValue: string;
    remove: () => void;
    open: boolean;
  }) => any;
  selected?: (props: {
    modelValue: ModelValue;
    item: ModelValue;
    multiple?: boolean;
    placeholder?: string;
    itemText?: string;
    itemValue?: string;
    open: boolean;
  }) => any;
  item?: (props: {
    item: T;
    active: boolean;
    selected: boolean;
    itemText?: string;
    itemValue?: string;
    open: boolean;
  }) => any;
  hint?: (props: {hint?: string}) => any;
  error?: (props: {
    error?: boolean;
    errorMessage?: string;
    hideError?: boolean;
  }) => any;
  selection?: (props: {
    modelValue: ModelValue;
    multiple?: boolean;
    itemValue?: string;
    itemText?: string;
    selectionItemProps?: InstanceType<typeof VBadge>['$props'];
    open: boolean;
  }) => any;
  empty?: (props: {items: T[]; emptyText?: string; open: boolean}) => any;
  'item-text'?: (props: {
    item: T;
    itemText?: string;
    itemValue?: string;
    active: boolean;
    selected: boolean;
    open: boolean;
  }) => any;
  'check-icon'?: (props: {selected: boolean; icon: string}) => any;
  'new-item-text'?: (props: {item: T}) => any;
}>();
</script>

<template>
  <component
    :is="searchable ? Combobox : Listbox"
    v-slot="{open}"
    class="v-select"
    :class="[
      {
        'v-select--multiple': multiple,
        'v-select--clearable': clearable,
        'v-select--error': error,
        'v-select--searchable': searchable,
        'v-select--disabled': disabled,
        'v-select--loading': loading,
      },
      shadowClass,
      `v-select--${placement}`,
      `v-select--${searchPlacement}`,
      wrapperClass,
    ]"
    :by="by || itemText || itemValue"
    :name="name"
    :multiple="multiple"
    :disabled="disabled || loading"
    as="div"
    :model-value="modelValue"
    @update:model-value="onUpdate"
  >
    <component
      :is="searchable ? ComboboxLabel : ListboxLabel"
      v-if="label"
      class="v-select-label"
    >
      {{ label }}
    </component>
    <Float
      as="div"
      class="relative"
      floating-as="template"
      :placement="placement"
      :transition-name="transition"
      :offset="offset"
      :shift="shift"
      :flip="flip"
      @hide="query = ''"
    >
      <slot name="button" v-bind="{open}">
        <component
          :is="searchable ? ComboboxButton : ListboxButton"
          class="v-select-button"
        >
          <slot
            v-if="searchable"
            name="selection"
            v-bind="{
              modelValue,
              multiple,
              itemValue,
              itemText,
              selectionItemProps,
              open,
            }"
          >
            <div
              v-if="multiple && chips && modelValue && modelValue.length > 0"
              class="v-select-selection"
            >
              <template v-for="(item, idx) in modelValue" :key="idx">
                <slot
                  name="selection-item"
                  v-bind="{
                    item: item as T,
                    idx,
                    itemText,
                    itemValue,
                    remove: () => modelValue?.splice(idx, 1),
                    open,
                  }"
                >
                  <VBadge
                    color="primary"
                    dismissable
                    @dismiss="modelValue.splice(idx, 1)"
                    v-bind="selectionItemProps"
                  >
                    {{ (item as T)[itemText] }}
                  </VBadge>
                </slot>
              </template>
            </div>
          </slot>

          <SelectSearchInput
            v-if="searchable && searchPlacement === 'inside'"
            :placement="searchPlacement"
            :placeholder="
              loading ? loadingText : searchPlaceholder || placeholder
            "
            :disabled="disabled || loading"
            :loading="loading"
            :display-value="displayValue ?? defaultDisplayValue"
            :prefix-icon="loading ? loadingIcon : icon || searchPrefixIcon"
            :prefix-icon-size="iconSize || searchPrefixIconSize"
            :prefix-icon-class="iconClass || searchPrefixIconClass"
            :suffix-icon="searchSuffixIcon"
            :suffix-icon-size="searchSuffixIconSize"
            :suffix-icon-class="searchSuffixIconClass"
            ref="searchInputInside"
            @change="query = $event.target.value"
            @keydown.enter="query = ''"
          />

          <slot
            name="selected"
            v-bind="{
              multiple,
              item: modelValue,
              modelValue,
              placeholder,
              itemText,
              itemValue,
              searchable,
              chips,
              open,
            }"
          >
            <div
              class="v-select-selected"
              :class="[
                `v-select-selected--${searchPlacement}`,
                {
                  'v-select-selected--placeholder': !modelValue,
                },
              ]"
            >
              <VIcon
                v-if="icon || loading"
                :name="loading ? loadingIcon : icon"
                :size="iconSize"
                :class="['v-select__prepend-icon', iconClass]"
              />
              <span v-if="multiple">
                {{
                  modelValue && modelValue?.length > 0
                    ? chips && searchPlacement === 'outside'
                      ? ''
                      : `${modelValue?.length} ${selectedText}`
                    : placeholder
                }}
              </span>
              <span v-else>
                {{
                  modelValue
                    ? (modelValue as T)[itemText]
                    : loading
                    ? loadingText
                    : placeholder
                }}
              </span>
            </div>
          </slot>
          <div class="v-select-clearable">
            <VTooltip v-if="hasValue && clearable" v-bind="tooltip">
              <template #activator>
                <button
                  type="button"
                  aria-label="Clear"
                  class="v-select-clearable-button"
                  @click="clear"
                >
                  <VIcon
                    :name="clearIcon"
                    class="v-select-icon"
                    :size="iconSize"
                  />
                </button>
              </template>
              <span> {{ clearText }} </span>
            </VTooltip>
            <VIcon
              :name="dropdownIcon"
              :size="dropdownIconSize"
              :class="['v-select-icon', dropdownIconClass]"
            />
          </div>
        </component>
      </slot>
      <Transition :name="transition" @after-leave="query = ''">
        <component
          :is="searchable ? ComboboxOptions : ListboxOptions"
          class="v-select-options"
        >
          <SelectSearchInput
            v-if="searchable && searchPlacement === 'outside'"
            :placement="searchPlacement"
            :placeholder="
              loading ? loadingText : searchPlaceholder || placeholder
            "
            :disabled="disabled || loading"
            :loading="loading"
            :display-value="displayValue ?? defaultDisplayValue"
            :prefix-icon="loading ? loadingIcon : icon || searchPrefixIcon"
            :prefix-icon-size="iconSize || searchPrefixIconSize"
            :prefix-icon-class="iconClass || searchPrefixIconClass"
            :suffix-icon="searchSuffixIcon"
            :suffix-icon-size="searchSuffixIconSize"
            :suffix-icon-class="searchSuffixIconClass"
            ref="searchInputOutside"
            @change="query = $event.target.value"
            @keydown.enter="query = ''"
          />

          <slot
            name="empty"
            v-bind="{
              items: filteredItems,
              emptyText,
              open,
            }"
          >
            <div v-if="filteredItems?.length < 1" class="v-select-empty">
              {{ emptyText }}
            </div>
          </slot>
          <div
            :class="{
              'v-select-scrollable':
                searchable && searchPlacement === 'outside',
            }"
          >
            <ComboboxOption
              v-if="allowCustomValues && searchable && newItem"
              :value="newItem"
              v-slot="{active, selected}"
            >
              <div
                class="v-select-option"
                :class="{
                  'v-select-option--active': active,
                  'v-select-option--selected': selected,
                  'v-select-option--icon-left':
                    selectedIconPlacement === 'left',
                  'v-select-option--icon-right':
                    selectedIconPlacement === 'right',
                }"
              >
                <div
                  class="v-select-option-check"
                  :class="{
                    'v-select-option-check--active': active,
                    'v-select-option-check--selected': selected,
                  }"
                >
                  <slot
                    v-if="selected"
                    name="check-icon"
                    v-bind="{selected, icon: checkIcon}"
                  >
                    <VIcon
                      :name="checkIcon"
                      class="v-select-option-check-icon"
                      size="sm"
                    />
                  </slot>
                </div>
                <div class="v-select-option-text">
                  <slot name="new-item-text" v-bind="{item: newItem}">
                    Create "{{ newItem[itemText] }}"
                  </slot>
                </div>
              </div>
            </ComboboxOption>

            <component
              :is="searchable ? ComboboxOption : ListboxOption"
              v-for="(item, idx) in filteredItems"
              :key="idx"
              :value="item"
              as="template"
              v-slot="{active, selected}"
            >
              <slot
                name="item"
                v-bind="{item, active, selected, itemText, itemValue, open}"
              >
                <div
                  class="v-select-option"
                  :class="{
                    'v-select-option--active': active,
                    'v-select-option--selected': selected,
                    'v-select-option--icon-left':
                      selectedIconPlacement === 'left',
                    'v-select-option--icon-right':
                      selectedIconPlacement === 'right',
                  }"
                >
                  <div
                    class="v-select-option-check"
                    :class="{
                      'v-select-option-check--active': active,
                      'v-select-option-check--selected': selected,
                    }"
                  >
                    <slot
                      v-if="selected"
                      name="check-icon"
                      v-bind="{selected, icon: checkIcon}"
                    >
                      <VIcon
                        :name="checkIcon"
                        class="v-select-option-check-icon"
                        size="sm"
                      />
                    </slot>
                  </div>
                  <div class="v-select-option-text">
                    <slot
                      name="item-text"
                      v-bind="{
                        item,
                        itemText,
                        itemValue,
                        active,
                        selected,
                        open,
                      }"
                    >
                      {{ item[itemText] }}
                    </slot>
                  </div>
                </div>
              </slot>
            </component>
          </div>
        </component>
      </Transition>
    </Float>
    <div class="v-select-hint">
      <slot name="hint" :hint="hint">
        {{ hint }}
      </slot>
    </div>
    <slot name="error" v-bind="{error, errorMessage, hideError}">
      <div class="v-select-error" v-if="error && !hideError">
        {{ errorMessage }}
      </div>
    </slot>
  </component>
</template>
