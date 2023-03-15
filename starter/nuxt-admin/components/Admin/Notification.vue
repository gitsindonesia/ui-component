<script setup lang="ts">
import {VBtn} from '@morpheme/ui';

const appConfig = useAppConfig();
</script>

<template>
  <VDropdown
    :label="appConfig.admin.notification.label"
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
          v-if="appConfig.admin.notification.items.length > 0"
          class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"
        />
      </VDropdownButton>
    </template>
    <VList hover>
      <VListItemHeader class="!font-semibold">
        {{ appConfig.admin.notification.label }}
      </VListItemHeader>
      <VListItemDivider />
      <template v-if="appConfig.admin.notification.items.length === 0">
        <VListItem hide-prepend>
          {{ appConfig.admin.notification.emptyText }}
        </VListItem>
      </template>
      <template v-else>
        <AdminNotificationItem
          v-for="(notif, idx) in appConfig.admin.notification.items"
          :key="idx"
          :notif="notif"
        />
        <VListItemDivider />
        <VBtn
          block
          text
          color="primary"
          v-bind="appConfig.admin.notification.seeAll.props"
        >
          {{ appConfig.admin.notification.seeAll.text }}
        </VBtn>
      </template>
    </VList>
  </VDropdown>
</template>
