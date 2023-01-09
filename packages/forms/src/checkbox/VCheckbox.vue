<script setup lang="ts">
import {toRefs, computed, PropType, watch, ref} from 'vue';
import {useField} from 'vee-validate';

type CheckboxValue = any[] | boolean | undefined;

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  inputClass: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: '',
  },
  validationMode: {
    type: String,
    default: 'aggressive',
  },
  value: {
    type: [String, Number, Boolean] as PropType<CheckboxValue>,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  rules: {
    type: String,
    default: '',
  },
  wrapperClass: {
    type: String,
    default: '',
  },
  checkedValue: {
    type: Boolean,
    default: true,
  },
  uncheckedValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @deprecated
   */
  disabledClass: {
    type: String,
    default: 'v-checkbox--disabled',
  },
  errorClass: {
    type: String,
    default: '',
  },
  labelClass: {
    type: String,
    default: '',
  },
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: CheckboxValue): void;
  }>();

const {modelValue, label, inputClass, disabled, id, name, rules, validationMode} =
  toRefs(props);
const uncontrolledValue = ref();

const isEagerValidation = computed(() => {
  return validationMode.value === 'eager';
});

const inputId = computed(() => {
  return id.value || name.value;
});

const {
  value: vvValue,
  errorMessage,
  validate,
  setValue,
} = useField<CheckboxValue>(name, rules, {
  type: 'checkbox',
  valueProp: props.value,
  checkedValue: props.checkedValue,
  uncheckedValue: props.uncheckedValue,
  validateOnValueUpdate: !isEagerValidation.value,
});

watch(modelValue, (val) => {
  uncontrolledValue.value = val;
});

watch(vvValue, (val) => {
  uncontrolledValue.value = val;
});

watch(uncontrolledValue, (val) => {
  if (name.value) {
    setValue(val);
  }

  emit('update:modelValue', val);
});

const handleBlur = (m: any) => {
  if (isEagerValidation.value) {
    validate();
  }
};

const handleChange = (m: any) => {
  if (errorMessage.value && isEagerValidation.value) {
    validate();
  }
};
</script>

<template>
  <div :class="wrapperClass">
    <div
      class="v-checkbox"
      :class="[
        `v-checkbox-${color}`,
        {'v-checkbox--disabled': disabled, 'v-checkbox--error': !!errorMessage},
      ]"
    >
      <input
        :id="inputId"
        v-model="uncontrolledValue"
        @blur="handleBlur"
        @input="handleChange"
        :name="name"
        :value="value"
        type="checkbox"
        :class="['v-checkbox-input', inputClass]"
        :disabled="disabled"
        v-bind="$attrs"
      />
      <label
        v-if="label"
        class="v-checkbox-label"
        :class="labelClass"
        :for="inputId"
        @mousedown.prevent="null"
      >
        {{ label }}
      </label>
    </div>
    <div v-if="errorMessage" class="v-checkbox-error" :class="errorClass">
      {{ errorMessage }}
    </div>
  </div>
</template>

<style src="./VCheckbox.scss" lang="scss"></style>
