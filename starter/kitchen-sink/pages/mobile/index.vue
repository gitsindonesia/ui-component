<script setup lang="ts">
definePageMeta({
  layout: "mobile",
  bottomNavigation: true,
});
</script>

<template>
  <MobileHeader />

  <VText variant="display-xs" font-weight="semibold" class="mb-4">
    Informasi Terkini
  </VText>

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <VCard v-for="i in 12" :key="i" :to="`/mobile/${i}`">
      <template #image>
        <img
          src="/article-image.jpg"
          alt="article-image"
          class="h-40 object-cover rounded-lg"
          :style="{
            viewTransitionName: `item-image-${i}`,
          }"
        />
      </template>
      <h3
        class="font-semibold text-lg"
        :style="{
          viewTransitionName: `item-title-${i}`,
        }"
      >
        Title
      </h3>
      <p
        class="text-gray-600 dark:text-gray-true-400 text-sm"
        :style="{
          viewTransitionName: `item-description-${i}`,
        }"
      >
        Description
      </p>
    </VCard>
  </div>
</template>
