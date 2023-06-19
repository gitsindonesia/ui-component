<script setup lang="ts">
definePageMeta({
  layout: "inbox",
});
</script>

<template>
  <VList hover flush tile>
    <VListItem v-for="i in 50" :key="i" hide-append :to="`/inbox/messages/${i}`">
      <template #prepend>
        <VCheckbox />
        <VIcon class="text-gray-true-500" name="ri:bookmark-line" size="sm" />
      </template>
      <div class="flex gap-4 items-center justify-between">
        <span
          class="font-semibold"
          :style="{
            viewTransitionName: `email-sender-${i}`,
          }"
          >User {{ i }}</span
        >
        <span
          class="flex-grow"
          :style="{
            viewTransitionName: `email-subject-${i}`,
          }"
        >
          Message {{ i }}</span
        >
        <span class="text-xs text-gray-true-500">2 min ago</span>
      </div>
    </VListItem>
  </VList>
</template>
