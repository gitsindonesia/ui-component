<script setup lang="ts">
import {VBtn} from '@morpheme/button';

const items = ref([
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
          <VDropdownButton :as="VBtn" color="error" outlined>
            My Button
          </VDropdownButton>
        </template>
        <VDropdownItem text="Calendar" icon="mdi:calendar" />
        <VDropdownItem text="Files" icon="mdi:document" />
        <VDropdownItem divider />
        <VDropdownItem text="Timer" icon="mdi:clock" />
      </VDropdown>
    </VCard>

    <VCard title="Sizes">
      <VDropdown size="xs" label="Size: xs" />
      <VDropdown size="sm" label="Size: sm" />
      <VDropdown label="Size: md (default)" />
      <VDropdown size="lg" label="Size: lg" />
    </VCard>

    <VCard title="Multi Level">
      <VDropdown>
        <VDropdownHeader>Action</VDropdownHeader>
        <VDropdownItem text="Calendar" icon="mdi:calendar" />
        <VDropdownItem text="Files" icon="mdi:document" />
        <VDropdownItem divider />
        <VDropdown block placement="right-start" :offset="-4">
          <template #activator>
            <VDropdownButton
              as="item"
              suffix-icon="heroicons:chevron-right"
              text="Theme"
            />
          </template>
          <VDropdownItem text="System" />
          <VDropdownItem text="Light" />
          <VDropdownItem text="Dark" />
        </VDropdown>
        <VDropdown block placement="right-start" :offset="-4">
          <template #activator>
            <VDropdownButton
              as="item"
              suffix-icon="heroicons:chevron-right"
              text="More"
            />
          </template>
          <VDropdownItem text="Sub 1" />
          <VDropdownItem text="Sub 2" />
          <VDropdown block placement="right-start" :offset="-4">
            <template #activator>
              <VDropdownButton
                as="item"
                suffix-icon="heroicons:chevron-right"
                text="More"
              />
            </template>
            <VDropdownItem text="Sub 1" />
            <VDropdownItem text="Sub 2" />
          </VDropdown>
        </VDropdown>
      </VDropdown>
    </VCard>

    <VCard title="Navigation Menus">
      <div class="mt-4 flex gap-3 items-center">
        <a class="font-semibold"> Acme Inc. </a>
        <a class="text-sm text-gray-800 font-semibold dark:text-gray-true-200">
          Home
        </a>
        <VDropdown>
          <template #activator="{open}">
            <VDropdownButton
              as="btn"
              suffix-icon="heroicons:chevron-down"
              suffix-icon-size="xs"
              :suffix-icon-class="[
                'transform transition',
                {
                  'rotate-180': open,
                },
              ]"
              text
              flush
            >
              Products
            </VDropdownButton>
          </template>
          <VDropdownItem text="Calendar" />
          <VDropdownItem text="Files" />
          <VDropdownItem divider />
          <VDropdown block placement="right-start" :offset="-4">
            <template #activator>
              <VDropdownButton
                :as="'item'"
                suffix-icon="heroicons:chevron-right"
                text="More"
              />
            </template>
            <VDropdownItem text="Sub 1" />
            <VDropdownItem text="Sub 2" />
            <VDropdown block placement="right-start" :offset="-4">
              <template #activator>
                <VDropdownButton
                  :as="'item'"
                  suffix-icon="heroicons:chevron-right"
                  text="More"
                />
              </template>
              <VDropdownItem text="Sub 1" />
              <VDropdownItem text="Sub 2" />
            </VDropdown>
          </VDropdown>
        </VDropdown>
        <VDropdown>
          <template #activator="{open}">
            <VDropdownButton
              as="btn"
              suffix-icon="heroicons:chevron-down"
              suffix-icon-size="xs"
              :suffix-icon-class="[
                'transform transition',
                {
                  'rotate-180': open,
                },
              ]"
              text
              flush
            >
              Settings
            </VDropdownButton>
          </template>
          <VDropdownItem text="Calendar" />
          <VDropdownItem text="Files" />
          <VDropdownItem divider />
          <VDropdown block placement="right-start" :offset="-4">
            <template #activator>
              <VDropdownButton
                as="item"
                suffix-icon="heroicons:chevron-right"
                text="Theme"
              />
            </template>
            <VDropdownItem text="System" />
            <VDropdownItem text="Light" />
            <VDropdownItem text="Dark" />
          </VDropdown>
        </VDropdown>
      </div>
    </VCard>
  </div>
</template>
