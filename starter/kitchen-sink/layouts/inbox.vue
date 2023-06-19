<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-white dark:bg-gray-true-800",
  },
});
</script>

<template>
  <div class="h-screen flex flex-row align-start">
    <InboxAside />
    <div class="flex-grow ml-[--nav-drawer-mini-width]">
      <InboxNavbar />
      <div class="flex">
        <InboxMenus />
        <div
          class="flex-grow bg-white rounded-t-xl p-2 border dark:bg-gray-true-800 dark:border-gray-true-700"
        >
          <slot />
        </div>
        <InboxRightSidebar />
      </div>
    </div>
  </div>
</template>
