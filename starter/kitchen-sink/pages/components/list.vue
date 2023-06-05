<script setup lang="ts"></script>

<template>
  <PageHeader title="Collapsible" />

  <div class="space-y-4">
    <VCard title="Default">
      <div>
        <VList>
          <VListItemHeader>Header</VListItemHeader>
          <VListItem>Item 1</VListItem>
          <VListItem>Item 2</VListItem>
          <VListItem>Item 3</VListItem>
          <VListItemHeader>Header</VListItemHeader>
          <VListItem>Item 4</VListItem>
          <VListItem>Item 5</VListItem>
          <VListItem>Item 6</VListItem>
        </VList>
      </div>
    </VCard>
    <VCard title="Hover">
      <div>
        <VList hover>
          <VListItemHeader>Header</VListItemHeader>
          <VListItem>Item 1</VListItem>
          <VListItem>Item 2</VListItem>
          <VListItem>Item 3</VListItem>
          <VListItemHeader>Header</VListItemHeader>
          <VListItem>Item 4</VListItem>
          <VListItem>Item 5</VListItem>
          <VListItem>Item 6</VListItem>
        </VList>
      </div>
    </VCard>
    <VCard title="Icon">
      <div>
        <VList>
          <VListItemHeader>Menu</VListItemHeader>
          <VListItem prepend-icon="ri:dashboard-line">Dashboard</VListItem>
          <VListItem prepend-icon="ri:user-line">User Management</VListItem>
          <VListItem prepend-icon="ri:account-box-line"
            >Team Management</VListItem
          >
          <VListItem prepend-icon="ri:settings-2-line">Settings</VListItem>
        </VList>
      </div>
    </VCard>
    <VCard title="Shaped">
      <div>
        <VList hover shaped>
          <VListItemHeader>Menu</VListItemHeader>
          <VListItem prepend-icon="ri:dashboard-line">Dashboard</VListItem>
          <VListItem prepend-icon="ri:user-line">User Management</VListItem>
          <VListItem prepend-icon="ri:account-box-line"
            >Team Management</VListItem
          >
          <VListItem prepend-icon="ri:settings-2-line">Settings</VListItem>
        </VList>
      </div>
    </VCard>
    <VCard title="Collapse">
      <div>
        <VList hover>
          <VListItemHeader>Menu</VListItemHeader>
          <VListItem prepend-icon="ri:dashboard-line">Dashboard</VListItem>
          <VListItem prepend-icon="ri:user-line">User Management</VListItem>
          <VListCollapse>
            <template #activator="{isOpen, toggle}">
              <VListItem
                prepend-icon="ri:book-line"
                append-icon="ri:arrow-down-s-line"
                :append-icon-class="isOpen ? 'rotate-180' : ''"
                @click="toggle"
              >
                Blog
              </VListItem>
            </template>
            <VList>
              <VListItem> Add New Post </VListItem>
              <VListItem> View Comments </VListItem>
            </VList>
          </VListCollapse>
          <VListCollapse>
            <template #activator="{isOpen, toggle}">
              <VListItem
                prepend-icon="ri:user-line"
                append-icon="ri:arrow-down-s-line"
                :append-icon-class="isOpen ? 'rotate-180' : ''"
                @click="toggle"
              >
                Shop
              </VListItem>
            </template>
            <VList>
              <VListItem> View Dashboard </VListItem>
              <VListItem> Sales </VListItem>
            </VList>
          </VListCollapse>
        </VList>
      </div>
    </VCard>
  </div>
</template>
