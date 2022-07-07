<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: 'authentication',
  },
  formOnLeft: {
    type: Boolean,
    default: false,
  },
  imageWrapperClass: {
    type: String,
    default: '',
  },
  formWrapperClass: {
    type: String,
    default: '',
  },
  defaultImageWrapperClass: {
    type: String,
    default:
      'w-full lg:w-6/12 xl:w-7/12 flex items-center justify-center px-12 pt-10 xl:p-0',
  },
  defaultFormWrapperClass: {
    type: String,
    default:
      'w-full lg:w-6/12 xl:w-5/12 flex items-center justify-center p-4 xl:p-0',
  },
});
</script>

<template>
  <div class="flex flex-col lg:flex-row sm:min-h-screen">
    <div
      class="
        bg-no-repeat
        bg-[url(https://images.unsplash.com/photo-1525351549016-1ddd272c8315?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)]
        bg-cover
        hidden
        sm:block
      "
      :class="[
        defaultImageWrapperClass,
        formOnLeft ? 'order-2' : 'order-1',
        imageWrapperClass,
      ]"
    >
      <slot name="image" />
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
