<script setup lang="ts">
import {ref, toRefs, watch} from 'vue';
import {VCollapse} from '@gits-id/collapsible';

type Props = {
  modelValue?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
  }>();

const {modelValue} = toRefs(props);

const isOpen = ref(modelValue.value);

watch(modelValue, (val) => (isOpen.value = val));

watch(isOpen, (val) => emit('update:modelValue', val));

const close = () => (isOpen.value = false);
const open = () => (isOpen.value = true);
const toggle = () => (isOpen.value = !isOpen.value);
</script>

<template>
  <slot
    name="activator"
    :is-open="isOpen"
    :close="close"
    :open="open"
    :toggle="toggle"
  />
  <VCollapse :show="isOpen">
    <slot :is-open="isOpen" :close="close" :open="open" :toggle="toggle" />
  </VCollapse>
</template>
