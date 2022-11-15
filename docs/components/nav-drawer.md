# Navigation Drawer

NavDrawer / Navigation Drawer / Sidebar.

::: warning
This component is **deprecated** and will be replaced by [Navigation Drawer](/components/navigation-drawer) component in the next major version.
:::

## Usage

### Basic Usage

```vue
<script setup lang="ts">
const menus = [
  {
    text: 'Dasbor',
    to: '/',
    icon: 'ri:database-2-line',
  },
  {
    text: 'Administrator',
    icon: 'ri:database-2-line',
    children: [
      {
        text: 'Manajemen Pengguna',
        to: '/cms/manajemen-pengguna',
      },
      {
        text: 'Manajemen Peran',
        to: '/cms/manajemen-peran',
      },
    ],
  },
];
</script>

<template>
  <VNavDrawer :menus="menus" />
</template>
```

<LivePreview src="components-navdrawer--nav-drawer" />

::: info
The `VNavDrawer` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Expand on hover

```vue
<script setup lang="ts">
const menus = [
  {
    text: 'Dasbor',
    to: '/',
    icon: 'ri:database-2-line',
  },
  {
    text: 'Administrator',
    icon: 'ri:database-2-line',
    children: [
      {
        text: 'Manajemen Pengguna',
        to: '/cms/manajemen-pengguna',
      },
      {
        text: 'Manajemen Peran',
        to: '/cms/manajemen-peran',
      },
    ],
  },
];
</script>

<template>
  <VNavDrawer :menus="menus" expand-on-hover />
</template>
```

<LivePreview src="components-navdrawer--expand-hover" />

### Custom Class

```vue
<script setup lang="ts">
const menus = [
  {
    text: 'Dasbor',
    to: '/',
    icon: 'ri:database-2-line',
  },
  {
    text: 'Administrator',
    icon: 'ri:database-2-line',
    children: [
      {
        text: 'Manajemen Pengguna',
        to: '/cms/manajemen-pengguna',
      },
      {
        text: 'Manajemen Peran',
        to: '/cms/manajemen-peran',
      },
    ],
  },
];
</script>

<template>
  <VNavDrawer :menus="menus" class="bg-blue-800" />
</template>
```

<LivePreview src="components-navdrawer--custom-attributes" />

## Props

| Name                                  | Type                        | Default     |
| ------------------------------------- | --------------------------- | ----------- |
| [`modelValue`](#modelValue)           | `Boolean`                   | `false`     |
| [`small`](#small)                     | `Boolean`                   | `false`     |
| [`menus`](#menus)                     | `Array as PropType<Menu[]>` | `[]`        |
| [`mini`](#mini)                       | `Boolean`                   | `false`     |
| [`logoProps`](#logoProps)             | `Object`                    | `{}`        |
| [`dark`](#dark)                       | `Boolean`                   | `false`     |
| [`color`](#color)                     | `String`                    | `''`        |
| [`hideToggle`](#hideToggle)           | `Boolean`                   | `false`     |
| [`btnToggleClass`](#btnToggleClass)   | `String`                    | `''`        |
| [`classMenuParent`](#classMenuParent) | `String`                    | `''`        |
| [`toggleColor`](#toggleColor)         | `String`                    | `'primary'` |
| [`expandColor`](#expandColor)         | `String`                    | `''`        |
| [`expandHover`](#expandHover)         | `Boolean`                   | `false`     |
| [`isExpandHover`](#isExpandHover)     | `Boolean`                   | `false`     |
| [`drawerClass`](#drawerClass)         | `String`                    |             |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `NavDrawer` component individually via `@gits-id/nav-drawer` package:

```bash
yarn install @gits-id/nav-drawer
```

```vue
<script setup lang="ts">
import VNavDrawer from '@gits-id/nav-drawer';
</script>

<template>
  <VNavDrawer />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-nav-drawer--default).
