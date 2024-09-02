<script setup lang="ts">
import { toRef } from 'vue';
import Switch from './Switch.vue';
import {useField} from 'vee-validate';

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
});

const name = toRef(props, 'name');

const {
  value: switchValue,
  errorMessage,
  meta,
  handleChange
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <Switch
    :error="meta.touched && !meta.valid"
    :error-message="errorMessage"
    :label="label"
    :model-value="switchValue"
    @update:model-value="handleChange"
  >
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
      <slot :name="name" v-bind="slotData" />
    </template>
  </Switch>
</template>
