---
outline: deep
---

# Bottom Sheet

A Bottom Sheet is a user interface component that slides up from the bottom of the screen to display content that complements the main screen. It can either be a full-screen or partially visible, allowing users to interact with the underlying content while still having access to the main screen. Bottom sheets are used to provide additional context, options, or functionality related to the main screen and can be dismissed by dragging it down or tapping outside of it.

## Usage

### Basic Usage

To use the `VBottomSheet` component, you can simply include it in your template like this:

<LivePreview src="components-bottomsheet--default">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>
  <VBottomSheet v-model="isOpen">
    <VBottomSheetBody>
      A quick brown fox leaps over the lazy dog.
    </VBottomSheetBody>
  </VBottomSheet>
</template>
```

</LivePreview>

### With Header

To add header to the bottom sheet, add `VBottomSheetHeader` as child of `VBottomSheet`.

<LivePreview src="components-bottomsheet--with-header">

```vue {10}
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>
  <VBottomSheet v-model="isOpen">
    <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
    <VBottomSheetBody>
      A quick brown fox leaps over the lazy dog.
    </VBottomSheetBody>
  </VBottomSheet>
</template>
```

</LivePreview>

### With Handle

To add handle to the bottom sheet, add `VBottomSheetHandle` as child of `VBottomSheet`.

<LivePreview src="components-bottomsheet--with-handle">

```vue {10}
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>
  <VBottomSheet v-model="isOpen">
    <VBottomSheetHandle />
    <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
    <VBottomSheetBody>
      A quick brown fox leaps over the lazy dog.
    </VBottomSheetBody>
  </VBottomSheet>
</template>
```

</LivePreview>

### With Footer

To add footer to the bottom sheet, add `VBottomSheetFooter` as child of `VBottomSheet`.

<LivePreview src="components-bottomsheet--with-action">

```vue {9,14-16}
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>
  <VBottomSheet v-model="isOpen" v-slot="{close}">
    <VBottomSheetHeader> Sheet Title </VBottomSheetHeader>
    <VBottomSheetBody>
      A quick brown fox leaps over the lazy dog.
    </VBottomSheetBody>
    <VBottomSheetFooter>
      <VBtn @click="close">Close</VBtn>
    </VBottomSheetFooter>
  </VBottomSheet>
</template>
```

</LivePreview>

### Menus

To add menus to the bottom sheet, add `VBottomSheetMenus` as child of `VBottomSheet`.

<LivePreview src="components-bottomsheet--menus">

```vue {10-13}
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>
  <VBottomSheet v-model="isOpen" v-slot="{close}">
    <VBottomSheetMenus :items="menus" hover />
    <VBottomSheetFooter>
      <Button @click="close">Done</Button>
    </VBottomSheetFooter>
  </VBottomSheet>
</template>
```

</LivePreview>

### Selectable Menus

To add selectable menus to the bottom sheet, add `VBottomSheetMenus` and set `v-model` to a ref to it.

<LivePreview src="components-bottomsheet--selectable-menus">

```vue {5,12}
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
const selected = ref([]);
</script>

<template>
  <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>
  <VBottomSheet v-model="isOpen" v-slot="{close}">
    <VBottomSheetMenus v-model="selected" :items="menus" hover />
    <VBottomSheetFooter>
      <Button @click="close">Done</Button>
      <Button @click="selected = []">Clear</Button>
    </VBottomSheetFooter>
  </VBottomSheet>
</template>
```

</LivePreview>

### Multiple Selection Menus

You can also add multiple selection to bottom sheet menus by adding `multiple` props to the `VBottomSheetMenus` component.

<LivePreview src="components-bottomsheet--menus-multiple-select">

```vue {15}
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
const selected = ref([]);
</script>

<template>
  <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>
  <VBottomSheet v-model="isOpen" v-slot="{close}">
    <VBottomSheetMenus v-model="selected" :items="menus" hover multiple />
    <VBottomSheetFooter>
      <Button @click="close">Done</Button>
      <Button @click="selected = []">Clear</Button>
    </VBottomSheetFooter>
  </VBottomSheet>
</template>
```

</LivePreview>

### Max Width

You can set max width of bottom sheet via `maxWidth` prop.

<LivePreview src="components-bottomsheet--max-width">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>
  <VBottomSheet v-model="isOpen" v-slot="{close}" max-width="500px">
    <VBottomSheetMenus v-model="selected" :items="menus" hover multiple />
    <VBottomSheetFooter>
      <Button @click="close">Close</Button>
    </VBottomSheetFooter>
  </VBottomSheet>
</template>
```

</LivePreview>

### Hide Overlay

You can hide bottom sheet overlay by setting `overlay` prop value to `false`.

<LivePreview src="components-bottomsheet--hide-overlay">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen">Open BottomSheet</VBtn>
  <VBottomSheet v-model="isOpen" v-slot="{close}" :overlay="false">
    <VBottomSheetMenus v-model="selected" :items="menus" hover multiple />
    <VBottomSheetFooter>
      <Button @click="close">Close</Button>
    </VBottomSheetFooter>
  </VBottomSheet>
</template>
```

</LivePreview>

### Multiple Bottom Sheet

<LivePreview src="components-bottomsheet--multiple-instance">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const sheet1 = ref(false);
const sheet2 = ref(false);
</script>

<template>
  <VBtn @click="sheet1 = !sheet1">Open BottomSheet 1</VBtn>
  <VBtn @click="sheet2 = !sheet2">Open BottomSheet 2</VBtn>

  <VBottomSheet v-model="sheet1">
    <VBottomSheetHeader> Sheet 1 </VBottomSheetHeader>
    <VBottomSheetBody>
      A quick brown fox leaps over the lazy dog.
    </VBottomSheetBody>
  </BottomSheet>

  <VBottomSheet v-model="sheet2">
    <VBottomSheetHeader> Sheet 2 </VBottomSheetHeader>
    <VBottomSheetBody>
      A quick brown fox leaps over the lazy dog.
    </VBottomSheetBody>
  </BottomSheet>
</template>
```

</LivePreview>

### Nested Bottom Sheet

<LivePreview src="components-bottomsheet--nested-sheet">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const sheet1 = ref(false);
const sheet2 = ref(false);
</script>

<template>
  <VBtn @click="sheet1 = !sheet1">Open BottomSheet 1</VBtn>

  <VBottomSheet v-model="sheet1">
    <VBottomSheetHeader> Sheet 1 </VBottomSheetHeader>
    <VBottomSheetBody>
      A quick brown fox leaps over the lazy dog.
    </VBottomSheetBody>
    <VBottomSheetFooter>
      <VBtn @click="sheet2 = !sheet2">Open Bottom Sheet 2</VBtn>
    </VBottomSheetFooter>

    <VBottomSheet v-model="sheet2">
      <VBottomSheetHeader> Sheet 2 </VBottomSheetHeader>
      <VBottomSheetBody>
        A quick brown fox leaps over the lazy dog.
      </VBottomSheetBody>
    </VBottomSheet>
  </VBottomSheet>
</template>
```

</LivePreview>

## Props

| Prop       | Type                 | Default                       | Description                                                                    |
| ---------- | -------------------- | ----------------------------- | ------------------------------------------------------------------------------ |
| modelValue | `boolean`            | `false`                       | The value of the model, representing the visibility state of the bottom sheet. |
| transition | `string`             | `'v-bottom-sheet-transition'` | The transition name for the bottom sheet.                                      |
| maxWidth   | `number` or `string` | `undefined`                   | The maximum width of the bottom sheet.                                         |
| overlay    | `boolean`            | `true`                        | Whether to show an overlay behind the bottom sheet.                            |

## Events

| Name                                   | Payload            | Description                                                                             |
| -------------------------------------- | ------------------ | --------------------------------------------------------------------------------------- |
| [update:modelValue](#updateModelValue) | `(value: boolean)` | Emitted when the modelValue prop changes. Receives a value argument with the new value. |

To listen for the `emit` event in a parent component or another component, you can use the `@` symbol followed by the event name. For example:

```vue
<script setup>
function handleModelValueUpdate(value) {
  // do something with the value passed from the child component
}
</script>

<template>
  <VBottomSheet @update:modelValue="handleModelValueUpdate">
    BottomSheet message
  </VBottomSheet>
</template>
```

## Slots

### `default`

A slot for placing the content such as `VBottomSheetHeader`, `VBottomSheetFooter`, etc.

## CSS Variables

```scss
:root  {
  --v-bottom-sheet-bg-color: var(--color-wite)
  --v-bottom-sheet-body-color: var(--color-gray-800);

  // handle
  --v-bottom-sheet-handle-width: 3rem;
  --v-bottom-sheet-handle-height: 8px;
  --v-bottom-sheet-handle-bg-color: var(--color-gray-300);
  --v-bottom-sheet-handle-border-radius: var(--border-radius-lg);
}
```

## Standalone Installation

You can also install the `BottomSheet` component individually via `@morpheme/bottom-sheet` package:

```bash
npm i @morpheme/bottom-sheet @morpheme/themes
```

```vue
<script setup lang="ts">
import {BottomSheet, BottomSheetBody} from '@morpheme/bottom-sheet';
import '@morpheme/themes/src/morpheme/_bottom-sheet.scss'

// load dark mode styles if you want to support dark mode
// import '@morpheme/themes/src/morpheme/_bottom-sheet.dark.scss'
</script>

<template>
  <VBottomSheet>
    <VBottomSheetBody> Hello World </VBottomSheetBody>
  </BottomSheet>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-bottomsheet--default).
