<script setup lang="ts"></script>

<template>
  <PageHeader title="Card" />

  <div class="space-y-4">
    <VCard title="Variants">
      <div class="space-y-2">
        <VCard v-for="color in colors" :key="color" :color="color">
          A quick brown fox leaps over the lazy dog.
        </VCard>
      </div>
    </VCard>

    <VCard title="With Header">
      <div>
        <VCard title="Header">
          A quick brown fox leaps over the lazy dog.
        </VCard>
      </div>
    </VCard>

    <VCard title="With Footer">
      <div>
        <VCard title="Header">
          A quick brown fox leaps over the lazy dog.

          <template #footer> Footer </template>
        </VCard>
      </div>
    </VCard>

    <VCard title="Header Slot">
      <div>
        <VCard>
          A quick brown fox leaps over the lazy dog.

          <template #header>
            <div class="flex items-center gap-2 justify-between w-full">
              Header
              <VBtn size="sm">Close</VBtn>
            </div>
          </template>
          <template #footer> Footer </template>
        </VCard>
      </div>
    </VCard>

    <VCard title="Custom Class">
      <div>
        <VCard
          title="Header"
          body-class="bg-rose-100"
          header-class="bg-amber-100"
          footer-class="bg-cyan-100"
        >
          A quick brown fox leaps over the lazy dog.
          <template #footer> Footer </template>
        </VCard>
      </div>
    </VCard>
  </div>
</template>
