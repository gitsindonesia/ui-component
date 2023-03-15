<script setup lang="ts">
import {
  PropType,
  ref,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import { type ValidationMode, useFormValue } from '../composables';

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
  defaultClass: {
    type: String,
    default: '',
  },
  selectedClass: {
    type: String,
    default: '',
  },
  labelClass: {
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
  id: {
    type: String,
    default: '',
  },
  validationMode: {
    type: String as PropType<ValidationMode>,
    default: 'aggressive',
  },
  hint: {
    type: String,
    default: ''
  }
});

const emit = defineEmits([
  'update:modelValue',
  'update:value',
  'input',
  'change',
  'blur',
]);

const groupRef = ref();

const {errorMessage, uncontrolledValue, isEagerValidation, validate, meta} =
  useFormValue(props, emit);

const getValue = (item: RadioItem) => {
  return typeof item === 'object' ? item?.[props.itemValue] : item;
};

const getText = (item: RadioItem) => {
  return typeof item === 'object' ? item?.[props.itemText] : item;
};

const onChange = (event: any) => {
  emit('change', event);

  if (errorMessage.value) {
    validate();
  }
};

const handleBlur = (e: Event) => {
  if (isEagerValidation.value) {
    requestAnimationFrame(() => {
      // if has error, turn to aggressive mode
      if (errorMessage.value) {
        validate();
      }
    });
  }
};

const clickEvtListener = (e: Event) => {
  if (isEagerValidation.value) {
    requestAnimationFrame(() => {
      // check if user click anywhere within document
      // that is not the group's child (which is the inputs and label in this case)
      // thus can be considered a 'blur' event
      const isChild = (groupRef.value as HTMLElement).contains(
        e.target as HTMLElement,
      );

      if (!isChild && meta.dirty && !meta.valid) {
        validate();
      }
    });
  }
};

onMounted(() => {
  document.addEventListener('click', clickEvtListener);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', clickEvtListener);
});
</script>

<template>
  <div
    class="v-radio-group"
    :class="{
      'v-radio-group--error': error,
      'v-radio-group--inline': inline,
    }"
  >
    <label
      v-if="label"
      :for="name"
      class="v-radio-group-label"
      :class="labelClass"
    >
      {{ label }}
    </label>
    <div ref="groupRef" class="v-radio-group-items">
      <label
        :class="[
          'v-radio-group-items-label',
          uncontrolledValue === getValue(item) ? selectedClass : '',
          defaultClass,
        ]"
        v-for="(item, index) in items"
        :key="index"
      >
        <input
          :id="id || name"
          v-model="uncontrolledValue"
          @blur="handleBlur"
          :name="name"
          type="radio"
          :value="getValue(item)"
          class="v-radio-group-items-input"
          :disabled="disabled"
          @change="onChange"
        />
        <slot name="label" :item="item" :selected="uncontrolledValue">
          <span class="v-radio-group-items-text">
            {{ getText(item) }}
          </span>
        </slot>
      </label>
    </div>
    <p v-if="hint" class="v-radio-group-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </p>
    <div
      v-if="errorMessage && !hideError"
      class="v-radio-group-error"
      :class="errorClass"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<style src="./VRadioGroup.scss" lang="scss"></style>
