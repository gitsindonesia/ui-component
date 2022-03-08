<script setup>
import { toRefs } from "vue";
import { UserIcon } from "@heroicons/vue/outline";
import VBtn from "@gits-id/button";
import { VInputGroup } from "@gits-id/input";

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: "Forgot Password",
  },
  subtitle: {
    type: String,
    default: "We'll send you a reset password link to your email",
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
        <label for="email" class="mb-2 block"> Email </label>
        <VInputGroup id="email" class="mb-4" placeholder="Email" prepend>
          <template #prepend>
            <UserIcon class="w-5 h-5 text-[#DFE0E0]" />
          </template>
        </VInputGroup>

        <VBtn type="submit" color="primary" block uppercase> Submit </VBtn>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
