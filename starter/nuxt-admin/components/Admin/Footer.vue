<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <footer class="py-2 text-xs text-gray-500 px-4">
    Copyright &copy; {{ new Date().getFullYear() }}.
    {{ appConfig.companyName }}.
  </footer>
</template>
