<script setup lang="ts">
const colorMode = useColorMode();

const colorModeIcon = computed(() => {
  switch (colorMode.preference) {
    case 'light':
      return 'ri:sun-line';
    case 'dark':
      return 'ri:moon-line';
    case 'system':
    default:
      return 'ri:computer-line';
  }
});

const changeColorMode = () => {
  const values = ['system', 'light', 'dark'];
  const index = values.indexOf(colorMode.preference);
  const next = (index + 1) % values.length;
  colorMode.preference = values[next];
};
</script>

<template>
  <VBtn
    aria-label="Color Mode"
    fab
    text
    :prefix-icon="colorModeIcon"
    @click="changeColorMode"
  />
</template>
