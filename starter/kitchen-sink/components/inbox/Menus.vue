<script setup lang="ts">
const modelValue = defineModel<boolean>({
  default: true,
});
</script>

<template>
  <VNavDrawer
    v-model="modelValue"
    class="px-4 !h-auto py-3 sticky top-16 self-start w-[250px]"
  >
    <VBtn prefix-icon="ri:edit-line" size="lg" color="primary" block> Compose </VBtn>

    <VList hover class="mt-4" flush>
      <VListItem to="/inbox" prepend-icon="ri:inbox-line">
        Inbox
        <template #append>
          <VBadge small color="primary">99+</VBadge>
        </template>
      </VListItem>
      <VListItem to="/inbox/starred" prepend-icon="ri:star-line">Starred</VListItem>
      <VListItem to="/inbox/sent" prepend-icon="ri:send-plane-line">Sent</VListItem>
      <VListItem to="/inbox/drafts" prepend-icon="ri:file-copy-2-line">Drafts</VListItem>
      <VListItem to="/inbox/trash" prepend-icon="ri:delete-bin-line">Trash</VListItem>
      <VListItemHeader to="/inbox" class="mt-8">Labels</VListItemHeader>
      <VListItem to="/inbox/labels/personal" prepend-icon="ri:star-line"
        >Personal</VListItem
      >
      <VListItem to="/inbox/labels/work" prepend-icon="ri:star-line">Work</VListItem>
      <VListItem to="/inbox/labels/travel" prepend-icon="ri:star-line">Travel</VListItem>
    </VList>
  </VNavDrawer>
</template>
