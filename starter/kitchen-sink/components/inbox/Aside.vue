<script setup lang="ts">
const inboxDrawer = useInboxDrawer();

const menus = [
  {
    text: "Mail",
    icon: "ri:mail-line",
    to: "/inbox",
  },
  {
    text: "Chat",
    icon: "ri:message-line",
    to: "/inbox/chat",
  },
  {
    text: "Spaces",
    icon: "ri:user-line",
    to: "/inbox/spaces",
  },
  {
    text: "Meet",
    icon: "ri:video-line",
    to: "/inbox/meet",
  },
];
</script>

<template>
  <VNavDrawer
    :bordered="$colorMode.preference !== 'light'"
    mini
    class="flex flex-col items-center py-2 gap-2 sticky !-auto !z-30"
    :class="{
      '!bg-gray-blue-50': $colorMode.preference === 'light',
    }"
    :style="{
      '--nav-drawer-mini-width': '72px',
    }"
  >
    <VBtn prefix-icon="ri:menu-line" fab icon @click="inboxDrawer = !inboxDrawer" />

    <ul class="flex gap-4 flex-col items-center mt-3">
      <li
        v-for="menu in menus"
        :key="menu.text"
        v-tooltip="{
          content: menu.text,
          placement: 'right',
          theme: 'tooltip-black',
          triggers: ['hover', 'focus'],
          offset: [0, 8],
        }"
        class="w-full flex flex-col items-center cursor-pointer"
      >
        <VBtn fab icon text :to="menu.to" :prefix-icon="menu.icon" size="sm" rounded />
        <p class="text-xs text-center">{{ menu.text }}</p>
      </li>
    </ul>
  </VNavDrawer>
</template>
