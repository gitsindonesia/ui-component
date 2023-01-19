<script setup lang="ts">
const isDarkMode = ref(false);

watch(isDarkMode, () => {
  document.documentElement.classList.toggle('dark', isDarkMode.value);
});
</script>

<template>
  <VSwitch
    v-model="isDarkMode"
    label="Dark Mode"
    label-class="text-gray-600 dark:!text-neutral-200"
    switch-group-class="!w-full justify-between items-center"
  />
</template>
