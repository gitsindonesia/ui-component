<script setup lang="ts">
import { ref } from 'vue';
import {
  VBtn,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalFooter,
  ModalBody,
} from '@morpheme/ui';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = true">Open Modal</VBtn>

  <Modal v-model="isOpen">
    <ModalHeader>
      <ModalTitle>Modal Title</ModalTitle>
      <VBtn
        @click="isOpen = false"
        prefix-icon="ri:close-line"
        size="sm"
        text
        icon
        fab
      />
    </ModalHeader>
    <ModalBody>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </ModalBody>
    <ModalFooter>
      <VBtn @click="isOpen = false">Close</VBtn>
      <VBtn @click="isOpen = false" color="primary">Okay</VBtn>
    </ModalFooter>
  </Modal>
</template>