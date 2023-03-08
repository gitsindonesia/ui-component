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
import {FieldOptions} from 'vee-validate';
import Icon from '@gits-id/icon';
import '@gits-id/tooltip/dist/style.css';
import '@gits-id/theme/transition.css';
import {VSelectItem} from './types';
import {useFormValue, type ValidationMode} from '@gits-id/forms';

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
    default: 'sm',
  },
  validationMode: {
    type: String as PropType<ValidationMode>,
    default: 'aggressive',
  },
  hideError: {
    type: Boolean,
    default: false,
  }
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: Val): void;
    (e: 'update:value', value: Val): void;
    (e: 'change', value: Val): void;
    (e: 'search', value: string): void;
  }>();

const {
  items,
  itemText,
  itemValue,
  placeholder,
} = toRefs(props);

const {errorMessage, uncontrolledValue, clear} = useFormValue(props, emit, props.fieldOptions, (val: any) => {
  emitSelected(val)
});

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
    <Listbox v-model="uncontrolledValue">
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
          <span class="w-auto">
            <Icon
              name="heroicons:chevron-down"
              :size="iconSize"
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
              <slot name="empty"> No results</slot>
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
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>

    <div
      v-if="message && !hideError"
      class="v-select-error"
      :class="errorClass"
    >
      {{ message }}
    </div>
  </div>
</template>

<style src="./VSelect.scss" lang="scss"></style>
