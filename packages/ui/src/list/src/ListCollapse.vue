<script setup lang="ts">
import {ref, toRefs, watch} from 'vue';
import {VCollapse} from '../../collapsible/src';

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

defineSlots<{
  default?: (props: {
    isOpen: boolean;
    close: () => void;
    open: () => void;
    toggle: () => void;
  }) => any;
  activator?: (props: {
    isOpen: boolean;
    close: () => void;
    open: () => void;
    toggle: () => void;
  }) => any;
}>();
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
