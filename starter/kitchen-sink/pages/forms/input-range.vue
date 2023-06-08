<script setup lang="ts"></script>

<template>
  <PageHeader title="InputRange" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VInputRange />
      </div>
    </VCard>

    <VCard title="With Input">
      <div>
        <VInputRange show-input />
      </div>
    </VCard>
  </div>
</template>
