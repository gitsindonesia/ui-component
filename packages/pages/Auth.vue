<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps({
  image: {
    type: String,
    default: "authentication",
  },
  formOnLeft: {
    type: Boolean,
    default: false,
  },
  imageWrapperClass: {
    type: String,
    default: "",
  },
  formWrapperClass: {
    type: String,
    default: "",
  },
  defaultImageWrapperClass: {
    type: String,
    default:
      "w-full lg:w-6/12 xl:w-7/12 flex items-center justify-center px-12 pt-10 xl:p-0",
  },
  defaultFormWrapperClass: {
    type: String,
    default: "w-full lg:w-6/12 xl:w-5/12 flex items-center justify-center p-4 xl:p-0",
  },
});

const {
  image,
  formOnLeft,
  imageWrapperClass,
  formWrapperClass,
  defaultImageWrapperClass,
  defaultFormWrapperClass,
} = toRefs(props);
</script>

<template>
  <div class="flex flex-col lg:flex-row sm:min-h-screen">
    <div
      class=""
      :class="[
        defaultImageWrapperClass,
        formOnLeft ? 'order-2' : 'order-1',
        imageWrapperClass,
      ]"
    >
      <slot name="image">
        <img
          v-if="image === 'authentication'"
          src="./assets/authentication.svg"
          class="max-w-full sm:max-w-2xl sm:my-5 block"
        />
        <img
          v-else-if="image === 'login'"
          src="./assets/login.svg"
          class="max-w-full sm:max-w-2xl sm:my-5 block"
        />
        <img
          v-else-if="image === 'forgot-password'"
          src="./assets/forgot-password.svg"
          class="max-w-full sm:max-w-2xl sm:my-5 block"
        />
      </slot>
    </div>
    <div
      :class="[
        defaultFormWrapperClass,
        formOnLeft ? 'order-1' : 'order-2',
        formWrapperClass,
      ]"
    >
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
