<script setup lang="ts">
import {ref, toRefs, computed, watch} from 'vue';
import VInput from '../VInput/VInput.vue';
import {ErrorMessage} from 'vee-validate';
import {inputErrorClasses} from '../../utils';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  prepend: {
    type: Boolean,
    default: false,
  },
  append: {
    type: Boolean,
    default: false,
  },
  inputProps: {
    type: Object,
    default: () => ({}),
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
  errorClass: {
    type: String,
    default: '',
  },
});

const {
  prepend,
  append,
  inputProps,
  error,
  errorMessages,
  name,
  errorClass,
  modelValue,
} = toRefs(props);

const emit = defineEmits(['update:modelValue', 'blur']);

const value = ref(props.modelValue);

watch(value, (val) => {
  emit('update:modelValue', val);
});

const inputClass = computed(() => {
  let classes = [];
  if (prepend.value) classes.push('pl-12');
  if (append.value) classes.push('pr-12');
  return classes.join(' ');
});

watch(modelValue, (val) => {
  value.value = val;
});

const onBlur = () => emit('blur');
</script>

<template>
  <div>
    <div class="flex p-0 relative rounded-md">
      <div
        v-if="prepend"
        class="absolute inset-y-0 ml-4 flex items-center justify-center"
      >
        <slot name="prepend"></slot>
      </div>
      <VInput
        :id="id"
        v-model="value"
        class="mb-0"
        :placeholder="placeholder"
        :type="type"
        :class="inputClass"
        :name="name"
        :error="error"
        v-bind="inputProps"
        @blur="onBlur"
      />
      <div
        v-if="append"
        class="
          absolute
          right-0
          inset-y-0
          rounded-[4px]
          flex
          items-center
          justify-center
        "
      >
        <slot name="append"></slot>
      </div>
    </div>
    <div :class="errorClass">
      <ErrorMessage class="text-error-600 text-sm" :name="name" />
    </div>
  </div>
</template>

<style scoped></style>
