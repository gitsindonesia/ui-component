<script setup lang="ts">
definePageMeta({
  layout: "mobile",
  bottomNavigation: true,
});
</script>

<template>
  <MobileAppBar> Account </MobileAppBar>

  <VList hover flush class="border rounded-xl">
    <VListItem tile append-icon="ri:arrow-right-s-line" append-icon-class="text-gray-500">
      <template #prepend>
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
          width="40"
          height="40"
          class="shrink-0 w-10 h-10 rounded-full object-cover"
        />
      </template>
      <div>
        <div class="font-semibold">John Doe</div>
        <p class="text-sm text-gray-500 truncate">Apple ID, iCloud+, Media & Purchases</p>
      </div>
    </VListItem>
  </VList>
  <VList flush class="border rounded-xl mt-6 divide divide-y">
    <VListItem
      hover
      tile
      prepend-icon="ion:ios-airplane"
      prepend-icon-class="!text-white"
      prepend-class="p-1 bg-orange-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      Airplane Mode
    </VListItem>
    <VListItem
      hover
      tile
      prepend-icon="ic:outline-wifi"
      prepend-icon-class="!text-white"
      prepend-class="p-1 bg-blue-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
      append-text="Coffee Wifi"
      append-text-class="text-sm text-gray-800"
    >
      Wifi
    </VListItem>
    <VListItem
      hover
      tile
      prepend-icon="ri:bluetooth-line"
      prepend-icon-class="!text-white"
      prepend-class="p-1 bg-blue-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
      append-text="On"
      append-text-class="text-sm text-gray-800"
    >
      Bluetooth
    </VListItem>
    <VListItem
      hover
      tile
      prepend-icon="ic:sharp-cell-tower"
      prepend-icon-class="!text-white"
      prepend-class="p-1 bg-green-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      Cellular
    </VListItem>
    <VListItem
      hover
      tile
      prepend-icon="ri:hotspot-line"
      prepend-icon-class="!text-white"
      prepend-class="p-1 bg-green-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      Personal Hotspot
    </VListItem>
    <VListItem
      hover
      tile
      prepend-icon="material-symbols:vpn-lock"
      prepend-icon-class="!text-white"
      prepend-class="p-1 bg-blue-500 text-white rounded"
      append-icon="ri:arrow-right-s-line"
      append-icon-class="text-gray-500"
    >
      VPN
    </VListItem>
  </VList>
  <VBtn block class="mt-6" color="error" outlined>Sign out</VBtn>
</template>
