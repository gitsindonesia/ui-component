# Badge

## Usage

### Basic Usage

```vue
<template>
  <!-- VBadge is registered globally -->
  <VBadge> Hello World </VBadge>
</template>
```

::: info
The `VBadge` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Colors

- **prop**: `color`
- **type**: `string`
- **default**: `default`
- **required**: `false`

Use `color` to different color style to the badge.

```vue
<template>
  <VBadge> Hello World </VBadge>
  <VBadge color="primary"> Hello World </VBadge>
  <VBadge color="secondary"> Hello World </VBadge>
  <VBadge color="info"> Hello World </VBadge>
  <VBadge color="warning"> Hello World </VBadge>
  <VBadge color="success"> Hello World </VBadge>
  <VBadge color="error"> Hello World </VBadge>
</template>
```

<LivePreview src="components-badge--variants" height="70" />

### Outlined

- **prop**: `outlined`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `outlined` to apply bordered style to the badge.

```vue{2}
<template>
  <VBadge outlined> Hello World </VBadge>
</template>
```

<LivePreview src="components-badge--outlined" height="70" />

### Rounded

- **prop**: `rounded`
- **type**: `boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none'`
- **default**: `none`
- **required**: `false`

Use `rounded` to apply rounded style to the badge.

```vue
<script setup lang="ts">
import {ref} from 'vue';
</script>

<template>
  <VBadge rounded> Hello World </VBadge>
  <VBadge rounded="sm"> Hello World </VBadge>
  <VBadge rounded="md"> Hello World </VBadge>
  <VBadge rounded="lg"> Hello World </VBadge>
  <VBadge rounded="xl"> Hello World </VBadge>
  <VBadge rounded="2xl"> Hello World </VBadge>
  <VBadge rounded="3xl"> Hello World </VBadge>
  <VBadge rounded="none"> Hello World </VBadge>
</template>
```

<LivePreview src="components-badge--rounded" height="70" />

### Sizes

- **prop**: `small` or `large`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `small` or `large` to change badge size.

```vue
<template>
  <VBadge small> small </VBadge>
  <VBadge> default </VBadge>
  <VBadge large> large </VBadge>
</template>
```

<LivePreview src="components-badge--sizes" height="70" />

### Dismissable

- **prop**: `dismissable`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `dismissable` to show X button in badge.

```vue
<template>
  <VBadge dismissable> Badge </VBadge>
</template>
```

<LivePreview src="components-badge--dismissable" height="70" />

## Props

| Name                        | Type                                                           | Default         |
| --------------------------- | -------------------------------------------------------------- | --------------- |
| [color](#color)             | `string` , [available colors](/guide/theme#colors)             | `default`       |
| [rounded](#rounded)         | `boolean`, `string`, [available rounded](/guide/theme#rounded) | `true`          |
| [small](#small)             | `boolean`                                                      | `false`         |
| [large](#large)             | `boolean`                                                      | `false`         |
| [dismissable](#dismissable) | `boolean`                                                      | `false`         |
| [outlined](#outlined)       | `boolean`                                                      | `false`         |
| [closeIcon](#closeIcon)     | `string`                                                       | `ri:close-line` |

## Methods

None

## Events

### `dismiss`

Fired when dismissable button clicked.

```vue
<script setup lang="ts">
const onDismiss = () => alert('Dismiss!');
</script>

<template>
  <VBadge @dismiss="onDismiss"> Badge </VBadge>
</template>
```

## Slots

| Name                        | Props                   | Description                 |
| --------------------------- | ----------------------- | --------------------------- |
| [default](#default)         | None                    | The default Vue slot        |
| [dismissable](#dismissable) | `{dismiss: () => void}` | Slot for dismissable button |

## CSS Variables

| Variable                                          | Default Value                      |
| ------------------------------------------------- | ---------------------------------- |
| [`--badge-bg-color`](#--badge-bg-color)           | `theme('colors.gray.100')`         |
| [`--badge-color`](#--badge-color)                 | `theme('colors.gray.800')`         |
| [`--badge-border-style`](#--badge-border-style)   | `solid`                            |
| [`--badge-border-width`](#--badge-border-width)   | `theme('borderWidth.DEFAULT')`     |
| [`--badge-border-color`](#--badge-border-color)   | `theme('borderColor.transparent')` |
| [`--badge-border-radius`](#--badge-border-radius) | `theme('borderRadius.DEFAULT')`    |
| [`--badge-padding-x`](#--badge-padding-x)         | `theme('padding.2')`               |
| [`--badge-padding-y`](#--badge-padding-y)         | `theme('padding.1')`               |
| [`--badge-font-size`](#--badge-font-size)         | `theme('fontSize.xs')`             |
| [`--badge-font-weight`](#--badge-font-weight)     | `theme('fontWeight.semibold')`     |
| [`--badge-icon-size`](#--badge-icon-size)         | `theme('width.4')`                 |

## Customization

With the power of CSS Variables and Tailwind's `theme` function, you can create your custom badge.

```vue{2,7-8}
<template>
  <VBadge color="indigo"> Indigo Colored Badge </VBadge>
</template>

<style>
.badge-indigo {
  --badge-bg-color: theme('colors.indigo.500');
  --badge-color: theme('colors.white');
}
</style>
```

## Manual Installation

You can also install the `Badge` component individually via `@gits-id/badge` package:

```bash
yarn install @gits-id/badge
```

```vue
<script setup lang="ts">
import VBadge from '@gits-id/badge';
</script>

<template>
  <VBadge> Hello World </VBadge>
</template>
```

## Tailwind Plugin

This package comes with custom tailwind plugin for styling. If you are installing this package separately from `@gits-id/ui` package, you need to include the plugin in `plugins` section in your Tailwind config file.

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  plugins: [require('@gits-id/tailwind-components/badge')],
};
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-badge--variants).
