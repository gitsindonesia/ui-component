<script setup lang="ts">
import { toRefs} from 'vue';

const props = defineProps({
  image: {
    type: String,
    default: 'authentication',
  },
});

const {image} = toRefs(props);
</script>

<template>
  <div class="flex flex-col lg:flex-row sm:min-h-screen">
    <div
      class="
        w-full
        lg:w-6/12
        xl:w-7/12
        flex
        items-center
        justify-center
        px-12
        pt-10
        xl:p-0
      "
    >
      <slot name="image">
        <img
          v-if="image === 'authentication'"
          src="../../../public/authentication.svg"
          class="max-w-full sm:max-w-2xl sm:my-5 block"
        />
        <img
          v-else-if="image === 'login'"
          src="../../../public/login.svg"
          class="max-w-full sm:max-w-2xl sm:my-5 block"
        />
        <img
          v-else-if="image === 'forgot-password'"
          src="../../../public/forgot-password.svg"
          class="max-w-full sm:max-w-2xl sm:my-5 block"
        />
      </slot>
    </div>
    <div
      class="
        w-full
        lg:w-6/12
        xl:w-5/12
        flex
        items-center
        justify-center
        p-4
        xl:p-0
      "
    >
      <slot />
    </div>
  </div>
</template>

<style scoped></style>
