<script setup lang="ts">
const appConfig = useAppConfig();

const imageProps = {
  width: appConfig.auth.logo.width,
  height: appConfig.auth.logo.height,
  alt: 'Logo',
};
</script>

<template>
  <img
    v-if="appConfig.auth.logo.enable"
    :src="appConfig.auth.logo.light"
    class="mb-6 dark:hidden block"
    v-bind="imageProps"
  />
  <img
    v-if="appConfig.auth.logo.enable"
    :src="appConfig.auth.logo.dark"
    class="mb-6 dark:block hidden"
    v-bind="imageProps"
  />
</template>
