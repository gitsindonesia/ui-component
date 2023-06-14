---
outline: deep
---

# Divider

The `VDivider` component is used to separate sections of lists or layouts.

## Usage

### Basic Usage

Dividers in their simplest form display a horizontal line.

<LivePreview src="components-divider--default" >

```vue
<template>
  <VList>
    <VListItem>Jane</VListItem>
    <VDivider />
    <VListItem>Lily</VListItem>
    <VListItem>Mary</VListItem>
  </VList>
</template>
```

</LivePreview>

### Inset

Inset dividers are moved `44px` to the right. This will cause them to line up with list items.

<LivePreview src="components-divider--inset" >

```vue
<template>
  <VList>
    <VListItem>Jane</VListItem>
    <VDivider inset />
    <VListItem>Lily</VListItem>
    <VListItem>Mary</VListItem>
  </VList>
</template>
```

</LivePreview>

### Vertical

Vertical dividers give you more tools for unique layouts.

<LivePreview src="components-divider--vertical" >

```vue
<template>
  <VAppBar shadow>
    <VMain class="flex justify-between items-center">
      <VLogo />

      <nav class="flex gap-1">
        <VBtn text>Home</VBtn>
        <VDivider vertical />
        <VBtn text>About</VBtn>
        <VDivider vertical />
        <VBtn text>Contact</VBtn>
      </nav>
    </VMain>
  </VAppBar>
</template>
```

</LivePreview>

## Props

| Name                    | Type      | Default |
| ----------------------- | --------- | ------- |
| [`inset`](#inset)       | `boolean` | `false` |
| [`vertical`](#vertical) | `boolean` | `false` |

## Events

None

## Slots

None

## CSS Variables

```scss
:root {
  --v-divider-height: 1px;
  --v-divider-border-color: var(--color-gray-200);
  --v-divider-border-width: var(--v-divider-height);
  --v-divider-border-style: solid;
  --v-divider-inset-margin: 44px;
}
```

## Standalone Installation

You can also install the `VDivider` component individually via `@morpheme/divider` package:

```bash
npm i @morpheme/divider
```

```vue
<script setup lang="ts">
import VDivider from '@morpheme/divider';
</script>

<template>
  <VDivider />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-divider--default).
