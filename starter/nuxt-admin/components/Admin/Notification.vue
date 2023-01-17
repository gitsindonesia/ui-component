<script setup lang="ts">
import {VBtn} from '@gits-id/ui';

const appConfig = useAppConfig();
</script>

<template>
  <VDropdown
    :label="appConfig.notification.label"
    right
    panel-class="!w-80 !p-0"
  >
    <template #activator>
      <VDropdownButton
        :as="VBtn"
        fab
        text
        prefix-icon="ic:round-notifications"
        class="relative"
      >
        <span
          v-if="appConfig.notification.items.length > 0"
          class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"
        />
      </VDropdownButton>
    </template>
    <VList hover>
      <VListItemHeader class="!font-semibold">Notification</VListItemHeader>
      <VListItemDivider />
      <AdminNotificationItem
        v-for="notif in appConfig.notification.items"
        :key="notif.title"
        :notif="notif"
      />
      <VListItemDivider />
      <VBtn block text color="primary">View all notifications</VBtn>
    </VList>
  </VDropdown>
</template>
