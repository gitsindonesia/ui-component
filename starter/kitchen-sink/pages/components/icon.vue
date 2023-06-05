<script setup lang="ts"></script>

<template>
  <PageHeader title="Icon" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VIcon name="ri:home-2-line" />
        <VIcon name="ri:user-line" />
        <VIcon name="ri:settings-line" />
      </div>
    </VCard>
    <VCard title="Sizes">
      <div>
        <VIcon name="ri:home-2-line" size="xs" />
        <VIcon name="ri:home-2-line" size="sm" />
        <VIcon name="ri:home-2-line" size="md" />
        <VIcon name="ri:home-2-line" size="lg" />
        <VIcon name="ri:home-2-line" size="xl" />
        <VIcon name="ri:home-2-line" size="80" />
      </div>
    </VCard>
    <VCard title="Color">
      <div>
        <VIcon name="ri:home-2-line" class="text-primary-500" />
        <VIcon name="ri:home-2-line" class="text-secondary-500" />
        <VIcon name="ri:home-2-line" class="text-error-500" />
      </div>
    </VCard>
  </div>
</template>
