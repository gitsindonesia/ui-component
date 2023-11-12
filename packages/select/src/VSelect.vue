<script setup lang="ts">
import {computed, type PropType, ref, toRefs, watch} from 'vue';
import {
  Combobox,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  ComboboxLabel,
} from '@headlessui/vue';
import VTooltip from '@morpheme/tooltip';
import {FieldOptions} from 'vee-validate';
import Icon from '@morpheme/icon';
import {VSelectItem} from './types';
import {useFormValue, VInput} from '@morpheme/forms';

type ValidationMode = 'eager' | 'aggressive';
type Val = string | number | boolean | VSelectItem | Record<string, any>;

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
    default: 'v-select--shadow',
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
  checkIcon: {
    type: String,
    default: 'ri:check-line',
  },
  checkIconSize: {
    type: String,
    default: 'sm',
  },
  iconSize: {
    type: String,
    default: 'xs',
  },
  validationMode: {
    type: String as PropType<ValidationMode>,
    default: 'aggressive',
  },
  hideError: {
    type: Boolean,
    default: false,
  },
  hint: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: Val): void;
  (e: 'update:value', value: Val): void;
  (e: 'change', value: Val): void;
  (e: 'search', value: string): void;
}>();

const {items, itemText, itemValue, placeholder} = toRefs(props);

const {errorMessage, uncontrolledValue, clear} = useFormValue(
  props,
  emit,
  props.fieldOptions,
  (val: any) => {
    emitSelected(val);
  },
);

const findItem = (val: Val) => {
  return items.value.find((item) => item[itemValue.value] === val);
};

// watch(
//   meta,
//   (val) => {
//     if (name.value && val.initialValue !== initialValue.value) {
//       initialValue.value = val.initialValue as any;
//     }
//   },
//   {
//     deep: true,
//   },
// );

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
  const item = items.value.find((item) => {
    return item[itemValue.value] === uncontrolledValue.value;
  });

  if (props.returnObject) {
    return (
      (uncontrolledValue?.value as VSelectItem)[props.itemText] ||
      placeholder.value
    );
  }

  return item?.[props.itemText] || placeholder.value;
});

const emitSelected = (val: any) => {
  let emittedVal = val;

  // look up the matching value entry
  // if selected value is not an object
  // but object is expected as emitted value
  if (props.returnObject && typeof val !== 'object') {
    emittedVal = findItem(val) as Val;
  }

  // clear search input
  search.value = '';

  // emit event
  emit('update:modelValue', emittedVal);
  emit('update:value', emittedVal);
  emit('change', emittedVal);
};

defineSlots<{
  default?: (props: {}) => any;
  selected?: (props: {item: Val}) => any;
  item?: (props: {item: Val}) => any;
  empty?: (props: {}) => any;
  hint?: (props: {}) => any;
  icon?: (props: {}) => any;
}>();
</script>

<template>
  <div
    class="v-select"
    :class="[
      `v-select-${color}`,
      `v-select--${size}`,
      {
        'v-select--error': error || !!errorMessages[0] || !!errorMessage,
        'v-select--disabled': disabled,
        'v-select--readonly': readonly,
        [shadowClass]: shadow,
      },
      wrapperClass,
    ]"
  >
    <Combobox v-model="uncontrolledValue">
      <ComboboxLabel v-if="label" class="v-select-label" :class="labelClass">
        {{ label }}
      </ComboboxLabel>
      <div class="v-select-panel">
        <ComboboxButton
          class="v-select-button"
          :class="[btnClass]"
          :disabled="disabled"
        >
          <div
            class="v-select-selected"
            :class="{
              'v-select-selected--placeholder': !uncontrolledValue,
            }"
          >
            <slot name="selected" :item="uncontrolledValue">
              {{ selectedText }}
            </slot>
          </div>
          <v-tooltip v-if="uncontrolledValue && clearable">
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
          <Icon
            name="heroicons:chevron-down"
            :size="iconSize"
            class="v-select-icon"
            aria-hidden="true"
          />
        </ComboboxButton>

        <transition :name="transition">
          <ComboboxOptions
            class="v-select-options"
            :class="{
              'bottom-10': top,
              'v-select-options--top': top,
            }"
          >
            <div v-if="searchable" class="v-select-searchable">
              <v-input
                v-model="search"
                :size="searchSize"
                :placeholder="searchPlaceholder"
                clearable
                v-bind="searchProps"
              />
              <!--
              <ComboboxInput
                :placeholder="searchPlaceholder"
                @change="search = $event.target.value"
                v-bind="searchProps"
              />
              -->
            </div>
            <div
              v-if="searchable && !filteredItems.length"
              class="px-4 pb-2 pt-3"
            >
              <slot name="empty"> No results</slot>
            </div>
            <ComboboxOption
              v-for="(item, index) in filteredItems"
              v-slot="{selected, active}"
              :key="index"
              :value="returnObject ? item : item?.[itemValue]"
              as="template"
            >
              <li
                class="group v-select-option"
                :class="[
                  {
                    'v-select-option--active': active,
                  },
                ]"
              >
                <span
                  v-if="!hideCheckIcon"
                  class="v-select-option-check"
                  :class="{
                    'v-select-option-check--active': active,
                    'v-select-option-check--selected': selected,
                  }"
                >
                  <slot v-if="selected" name="icon">
                    <Icon
                      :name="checkIcon"
                      :size="checkIconSize"
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
            </ComboboxOption>
          </ComboboxOptions>
        </transition>
      </div>
    </Combobox>
    <p v-if="hint" class="v-select-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </p>
    <div
      v-if="message && !hideError"
      class="v-select-error"
      :class="errorClass"
    >
      {{ message }}
    </div>
  </div>
</template>
