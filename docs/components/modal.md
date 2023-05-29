---
outline: deep
---

# Modal

The `VModal` component is used to create modal or dialog. It is based on `@headlessui/vue` dialog component.

## Usage

### Basic Usage

To use the `VModal` component, just use it in the template.

<LivePreview src="components-modal--default" >

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

</LivePreview>

::: info
The `VModal` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Confirm

Use [`confirm`](#confirm) prop to make modal confirmable. You can also customize the confirm text with [`confirmText`](#confirmText) prop, color with [`confirmColor`](#confirmColor) prop and even more with [`confirmProps`](#confirmProps).

<LivePreview src="components-modal--confirm" >

```vue
<script setup lang="ts">
const onConfirm = () => {
  alert('Confirmed!');
};
</script>

<template>
  <VModal v-model="isOpen" confirm @confirm="onConfirm">
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

</LivePreview>

### Hide Header

Use `hide-header` prop to hide the modal header.

<LivePreview src="components-modal--hide-header" >

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

</LivePreview>

### Hide Footer

Use `hide-footer` prop to hide the modal footer.

<LivePreview src="components-modal--hide-footer" >

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

</LivePreview>

### Hide X Button

Use `hide-x-button` prop to hide the modal close button.

<LivePreview src="components-modal--hide-x-button" >

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

</LivePreview>

### Fullscreen

Use `fullscreen` prop to make modal fullscreen.

<LivePreview src="components-modal--fullscreen" >

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

</LivePreview>

### Centered

Use `centered` prop to make the modal centered of the page.

<LivePreview src="components-modal--centered" >

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

</LivePreview>

### Loading

Use `loading` prop to set modal loading state. When `loading` is true, modal can not be closed.

<LivePreview src="components-modal--loading" >

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

</LivePreview>

### Persistent

Use `persistent` prop to prevent closing modal when clicking the overlay.

<LivePreview src="components-modal--persistent" >

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

</LivePreview>

### Custom Width

Use `width` prop set modal width and use `max-width` prop to set modal max width.

<LivePreview src="components-modal--custom-width" >

```vue
<template>
  <VModal v-model="isOpen" width="700px" max-width="100%">
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

</LivePreview>

### Custom Class

We can also customize modal via classes props. This is useful when working with Tailwind CSS.

- `modal-class`: To set class on modal panel
- `header-class`: To set class on modal header
- `title-class`: To set class on modal title only
- `body-class`: To set class on modal body
- `footer-class`: To set class on modal footer

<LivePreview src="components-modal--custom-class" >

```vue
<template>
  <VModal v-model="isOpen" modal-class="!max-w-2xl">
    <template #activator="{open}">
      <v-btn @click="open">Click Me</v-btn>
    </template>
    Hello World
  </VModal>
</template>
```

</LivePreview>

### Custom Style

We can also customize modal via CSS Properties.

<LivePreview src="components-modal--customization" >

```vue {15-18}
<template>
  <div class="bg-gray-800 text-white h-screen p-6 space-y-5">
    <p class="mb-5" v-for="i in 5" :key="i">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>

    <v-modal
      v-model="isOpen"
      :style="{
        '--v-modal-bg-color': 'rgb(255, 255, 255, 0.3)',
        '--v-modal-shadow': 'none',
      }"
      modal-class="backdrop-blur-sm"
      title-class="!text-white"
      body-class="!text-white"
    >
      <template #activator="{open}">
        <v-btn @click="open">Click Me</v-btn>
      </template>
      Hello World
    </v-modal>
  </div>
</template>
```

</LivePreview>

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
| [`titleClass`](#titleClass)     | `string`  | `''`             |
| [`bodyClass`](#bodyClass)       | `string`  | `''`             |
| [`modalClass`](#modalClass)     | `string`  | `''`             |
| [`footerClass`](#footerClass)   | `string`  | `''`             |
| [`footerClass`](#footerClass)   | `string`  | `''`             |
| [`hideHeader`](#hideHeader)     | `boolean` | `false`          |
| [`hideFooter`](#hideFooter)     | `boolean` | `false`          |

## Events

### `onConfirm`

Event for confirmation modal.

```vue
<script setup lang="ts">
import {ref} from 'vue';

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

The `default` slot is used to place modal content/body. You can put your text or even HTML tags on it.

```vue
<template>
  <VModal>
    <p>Modal message</p>
  </VModal>
</template>
```

### `activator`

The `activator` slot is used to place modal activator. You can place button that trigger modal to open here.

**Slot Props:**

```ts
{
  open: () => void
}
```

Example:

```vue
<template>
  <VModal>
    <template #activator="{open}">
      <VBtn @click="open">Open Modal</VBtn>
    </template>

    <p>Modal message</p>
  </VModal>
</template>
```

### `header`

The `header` slot is used to place modal header. Use this slot to customize modal header content.

```vue
<template>
  <VModal>
    <template #header>
      <p>Custom Header</p>
    </template>

    <p>Modal message</p>
  </VModal>
</template>
```

### `footer`

The `footer` slot is used to place modal footer. Use this slot to customize modal footer content.

**Slot Props:**

```ts
{
  loading: boolean
  confirmProps: Record<string, any>
  onConfirm: ((payload: ConfirmEventPayload) => any) & (() => void)
  loading: boolean
  close: () => void
}
```

**Example:**

```vue
<template>
  <VModal>
    <template #footer="{close}">
      <VBtn>View Link</VBtn>
      <VBtn @click="close">Close</VBtn>
    </template>

    <p>Modal message</p>
  </VModal>
</template>
```

## CSS Variables

```scss
:root {
  --v-modal-text-color: var(--color-gray-700);
  --v-modal-bg-color: var(--color-white);
  --v-modal-border-radius: 12px;
  --v-modal-z-index: 30;
  --v-modal-shadow: var(--effect-shadow-xl);
  --v-modal-width: 25rem;
  --v-modal-max-width: 100%;

  /* content */
  --v-modal-content-padding-x: var(--size-spacing-4);
  --v-modal-content-padding-y: var(--size-spacing-4);
  --v-modal-content-text-align: center;

  /* panel */
  --v-modal-panel-padding-x: var(--size-spacing-4);
  --v-modal-panel-padding-y: var(--size-spacing-4);
  --v-modal-margin-padding-x: var(--size-spacing-4);
  --v-modal-margin-padding-y: var(--size-spacing-4);
  --v-modal-content-text-align: center;

  /* title */
  --v-modal-title-font-weight: var(--font-weight-semibold);
  --v-modal-title-font-size: var(--size-font-lg);
  --v-modal-title-line-height: var(--size-font-xl);
  --v-modal-title-letter-spacing: initial;
  --v-modal-title-color: var(--color-gray-900);

  /* body */
  --v-modal-body-margin-top: var(--size-spacing-2);
  --v-modal-body-text-align: left;
  --v-modal-body-font-size: var(--size-font-sm);
  --v-modal-body-line-height: var(--size-font-md);

  /* footer */
  --v-modal-footer-margin-top: var(--size-spacing-6);
  --v-modal-footer-justify-content: flex-end;
  --v-modal-footer-gap: var(--size-spacing-2);

  // overlay
  --v-modal-overlay-blur-size: 8px;
}
```

## Standalone Installation

You can also install the `Modal` component individually via `@morpheme/modal` package:

```bash
npm i @morpheme/modal
```

```vue
<script setup lang="ts">
import VModal from '@morpheme/modal';
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
