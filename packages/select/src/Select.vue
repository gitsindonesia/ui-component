<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel,
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  ComboboxButton,
  ComboboxLabel,
} from '@headlessui/vue';
import VIcon from '@morpheme/icon';
import VTooltip from '@morpheme/tooltip';
import {computed, ref, watch} from 'vue';
import VBadge from '@morpheme/badge';

type T = Record<string, any>;
type ModelValue = T | T[] | undefined;
type Shadow = 
  'xs' |
  'sm' |
  'md' |
  'lg' |
  'xl' |
  '2xl' |
  '3xl' |
  'inner' |
  'none'

const props = withDefaults(
  defineProps<{
    modelValue?: ModelValue;
    value?: T | T[];
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
    displayValue?: (item: any) => string;
  }>(),
  {
    itemText: 'text',
    itemValue: 'value',
    placeholder: 'Choose',
    transition: 'dropdown',
    clearText: 'Clear',
    emptyText: 'No results.',
    items: () => [],
  },
);

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: ModelValue): void;
  }>();

const selectedValue = ref(props.value || props.modelValue);
const query = ref('');

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== selectedValue.value) {
      selectedValue.value = newValue;
    }
  },
);

watch(
  () => props.value,
  (newValue) => {
    if (newValue !== selectedValue.value) {
      selectedValue.value = newValue;
    }
  },
);

watch(selectedValue, (val) => {
  emit('update:modelValue', val);
});

const clear = () => {
  const newValue = props.multiple ? ([] as T[]) : undefined;
  selectedValue.value = newValue;
};

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
  return item?.[props.itemText] || '';
};

const displayValue = computed(() => {
  return props.displayValue ?? defaultDisplayValue;
});

const shadowClass = computed(() => {
  if (props.shadow === true) return 'v-select--shadow'

  return props.shadow ? `v-select--shadow-${props.shadow}` : '';
})
</script>

<template>
  <component
    :is="searchable ? Combobox : Listbox"
    v-model="selectedValue"
    as="div"
    class="v-select"
    :multiple="multiple"
    :class="[
      {
        'v-select--multiple': multiple,
        'v-select--clearable': clearable,
        'v-select--error': error,
        'v-select--searchable': searchable,
        'v-select--disabled': disabled,
      },
      shadowClass,
    ]"
  >
    <component
      :is="searchable ? ComboboxLabel : ListboxLabel"
      v-if="label"
      class="v-select-label"
    >
      {{ label }}
    </component>
    <slot name="button">
      <component
        :is="searchable ? ComboboxButton : ListboxButton"
        class="v-select-button"
      >
        <slot
          v-if="searchable"
          name="selection"
          v-bind="{
            selectedValue,
            multiple,
            itemValue,
            itemText,
            selectionItemProps,
          }"
        >
          <div
            v-if="multiple && selectedValue && selectedValue.length > 0"
            class="v-select-selection"
          >
            <template v-for="(item, idx) in selectedValue" :key="idx">
              <slot
                name="selection-item"
                v-bind="{
                  item,
                  idx,
                  itemText,
                  itemValue,
                  remove: () => selectedValue?.splice(idx, 1),
                }"
              >
                <VBadge
                  color="primary"
                  dismissable
                  @dismiss="selectedValue.splice(idx, 1)"
                  v-bind="selectionItemProps"
                >
                  {{ item[itemText] }}
                </VBadge>
              </slot>
            </template>
          </div>
        </slot>

        <ComboboxInput
          v-if="searchable"
          class="v-select-input"
          :display-value="displayValue ?? defaultDisplayValue"
          :placeholder="placeholder"
          :disabled="disabled"
          @change="query = $event.target.value"
          @keydown.enter="query = ''"
        />
        <slot
          name="selected"
          v-bind="{multiple, selectedValue, placeholder, itemText, itemValue}"
        >
          <div
            class="v-select-selected"
            :class="{
              'v-select-selected--placeholder': !selectedValue,
            }"
          >
            <span v-if="multiple">
              {{
                selectedValue && selectedValue?.length > 0
                  ? `${selectedValue?.length} selected`
                  : placeholder
              }}
            </span>
            <span v-else>
              {{ selectedValue ? (selectedValue as T)[itemText] : placeholder }}
            </span>
          </div>
        </slot>
        <div class="v-select-clearable">
          <VTooltip v-if="selectedValue && selectedValue.length && clearable">
            <template #activator>
              <button
                type="button"
                aria-label="Clear"
                class="v-select-clearable-button"
                @click="clear"
              >
                <VIcon
                  name="heroicons:x-mark"
                  class="v-select-clearable-icon"
                  aria-hidden="true"
                />
              </button>
            </template>
            <span> {{ clearText }} </span>
          </VTooltip>
          <VIcon
            name="heroicons:chevron-down"
            class="v-select-icon"
            size="sm"
            aria-hidden="true"
          />
        </div>
      </component>
    </slot>
    <Transition :name="transition" @after-leave="query = ''">
      <component
        :is="searchable ? ComboboxOptions : ListboxOptions"
        class="v-select-options"
      >
        <div v-if="filteredItems?.length < 1" class="v-select-empty">
          {{ emptyText }}
        </div>
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
            v-bind="{item, active, selected, itemText, itemValue}"
          >
            <div
              class="v-select-option"
              :class="{
                'v-select-option--active': active,
                'v-select-option--selected': selected,
              }"
            >
              <div
                class="v-select-option-check"
                :class="{
                  'v-select-option-check--active': active,
                  'v-select-option-check--selected': selected,
                }"
              >
                <VIcon
                  v-if="selected"
                  name="heroicons:check"
                  class="v-select-option-check-icon"
                  size="sm"
                />
              </div>
              <div class="v-select-option-text">{{ item[itemText] }}</div>
            </div>
          </slot>
        </component>
      </component>
    </Transition>
    <div class="v-select-hint">
      <slot name="hint" :hint="hint">
        {{ hint }}
      </slot>
    </div>
    <div v-if="error && !hideError" class="v-select-error">
      <slot name="error" v-bind="{error, errorMessage, hideError}">
        {{ errorMessage }}
      </slot>
    </div>
  </component>
</template>
