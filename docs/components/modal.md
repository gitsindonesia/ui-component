# Modal

Vue modal component. Based on `@headlessui/vue` dialog component.

## Usage

### Basic Usage

```vue
<template>
  <!-- VModal is registered globally -->
  <VModal v-model="isOpen">
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

<LivePreview src="components-modal--default" />

::: info
The `VModal` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Confirm

```vue
<template>
  <VModal v-model="isOpen" confirm>
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

<LivePreview src="components-modal--confirm" />

### Hide Header

```vue
<template>
  <VModal v-model="isOpen" hide-header>
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

<LivePreview src="components-modal--hide-header" />

### Hide Footer

```vue
<template>
  <VModal v-model="isOpen" hide-footer>
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

<LivePreview src="components-modal--hide-footer" />

### Hide X Button

```vue
<template>
  <VModal v-model="isOpen" hide-x-button>
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

<LivePreview src="components-modal--hide-x-button" />

### Fullscreen

```vue
<script setup lang="ts">
const isOpen = ref(false);
</script>

<template>
  <VModal v-model="isOpen" fullscreen>
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </VModal>
</template>
```

<LivePreview src="components-modal--fullscreen" />

### Centered

```vue
<script setup lang="ts">
const isOpen = ref(false);
const loading = ref(false);
const onConfirm = async (e) => {
  loading.value = true;
  await deleteItem();
  loading.value = false;
  e.close();
};
const deleteItem = () => {
  return new Promise((resolve: (value?: any) => void) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
</script>

<template>
  <VModal
    v-model="isOpen"
    title="Delete Item"
    confirm
    confirm-text="Delete"
    confirm-color="error"
    :loading="loading"
    centered
    footer-class="flex-row-reverse"
    close-text="Cancel"
    @confirm="onConfirm"
  >
    <template #activator="{open}">
      <v-btn @click="open" color="error">Delete</v-btn>
    </template>
    <p>Are you sure want to delete this item?</p>
  </VModal>
</template>
```

<LivePreview src="components-modal--centered" />

### Loading

```vue
<script setup lang="ts">
const isOpen = ref(true);
const loading = ref(true);
</script>

<template>
  <VModal v-model="isOpen" :loading="loading" confirm>
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

<LivePreview src="components-modal--loading" />

### Persistent

```vue
<template>
  <VModal v-model="isOpen" persistent>
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

<LivePreview src="components-modal--persistent" />

## Props

| Name                            | Type      | Default          |
| ------------------------------- | --------- | ---------------- |
| [`title`](#title)               | `string`  | `'Modal Header'` |
| [`confirm`](#confirm)           | `boolean` | `false`          |
| [`confirmColor`](#confirmColor) | `string`  | `'primary'`      |
| [`confirmProps`](#confirmProps) | `object`  | `'{}'`           |
| [`confirmText`](#confirmText)   | `string`  | `Confirm`        |
| [`closeText`](#closeText)       | `string`  | `Close`          |
| [`closeProps`](#closeProps)     | `object`  | `'{}'`           |
| [`headerClass`](#headerClass)   | `string`  | `''`             |
| [`bodyClass`](#bodyClass)       | `string`  | `''`             |
| [`modalClass`](#modalClass)     | `string`  | `''`             |
| [`footerClass`](#footerClass)   | `string`  | `''`             |
| [`footerClass`](#footerClass)   | `string`  | `''`             |
| [`hideHeader`](#hideHeader)     | `boolean` | `false`          |
| [`hideFooter`](#hideFooter)     | `boolean` | `false`          |

## Methods

None

## Events

### `onConfirm`

Event for confirmation modal.

```vue
<script setup lang="ts">
const isOpen = ref(false);
const onConfirm = async (e) => {
  await approveRequest();
  e.close();
};
const approveRequest = () => {
  return new Promise((resolve: (value?: any) => void) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};
</script>

<template>
  <VModal v-model="isOpen" confirm @confirm="onConfirm">
    <template #activator="{open}">
      <v-btn @click="open" color="error">Approve</v-btn>
    </template>
    <p>Are you sure want to approve this request?</p>
  </VModal>
</template>
```

## Slots

### `default`

### `activator`

### `header`

### `footer`

## CSS Variables

```css
:root {
  --v-modal-text-color: theme('colors.gray.800');
  --v-modal-bg-color: theme('colors.white');
  --v-modal-border-radius: theme('borderRadius.md');
  --v-modal-z-index: 30;
  --v-modal-shadow: theme('boxShadow.lg');
  --v-modal-width: 25rem;
  --v-modal-max-width: 100%;

  /* content */
  --v-modal-content-padding-x: theme('padding.4');
  --v-modal-content-padding-y: theme('padding.0');
  --v-modal-content-text-align: center;

  /* panel */
  --v-modal-panel-padding-x: theme('padding.6');
  --v-modal-panel-padding-y: theme('padding.6');
  --v-modal-margin-padding-x: theme('margin.8');
  --v-modal-margin-padding-y: theme('margin.8');
  --v-modal-content-text-align: center;

  /* title */
  --v-modal-title-font-size: theme('fontSize.lg');
  --v-modal-title-font-weight: theme('fontWeight.medium');
  --v-modal-title-line-height: theme('lineHeight.6');
  --v-modal-title-letter-spacing: theme('letterSpacing.tight');
  --v-modal-title-color: theme('colors.gray.900');

  /* body */
  --v-modal-body-margin-top: theme('margin.4');
  --v-modal-body-text-align: left;

  /* footer */
  --v-modal-footer-margin-top: theme('margin.6');
  --v-modal-footer-justify-content: flex-end;
  --v-modal-footer-gap: theme('gap.2');
}
```

## Manual Installation

You can also install the `Modal` component individually via `@gits-id/modal` package:

```bash
yarn install @gits-id/modal
```

```vue
<script setup lang="ts">
import VModal from '@gits-id/modal';
import '@gits-id/modal/dist/style.css';
</script>

<template>
  <VModal v-model="isOpen">
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-modal--default).
