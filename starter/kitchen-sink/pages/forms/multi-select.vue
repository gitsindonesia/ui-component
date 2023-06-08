<script setup lang="ts">
const items = [
  {
    value: 1,
    text: 'Option 1',
  },
  {
    value: 2,
    text: 'Option 2',
  },
];
</script>

<template>
  <PageHeader title="MultiSelect" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VMultiSelect :items="items" />
      </div>
    </VCard>

    <VCard title="Label">
      <div>
        <VMultiSelect :items="items" label="Label" />
      </div>
    </VCard>

    <VCard title="Clearable">
      <div>
        <VMultiSelect :items="items" clearable />
      </div>
    </VCard>

    <VCard title="Max Badges">
      <div>
        <VMultiSelect :items="items" :max-badge="3" />
      </div>
    </VCard>

    <VCard title="Custom Classes">
      <div>
        <VMultiSelect
          :items="items"
          wrapper-class="!rounded-full !border-orange-500 focus-within:!border-orange-600"
          input-class="!italic"
          dropdown-class="bg-black/50"
          item-class="!bg-black/50 !text-white hover:!bg-warning-500 hover:!text-white"
          badge-color="warning"
          check-wrapper-class="!text-orange-500"
        />
      </div>
    </VCard>
  </div>
</template>
