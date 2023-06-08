<script setup lang="ts">
const value = ref('');
</script>

<template>
  <PageHeader title="Editor" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <ClientOnly>
          <VEditor v-model="value" />
        </ClientOnly>
      </div>
    </VCard>

    <VCard title="Label">
      <div>
        <ClientOnly>
          <VEditor v-model="value" label="Label" />
        </ClientOnly>
      </div>
    </VCard>
  </div>
</template>
