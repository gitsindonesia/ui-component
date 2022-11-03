# Pagination

## Usage

### Basic Usage

```vue
<template>
  <!-- VPagination is registered globally -->
  <VPagination :total-items="30" :items-per-page="10" />
</template>
```

<LivePreview src="components-pagination--default" height="100" />

::: info
The `VPagination` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Small

```vue
<template>
  <VPagination :total-items="30" :items-per-page="10" small />
</template>
```

<LivePreview src="components-pagination--small" height="100" />

### Large

```vue
<template>
  <VPagination :total-items="30" :items-per-page="10" large />
</template>
```

<LivePreview src="components-pagination--large" height="100" />

### Simple

```vue
<template>
  <VPagination :total-items="30" :items-per-page="10" simple />
</template>
```

<LivePreview src="components-pagination--simple" height="100" />


## Props

| Name                             | Type      | Default     |
| ---------------------------------| ----------| ----------- |
| [`modelValue`](#modelValue)      | `number`  | `1`         |
| [`showFirst`](#showFirst)        | `boolean` | `true`      |
| [`showPrevious`](#showPrevious)  | `boolean` | `true`      |
| [`showNext`](#showNext)          | `boolean` | `true`      |
| [`showLast`](#showLast)          | `boolean` | `true`      |
| [`totalItems`](#totalItems)      | `number`  | `0` |
| [`siblingCount`](#siblingCount)  | `number`  | `1` |
| [`boundaryCount`](#boundaryCount)| `number`  | `1` |
| [`itemsPerPage`](#itemsPerPage)  | `number`  | `10` |
| [`activeClass`](#activeClass)    | `string`  | `'bg-primary-600 border-primary-600 hover:!bg-primary-700 text-white !font-semibold'` |
| [`defaultClass`](#defaultClass)  | `string`  | `'text-gray-700'` |
| [`simple`](#simple)              | `boolean` | `false`      |


## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Logo` component individually via `@gits-id/logo` package:

```bash
yarn install @gits-id/logo
```

```vue
<script setup lang="ts">
import VLogo from '@gits-id/logo';
</script>

<template>
  <VLogo />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-logo--default).
