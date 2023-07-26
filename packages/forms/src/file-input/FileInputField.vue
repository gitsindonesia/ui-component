<script setup lang="ts">
import {PropType, toRef} from 'vue';
import {useField} from 'vee-validate';
import FileInput from './FileInput.vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  value: {
    type: Array as PropType<any[]>,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
  wrapperClass: {
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
  meta,
  errorMessage,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <div class="v-input" :class="wrapperClass">
    <label v-if="label" class="v-input-label">
      {{ label }}
    </label>
    <FileInput
      :model-value="inputValue"
      @update:model-value="handleChange"
      v-bind="$attrs"
    >
      <template v-for="(_, slot) in $slots" :key="slot" #[slot]="slotProps">
        <slot :key="slot" :name="slot" v-bind="slotProps" />
      </template>
    </FileInput>
    <div v-if="hint" class="v-input-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </div>
    <div v-if="meta.touched && !meta.valid" class="v-input-error">
      <slot name="error" v-bind="{meta, errorMessage}">
        {{ errorMessage }}
      </slot>
    </div>
  </div>
</template>
