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
    :class="[
      wrapperClass,
      {
        'autocomplete--error': !!errorMessage,
        'autocomplete--selected': !!selected,
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
          'autocomplete-field--error': !!errorMessage,
        }"
      >
        <ComboboxInput
          class="autocomplete-input"
          :class="{
            'autocomplete-input--selected': !!selected,
          }"
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

<style src="./VAutocomplete.scss" lang="scss"></style>
