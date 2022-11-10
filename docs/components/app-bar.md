# AppBar

Application Bar / Navigation Bar.

## Usage

### Basic Usage

```vue
<template>
  <!-- VAppBar is registered globally -->
  <VAppBar> Hello World </VAppBar>
</template>
```

<LivePreview src="components-appbar--default" />

::: info
The `VAppBar` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Colors

- **prop**: `color`
- **type**: `string`
- **default**: `default`
- **required**: `false`

Use `color` to different color style to the app-bar.

```vue
<template>
  <VAppBar> Hello World </VAppBar>
  <VAppBar color="primary"> Hello World </VAppBar>
  <VAppBar color="secondary"> Hello World </VAppBar>
  <VAppBar color="info"> Hello World </VAppBar>
  <VAppBar color="warning"> Hello World </VAppBar>
  <VAppBar color="success"> Hello World </VAppBar>
  <VAppBar color="error"> Hello World </VAppBar>
</template>
```

<LivePreview src="components-appbar--colors" />

### Fixed

- **prop**: `fixed`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `fixed` to set fixed position of `AppBar` in the top of the page.

```vue
<template>
  <VAppBar fixed> Hello World </VAppBar>
</template>
```

<LivePreview src="components-appbar--fixed" />

### Sticky

- **prop**: `sticky`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `sticky` to set sticky position of `AppBar` in the top of the page.

```vue
<template>
  <VAppBar sticky> Hello World </VAppBar>
</template>
```

<LivePreview src="components-appbar--sticky" />

### Bordered

- **prop**: `bordered`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `bordered` to apply border style to the app-bar.

```vue
<template>
  <VAppBar bordered> Hello World </VAppBar>
</template>
```

<LivePreview src="components-appbar--bordered" />

### Shadow

- **prop**: `shadow`
- **type**: `boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'`
- **default**: `none`
- **required**: `false`

Use `shadow` to apply shadow style to the app-bar.

```vue
<template>
  <VAppBar shadow> Hello World </VAppBar>
  <VAppBar shadow="sm"> Hello World </VAppBar>
  <VAppBar shadow="md"> Hello World </VAppBar>
  <VAppBar shadow="lg"> Hello World </VAppBar>
  <VAppBar shadow="xl"> Hello World </VAppBar>
  <VAppBar shadow="2xl"> Hello World </VAppBar>
  <VAppBar shadow="inner"> Hello World </VAppBar>
  <VAppBar shadow="none"> Hello World </VAppBar>
</template>
```

<LivePreview src="components-appbar--shadow" />

### Sizes

- **prop**: `size`
- **type**: `sm | md | lg`
- **default**: `md`
- **required**: `false`

Use `size` to apply size to the app-bar.

```vue
<template>
  <VAppBar size="sm"> Hello World </VAppBar>
  <VAppBar size="md"> Hello World </VAppBar>
  <VAppBar size="lg"> Hello World </VAppBar>
</template>
```

<LivePreview src="components-appbar--sizes" />

### `v-model`

- **prop**: `modelValue`
- **type**: `boolean`
- **default**: `true`
- **required**: `false`

Use `v-model` to show or hide the app-bar.

```vue{5,10}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle AppBar</Button>
  <VAppBar v-model="isOpen"> Hello World </VAppBar>
</template>
```

<LivePreview src="components-appbar--toggle" />

### Transition

- **prop**: `transition`
- **type**: `string`
- **default**: `fade`
- **required**: `false`

Use `transition` prop change the default transition.

```vue{5,12}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';
// import transition styles
import '@gits-id/ui/src/assets/transition.css';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle AppBar</Button>
  <VAppBar v-model="isOpen" transition="slide-down"> Hello World </VAppBar>
</template>
```

<LivePreview src="components-appbar--custom-transition" />

## Props

| Name                      | Type                                               | Default   |
| ------------------------- | -------------------------------------------------- | --------- |
| [modelValue](#name)       | `boolean`                                          | `true`    |
| [color](#color)           | `string` , [available colors](/guide/theme#colors) | `default` |
| [size](#size)             | `string`                                           | `fade`    |
| [fixed](#fixed)           | `boolean`                                          | `false`   |
| [sticky](#sticky)         | `boolean`                                          | `false`   |
| [shadow](#shadow)         | `boolean`                                          | `false`   |
| [bordered](#bordered)     | `boolean`                                          | `false`   |
| [transition](#transition) | `string`                                           | `fade`    |

## Methods

### `toggle`

- Type: `toggle: () => void`

```vue{5,8,15}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';

const appBarRef = ref();

const toggle = () => {
  appBarRef.value?.toggle();
};
</script>

<template>
  <VAppBar ref="appBarRef"> Hello World </VAppBar>

  <Button @click="toggle">Toggle</Button>
</template>
```

## Events

| Name                                   | Payload            | Description                         |
| -------------------------------------- | ------------------ | ----------------------------------- |
| [update:modelValue](#updateModelValue) | `(value: boolean)` | Fired internal `open` state changed |

## Slots

| Name                | Props | Description          |
| ------------------- | ----- | -------------------- |
| [default](#default) | None  | The default Vue slot |

## CSS Variables

| Variable                                            | Default Value                  |
| --------------------------------------------------- | ------------------------------ |
| [`--app-bar-height`](#--app-bar-height)             | `54px`                         |
| [`--app-bar-padding-x` ](#--app-bar-padding-x)      | `theme('padding.4')`           |
| [`--app-bar-padding-y` ](#--app-bar-padding-y)      | `theme('padding.3')`           |
| [`--app-bar-bg-color` ](#--app-bar-bg-color)        | `theme('colors.white')`        |
| [`--app-bar-color` ](#--app-bar-color)              | `theme('colors.gray.800')`     |
| [`--app-bar-transition` ](#--app-bar-transition)    | `all 0.3s ease`                |
| [`--app-bar-border-style`](#--app-bar-border-style) | `solid`                        |
| [`--app-bar-border-width`](#--app-bar-border-width) | `theme('borderWidth.DEFAULT')` |
| [`--app-bar-border-color`](#--app-bar-border-color) | `theme('borderColor.DEFAULT')` |

## Customization

With the power of CSS Variables and Tailwind's `theme` function, you can create your custom app-bar.

```vue{6,11-12}
<script setup lang="ts">
import {ref} from 'vue';
</script>

<template>
  <VAppBar color="indigo"> Indigo Colored AppBar </VAppBar>
</template>

<style>
.app-bar-indigo {
  --app-bar-bg-color: theme('colors.indigo.500');
  --app-bar-color: theme('colors.white');
}
</style>
```

## Manual Installation

You can also install the `AppBar` component individually via `@gits-id/app-bar` package:

```bash
yarn install @gits-id/app-bar
```

```vue
<script setup lang="ts">
import VAppBar from '@gits-id/app-bar';
</script>

<template>
  <VAppBar> Hello World </VAppBar>
</template>
```

## Tailwind Plugin

This package comes with custom tailwind plugin for styling. If you are installing this package separately from `@gits-id/ui` package, you need to include the plugin in `plugins` section in your Tailwind config file.

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  plugins: [require('@gits-id/tailwind-components/app-bar')],
};
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-app-bar--default).
