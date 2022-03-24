<script setup lang="ts">
import { ref } from "vue";
import FormExample from "./FormExample.vue";

const isOpen = ref(false);

const onCancel = () => {
  isOpen.value = false;
};
</script>

<template>
  <v-modal v-model="isOpen" hide-footer>
    <template #activator="{ open }">
      <v-btn @click="open">Open Form</v-btn>
    </template>
    <form-example title="Modal Form with Validation" @cancel="onCancel" />
  </v-modal>
</template>

<style scoped></style>
