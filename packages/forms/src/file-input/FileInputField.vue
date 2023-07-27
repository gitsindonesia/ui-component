<script setup lang="ts">
import {PropType, toRef} from 'vue';
import {useField} from 'vee-validate';
import FileInput from './FileInput.vue';

const props = defineProps({
  value: {
    type: Array as PropType<any[]>,
  },
  name: {
    type: String,
    required: true,
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
  meta,
  errorMessage,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <FileInput
    :model-value="inputValue"
    :error="meta.touched && !meta.valid"
    :error-message="errorMessage"
    @update:model-value="handleChange"
    v-bind="$attrs"
  >
    <template v-for="(_, slot) in $slots" :key="slot" #[slot]="slotProps">
      <slot :key="slot" :name="slot" v-bind="slotProps" />
    </template>
  </FileInput>
</template>
