<script setup lang="ts">
import {toRef} from 'vue';
import {useField} from 'vee-validate';
import Select from './Select.vue';

const props = defineProps({
  value: {
    type: Object,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
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
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <Select
    :error="meta.touched && !meta.valid"
    :error-message="errorMessage"
    :placeholder="placeholder"
    :label="label"
    v-model="inputValue"
  />
</template>
