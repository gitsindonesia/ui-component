<script setup lang="ts">
const value = ref();
</script>

<template>
  <PageHeader title="FileInput" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VFileUpload v-model="value" label="Label" />
      </div>
    </VCard>

    <VCard title="Themes">
      <div>
        <VFileUpload wrapper-class="mb-4" label="Default" />
        <VFileUpload wrapper-class="mb-4" label="Button" theme="button" />
        <VFileUpload wrapper-class="mb-4" label="Image" theme="image" />
        <VFileUpload
          wrapper-class="mb-4"
          label="Image Full Width"
          theme="image"
          full
          image
        />
        <VFileUpload
          wrapper-class="mb-4"
          label="Image Full Width Rounded"
          theme="image"
          full
          rounded
          image
        />
        <VFileUpload wrapper-class="mb-4" label="Dropzone" theme="dropzone" />
        <VFileUpload
          wrapper-class="mb-4"
          label="Dropzone With Preview"
          theme="dropzone"
          image
        />
      </div>
    </VCard>
  </div>
</template>
