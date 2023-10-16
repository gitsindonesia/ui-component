<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';

useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-true-800',
  },
});
const inboxDrawer = useInboxDrawer();
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('lg'); // only smaller than lg
</script>

<template>
  <VAppShell fluid class="fixed inset-0 max-w-full">
    <template #aside>
      <InboxAside />
    </template>
    <template #navigation>
      <InboxNavbar />
    </template>

    <div class="flex">
      <InboxMenus />
      <div
        class="flex-grow overflow-y-auto h-[calc(100vh-100px)] rounded-xl my-4 border dark:bg-gray-true-800 dark:border-gray-true-700 transition-all duration-300"
        :class="{
          'ml-4': !inboxDrawer || isMobile,
        }"
      >
        <slot />
      </div>
      <InboxRightSidebar />
    </div>
  </VAppShell>
</template>
