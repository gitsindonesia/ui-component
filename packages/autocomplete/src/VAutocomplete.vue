<script setup lang="ts">
import {ref, computed, toRefs, watch} from 'vue';
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  ComboboxLabel,
  TransitionRoot,
} from '@headlessui/vue';
import {useField} from 'vee-validate';
import {Icon} from '@gits-id/icon';

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
  notFoundText: 'Nothing found.',
  clearable: false,
  errorClass: 'autocomplete-error',
  wrapperClass: '',
});

const emit = defineEmits(['update:modelValue', 'update:query']);

const {modelValue, searchBy, items, name, rules} = toRefs(props);
const {value: selected, errorMessage} = useField(name, rules, {
  initialValue: modelValue.value,
});
const query = ref('');

watch(modelValue, (val) => {
  selected.value = val;
});

watch(selected, (val) => {
  emit('update:modelValue', val);
});

watch(query, (val) => {
  emit('update:query', val);
});

const filteredItems = computed(() =>
  query.value === ''
    ? items.value
    : items.value.filter((item) =>
        String(item[searchBy.value])
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, '')),
      ),
);

const clear = () => {
  selected.value = '';
  query.value = '';
};
</script>

<template>
  <Combobox
    v-model="selected"
    class="autocomplete"
    :class="wrapperClass"
    as="div"
  >
    <ComboboxLabel v-if="label" class="autocomplete-label">
      {{ label }}
    </ComboboxLabel>
    <div class="autocomplete-body">
      <div
        class="autocomplete-field"
        :class="{
          'autocomplete-field--error': !!errorMessage,
        }"
      >
        <ComboboxInput
          class="autocomplete-input"
          :display-value="(item: any) => item?.[displayText] || ''"
          :placeholder="placeholder"
          @change="query = $event.target.value"
        />
        <div class="autocomplete-clearable">
          <button
            v-if="clearable && selected"
            type="button"
            aria-label="Clear"
            class="autocomplete-clearable-button"
            @click="clear"
          >
            <Icon
              name="ri:close-line"
              class="autocomplete-icon"
              aria-hidden="true"
            />
          </button>
          <ComboboxButton>
            <Icon
              name="ri:arrow-down-s-line"
              class="autocomplete-icon"
              aria-hidden="true"
            />
          </ComboboxButton>
        </div>
      </div>
      <TransitionRoot
        leave="transition ease-in duration-100"
        leave-from="opacity-100"
        leave-to="opacity-0"
        @after-leave="query = ''"
      >
        <ComboboxOptions class="autocomplete-options">
          <div
            v-if="filteredItems.length === 0 && query === ''"
            class="autocomplete-empty"
          >
            {{ noDataText }}
          </div>

          <ComboboxOption
            v-for="(item, idx) in filteredItems"
            :key="idx"
            v-slot="{selected, active}"
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
                  name="ri:check-line"
                  class="autocomplete-item-selected-icon"
                  aria-hidden="true"
                />
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </div>
  </Combobox>
  <div v-if="errorMessage" :class="errorClass">
    {{ errorMessage }}
  </div>
</template>

<style>
.autocomplete-label {
  @apply mb-2 font-medium;
}
.autocomplete-body {
  @apply relative mt-1;
}
.autocomplete-field {
  @apply relative
    w-full
    text-left
    bg-white
    border
    rounded-md
    cursor-default
    focus:outline-none
    focus-within:ring focus-within:ring-opacity-50
    sm:text-sm
    overflow-hidden
    transition
    duration-300
    border-gray-300 hover:border-gray-400 
    focus-within:ring-primary-500 focus-within:border-primary-500;
}
.autocomplete-field--error {
  @apply border-error-500 focus-within:ring-error-500 focus-within:border-error-500;
}
.autocomplete-input {
  @apply w-full
    border-none
    focus:ring-0
    py-3
    pl-3
    pr-20
    leading-5
    text-gray-600;
}
.autocomplete-clearable {
  @apply absolute inset-y-0 right-0 flex items-center pr-4;
}
.autocomplete-clearable-button {
  @apply mr-1
    text-gray-400
    hover:text-gray-700
    hover:bg-gray-100
    rounded-full
    p-1
    transition
    duration-300;
}
.autocomplete-icon {
  @apply w-6 h-6 fill-current text-gray-400;
}
.autocomplete-options {
  @apply absolute
    z-10
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
    sm:text-sm;
}
.autocomplete-empty {
  @apply cursor-default select-none relative py-2 px-4 text-gray-700;
}
.autocomplete-item {
  @apply cursor-default select-none relative py-2 pl-10 pr-4;
}
.autocomplete-item-text {
  @apply block truncate font-normal;
}
.autocomplete-item--active {
  @apply bg-gray-100;
}
.autocomplete-item--inactive {
  @apply text-gray-900;
}
.autocomplete-item-selected {
  @apply absolute inset-y-0 left-0 flex items-center pl-3;
}
.autocomplete-item-selected-icon {
  @apply w-5 h-5 fill-current text-primary-500;
}
.autocomplete-error {
  @apply text-error-500 text-sm mt-1;
}
.autocomplete-item-text--selected {
  @apply font-medium text-primary-500;
}
</style>
