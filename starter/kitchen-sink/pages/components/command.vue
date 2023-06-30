<script setup lang="ts">
import type {CommandItem} from '@morpheme/command/dist/types/VCommand'

const items: CommandItem = [
  {
    label: 'Recents',
    items: [
      { value: 'add-project', text: 'Add new project', icon: 'ri:add-box-line' },
      { value: 'open-project', text: 'Open project', icon: 'ri:folder-open-line' },
      { value: 'open-recent', text: 'Open recent', icon: 'ri:history-line' },
    ],
  },
  {
    label: 'Projects',
    items: [
      { value: 'add-project', text: 'Add new project' },
      { value: 'open-project', text: 'Open project' },
      { value: 'open-recent', text: 'Open recent' },
    ],
  },
  {
    label: 'Teams',
    items: [
      { value: 'add-team', text: 'Add new team' },
      { value: 'open-team', text: 'Open team' },
    ],
  },
  {
    label: 'Settings',
    items: [
      { value: 'settings-account', text: 'Account' },
      { value: 'settings-teams', text: 'Teams' },
      { value: 'settings-theme', text: 'Theme' },
    ],
  },
  {
    divider: true,
  },
  { value: 'format-document', text: 'Format Document' },
  { value: 'format-selection', text: 'Format Selection' },
]

const isOpen = ref(false)
const selected = ref()
</script>

<template>
  <PageHeader title="Command" />

  <div class="space-y-4">
    <VCard title="Basic Example">
      <div>
        <div>Press CMD+K or Control+K to open the menu</div>
        <pre class="mt-4">Selected: {{ selected }}</pre>
      </div>
    </VCard>

    <VCard title="With Button Trigger">
      <div>
        <VBtn @click="isOpen = true">Open Command</VBtn>

        <pre class="mt-4">Selected: {{ selected }}</pre>
      </div>
    </VCard>

    <VCommand
      v-model="isOpen"
      v-model:selected="selected"
    />
  </div>
</template>
