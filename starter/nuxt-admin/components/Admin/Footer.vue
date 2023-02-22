<script setup lang="ts">
const appConfig = useAppConfig();
</script>

<template>
  <footer>
    <div class="flex items-center justify-between gap-2">
      <div class="text-xs flex items-center gap-2 text-gray-500">
        <Logo />
        &copy; {{ new Date().getFullYear() }}.
        {{ appConfig.admin.companyName }}.
      </div>
      <ColorModeSwitcher v-if="appConfig.admin.darkMode" size="sm" />
    </div>
  </footer>
</template>
