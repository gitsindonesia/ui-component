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
      <VListItem to="/inbox?type=starred" prepend-icon="ri:star-line">Starred</VListItem>
      <VListItem to="/inbox?type=sent" prepend-icon="ri:send-plane-line">Sent</VListItem>
      <VListItem to="/inbox?type=drafts" prepend-icon="ri:file-copy-2-line"
        >Drafts</VListItem
      >
      <VListItem to="/inbox?type=trash" prepend-icon="ri:delete-bin-line"
        >Trash</VListItem
      >
      <VListItemHeader to="/inbox" class="mt-8">Labels</VListItemHeader>
      <VListItem to="/inbox?label=personal" prepend-icon="ri:star-line"
        >Personal</VListItem
      >
      <VListItem to="/inbox?label=work" prepend-icon="ri:star-line">Work</VListItem>
      <VListItem to="/inbox?label=travel" prepend-icon="ri:star-line">Travel</VListItem>
    </VList>
  </VNavDrawer>
</template>
