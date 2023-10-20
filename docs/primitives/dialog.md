---
outline: deep
---

# Dialog

A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.

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
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from '@morpheme/primitives';
import {ref} from 'vue';

const isOpen = ref(true);
</script>

<template>
  <button
    @click="isOpen = !isOpen"
    class="bg-white border rounded-lg px-3 py-2 text-sm font-medium"
  >
    Delete account
  </button>

  <Dialog v-bind="args" v-model="isOpen">
    <transition name="fade">
      <DialogOverlay
        class="fixed inset-0 bg-black/50 z-10"
        @click="isOpen = false"
      />
    </transition>

    <transition name="fade">
      <DialogPanel
        class="
            fixed z-20 w-[400px] bg-white rounded-lg shadow-lg p-4
          "
        :style="{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }"
      >
        <DialogTitle class="font-medium"> Delete account </DialogTitle>
        <DialogDescription class="text-gray-700 mt-2 text-sm">
          Are you sure you want to delete your account?
        </DialogDescription>
        <div class="flex gap-3 mt-4 justify-center">
          <button
            class="border bg-white px-3 py-2 rounded-lg text-sm font-medium"
            @click="isOpen = false"
          >
            Cancel
          </button>
          <button
            class="border bg-white text-red-600 px-3 py-2 rounded-lg text-sm font-medium"
            @click="isOpen = false"
          >
            Delete
          </button>
        </div>
      </DialogPanel>
    </transition>
  </Dialog>
</template>
```
