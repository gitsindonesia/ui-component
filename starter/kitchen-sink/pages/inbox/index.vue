<script setup lang="ts">
definePageMeta({
  layout: "inbox",
});
</script>

<template>
  <VList hover>
    <VListItem v-for="i in 30" :key="i" hide-append>
      <template #prepend>
        <VCheckbox />
        <VIcon class="text-gray-true-500" name="ri:star-line"></VIcon>
      </template>
      <div class="flex gap-4 items-center">
        <div class="flex-grow">
          <div class="flex justify-between">
            <span class="font-semibold">Email subject</span>
            <span class="text-xs text-gray-true-500">2 min ago</span>
          </div>
          <div class="flex justify-between">
            <span class="text-xs text-gray-true-500">Email body</span>
          </div>
        </div>
      </div>
    </VListItem>
  </VList>
</template>
