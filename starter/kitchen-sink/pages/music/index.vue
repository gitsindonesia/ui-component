<script setup lang="ts">
definePageMeta({
  layout: 'blank',
});
</script>

<template>
  <VAppShell padded-content>
    <template #header>
      <VAppBar>
        <VPopoverGroup>
          <VPopover>
            <VPopoverButton text> Music </VPopoverButton>
            <VPopoverPanel>
              <VList>
                <VListItem> About </VListItem>
                <VListItem> Preferences </VListItem>
              </VList>
            </VPopoverPanel>
          </VPopover>
          <VPopover>
            <VPopoverButton text size="sm"> File </VPopoverButton>
            <VPopoverPanel>
              <VList>
                <VListItem> Open </VListItem>
                <VListItem> Save </VListItem>
              </VList>
            </VPopoverPanel>
          </VPopover>
          <VDropdown>
            <VDropdownButton text size="sm"> Edit </VDropdownButton>
            <VDropdownPanel>
              <VList>
                <VListItem> Cut </VListItem>
                <VListItem> Copy </VListItem>
                <VListItem> Paste </VListItem>
              </VList>
          </VDropdown>
        </VPopoverGroup>
      </VAppBar>
    </template>

    <template #aside>
      <VNavDrawer>
        <VList>
          <VListItemHeader>Discover</VListItemHeader>
          <VListItem prepend-icon="ri:play-circle-line"> Listen Now </VListItem>
          <VListItem prepend-icon="ri:layout-grid-line"> Browse </VListItem>
          <VListItem prepend-icon="ri:radio-line"> Radio </VListItem>
        </VList>
      </VNavDrawer>
    </template>

    <NuxtPage />
  </VAppShell>
</template>
