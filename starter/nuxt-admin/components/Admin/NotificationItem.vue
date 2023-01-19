<script setup lang="ts">
defineProps<{
  notif: {
    icon: string;
    title: string;
    message: string;
  };
}>();
</script>

<template>
  <VListItem :prepend-icon="notif.icon">
    <div>
      <h3 class="font-medium">
        {{ notif.title }}
      </h3>
      <p
        class="text-gray-600 dark:text-neutral-400 text-sm truncate"
        :title="notif.message"
      >
        {{ notif.message }}
      </p>
    </div>
  </VListItem>
</template>
