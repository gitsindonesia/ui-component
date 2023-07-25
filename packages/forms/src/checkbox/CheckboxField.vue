<script setup lang="ts">
import {toRef} from 'vue';
import {useField} from 'vee-validate';
import Checkbox from './Checkbox.vue';

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
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
  eager: {
    type: Boolean,
    default: false,
  },
});

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, 'name');

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
  type: 'checkbox',
  valueProp: props.value,
  checkedValue: props.checkedValue,
  uncheckedValue: props.uncheckedValue,
  validateOnValueUpdate: !props.eager,
});
</script>

<template>
  <Checkbox
    :label="label"
    :name="name"
    :id="name"
    :placeholder="placeholder"
    :error="meta.touched && !meta.valid"
    :error-message="errorMessage"
    :model-value="inputValue"
    @input="handleChange"
    @blur="handleBlur($event, true)"
  >
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </Checkbox>
</template>
