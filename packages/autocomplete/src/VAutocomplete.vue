<script setup lang="ts">
import {ref, computed, toRefs, watch} from 'vue';
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  ComboboxLabel,
} from '@headlessui/vue';
import {Icon} from '@morpheme/icon';
import {useFormValue, type ValidationMode} from '@morpheme/forms';

export type Item = {
  text: string;
  value: string | number;

  [x: string]: any;
};

export type Props = {
  modelValue?: Item | string;
  searchBy?: string;
  displayText?: string;
  placeholder?: string;
  label?: string;
  items: Item[];
  name?: string;
  rules?: string;
  notFoundText?: string;
  noDataText?: string;
  clearable?: boolean;
  errorClass?: string;
  wrapperClass?: string;
  validationMode?: ValidationMode
  disabled?: boolean
  hideError?: boolean
  hint?: string
  shadow?: boolean
  readonly?: boolean
  error?: boolean
  transition?: string
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  searchBy: 'text',
  displayText: 'text',
  placeholder: 'Search...',
  label: '',
  rules: '',
  name: '',
  items: () => [],
  noDataText: 'No data.',
  clearable: false,
  errorClass: 'autocomplete-error',
  wrapperClass: '',
  validationMode: 'aggressive',
  transition: 'fade',
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: Record<string, any>): void;
    (e: 'update:query', value: string): void;
    (e: 'clear'): void;
  }>();

const {errorMessage, uncontrolledValue, clear: clearField} =
  useFormValue(props, emit);

const {items} = toRefs(props);
const query = ref('');

watch(query, (val) => emit('update:query', val));

const filteredItems = computed(() =>
  query.value === ''
    ? items.value
    : items.value.filter((item) =>
        String(item[props.searchBy])
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, '')),
      ),
);

const clear = () => {
  query.value = '';
  clearField()
};

defineSlots<{
  default?: (props: {}) => any
  hint?: (props: {}) => any
}>()
</script>

<template>
  <Combobox
    v-model="uncontrolledValue"
    class="autocomplete"
    :class="[
      wrapperClass,
      {
        'autocomplete--error': !!errorMessage || error,
        'autocomplete--selected': !!uncontrolledValue,
        'autocomplete--disabled': disabled,
        'autocomplete--readonly': readonly,
        'autocomplete--shadow': shadow,
      },
    ]"
    as="div"
  >
    <ComboboxLabel v-if="label" class="autocomplete-label">
      {{ label }}
    </ComboboxLabel>
    <div class="autocomplete-body">
      <div
        class="autocomplete-field"
        :class="{
          'autocomplete-field--error': !!errorMessage || error,
        }"
      >
        <ComboboxInput
          class="autocomplete-input"
          :class="{
            'autocomplete-input--selected': !!uncontrolledValue,
          }"
          :display-value="(item: any) => item?.[displayText] || ''"
          :placeholder="placeholder"
          :disabled="disabled"
          @change="query = $event.target.value"
        />
        <div class="autocomplete-clearable">
          <button
            v-if="clearable && uncontrolledValue"
            type="button"
            aria-label="Clear"
            class="autocomplete-clearable-button"
            :disabled="disabled"
            @click="clear"
          >
            <Icon name="heroicons:x-mark" class="autocomplete-icon" aria-hidden="true" />
          </button>
          <ComboboxButton :disabled="disabled">
            <Icon
              name="heroicons:chevron-down"
              class="autocomplete-icon"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
      </div>
      <transition :name="transition">
        <ComboboxOptions class="autocomplete-options">
          <div v-if="filteredItems.length === 0" class="autocomplete-empty">
            {{ noDataText }}
          </div>

          <ComboboxOption
            v-for="(item, idx) in filteredItems"
            :key="idx"
            v-slot="{ selected, active }"
            as="template"
            :value="item"
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
                {{ item[displayText] }}
              </span>
              <span v-if="selected" class="autocomplete-item-selected">
                <Icon
                  name="heroicons:check"
                  class="autocomplete-item-selected-icon"
                  aria-hidden="true"
                />
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </transition>
    </div>
    <p v-if="hint" class="autocomplete-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </p>
    <div v-if="errorMessage && !hideError" :class="errorClass">
      {{ errorMessage }}
    </div>
  </Combobox>
</template>
