<script setup lang="ts">
const items = ref([
  {
    text: 'Item 1',
    value: 1,
  },
  {
    text: 'Item 2',
    value: 2,
  },
  {
    text: 'Item 3',
    value: 3,
  },
]);
</script>

<template>
  <PageHeader title="RadioGroup" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VRadioGroup label="Label" :items="items" />
      </div>
    </VCard>

    <VCard title="Inline">
      <div>
        <VRadioGroup label="Label" :items="items" inline />
      </div>
    </VCard>

    <VCard title="Error">
      <div>
        <VRadioGroup label="Label" :items="items" error />
      </div>
    </VCard>

    <VCard title="Disabled">
      <div>
        <VRadioGroup label="Label" :items="items" disabled />
      </div>
    </VCard>

    <VCard title="Custom Class">
      <div>
        <VRadioGroup
          :items="items"
          label="Pick an option"
          labelClass="!text-purple-500"
          defaultClass="p-2 my-1 hover=bg-primary-50 border-grey-300 border rounded-lg cursor-pointer"
          selectedClass="!border-primary-300 !text-primary-500"
        />
      </div>
    </VCard>
  </div>
</template>
