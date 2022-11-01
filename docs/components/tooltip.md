# Tooltip

## Usage

### Basic Usage

```vue
<template>
  <!-- VTooltip is registered globally -->
  <VTooltip placement="top">
    <template #activator="{on}">
      <v-btn v-on="on">
        {{ place }}
      </v-btn>
    </template>
    <span>Hello :)</span>
  </VTooltip>
</template>
```

<LivePreview src="components-tooltip--tooltip" />

::: info
The `VTooltip` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

## Props

| Name                                | Type     | Default                                                                                  |
| ----------------------------------- | -------- | ---------------------------------------------------------------------------------------- |
| [`placement`](#placement)           | `string` | `'top'`                                                                                  |
| [`options`](#options)               | `object` | `{}`                                                                                     |
| [`activatorClass`](#activatorClass) | `string` | `''`                                                                                     |
| [`tooltipClass`](#tooltipClass)     | `string` | `'inline-block shadow px-3 py-2 rounded bg-[#000] text-white p-2 rounded max-w-[300px]'` |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Tooltip` component individually via `@gits-id/tooltip` package:

```bash
yarn install @gits-id/tooltip
```

```vue
<script setup lang="ts">
import VTooltip from '@gits-id/tooltip';
</script>

<template>
  <VTooltip placement="top">
    <template #activator="{on}">
      <v-btn v-on="on">
        {{ place }}
      </v-btn>
    </template>
    <span>Hello :)</span>
  </VTooltip>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-tooltip--default).
