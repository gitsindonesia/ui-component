<script setup lang="ts">
//
</script>

<template>
  <VAppShell padded-content content-class="bg-white dark:bg-neutral-900">
    <template #header>
      <MusicMenuBar />
    </template>

    <template #aside>
      <MusicSidebar />
    </template>

    <slot />
  </VAppShell>
</template>
