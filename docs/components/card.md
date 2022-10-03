# Card

## Usage

### Basic Usage

```vue
<template>
  <!-- VCard is registered globally -->
  <VCard> Hello World </VCard>
</template>
```

::: info
The `VCard` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### With Title

```vue
<template>
  <VCard title="Header"> Hello World </VCard>
</template>
```

### Header and Footer

```vue {2,4-6}
<template>
  <VCard title="Header">
    <!-- footer slot -->
    <template #footer>
      <VBtn> Action </VBtn>
    </template>
    <!-- body -->
    <p>Hello World</p>
  </VCard>
</template>
```

### Hide Header and Footer

```vue {2}
<template>
  <VCard title="Header" hide-header hide-footer>
    <!-- footer slot -->
    <template #footer>
      <VBtn> Action </VBtn>
    </template>
    <!-- body -->
    <p>Hello World</p>
  </VCard>
</template>
```

### Colors

- **prop**: `color`
- **type**: `string`
- **default**: `default`
- **required**: `false`

Use `color` to different color style to the card.

```vue
<template>
  <VCard> Hello World </VCard>
  <VCard color="primary"> Hello World </VCard>
  <VCard color="secondary"> Hello World </VCard>
  <VCard color="info"> Hello World </VCard>
  <VCard color="warning"> Hello World </VCard>
  <VCard color="success"> Hello World </VCard>
  <VCard color="error"> Hello World </VCard>
</template>
```

### Bordered

- **prop**: `bordered`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `bordered` to apply border to the card.

```vue{6}
<template>
  <VCard bordered> Hello World </VCard>
</template>
```

### Shadow

- **prop**: `shadow`
- **type**: `boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'`
- **default**: `none`
- **required**: `false`

Use `shadow` to apply shadow style to the card.

```vue
<script setup lang="ts">
import {ref} from 'vue';
</script>

<template>
  <VCard shadow> Hello World </VCard>
  <VCard shadow="sm"> Hello World </VCard>
  <VCard shadow="md"> Hello World </VCard>
  <VCard shadow="lg"> Hello World </VCard>
  <VCard shadow="xl"> Hello World </VCard>
  <VCard shadow="2xl"> Hello World </VCard>
  <VCard shadow="inner"> Hello World </VCard>
  <VCard shadow="none"> Hello World </VCard>
</template>
```

## Props

| Name                                            | Type                                                           | Default       |
| ----------------------------------------------- | -------------------------------------------------------------- | ------------- |
| [color](#color)                                 | `string` , [available colors](/guide/theme#colors)             | `default`     |
| [shadow](#shadow)                               | `boolean`, `string`, [available shadows](/guide/theme#shadows) | `true`        |
| [flat](#flat)                                   | `boolean`                                                      | `false`       |
| [bordered](#bordered)                           | `boolean`                                                      | `false`       |
| [title](#title)                                 | `string`                                                       | `false`       |
| [flat](#flat)                                   | `boolean`                                                      | `false`       |
| [hide-header](#hide-header)                     | `boolean`                                                      | `false`       |
| [hide-footer](#hide-footer)                     | `boolean`                                                      | `false`       |
| [to](#to)                                       | `string`, `RouteLocation`                                      | ` `           |
| [default-wrapper-class](#default-wrapper-class) | `string`                                                       | ` `           |
| [default-header-class](#default-header-class)   | `string`                                                       | `card-header` |
| [default-body-class](#default-body-class)       | `string`                                                       | `card-body`   |
| [default-footer-class](#default-footer-class)   | `string`                                                       | `card-footer` |
| [wrapper-class](#wrapper-class)                 | `string`                                                       | ` `           |
| [header-class](#header-class)                   | `string`                                                       | ` `           |
| [footer-class](#footer-class)                   | `string`                                                       | ` `           |
| [body-class](#body-class)                       | `string`                                                       | ` `           |

## Methods

None

## Events

None

## Slots

| Name                              | Props | Description                              |
| --------------------------------- | ----- | ---------------------------------------- |
| [default](#default)               | None  | The default Vue slot                     |
| [header](#header)                 | None  | The card header                          |
| [header.append](#header.append)   | None  | Slot to append before the actual header  |
| [header.prepend](#header.prepend) | None  | Slot to prepend before the actual header |
| [footer](#default)                | None  | The card footer                          |

## CSS Variables

| Variable                                        | Default Value                   |
| ----------------------------------------------- | ------------------------------- |
| [`--card-padding-x` ](#--card-padding-x)        | `theme('padding.4')`            |
| [`--card-padding-y` ](#--card-padding-y)        | `theme('padding.3')`            |
| [`--card-bg-color` ](#--card-bg-color)          | `theme('colors.white')`         |
| [`--card-color` ](#--card-color)                | `theme('colors.gray.800')`      |
| [`--card-border-style`](#--card-border-style)   | `solid`                         |
| [`--card-border-width`](#--card-border-width)   | `theme('borderWidth.DEFAULT')`  |
| [`--card-border-color`](#--card-border-color)   | `theme('borderColor.DEFAULT')`  |
| [`--card-border-radius`](#--card-border-radius) | `theme('borderRadius.DEFAULT')` |

## Customization

With the power of CSS Variables and Tailwind's `theme` function, you can create your custom card.

```vue{2,7-8}
<template>
  <VCard color="indigo"> Indigo Colored Card </VCard>
</template>

<style>
.card-indigo {
  --card-bg-color: theme('colors.indigo.500');
  --card-color: theme('colors.white');
}
</style>
```

## Manual Installation

You can also install the `Card` component individually via `@gits-id/card` package:

```bash
yarn install @gits-id/card
```

```vue
<script setup lang="ts">
import VCard from '@gits-id/card';
</script>

<template>
  <VCard> Hello World </VCard>
</template>
```

## Tailwind Plugin

This package comes with custom tailwind plugin for styling. If you are installing this package separately from `@gits-id/ui` package, you need to include the plugin in `plugins` section in your Tailwind config file.

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  presets: [require('@gits-id/card/plugin')],
};
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-card--default).
