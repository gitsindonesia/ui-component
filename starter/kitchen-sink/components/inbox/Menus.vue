<script setup lang="ts">
//
</script>

<template>
  <div class="px-4 py-3 sticky top-16 self-start w-[250px]">
    <VBtn prefix-icon="ri:edit-line" size="lg" color="primary" block> Compose </VBtn>

    <VList hover class="mt-4" flush>
      <VListItem prepend-icon="ri:inbox-line">
        Inbox
        <template #append>
          <VBadge small color="primary">99+</VBadge>
        </template>
      </VListItem>
      <VListItem prepend-icon="ri:star-line">Starred</VListItem>
      <VListItem prepend-icon="ri:send-plane-line">Sent</VListItem>
      <VListItem prepend-icon="ri:file-copy-2-line">Drafts</VListItem>
      <VListItem prepend-icon="ri:delete-bin-line">Trash</VListItem>
      <VListItemHeader class="mt-8">Labels</VListItemHeader>
      <VListItem prepend-icon="ri:star-line">Personal</VListItem>
      <VListItem prepend-icon="ri:star-line">Work</VListItem>
      <VListItem prepend-icon="ri:star-line">Travel</VListItem>
    </VList>
  </div>
</template>
