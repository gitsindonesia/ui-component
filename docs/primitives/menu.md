---
outline: deep
---

# Menu

Displays a menu to the user—such as a set of actions or functions—triggered by a button.

## Features

- ✅ Can be controlled or uncontrolled.

## Installation

```bash
npm i @morpheme/primitives
```

## Usage

### Basic Example

```vue
<script setup lang="ts">
import {Menu, MenuButton, MenuItems, MenuItem} from '@morpheme/primitives';
import {ChevronDownIcon} from '@morphemeicons/vue/untitled';
</script>

<template>
  <Menu>
    <MenuButton
      v-slot="{open}"
      class="inline-flex gap-2 items-center relative text-sm"
    >
      <span>Account</span>
      <ChevronDownIcon
        class="w-5 h-5 transform transition-transform duration-200"
        :class="{
          'rotate-180': open,
        }"
      />
    </MenuButton>
    <MenuItems class="absolute w-56 bg-white p-2 border rounded-lg shadow-md">
      <MenuItem
        class="text-sm text-left w-full px-3 py-2 rounded-lg hover:bg-gray-200"
        v-slot="{active}"
      >
        <a :class="{'bg-blue-500': active}" href="/account-settings">
          Account settings
        </a>
      </MenuItem>
      <MenuItem
        class="text-sm text-left w-full px-3 py-2 rounded-lg hover:bg-gray-200"
        v-slot="{active}"
      >
        <a :class="{'bg-blue-500': active}" href="/account-settings">
          Documentation
        </a>
      </MenuItem>
      <MenuItem
        as="button"
        class="text-sm text-left w-full px-3 py-2 rounded-lg disabled:cursor-not-allowed disabled:text-gray-400 hover:not:disabled:bg-gray-200"
        disabled
      >
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>
```

### Multi Level

```vue
<script setup lang="ts">
import {Menu, MenuButton, MenuItems, MenuItem} from '@morpheme/primitives';
import {ChevronDownIcon} from '@morphemeicons/vue/untitled';
</script>

<template>
  <Menu>
    <MenuButton
      v-slot="{open}"
      class="inline-flex gap-2 items-center relative text-sm"
    >
      <span>Account</span>
      <ChevronDownIcon
        class="w-5 h-5 transform transition-transform duration-200"
        :class="{
          'rotate-180': open,
        }"
      />
    </MenuButton>
    <MenuItems class="absolute w-56 bg-white p-2 border rounded-lg shadow-md">
      <MenuItem
        class="text-sm text-left w-full px-3 py-2 rounded-lg hover:bg-gray-200"
        v-slot="{active}"
      >
        <a :class="{'bg-blue-500': active}" href="/account-settings">
          Account settings
        </a>
      </MenuItem>
      <MenuItem
        class="text-sm text-left w-full px-3 py-2 rounded-lg hover:bg-gray-200"
        v-slot="{active}"
      >
        <a :class="{'bg-blue-500': active}" href="/account-settings">
          Documentation
        </a>
      </MenuItem>
      <MenuItem
        as="button"
        class="text-sm text-left w-full px-3 py-2 rounded-lg disabled:cursor-not-allowed disabled:text-gray-400 hover:not:disabled:bg-gray-200"
        disabled
      >
        <span class="opacity-75">Invite a friend (coming soon!)</span>
      </MenuItem>

      <Menu class="relative">
        <MenuButton
          v-slot="{open}"
          class="flex gap-4 justify-between items-center text-sm text-left w-full px-3 py-2 rounded-lg hover:bg-gray-200"
        >
          <span>Preference</span>
          <ChevronDownIcon
            class="w-5 h-5 transform transition-transform duration-200 -rotate-90"
            :class="{
              'rotate-180': open,
            }"
          />
        </MenuButton>
        <MenuItems
          class="absolute top-0 left-full w-56 bg-white p-2 border rounded-lg shadow-md"
        >
          <MenuItem
            class="text-sm text-left w-full px-3 py-2 rounded-lg hover:bg-gray-200"
            v-slot="{active}"
          >
            <button type="button" :class="{'bg-blue-500': active}">
              System
            </button>
          </MenuItem>
          <MenuItem
            class="text-sm text-left w-full px-3 py-2 rounded-lg hover:bg-gray-200"
            v-slot="{active}"
          >
            <button type="button" :class="{'bg-blue-500': active}">
              Light
            </button>
          </MenuItem>
          <MenuItem
            class="text-sm text-left w-full px-3 py-2 rounded-lg hover:bg-gray-200"
            v-slot="{active}"
          >
            <button type="button" :class="{'bg-blue-500': active}">Dark</button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </MenuItems>
  </Menu>
</template>
```
