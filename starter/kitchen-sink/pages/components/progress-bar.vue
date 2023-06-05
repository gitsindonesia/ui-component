<script setup lang="ts">
const value = ref(10);
</script>

<template>
  <PageHeader title="Progress Bar" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div class="flex flex-col gap-3">
        <VProgressBar :model-value="70" />
        <VProgressBar color="primary" :model-value="70" />
        <VProgressBar color="primary" :model-value="70" />
        <VProgressBar color="info" :model-value="70" />
        <VProgressBar color="warning" :model-value="70" />
        <VProgressBar color="success" :model-value="70" />
        <VProgressBar color="error" :model-value="70" />
        <VProgressBar color="dark" :model-value="70" />
      </div>
    </VCard>

    <VCard title="Slots">
      <div class="flex flex-col gap-4">
        <VProgressBar
          v-slot="{value}"
          color="primary"
          class="mb-4"
          :model-value="70"
        >
          <div class="my-2">{{ value }} %</div>
        </VProgressBar>
        <VProgressBar
          color="secondary"
          class="mb-4"
          :height="20"
          :model-value="70"
        >
          <template #label="{value}"> {{ value }} % </template>
        </VProgressBar>
      </div>
    </VCard>

    <VCard title="VModel">
      <div>
        <VProgressBar color="primary" v-model="value" />

        <div class="mt-4 space-x-2">
          <VBtn size="sm" @click="value -= 10">-10</VBtn>
          <VBtn size="sm" @click="value += 10">+10</VBtn>
          <VBtn size="sm" @click="value = 100">Full</VBtn>
          <VBtn size="sm" @click="value = 0">Reset</VBtn>
        </div>
      </div>
    </VCard>

    <VCard title="Indeterminate">
      <div>
        <VProgressBar color="primary" indeterminate />
      </div>
    </VCard>
  </div>
</template>
