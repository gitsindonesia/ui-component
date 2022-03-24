<script setup lang="ts">
import { reactive } from "vue";
import FormExample from "./FormExample.vue";

const initialValues = reactive({
  name: "Warsono",
  email: "warsono@gits.id",
  password: "",
  gender: "male",
  status: true,
});
</script>

<template>
  <form-example title="Inline Form with Validation" :initial-values="initialValues" />
</template>

<style scoped></style>
