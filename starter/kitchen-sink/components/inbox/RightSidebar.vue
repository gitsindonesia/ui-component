<script setup lang="ts">
//
</script>

<template>
  <VNavDrawer mini class="px-4 py-3 sticky top-16 self-start !h-auto">
    <nav class="flex flex-col items-center py-2 gap-2">
      <VBtn
        prefix-icon="ri:calendar-line"
        fab
        icon
        text
        v-tooltip="{
          content: 'Apps 1',
          placement: 'left',
          theme: 'tooltip-black',
          triggers: ['hover', 'focus'],
        }"
      />
      <VBtn
        prefix-icon="ri:file-text-line"
        fab
        icon
        text
        v-tooltip="{
          content: 'Apps 2',
          placement: 'left',
          theme: 'tooltip-black',
          triggers: ['hover', 'focus'],
        }"
      />
    </nav>
  </VNavDrawer>
</template>
