<script setup lang="ts">
const isOpen = ref(true);
const isOpen2 = ref(true);
</script>

<template>
  <PageHeader title="AppBar" subtitle="Application Bar" />

  <div class="space-y-4">
    <VCard title="Variants">
      <VAppBar v-for="color in colors" :key="color" :color="color" class="mb-2">
        <p class="font-semibold">Brand</p>
      </VAppBar>
    </VCard>

    <VCard title="Bordered">
      <VAppBar bordered>
        <p class="font-semibold">Brand</p>
      </VAppBar>
    </VCard>

    <VCard title="Shadow">
      <VAppBar shadow>
        <p class="font-semibold">Brand</p>
      </VAppBar>
    </VCard>

    <VCard title="Sizes" body-class="space-y-2">
      <VAppBar shadow>
        <p class="font-semibold">Default (auto)</p>
      </VAppBar>
      <VAppBar shadow v-for="size in sizes" :key="size" :size="size">
        <p class="font-semibold">{{ size }}</p>
      </VAppBar>
    </VCard>

    <VCard title="Toggle">
      <VAppBar v-model="isOpen" color="primary"> Toggle AppBar </VAppBar>
      <main class="mt-5">
        <VBtn @click="isOpen = !isOpen">Toggle</VBtn>
      </main>
    </VCard>

    <VCard title="Custom Transition">
      <VAppBar v-model="isOpen2" color="primary" transition="slide-down">
        Toggle AppBar
      </VAppBar>
      <main class="mt-5">
        <VBtn @click="isOpen2 = !isOpen2">Toggle</VBtn>
      </main>
    </VCard>

    <VCard title="Dark Mode" class="dark">
      <VAppBar v-for="color in colors" :key="color" :color="color" class="mb-2">
        <p class="font-semibold">Brand</p>
      </VAppBar>
    </VCard>
  </div>
</template>
