<script setup>
import { toRefs } from "vue";
import { LockClosedIcon } from "@heroicons/vue/outline";
import VBtn from "@gits-id/button";
import { VInputGroup } from "@gits-id/input";

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: "Reset Password",
  },
  subtitle: {
    type: String,
    default: "Create a new and secure password for your account",
  },
});

const { title, subtitle } = toRefs(props);

const emit = defineEmits(["submit"]);

const onSubmit = () => {
  emit("submit");
};
</script>

<template>
  <div class="">
    <slot name="logo" />
    <h1 class="font-extrabold text-4xl mb-2">
      {{ title }}
    </h1>
    <div class="text-gray-600">
      {{ subtitle }}
    </div>
    <form @submit.prevent="onSubmit">
      <div class="mt-10">
        <label for="password" class="mb-2 block"> Password Baru </label>
        <VInputGroup
          id="password"
          class="mb-4"
          placeholder="Password Baru"
          type="password"
          prepend
        >
          <template #prepend>
            <LockClosedIcon class="w-5 h-5 text-[#DFE0E0]" />
          </template>
        </VInputGroup>

        <label for="password" class="mb-2 block"> Konfirmasi Password Baru </label>
        <VInputGroup
          id="password"
          class="mb-4"
          placeholder="Konfirmasi Password Baru"
          type="password"
          prepend
        >
          <template #prepend>
            <LockClosedIcon class="w-5 h-5 text-[#DFE0E0]" />
          </template>
        </VInputGroup>

        <VBtn color="primary" block> Reset Password </VBtn>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
