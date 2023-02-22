<script setup lang="ts">
const isOpen = ref(true);
</script>

<template>
  <div
    v-if="isOpen"
    class="relative px-4 py-3 rounded bg-gray-100 mx-3 dark:bg-neutral-700"
  >
    <button
      aria-label="Close"
      @click="isOpen = !isOpen"
      class="
        absolute
        right-2
        top-2
        text-gray-500
        dark:text-neutral-400
        hover:dark:text-neutral-200
      "
    >
      <VIcon name="ri:close-line" />
    </button>
    <h3 class="font-semibold mb-2 text-sm text-gray-900 dark:text-neutral-200">
      New features available!
    </h3>
    <p class="text-sm mb-4 text-gray-600 dark:text-neutral-300">
      Check out the new dashboard view. Pages now load faster.
    </p>
    <img src="/new-feature.png" alt="New features" class="w-full rounded-md" />
    <div class="flex gap-4 items-center mt-4 mb-1">
      <VBtn flush text @click="isOpen = !isOpen">Dismiss</VBtn>
      <VBtn flush color="primary" text>What's New?</VBtn>
    </div>
  </div>
</template>
