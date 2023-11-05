<script setup lang="ts">
import {type PropType, computed, ref, watch} from 'vue';
import SelectOptions, {type Option} from '../input/SelectOptions.vue';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  options: {
    type: Array as PropType<Option[]>,
    default: () => [] as Option[],
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
    default: undefined,
  },
  error: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  errorClass: {
    type: String,
    default: '',
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
  hint: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: undefined,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const inputId = computed(() => props.id || props.name);
const uncontrolledValue = ref(props.modelValue);
const input = ref();

function focus() {
  input.value?.focus();
}

watch(uncontrolledValue, (newValue) => {
  emit('update:modelValue', newValue);
});

defineExpose({
  focus,
});

defineSlots<{
  default?: (props: {}) => any;
  hint?: (props: {}) => any;
  error?: (props: {}) => any;
}>();
</script>

<template>
  <div
    :class="[
      `v-input v-input--select`,
      {
        'v-input--error': error || !!errorMessage,
        'v-input--disabled': disabled,
        'v-input--readonly': readonly,
        'v-input--shadow': shadow,
      },
      wrapperClass,
    ]"
  >
    <label
      v-if="label"
      :for="inputId"
      class="v-input-label"
      :class="labelClass"
    >
      {{ label }}
    </label>
    <div class="v-input-wrapper">
      <select
        :id="inputId"
        v-model="uncontrolledValue"
        class="v-input-control"
        :disabled="disabled"
        :readonly="readonly"
        v-bind="$attrs"
      >
        <SelectOptions :options="options" />
      </select>
    </div>
    <div v-if="hint" class="v-input-hint">
      <slot name="hint">
        {{ hint }}
      </slot>
    </div>
    <div v-if="errorMessage" class="v-input-error" :class="errorClass">
      <slot name="error">
        {{ errorMessage }}
      </slot>
    </div>
  </div>
</template>
