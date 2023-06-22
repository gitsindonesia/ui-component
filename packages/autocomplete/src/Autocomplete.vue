<script setup lang="ts" generic="T">
import {
  Combobox,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  ComboboxLabel,
  ComboboxInput,
} from '@headlessui/vue';
import VIcon from '@morpheme/icon';
import {computed, ref, watch} from 'vue';
import VBadge from '@morpheme/badge';

const props = withDefaults(
  defineProps<{
    modelValue?: T;
    items: T[];
    multiple?: boolean;
    itemText?: string;
    itemValue?: string;
    placeholder?: string;
    label?: string;
    transition?: string;
    error?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    emptyText?: string;
    searchBy?: string;
    displayValue?: (item: any) => string;
    selectionItemProps: InstanceType<typeof VBadge>['$props'];
    readonly?: boolean;
    shadow?: boolean;
    hint?: string;
    errorMessage?: string;
    hideError?: boolean;
  }>(),
  {
    itemText: 'text',
    itemValue: 'value',
    placeholder: 'Search...',
    transition: 'dropdown',
    emptyText: 'No results.',
  },
);

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: T): void;
  }>();

const selected = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    selected.value = val;
  },
  {immediate: true},
);

watch(selected, (val) => {
  emit('update:modelValue', val);
});

const query = ref('');

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

const clear = () => {
  query.value = '';
  selected.value = undefined;
};

const defaultDisplayValue = (item: any) => {
  return item?.[props.itemText] || '';
};

const displayValue = computed(() => {
  return props.displayValue ?? defaultDisplayValue;
});
</script>

<template>
  <Combobox
    v-model="selected"
    as="div"
    class="autocomplete autocomplete-primary"
    :multiple="multiple"
    :class="{
      'autocomplete--error': error,
      'autocomplete--selected': !!selected,
      'autocomplete--disabled': disabled,
      'autocomplete--readonly': readonly,
      'autocomplete--shadow': shadow,
    }"
  >
    <ComboboxLabel v-if="label" class="autocomplete-label">
      {{ label }}
    </ComboboxLabel>
    <div class="autocomplete-body">
      <div
        class="autocomplete-field"
        :class="{
          'autocomplete-field--error': error,
        }"
      >
        <slot
          name="selection"
          v-bind="{selected, multiple, itemValue, itemText, selectionItemProps}"
        >
          <div
            v-if="multiple && selected && selected.length > 0"
            class="autocomplete-selection"
          >
            <template v-for="(item, idx) in selected" :key="idx">
              <slot
                name="selection-item"
                v-bind="{
                  item,
                  idx,
                  itemText,
                  itemValue,
                  remove: () => selected.splice(idx, 1),
                }"
              >
                <VBadge
                  color="primary"
                  dismissable
                  @dismiss="selected.splice(idx, 1)"
                  v-bind="selectionItemProps"
                >
                  {{ item[itemText] }}
                </VBadge>
              </slot>
            </template>
          </div>
        </slot>
        <ComboboxInput
          class="autocomplete-input"
          :class="{
            'autocomplete-input--selected': !!selected,
          }"
          :display-value="displayValue ?? defaultDisplayValue"
          :placeholder="placeholder"
          :disabled="disabled"
          @change="query = $event.target.value"
        />
        <div class="autocomplete-clearable">
          <button
            v-if="clearable && selected"
            type="button"
            aria-label="Clear"
            class="autocomplete-clearable-button"
            :disabled="disabled"
            @click="clear"
          >
            <VIcon
              name="heroicons:x-mark"
              class="autocomplete-icon"
              aria-hidden="true"
            />
          </button>
          <ComboboxButton :disabled="disabled">
            <VIcon
              name="heroicons:chevron-down"
              class="autocomplete-icon"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
      </div>
      <Transition :name="transition">
        <ComboboxOptions class="autocomplete-options">
          <div v-if="filteredItems.length === 0" class="autocomplete-empty">
            {{ emptyText }}
          </div>
          <ComboboxOption
            v-for="(item, idx) in filteredItems"
            :key="idx"
            v-slot="{selected, active}"
            as="template"
            :value="item"
          >
            <slot
              name="item"
              v-bind="{item, active, selected, itemText, itemValue}"
            >
              <li
                class="autocomplete-item"
                :class="{
                  'autocomplete-item--active': active,
                  'autocomplete-item--inactive': !active,
                }"
              >
                <span
                  class="autocomplete-item-text"
                  :class="{
                    'autocomplete-item-text--selected': selected,
                  }"
                >
                  {{ item[itemText] }}
                </span>
                <span v-if="selected" class="autocomplete-item-selected">
                  <VIcon
                    name="heroicons:check"
                    class="autocomplete-item-selected-icon"
                    aria-hidden="true"
                  />
                </span>
              </li>
            </slot>
          </ComboboxOption>
        </ComboboxOptions>
      </Transition>
    </div>
    <p v-if="hint" class="autocomplete-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </p>
    <div v-if="error && !hideError" class="autocomplete-error">
      {{ errorMessage }}
    </div>
  </Combobox>
</template>
