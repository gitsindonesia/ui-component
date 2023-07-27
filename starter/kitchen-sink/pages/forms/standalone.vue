<script setup lang="ts"></script>

<template>
  <PageHeader title="Standalone Form Components" />

  <div class="space-y-4">
    <VCard title="Basic Usage">
      <FormStandalone />
    </VCard>

    <VCard title="Form Validation with (vee-validate)">
      <FormStandaloneWithValidation />
    </VCard>
  </div>
</template>
