<script setup lang="ts">
const isDarkMode = ref(false);

watch(isDarkMode, () => {
  document.documentElement.classList.toggle('dark', isDarkMode.value);
});

const colorModeIcon = computed(() => {
  return isDarkMode.value ? 'ri:moon-line' : 'ri:sun-line';
});
</script>

<template>
  <VBtn
    aria-label="Color Mode"
    fab
    text
    :prefix-icon="colorModeIcon"
    @click="isDarkMode = !isDarkMode"
  />
</template>
