<script setup lang="ts">
const route = useRoute()

const isHome = computed(() => route.path === '/pages/mobile')
</script>

<template>
  <VAppShell fluid :container-class="`px-5 pb-40 ${isHome ? 'pt-44' : 'pt-24'}`">
    <slot />
  </VAppShell>
</template>
