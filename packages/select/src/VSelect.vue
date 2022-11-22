<script setup lang="ts">
import {computed, PropType, ref, toRefs, watch} from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  ListboxLabel,
} from '@headlessui/vue';
import {VInput} from '@gits-id/forms';
import VTooltip from '@gits-id/tooltip';
import {FieldOptions, useField} from 'vee-validate';
import Icon from '@gits-id/icon';
import '@gits-id/forms/dist/style.css';
import '@gits-id/tooltip/dist/style.css';
import '@gits-id/theme/transition.css';
import {VSelectItem} from './types';

type Val = string | number | boolean | VSelectItem;

const props = defineProps({
  /**
   * @deprecated Use `modelValue` instead
   */
  value: {
    type: [Object, String, Number, Boolean],
    default: '',
  },
  modelValue: {
    type: [Object, String, Number, Boolean],
    default: '',
  },
  items: {
    type: Array as PropType<VSelectItem[]>,
    default: () => [],
  },
  color: {
    type: String,
    default: 'primary',
  },
  placeholder: {
    type: String,
    default: 'Select',
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  hideCheckIcon: {
    type: Boolean,
    default: false,
  },
  btnClass: {
    type: String,
    default: '',
  },
  top: {
    type: Boolean,
    default: false,
  },
  itemText: {
    type: String,
    default: 'text',
  },
  itemValue: {
    type: String,
    default: 'value',
  },
  name: {
    type: String,
    default: '',
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessages: {
    type: Array,
    default: () => [],
  },
  returnObject: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  clearText: {
    type: String,
    default: 'Clear',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  errorClass: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  shadowClass: {
    type: String,
    default: 'shadow-sm',
  },
  transition: {
    type: String,
    default: 'fade',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  searchSize: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  searchPlaceholder: {
    type: String,
    default: 'Search...',
  },
  searchProps: {
    type: Object as PropType<InstanceType<typeof VInput>['$props']>,
    default: () => ({}),
  },
  fieldOptions: {
    type: Object as PropType<Partial<FieldOptions<any>>>,
    default: () => ({}),
  },
});

const {
  modelValue,
  value,
  name,
  rules,
  items,
  itemText,
  itemValue,
  placeholder,
} = toRefs(props);

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: Val): void;
    (e: 'update:value', value: Val): void;
    (e: 'search', value: string): void;
  }>();

const {value: selectedItem, errorMessage} = useField<Val>(name, rules, {
  initialValue: modelValue.value || value.value,
  ...props.fieldOptions,
});

const findItem = (val: Val) => {
  return items.value.find((item) => item[itemValue.value] === val);
};

watch(selectedItem, (val) => {
  if (props.returnObject) {
    if (typeof val === 'object') {
      emit('update:modelValue', val);
      emit('update:value', val);
    } else {
      const item = findItem(val) as Val;
      emit('update:modelValue', item);
      emit('update:value', item);
    }
  } else {
    emit('update:modelValue', val);
    emit('update:value', val);
  }
});

const message = computed(() => {
  return errorMessage.value || props.errorMessages[0];
});

const search = ref('');

const filteredItems = computed(() => {
  if (props.searchable) {
    const query = search.value.toLowerCase();
    return items.value.filter((item) => {
      return (
        item[itemText.value]?.toLowerCase?.()?.includes(query) ||
        item[itemValue.value]?.toLowerCase?.()?.includes(query)
      );
    });
  }

  return items.value;
});

watch(search, (val) => emit('search', val));

const selectedText = computed(() => {
  const item = filteredItems.value.find((item) => {
    return item[itemValue.value] === selectedItem.value;
  });

  return item?.[props.itemText] || placeholder.value;
});

const clear = () => (selectedItem.value = '');
</script>

<template>
  <div
    class="v-select"
    :class="[
      `v-select-${color}`,
      `v-select--${size}`,
      {
        'v-select--error': error || !!errorMessages[0],
        'v-select--disabled': disabled,
      },
      wrapperClass,
    ]"
  >
    <Listbox v-model="selectedItem">
      <ListboxLabel v-if="label" class="v-select-label" :class="labelClass">
        {{ label }}
      </ListboxLabel>
      <div class="v-select-panel">
        <ListboxButton
          class="v-select-button"
          :class="[
            btnClass,
            {
              [shadowClass]: shadow,
            },
          ]"
          :disabled="disabled"
        >
          <div
            class="v-select-selected"
            :class="{
              'v-select-selected--placeholder': !selectedItem,
            }"
          >
            <slot name="selected" :item="selectedItem">
              {{ selectedText }}
            </slot>
          </div>
          <v-tooltip v-if="selectedItem && clearable">
            <template #activator>
              <button
                type="button"
                aria-label="Clear"
                class="v-select-clearable-button"
                @click="clear"
              >
                <Icon
                  name="heroicons:x-mark"
                  class="v-select-clearable-icon"
                  aria-hidden="true"
                />
              </button>
            </template>
            <span> {{ clearText }} </span>
          </v-tooltip>
          <span class="w-auto">
            <Icon
              name="heroicons:chevron-down"
              class="v-select-icon"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition :name="transition">
          <ListboxOptions
            class="v-select-options"
            :class="top ? 'bottom-10' : ''"
          >
            <div v-if="searchable" class="v-select-searchable">
              <v-input
                v-model="search"
                :size="searchSize"
                :placeholder="searchPlaceholder"
                clearable
                v-bind="searchProps"
              />
            </div>
            <div
              v-if="searchable && !filteredItems.length"
              class="px-4 pb-2 pt-3"
            >
              <slot name="empty"> No results </slot>
            </div>
            <ListboxOption
              v-for="(item, index) in filteredItems"
              v-slot="{selected}"
              :key="index"
              :value="returnObject ? item : item?.[itemValue]"
              as="template"
            >
              <li
                class="group v-select-option"
                :class="[
                  {
                    'v-select-option--active': selected,
                  },
                ]"
              >
                <span
                  v-if="!hideCheckIcon"
                  class="v-select-option-check"
                  :class="{
                    'v-select-option-check--active': selected,
                  }"
                >
                  <slot v-if="selected" name="icon">
                    <Icon
                      name="heroicons:check"
                      class="v-select-option-check-icon"
                      aria-hidden="true"
                    />
                  </slot>
                </span>
                <span :class="['v-select-option-text']">
                  <slot name="item" :item="item">
                    {{ item?.[itemText] }}
                  </slot>
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>

    <div v-if="message" class="v-select-error" :class="errorClass">
      {{ message }}
    </div>
  </div>
</template>

<style>
:root {
  /* input control / button */
  --v-select-border-color: var(--v-input-border-color);
  --v-select-border-radius: var(--v-input-border-radius);
  --v-select-bg-color: var(--v-input-bg-color);
  --v-select-height: var(--v-input-height);
  --v-select-placeholder-color: var(--v-input-placeholder-color);
  --v-select-border-radius: var(--v-input-border-radius);
  --v-select-padding-x: var(--v-input-padding-x);
  --v-select-padding-y: var(--v-input-padding-y);
  --v-select-font-size: var(--v-input-font-size);

  /* label */
  --v-select-label-font-size: var(--v-input-label-font-size);
  --v-select-label-font-weight: var(--v-input-label-font-weight);
  --v-select-label-display: var(--v-input-label-display);
  --v-select-label-margin-bottom: var(--v-input-label-margin-bottom);

  /* text */
  --v-select-text-color: var(--v-input-text-color);
  --v-select-text-font-size: var(--v-input-text-font-size);
  --v-select-text-font-weight: var(--v-input-text-font-weight);

  /* icon */
  --v-select-icon-width: var(--v-input-icon-width);
  --v-select-icon-height: var(--v-input-icon-height);
  --v-select-icon-color: var(--v-input-icon-color);

  /* option item */
  --v-select-option-padding-x: theme('spacing.4');
  --v-select-option-padding-y: theme('spacing.2');
  --v-select-option-bg-color: theme('colors.white');
  --v-select-option-text-color: theme('colors.gray.800');

  /* option item on hover */
  --v-select-option-hover-bg-color: theme('colors.primary.500');
  --v-select-option-hover-text-color: theme('colors.white');
}

.v-select-button {
  border: 1px solid var(--v-select-border-color);
  border-radius: var(--v-select-border-radius);
  background-color: var(--v-select-bg-color);
  padding: var(--v-select-padding-y) var(--v-select-padding-x);
  height: var(--v-select-height);
  font-size: var(--v-select-font-size);
  font-weight: var(--v-select-font-weight);

  @apply relative
    w-full
    text-left
    cursor-default
    focus:outline-none
    focus:ring-1
    focus:ring-primary-500
    focus:border-primary-500
    flex
    items-center
    gap-1;
}

.v-select--error .v-select-button {
  @apply border-error-500;
}

.v-select-selected {
  @apply block flex-grow w-full truncate mr-2;
}

.v-select-selected.v-select-selected--placeholder {
  color: var(--v-select-placeholder-color);
}

.v-select-options {
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
    z-10;
}

.v-select-clearable-button {
  @apply w-auto cursor-pointer flex items-center;
}

.v-select-clearable-icon {
  width: var(--v-select-icon-width);
  height: var(--v-select-icon-height);
  color: var(--v-select-icon-color);
}

.v-select-clearable-icon:hover {
  color: var(--v-select-icon-hover-color);
}

.v-select-icon {
  width: var(--v-select-icon-width);
  height: var(--v-select-icon-height);
  color: var(--v-select-icon-color);

  @apply text-gray-400;
}

.v-select-option {
  padding: var(--v-select-option-padding-y) var(--v-select-option-padding-x);
  font-size: var(--v-select-font-size);
  font-weight: var(--v-select-font-weight);
  background: var(--v-select-option-bg-color);
  color: var(--v-select-option-text-color);

  @apply cursor-default select-none relative flex gap-2 items-center;
}

.v-select-option:hover,
.v-select-option.v-select-option--active {
  --v-select-option-bg-color: var(--v-select-option-hover-bg-color);
  --v-select-option-text-color: var(--v-select-option-hover-text-color);
}

.v-select-option-text {
  @apply block truncate;
}

.v-select-option-check {
  @apply w-6 h-6 shrink-0;
}

.v-select-option-check-icon {
  @apply w-5 h-5;
}

.v-select-searchable {
  @apply px-3 border-b py-2;
}

.v-select-error {
  @apply text-error-500 mt-1 text-sm;
}

.v-select-label {
  font-size: var(--v-select-label-font-size);
  font-weight: var(--v-select-label-font-weight);
  display: var(--v-select-label-display);
  margin-bottom: var(--v-select-label-margin-bottom);
}

.v-select-panel {
  @apply relative;
}

/* sizes */
.v-select.v-select--sm {
  --v-select-height: 2rem;
  --v-select-padding-x: theme('padding.2');
  --v-select-padding-y: theme('padding.1');
  --v-select-font-size: theme('fontSize.sm');
  --v-select-label-font-size: theme('fontSize.xs');
}
.v-select.v-select--sm .v-select-button {
  --v-select-font-size: theme('fontSize.sm');
}
.v-select.v-select--sm .v-select-icon {
  --v-select-icon-width: theme('width.4');
  --v-select-icon-height: theme('height.4');
}
.v-select.v-select--sm .v-select-option {
  --v-select-option-padding-x: theme('padding.2');
  --v-select-option-padding-y: theme('padding.1');
}

.v-select.v-select--lg {
  --v-select-height: 50px;
  --v-select-padding-x: theme('padding.5');
  --v-select-padding-y: theme('padding.3');
  --v-select-font-size: theme('fontSize.lg');
  --v-select-label-font-size: theme('fontSize.base');
}
.v-select.v-select--lg .v-select-button {
  --v-select-font-size: theme('fontSize.lg');
}
.v-select.v-select--lg .v-select-icon {
  --v-select-icon-width: theme('width.7');
  --v-select-icon-height: theme('height.7');
}
.v-select.v-select--lg .v-select-option {
  --v-select-option-padding-x: theme('padding.5');
  --v-select-option-padding-y: theme('padding.3');
}
</style>
