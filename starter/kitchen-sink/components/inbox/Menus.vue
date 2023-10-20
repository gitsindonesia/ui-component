<script setup lang="ts">
import {breakpointsTailwind, useBreakpoints} from '@vueuse/core';

const inboxDrawer = useInboxDrawer();
const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller('lg'); // only smaller than lg
</script>

<template>
  <VNavDrawer
    v-model="inboxDrawer"
    :fixed="isMobile"
    height="screen-dvh"
    class="px-4 left-[70px] lg:left-0 xl:!h-auto py-3 self-start !w-[calc(100%-130px)] md:!w-[250px] sm:!shadow-md lg:!shadow-none"
  >
    <VBtn prefix-icon="ri:edit-line" size="lg" color="primary" block>
      Compose
    </VBtn>

    <VList hover class="mt-4" flush>
      <VListItem to="/inbox" prepend-icon="ri:inbox-line">
        Inbox
        <template #append>
          <VBadge small color="primary">99+</VBadge>
        </template>
      </VListItem>
      <VListItem to="/inbox?type=starred" prepend-icon="ri:star-line"
        >Starred</VListItem
      >
      <VListItem to="/inbox?type=sent" prepend-icon="ri:send-plane-line"
        >Sent</VListItem
      >
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
      <VListItem to="/inbox?label=work" prepend-icon="ri:star-line"
        >Work</VListItem
      >
      <VListItem to="/inbox?label=travel" prepend-icon="ri:star-line"
        >Travel</VListItem
      >
    </VList>
  </VNavDrawer>
</template>
