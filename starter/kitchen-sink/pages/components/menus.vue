<script setup lang="ts">
const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <PageHeader title="Menus" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <VMenus class="inline-block" :items="items" />
      </div>
    </VCard>
    <VCard title="Right-aligned">
      <div>
        <VMenus class="inline-block" :items="items" right />
      </div>
    </VCard>
    <VCard title="Small">
      <div>
        <VMenus class="inline-block" :items="items" small />
      </div>
    </VCard>
    <VCard title="In App Bar">
      <div>
        <VAppBar shadow>
          <span class="font-semibold mr-4">Default</span>
          <nav aria-label="Nav" class="flex gap-3 items-center">
            <VMenus class="inline-block" label="Home" :items="items" />
            <VMenus class="inline-block" label="About" :items="items" />
            <VMenus class="inline-block" label="Profile" :items="items" />
          </nav>
        </VAppBar>
      </div>
    </VCard>
    <VCard title="Slots">
      <div>
        <VMenus class="inline-block" label="Account">
          <template #items>
            <VMenusItem prepend-icon="ri:user-line">Profile</VMenusItem>
            <VMenusItem prepend-icon="ri:settings-4-line">
              Preferences
            </VMenusItem>
            <VMenusItem divider />
            <VMenusItem prepend-icon="ri:logout-box-line">Logout</VMenusItem>
          </template>
        </VMenus>
      </div>
    </VCard>
  </div>
</template>
