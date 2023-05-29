# Navbar

Navigation bar.

::: warning
This component is **deprecated**. You can replace it with the new [`VAppBar`](/components/app-bar).
:::

## Usage

## Basic Usage

```vue
<template>
  <VNavbar />
</template>
```

<LivePreview src="components-navbar--default" />

::: info
The `VNavbar` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

## Small

```vue
<template>
  <VNavbar small />
</template>
```

<LivePreview src="components-navbar--small" />

## User Data

```vue
<script setup lang="ts">
const user = {name: 'Admin'};
</script>

<template>
  <VNavbar :user="user" />
</template>
```

<LivePreview src="components-navbar--user" />

## With Menus

```vue
<script setup lang="ts">
const menus = [
  {
    text: 'Home',
    to: '/',
  },
  {
    text: 'Settings',
    to: '/',
    children: [
      {
        text: 'Profile',
        to: '/profile',
      },
      {
        text: 'Account',
        to: '/account',
      },
    ],
  },
];
</script>

<template>
  <VNavbar :menus="menus" />
</template>
```

<LivePreview src="components-navbar--with-menus" />

## Props

| Name                        | Type                                   | Default |
| --------------------------- | -------------------------------------- | ------- |
| [`modelValue`](#modelValue) | `Boolean`                              | `false` |
| [`small`](#small)           | `Boolean`                              | `false` |
| [`user`](#user)             | `Object`                               | `null`  |
| [`menus`](#menus)           | `Array as PropType<VNavbarMenuItem[]>` | `[]`    |
| [`loginPath`](#loginPath)   | `String`                               | `''`    |
| [`dense`](#dense)           | `Boolean`                              | `false` |
| [`imgClass`](#imgClass)     | `String`                               | `'h-7'` |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Standalone Installation

You can also install the `Navbar` component individually via `@morpheme/navbar` package:

```bash
yarn install @morpheme/navbar
```

```vue
<script setup lang="ts">
import VNavbar from '@morpheme/navbar';
</script>

<template>
  <VNavbar />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-navbar--default).
