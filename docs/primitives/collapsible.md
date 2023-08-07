---
outline: deep
---

# Collapsible

An interactive component which expands/collapses a panel.

## Features

- ✅ Full keyboard navigation.
- ✅ Can be controlled or uncontrolled.

## Installation

```bash
npm i @morpheme/primitives
```

## Usage

```vue
<script setup lang="ts">
import {
  Collapsible,
  CollapsibleButton,
  CollapsibleContent,
} from '@morpheme/primitives';
import {ChevronDownIcon} from '@morphemeicons/vue/untitled';
</script>

<template>
  <Collapsible>
    <CollapsibleButton
      v-slot="{open}"
      class="flex py-2 justify-between w-full gap-4 items-center"
    >
      <h3 class="text-sm">Title</h3>
      <ChevronDownIcon
        class="w-5 h-5 transform transition-transform duration-200"
        :class="{
          'rotate-180': open,
        }"
      />
    </CollapsibleButton>

    <CollapsibleContent class="text-sm text-gray-800">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu
      lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis
      cursus dui. Cras tincidunt vehicula
    </CollapsibleContent>
  </Collapsible>
</template>
```

## `v-model`

```vue
<script setup lang="ts">
import {
  Collapsible,
  CollapsibleButton,
  CollapsibleContent,
} from '@morpheme/primitives';
import {ChevronDownIcon} from '@morphemeicons/vue/untitled';
import {ref} from 'vue';

const value = ref(true)
</script>

<template>
  <Collapsible v-model="value">
    <CollapsibleButton
      v-slot="{open}"
      class="flex py-2 justify-between w-full gap-4 items-center"
    >
      <h3 class="text-sm">Title</h3>
      <ChevronDownIcon
        class="w-5 h-5 transform transition-transform duration-200"
        :class="{
          'rotate-180': open,
        }"
      />
    </CollapsibleButton>

    <CollapsibleContent class="text-sm text-gray-800">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu
      lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis
      cursus dui. Cras tincidunt vehicula
    </CollapsibleContent>
  </Collapsible>
</template>
```
