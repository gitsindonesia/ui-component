<script setup>
import {ref, computed, toRefs, watch} from 'vue';
import {ErrorMessage} from 'vee-validate';
import {useTextSize} from '../../utils';

const props = defineProps({
  modelValue: {
    type: [String, Number, Object],
    default: null,
  },
  value: {
    type: [String, Number, Object],
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
    type: Array,
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
});

const {
  modelValue,
  error,
  errorMessages,
  value,
  readonly,
  disabled,
  label,
  items,
  itemValue,
  itemText,
  size,
} = toRefs(props);

const emit = defineEmits([
  'update:modelValue',
  'update:value',
  'input',
  'change',
  'blur',
]);

const selected = ref(value.value || modelValue.value);

const onChange = (event) => {
  emit('change', event);
};

const classes = computed(() =>
  error.value
    ? 'text-error-600 focus:ring-error-600'
    : 'text-primary-600 focus:ring-primary-600',
);

const getValue = (item) => {
  return typeof item === 'object' ? item?.[itemValue.value] : item;
};

const getText = (item) => {
  return typeof item === 'object' ? item?.[itemText.value] : item;
};

watch(selected, (value) => {
  emit('update:modelValue', value);
  emit('update:value', value);
  emit('input', value);
  emit('change', value);
});

const {class: sizeClass} = useTextSize(size.value);
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="font-bold mb-2 block"
      :class="error ? 'text-error-600' : 'text-gray-700'"
    >
      {{ label }}
    </label>
    <div
      class="
        flex flex-col
        sm:flex-row sm:items-center
        gap-y-2
        sm:gap-y-0
        gap-x-8
      "
    >
      <label v-for="item in items" :key="item">
        <input
          v-model="selected"
          :name="name"
          type="radio"
          :value="getValue(item)"
          class="
            mr-2
            transition
            duration-300
            disabled:cursor-not-allowed disabled:border-gray-300
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
    <ErrorMessage class="text-error-600 text-sm mt-2 block" :name="name" />
  </div>
</template>

<style scoped></style>
