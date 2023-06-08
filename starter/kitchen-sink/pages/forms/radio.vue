<script setup lang="ts">
const selected = ref('1');
</script>

<template>
  <PageHeader title="Radio" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VRadio label="Label" />
      </div>
    </VCard>

    <VCard title="VModel">
      <div>
        <VRadio v-model="selected" value="1" label="A" />
        <VRadio v-model="selected" value="2" label="B" />
      </div>
    </VCard>

    <VCard title="Disabled">
      <div>
        <VRadio v-model="selected" value="1" label="A" />
        <VRadio v-model="selected" value="2" label="B" />
        <VRadio v-model="selected" value="3" label="C" disabled />
      </div>
    </VCard>
  </div>
</template>
