<script setup lang="ts">
//
</script>

<template>
  <VAppBar size="auto" class="top-0 sticky py-2 px-4">
    <div class="flex gap-4 w-full justify-between items-center">
      <div class="w-[218px]">
        <VLogo />
      </div>
      <nav class="flex gap-2 flex-1">
        <VInput wrapper-class="flex-grow" placeholder="Search in mail" />
        <VBtn prefix-icon="ri:settings-3-line" icon text fab />
        <VBtn prefix-icon="ri:apps-2-line" icon text fab />
        <ColorModeSwitcher />
        <VDropdown right panel-class="z-20">
          <template #activator>
            <VDropdownButton>
              <VAvatar color="secondary" size="xl">W</VAvatar>
            </VDropdownButton>
          </template>
          <VDropdownItem>Profile</VDropdownItem>
          <VDropdownItem>Settings</VDropdownItem>
          <VDivider />
          <VDropdownItem>Logout</VDropdownItem>
        </VDropdown>
      </nav>
    </div>
  </VAppBar>
</template>
