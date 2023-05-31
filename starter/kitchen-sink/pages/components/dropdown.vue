<script setup lang="ts">
import { VBtn } from '@morpheme/button';

const items: any[] = ref([
  {
    text: 'View',
    icon: 'ic:round-remove-red-eye',
  },
  {
    text: 'Edit',
    icon: 'ic:round-edit',
  },
  {
    divider: true,
  },
  {
    text: 'Delete',
    icon: 'ic:round-delete',
  },
]);
</script>

<template>
  <PageHeader title="Dropdown" />

  <div class="space-y-4">
    <VCard title="Default">
      <VDropdown :items="items" label="Options" />
    </VCard>

    <VCard title="Right">
      <VDropdown :items="items" label="Options" right class="mx-auto" />
    </VCard>

    <VCard title="Top">
      <VDropdown :items="items" label="Options" top />
    </VCard>

    <VCard title="Icon">
      <VDropdown :items="items" label="Options" prefix-icon="ic:round-person" />
    </VCard>

    <VCard title="Slots">
      <VDropdown label="Options">
        <VDropdownItem text="Calendar" icon="mdi:calendar" />
        <VDropdownItem text="Files" icon="mdi:document" />
        <VDropdownItem divider />
        <VDropdownItem text="Timer" icon="mdi:clock" />
      </VDropdown>
    </VCard>

    <VCard title="Custom Activator">
      <VDropdown label="Options">
        <template #activator>
          <VDropdownButton :as="VBtn" color="error" outlined> My Button </VDropdownButton>
        </template>
        <VDropdownItem text="Calendar" icon="mdi:calendar" />
        <VDropdownItem text="Files" icon="mdi:document" />
        <VDropdownItem divider />
        <VDropdownItem text="Timer" icon="mdi:clock" />
      </VDropdown>
    </VCard>
  </div>
</template>
