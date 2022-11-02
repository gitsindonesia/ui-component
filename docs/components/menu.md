# Menu

## Usage

### Basic Usage

```vue
<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'ri:home-2-line',
  children: [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'About',
      to: '/about',
    },
  ],
};
</script>

<template>
  <VMenu :menu="item" />
</template>
```

<LivePreview src="components-menu--default" />

### Small

```vue
<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'ri:home-2-line',
  children: [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'About',
      to: '/about',
    },
  ],
};
</script>

<template>
  <VMenu :menu="item" small />
</template>
```

<LivePreview src="components-menu--small" />

### Mini

```vue
<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'ri:home-2-line',
  children: [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'About',
      to: '/about',
    },
  ],
};
</script>

<template>
  <VMenu :menu="item" mini />
</template>
```

<LivePreview src="components-menu--mini" />

### Custom Active Class

```vue
<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'ri:home-2-line',
  children: [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'About',
      to: '/about',
    },
  ],
};
</script>

<template>
  <VMenu :menu="item" active-class="bg-blue-600 text-white" />
</template>
```

<LivePreview src="components-menu--custom-active-class" />

### Icons

```vue
<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'mdi-light:home',
};
</script>

<template>
  <VMenu :menu="item" />
</template>
```

<LivePreview src="components-menu--icons" />

::: info
The `VMenu` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

## Props

| Name                                  | Type                       | Default                          |
| ------------------------------------- | -------------------------- | -------------------------------- |
| [`menu`](#menu)                       | `Object as PropType<Menu>` | `null`                           |
| [`mini`](#mini)                       | `Boolean`                  | `false`                          |
| [`expandHover`](#expandHover)         | `Boolean`                  | `false`                          |
| [`dark`](#dark)                       | `Boolean`                  | `false`                          |
| [`color`](#color)                     | `String`                   | `''`                             |
| [`bgColor`](#bgColor)                 | `String`                   | `''`                             |
| [`darkColor`](#darkColor)             | `String`                   | `''`                             |
| [`darkBgColor`](#darkBgColor)         | `String`                   | `''`                             |
| [`classMenuParent`](#classMenuParent) | `String`                   | `'text-primary-500 bg-gray-700'` |
| [`small`](#small)                     | `Boolean`                  | `false`                          |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Menu` component individually via `@gits-id/menu` package:

```bash
yarn install @gits-id/menu
```

```vue
<script setup lang="ts">
import VMenu from '@gits-id/menu';
</script>

<template>
  <VMenu :menu="{text: 'Hello World'}" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-menu--default).
