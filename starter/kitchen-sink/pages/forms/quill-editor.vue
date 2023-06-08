<script setup lang="ts">
const value = ref('');
</script>

<template>
  <PageHeader title="QuillEditor" />

  <ClientOnly>
    <div class="space-y-4">
      <VCard title="Default">
        <div>
          <VQuillEditor name="content" v-model="value" />
        </div>
      </VCard>

      <VCard title="Label">
        <div>
          <VQuillEditor name="content2" v-model="value" label="Label" />
        </div>
      </VCard>

      <VCard title="Toolbar">
        <div>
          <VQuillEditor
            name="default"
            label="Default / essential"
            placeholder="Input your content"
          />
          <VQuillEditor
            name="minimal"
            label="Minimal"
            placeholder="Input your content"
            toolbar="minimal"
          />
          <VQuillEditor
            name="full"
            label="Full"
            placeholder="Input your content"
            toolbar="full"
          />
        </div>
      </VCard>
    </div>
  </ClientOnly>
</template>
