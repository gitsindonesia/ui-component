<script setup lang="ts">
//
</script>

<template>
  <VAppBar size="auto" class="top-0 sticky py-2 px-4">
    <div class="flex gap-4 w-full justify-between items-center">
      <div class="w-[218px]">
        <VLogo :white="$colorMode.preference === 'dark'" />
      </div>
      <nav class="flex gap-2 flex-1">
        <VInput wrapper-class="flex-grow" placeholder="Search in mail" />
        <VBtn
          v-tooltip="{
            content: 'Settings',
            placement: 'bottom',
            theme: 'tooltip-black',
            triggers: ['hover', 'focus'],
          }"
          prefix-icon="ri:settings-3-line"
          icon
          text
          fab
        />
        <VBtn
          v-tooltip="{
            content: 'Apps',
            placement: 'bottom',
            theme: 'tooltip-black',
            triggers: ['hover', 'focus'],
          }"
          prefix-icon="ri:apps-2-line"
          icon
          text
          fab
        />
        <ColorModeSwitcher
          v-tooltip="{
            content: 'Switch apperance',
            placement: 'bottom',
            theme: 'tooltip-black',
            triggers: ['hover', 'focus'],
          }"
        />
        <VDropdown right>
          <template #activator>
            <VDropdownButton
              v-tooltip="{
                content: 'Account',
                placement: 'bottom',
                theme: 'tooltip-black',
                triggers: ['hover', 'focus'],
              }"
            >
              <VAvatar color="secondary" size="44">W</VAvatar>
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
