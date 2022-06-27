<script setup lang="ts">
import {computed, toRefs, watch, PropType} from 'vue';
import {useField} from 'vee-validate';
import {useTextSize} from '@gits-id/utils';

type Value = string | number | object | boolean | Record<string, any>;

type RadioItem = Record<string, any>;

const props = defineProps({
  modelValue: {
    type: [String, Number, Object, Boolean] as PropType<Value>,
    default: null,
  },
  value: {
    type: [String, Number, Object, Boolean] as PropType<Value>,
    default: null,
  },
  label: {
    type: String,
    default: '',
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
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  items: {
    type: Array as PropType<RadioItem[]>,
    default: () => [],
  },
  itemText: {
    type: String,
    default: 'text',
  },
  itemValue: {
    type: String,
    default: 'value',
  },
  size: {
    type: String,
    default: '',
  },
  inline: {
    type: Boolean,
    default: false,
  },
  hideError: {
    type: Boolean,
    default: false,
  },
  labelClass: {
    type: String,
    default: '',
  },
  errorClass: {
    type: String,
    default: 'text-error-600 text-sm mt-1',
  },
  rules: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
});

const {
  modelValue,
  error,
  value,
  disabled,
  label,
  items,
  itemValue,
  itemText,
  size,
  inline,
  name,
  rules,
} = toRefs(props);

const emit = defineEmits([
  'update:modelValue',
  'update:value',
  'input',
  'change',
  'blur',
]);

const {value: selected, errorMessage} = useField(name, rules, {
  initialValue: modelValue.value || value.value,
});

const onChange = (event: any) => {
  emit('change', event);
};

const classes = computed(() =>
  error.value
    ? 'text-error-600 focus:ring-error-600'
    : 'text-primary-600 focus:ring-primary-600',
);

const getValue = (item: RadioItem) => {
  return typeof item === 'object' ? item?.[itemValue.value] : item;
};

const getText = (item: RadioItem) => {
  return typeof item === 'object' ? item?.[itemText.value] : item;
};

watch(selected, (val) => {
  emit('update:modelValue', val);
  emit('update:value', val);
  emit('input', val);
  emit('change', val);
});

const {class: sizeClass} = useTextSize(size.value);

const setInnerValue = (val: Value) => {
  selected.value = val;
};

watch(modelValue, (val) => {
  setInnerValue(val);
});

watch(value, (val) => {
  setInnerValue(val);
});
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="font-medium mb-1 block"
      :class="[error ? 'text-error-500' : 'text-gray-700', labelClass]"
    >
      {{ label }}
    </label>
    <div
      class="flex gap-y-2 sm:gap-y-0 gap-x-8"
      :class="[inline ? 'flex-row' : 'flex-col']"
    >
      <label v-for="(item, index) in items" :key="index">
        <input
          :id="id || name"
          v-model="selected"
          :name="name"
          type="radio"
          :value="getValue(item)"
          class="
            mr-2
            transition
            duration-300
            disabled:cursor-not-allowed
            disabled:border-gray-300
          "
          :class="classes"
          :disabled="disabled"
          @change="onChange"
        />
        <slot name="label" :item="item" :selected="selected">
          <span :class="[sizeClass, error ? 'text-error' : 'text-gray-700']">
            {{ getText(item) }}
          </span>
        </slot>
      </label>
    </div>
    <div v-if="errorMessage && !hideError" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>
