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

          <template #footer>
            <VBtn color="primary">Action</VBtn>
            <VBtn>Action</VBtn>
          </template>
        </VCard>
      </div>
    </VCard>

    <VCard title="Bordered">
      <div>
        <VCard title="Header" bordered>
          A quick brown fox leaps over the lazy dog.

          <template #footer>
            <VBtn color="primary">Action</VBtn>
            <VBtn>Action</VBtn>
          </template>
        </VCard>
      </div>
    </VCard>

    <VCard title="Header Slot">
      <div>
        <VCard bordered>
          A quick brown fox leaps over the lazy dog.

          <template #header>
            <div class="flex items-center gap-2 justify-between w-full">
              Header
              <VBtn size="sm">Close</VBtn>
            </div>
          </template>
        </VCard>
      </div>
    </VCard>

    <VCard title="Custom Class">
      <div>
        <VCard
          title="Header"
          body-class="bg-rose-500 text-white"
          header-class="bg-amber-500 text-white"
          footer-class="bg-cyan-500 text-white"
        >
          A quick brown fox leaps over the lazy dog.
          <template #footer> Footer </template>
        </VCard>
      </div>
    </VCard>

    <VCard title="Custom Tag">
      <div>
        <VCard
          title="As Anchor"
          tag="a"
          href="https://www.google.com"
          rel="noopener"
          target="_blank"
        >
          A quick brown fox leaps over the lazy dog.
        </VCard>
      </div>
    </VCard>
  </div>
</template>
