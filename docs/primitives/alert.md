---
outline: deep
---

# Alert

The `Alert` component is used to communicate an important and usually time-sensitive message to the user. The browser will send out an accessible alert event to assistive technology products which can then notify the user.

## Features

- ✅ Can be controlled or uncontrolled.

## Installation

```bash
npm i @morpheme/primitives
```

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {Alert} from '@morpheme/primitives';
</script>

<template>
  <Alert v-slot="{hide}">
    This is the title

    <button @click="hide">Close</button>
  </Alert>
</template>
```

### Transition

```vue
<script setup lang="ts">
import {Alert} from '@morpheme/primitives';
</script>

<template>
  <transition name="fade">
    <Alert v-slot="{hide}">
      This is the title

      <button @click="hide">Close</button>
    </Alert>
  </transition>
</template>
```

### Custom Render

```vue
<script setup lang="ts">
import {Alert} from '@morpheme/primitives';
</script>

<template>
  <Alert
    v-slot="{hide}"
    as="p"
  >
    This alert is rendered as a paragraph

    <button @click="hide">
      Close
    </button>
  </Alert>

  <Alert
    v-slot="{hide}"
    as="template"
  >
    <div role="alert">
      This alert is rendered as a template
    </div>

    <button @click="hide">
      Close
    </button>
  </Alert>
</transition>
```

### `v-model`

```vue
<script setup lang="ts">
import {Alert} from '@morpheme/primitives';
import {ref} from 'vue';

const isOpen = ref(true);
</script>

<template>
  <Alert
    v-slot="{hide}"
    v-model="isOpen"
  >
    This alert is rendered as a paragraph

    <button @click="hide">
      Close
    </button>
    <button @click="isOpen = false">
      Close via model
    </button>
  </Alert>
</transition>
```

### Styled

```vue
<script setup lang="ts">
import {Alert} from '@morpheme/primitives';
</script>

<template>
  <transition name="fade">
    <Alert
      v-slot="{hide}"
      class="bg-red-500 text-white text-sm p-4 rounded-lg flex justify-between items-center"
    >
      This is the title

      <button @click="hide">
        Close
      </button>
    </Alert>
  </transition>
</transition>
```
