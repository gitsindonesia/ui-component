<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel,
} from '@headlessui/vue';
import {ref, watch} from 'vue';
import VIcon from '@morpheme/icon';
import VTooltip from '@morpheme/tooltip';

type T = Record<string, any>;

const props = withDefaults(
  defineProps<{
    modelValue?: T | T[];
    items: T[];
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
    shadow?: boolean;
  }>(),
  {
    itemText: 'text',
    itemValue: 'value',
    placeholder: 'Choose',
    transition: 'dropdown',
    clearText: 'Clear',
  },
);

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: T | T[]): void;
  }>();

const selected = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => {
    selected.value = val;
  },
);

watch(selected, (val) => {
  emit('update:modelValue', val!);
});

const clear = () => {
  selected.value = props.multiple ? [] : undefined;
};
</script>

<template>
  <Listbox
    v-model="selected"
    as="div"
    class="v-select v-select-primary"
    :multiple="multiple"
    :class="{
      'v-select--multiple': multiple,
      'v-select--clearable': clearable,
      'v-select--error': error,
      'v-select--shadow': shadow,
    }"
  >
    <ListboxLabel v-if="label" class="v-select-label">{{ label }}</ListboxLabel>
    <slot name="button">
      <ListboxButton class="v-select-button">
        <slot
          name="selected"
          v-bind="{multiple, selected, placeholder, itemText, itemValue}"
        >
          <div
            class="v-select-selected"
            :class="{
              'v-select-selected--placeholder': !selected,
            }"
          >
            <span v-if="multiple">
              {{
                selected && selected?.length > 0
                  ? `${selected?.length} selected`
                  : placeholder
              }}
            </span>
            <span v-else>
              {{ selected ? (selected as T)[itemText] : placeholder }}
            </span>
          </div>
        </slot>
        <VTooltip v-if="selected && clearable">
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
      </ListboxButton>
    </slot>
    <Transition :name="transition">
      <ListboxOptions class="v-select-options">
        <ListboxOption
          v-for="(item, idx) in items"
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
        </ListboxOption>
      </ListboxOptions>
    </Transition>
    <div v-if="hint" class="v-select-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </div>
    <div v-if="error && !hideError" class="v-select-error">
      {{ errorMessage }}
    </div>
  </Listbox>
</template>
