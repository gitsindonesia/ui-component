# Menus

Menus component. Usefull to create navigation menus. Triggered on hover.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <VMenus :items="items" />
</template>
```

<LivePreview src="components-menus--default" />

::: info
The `VMenus` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Right

```vue
<script setup lang="ts">
const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <VMenus :items="items" right />
</template>
```

<LivePreview src="components-menus--right" />

### Small

```vue
<script setup lang="ts">
const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <VMenus :items="items" small />
</template>
```

<LivePreview src="components-menus--small" />

### In `AppBar`

```vue
<script setup lang="ts">
import VAppBar from '@gits-id/app-bar';

const items = [
  {
    text: 'Item',
    to: '/',
  },
  {
    text: 'Item 2',
    to: '/',
  },
  {
    text: 'Item 3',
    to: '/',
  },
];
</script>

<template>
  <div class="space-y-2">
    <VAppBar shadow>
      <span class="font-semibold mr-4">Default</span>
      <nav aria-label="Nav" class="flex gap-3 items-center">
        <VMenus label="Home" :items="items" />
        <VMenus label="About" :items="items" />
        <VMenus label="Profile" :items="items" />
      </nav>
    </VAppBar>
    <VAppBar shadow>
      <span class="font-semibold mr-4">Small</span>
      <nav aria-label="Nav" class="flex gap-3 items-center">
        <VMenus label="Home" :items="items" small />
        <VMenus label="About" :items="items" small />
        <VMenus label="Profile" :items="items" small />
      </nav>
    </VAppBar>
    <VAppBar shadow class="flex justify-between">
      <span class="font-semibold mr-4">Right</span>
      <nav aria-label="Nav" class="flex gap-3 items-center">
        <VMenus label="Home" :items="items" right />
        <VMenus label="About" :items="items" right />
        <VMenus label="Profile" :items="items" right />
      </nav>
    </VAppBar>
  </div>
</template>
```

<LivePreview src="components-menus--in-app-bar" />

### Slots

```vue
<template>
  <VMenus label="Account">
    <template #items>
      <VMenusItem prepend-icon="ri:user-line">Profile</VMenusItem>
      <VMenusItem prepend-icon="ri:settings-4-line"> Preferences </VMenusItem>
      <VMenusItem divider />
      <VMenusItem prepend-icon="ri:logout-box-line">Logout</VMenusItem>
    </template>
  </VMenus>
</template>
```

<LivePreview src="components-menus--slots" />

## Props

| Name                        | Type                                                                                                | Default          |
| --------------------------- | --------------------------------------------------------------------------------------------------- | ---------------- |
| [`items`](#items)           | [`VMenuItem[]`](#VMenuItem)                                                                                       | `[]`             |
| [`right`](#right)           | `Boolean`                                                                                           | `false`          |
| [`small`](#small)           | `Boolean`                                                                                           | `false`          |
| ~~rightIcon~~   | `Boolean`                                                                                           | `false`          |
| [`btnClass`](#btnClass)     | `String`                                                                                            | `''`             |
| [`btnIcon`](#btnIcon)     | `String`                                                                                            | `'ri:arrow-down-s-line'`             |
| [`btnIconClass`](#btnClass) | `String`                                                                                            | `''`             |
| [`placement`](#placement)   | `String`. See [available options](https://floating-vue.starpad.dev/guide/component.html#placements) | `'bottom-start'` |
| [`label`](#label)           | `String`                                                                                            | `'Menu'`         |

- [`VMenuItem`](#VMenuItem)

```ts
export interface VMenuItem {
  icon?: string;
  text: string;
  to?: string;
  onClick?: () => void;
}
```

::: info
- ❌ = deprecated
- ~~propName~~ = deprecated
:::

## Methods

None

## Events

None

## Slots

- [`default`](#default): used as menu activator.

```vue
<template>
  <VMenus>
    <button>Account</button>
    <template #items>
      <VMenusItem prepend-icon="ri:user-line">Profile</VMenusItem>
      <VMenusItem prepend-icon="ri:settings-4-line"> Preferences </VMenusItem>
      <VMenusItem divider />
      <VMenusItem prepend-icon="ri:logout-box-line">Logout</VMenusItem>
    </template>
  </VMenus>
</template>
```

- [`items`](#items): used to place menu items.

```vue
<template>
  <VMenus label="Account">
    <template #items>
      <VMenusItem prepend-icon="ri:user-line">Profile</VMenusItem>
      <VMenusItem prepend-icon="ri:settings-4-line"> Preferences </VMenusItem>
      <VMenusItem divider />
      <VMenusItem prepend-icon="ri:logout-box-line">Logout</VMenusItem>
    </template>
  </VMenus>
</template>
```

## CSS Variables

| Variable                                                    | Default Value                |
| ----------------------------------------------------------- | ---------------------------- |
| [`--v-menus-items-margin-y`](#--v-menus-items-margin-y)     | `theme('margin.1')`          |
| [`--v-menus-items-margin-x`](#--v-menus-items-margin-x)     | `theme('margin.1')`          |
| [`--v-menus-items-width` ](#--v-menus-items-width)          | t`heme('width.56')`          |
| [`--v-menus-item-padding-y`](#--v-menus-item-padding-y)     | `theme('spacing.2')`         |
| [`--v-menus-item-padding-x`](#--v-menus-item-padding-x)     | `theme('spacing.3')`         |
| [`--v-menus-item-bg-color`](#--v-menus-item-bg-color)       | `theme('colors.white')`      |
| [`--v-menus-item-text-color`](#--v-menus-item-text-color)   | `theme('colors.gray.800')`   |
| [`--v-menus-item-font-size`](#--v-menus-item-font-size)     | `theme('fontSize.base')`     |
| [`--v-menus-item-font-weight`](#--v-menus-item-font-weight) | `theme('fontWeight.normal')` |

## Manual Installation

You can also install the `Menus` component individually via `@gits-id/menus` package:

```bash
# with npm
npm install @gits-id/menus
# or with yarn
yarn add @gits-id/menus
# or with pnpm
pnpm add @gits-id/menus
```

```vue
<script setup lang="ts">
import VMenus from '@gits-id/menus';
</script>

<template>
  <VMenus />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-menus--default).
