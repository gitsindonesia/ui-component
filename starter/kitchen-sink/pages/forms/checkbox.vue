<script setup lang="ts">
const checked = ref(false);
</script>

<template>
  <PageHeader title="Checkbox" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VCheckbox id="checkbox1" label="Label" />
      </div>
    </VCard>

    <VCard title="Disabled">
      <div>
        <VCheckbox id="checkbox2" label="Label" disabled />
      </div>
    </VCard>

    <VCard title="Error">
      <div>
        <VCheckbox id="checkbox3" label="Label" error />
      </div>
    </VCard>

    <VCard title="VModel">
      <div>
        <VCheckbox v-model="checked" label="Label A" />
        <VCheckbox v-model="checked" label="Label B" />
      </div>
    </VCard>
  </div>
</template>
