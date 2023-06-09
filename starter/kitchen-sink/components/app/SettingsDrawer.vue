<script setup lang="ts">
const modelValue = defineModel<boolean>("modelValue");

const themes = ref([
  {
    text: "System",
    value: "system",
  },
  {
    text: "Light",
    value: "light",
  },
  {
    text: "Dark",
    value: "dark",
  },
  {
    text: "Indigo",
    value: "indigo",
  },
]);
</script>

<template>
  <VNavDrawer v-model="modelValue" fixed overlay close-on-overlay-click shadow right>
    <h3 class="px-4 py-4 text-lg font-semibold border-b dark:border-gray-true-700">
      Settings
    </h3>

    <div class="p-4">
      <VRadioGroup v-model="$colorMode.preference" label="Theme" :items="themes" />
    </div>
  </VNavDrawer>
</template>
