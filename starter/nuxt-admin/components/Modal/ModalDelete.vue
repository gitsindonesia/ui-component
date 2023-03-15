<script setup lang="ts">
import {useVModel} from '@vueuse/core';

interface Props {
  modelValue?: boolean;
  message?: string;
  yesText?: string;
  noText?: string;
  title?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  message: 'Are you sure want to delete this item?',
  yesText: 'Yes, delete it!',
  noText: 'Cancel',
  title: 'Delete Confirmation',
});

const emit =
  defineEmits<{
    (e: 'update:modelValue', value: boolean): void;
    (e: 'yes'): void;
    (e: 'no'): void;
  }>();

const isOpen = useVModel(props, 'modelValue', emit);

const yes = () => {
  emit('yes');
  isOpen.value = false;
};

const no = () => {
  emit('no');
  isOpen.value = false;
};
</script>

<template>
  <VModal v-model="isOpen" :title="title" hide-x-button>
    {{ message }}
    <template #footer>
      <VBtn @click="no"> {{ noText }}</VBtn>
      <VBtn color="error" @click="yes"> {{ yesText }}</VBtn>
    </template>
  </VModal>
</template>
