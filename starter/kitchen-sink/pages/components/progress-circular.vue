<script setup lang="ts">
const progress = ref(50);
</script>

<template>
  <PageHeader title="Progress Circular" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div class="flex flex-col gap-3">
        <VProgressCircular v-model="progress" />
      </div>
    </VCard>

    <VCard title="Indeterminate">
      <div class="flex flex-col gap-3">
        <VProgressCircular v-model="progress" indeterminate />
      </div>
    </VCard>

    <VCard title="Colors">
      <div class="flex flex-col gap-3">
        <VProgressCircular v-model="progress" color="rose.500" />
        <VProgressCircular v-model="progress" color="green.500">
          {{ progress }}%
        </VProgressCircular>
      </div>
    </VCard>

    <VCard title="Text">
      <div class="flex flex-col gap-3">
        <VProgressCircular v-model="progress"> Text </VProgressCircular>
        <VProgressCircular v-model="progress">
          {{ progress }}%
        </VProgressCircular>
      </div>
    </VCard>

    <VCard title="Sizes">
      <div class="flex flex-col gap-3">
        <VProgressCircular v-model="progress" :size="60" :width="8">
          {{ progress }}%
        </VProgressCircular>
      </div>
    </VCard>
  </div>
</template>
