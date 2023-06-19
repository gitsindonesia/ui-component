<script setup lang="ts">
const inboxDrawer = useInboxDrawer();
</script>

<template>
  <VNavDrawer
    :bordered="$colorMode.preference !== 'light'"
    mini
    class="flex flex-col items-center py-2 gap-2 sticky !-auto !z-30"
    :class="{
      '!bg-gray-blue-50': $colorMode.preference === 'light',
    }"
  >
    <VBtn prefix-icon="ri:menu-line" fab icon @click="inboxDrawer = !inboxDrawer" />
    <VBtn prefix-icon="ri:mail-line" fab icon text class="mt-4" />
    <VBtn prefix-icon="ri:message-line" fab icon text />
    <VBtn prefix-icon="ri:user-line" fab icon text />
    <VBtn prefix-icon="ri:video-line" fab icon text />
  </VNavDrawer>
</template>
