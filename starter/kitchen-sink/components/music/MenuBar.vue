<script setup lang="ts">
const menus = [
  {
    text: 'File',
    children: [
      {
        text: 'New',
        children: [
          {
            text: 'Playlist',
          },
          {
            text: 'Playlist from Selection',
            disabled: true,
          },
          {
            text: 'Smart Playlist',
          },
          {
            text: 'Playlist folder',
          },
          {
            text: 'Genius Playlist',
            disabled: true,
          },
        ],
      },
      {
        text: 'Open Stream URL...',
      },
      {
        text: 'Close Window',
      },
      {
        divider: true,
      },
      {
        text: 'Library',
        children: [
          {
            text: 'Update Cloud Library',
          },
          {
            text: 'Update Genius',
          },
          {
            divider: true,
          },
          {
            text: 'Organize Library',
          },
          {
            text: 'Export Library',
          },
        ],
      },
      {
        text: 'Import...',
      },
      {
        text: 'Burn Playlist to Disc...',
        disabled: true,
      },
      {
        divider: true,
      },
      {
        text: 'Show Finder',
      },
      {
        text: 'Convert',
      },
      {
        divider: true,
      },
      {
        text: 'Page Setup',
      },
      {
        text: 'Print',
      },
    ],
  },
  {
    text: 'Edit',
    children: [
      {
        text: 'Undo',
      },
      {
        text: 'Redo',
      },
      {
        divider: true,
      },
      {
        text: 'Cut',
      },
      {
        text: 'Copy',
      },
      {
        text: 'Paste',
      },
      {
        divider: true,
      },
      {
        text: 'Select All',
      },
      {
        text: 'Deselect All',
        disabled: true,
      },
      {
        divider: true,
      },
      {
        text: 'Smart Dictation',
      },
      {
        text: 'Emoji and Symbols',
      },
    ],
  },
  {
    text: 'View',
    children: [
      {
        text: 'Show Playlist Next',
      },
      {
        text: 'Show Lyrics',
      },
      {
        divider: true,
      },
      {
        text: 'Show Status Bar',
      },
      {
        divider: true,
      },
      {
        text: 'Hide Sidebar',
      },
      {
        text: 'Enter Fullscreen',
      },
    ],
  },
  {
    text: 'Account',
    children: [
      {
        text: 'Switch Account',
      },
      {
        divider: true,
      },
      {
        text: 'Andy',
      },
      {
        text: 'Ben',
      },
      {
        text: 'Luis',
      },
      {
        divider: true,
      },
      {
        text: 'Manage Family',
      },
      {
        divider: true,
      },
      {
        text: 'Add Account...',
      },
    ],
  },
];
</script>

<template>
  <VAppBar
    size="auto"
    bordered
    class="flex flex-col lg:flex-row px-4 py-3 xl:py-2"
  >
    <NuxtLink class="text-lg font-semibold" to="/music"> Music </NuxtLink>

    <nav class="flex-grow">
      <VDropdown
        v-for="{text, children, ...menuProps} in menus"
        :key="text"
        size="sm"
        flush
        v-bind="menuProps"
      >
        <template #activator>
          <VDropdownBtn text> {{ text }} </VDropdownBtn>
        </template>
        <template v-for="{text, ...child} in children" :key="text">
          <VDropdown
            v-if="child.children"
            size="sm"
            block
            placement="right-start"
            :offset="-4"
          >
            <template #activator>
              <VDropdownButton
                :as="'item'"
                suffix-icon="heroicons:chevron-right"
                :text="text"
              />
            </template>
            <template v-for="{text, ...subChild} in child.children" :key="text">
              <VDropdownItem :text="text" v-bind="subChild" />
            </template>
          </VDropdown>
          <VDropdownItem v-else v-bind="child">
            {{ text }}
          </VDropdownItem>
        </template>
      </VDropdown>
    </nav>

    <VBtn text flush color="primary" prefix-icon="ri:home-line" to="/">
      <span class="hidden lg:inline">Back to Home</span>
    </VBtn>
  </VAppBar>
</template>
