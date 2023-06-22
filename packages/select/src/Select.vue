<script setup lang="ts" generic="T">
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel,
} from '@headlessui/vue';
import VIcon from '@morpheme/icon';
import {ref, watch} from 'vue';

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
  }>(),
  {
    itemText: 'text',
    itemValue: 'value',
    placeholder: 'Choose',
    transition: 'dropdown',
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
</script>

<template>
  <Listbox
    v-model="selected"
    as="div"
    class="v-select v-select-primary"
    :multiple="multiple"
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
                selected && selected.length > 0
                  ? `${selected?.length} selected`
                  : placeholder
              }}
            </span>
            <span v-else>
              {{ selected ? selected[itemText] : placeholder }}
            </span>
          </div>
        </slot>
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
  </Listbox>
</template>
