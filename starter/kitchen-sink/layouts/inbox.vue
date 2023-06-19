<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "bg-white dark:bg-gray-true-800",
  },
});

const menu = useState("inbox-menu", () => true);
</script>

<template>
  <div class="h-screen flex flex-row align-start">
    <InboxAside />
    <div class="flex-grow">
      <InboxNavbar />
      <div class="flex">
        <InboxMenus v-model="menu" />
        <div
          class="flex-grow bg-white h-[calc(100vh-100px)] overflow-y-auto rounded-xl my-4 border dark:bg-gray-true-800 dark:border-gray-true-700"
        >
          <slot />
        </div>
        <InboxRightSidebar />
      </div>
    </div>
  </div>
</template>
