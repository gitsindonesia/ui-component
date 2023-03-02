<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <img
    v-if="appConfig.auth.logo.enable"
    :src="appConfig.auth.logo.light"
    class="mb-6 dark:hidden block"
    :width="appConfig.auth.logo.width"
    :height="appConfig.auth.logo.height"
  />
  <img
    v-if="appConfig.auth.logo.enable"
    :src="appConfig.auth.logo.dark"
    class="mb-6 dark:block hidden"
    :width="appConfig.auth.logo.width"
    :height="appConfig.auth.logo.height"
  />
</template>
