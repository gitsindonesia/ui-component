<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <nuxt-img
    :src="appConfig.store.logo.url"
    :alt="appConfig.store.logo.alt || 'Logo'"
    class="h-8 w-auto sm:h-10"
    width="89"
    height="40"  
  />
</template>