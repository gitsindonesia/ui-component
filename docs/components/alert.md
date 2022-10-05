<script setup lang="ts">
import {VAlert} from '@gits-id/ui';
</script>

# Alert

## Usage

### Basic Usage

```vue
<template>
  <!-- VAlert is registered globally -->
  <VAlert> Alert text </VAlert>
</template>
```

<DocsCanvas>
  <VAlert> Alert text </VAlert>
</DocsCanvas>

::: info
The `VAlert` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Colors

- **prop**: `color`
- **type**: `string`
- **default**: `default`
- **required**: `false`

Use `color` to different color style to the alert.

```vue
<template>
  <VAlert> Alert text </VAlert>
  <VAlert color="primary"> Alert text </VAlert>
  <VAlert color="secondary"> Alert text </VAlert>
  <VAlert color="info"> Alert text </VAlert>
  <VAlert color="warning"> Alert text </VAlert>
  <VAlert color="success"> Alert text </VAlert>
  <VAlert color="error"> Alert text </VAlert>
  <VAlert color="dark"> Alert text </VAlert>
</template>
```

<DocsCanvas>
  <AlertsColors />
</DocsCanvas>

### Solid

- **prop**: `solid`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `solid` to apply solid style to the alert.

```vue
<template>
  <VAlert solid> default </VAlert>
  <VAlert solid color="primary"> primary </VAlert>
  <VAlert solid color="secondary"> secondary </VAlert>
  <VAlert solid color="info"> info </VAlert>
  <VAlert solid color="warning"> warning </VAlert>
  <VAlert solid color="success"> success </VAlert>
  <VAlert solid color="error"> error </VAlert>
  <VAlert solid color="dark"> dark </VAlert>
</template>
```

<DocsCanvas>
  <AlertsSolid />
</DocsCanvas>

### Outlined

- **prop**: `outlined`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `outlined` to apply outlined style to the alert.

```vue
<template>
  <VAlert outlined> default </VAlert>
  <VAlert outlined color="primary"> primary </VAlert>
  <VAlert outlined color="secondary"> secondary </VAlert>
  <VAlert outlined color="info"> info </VAlert>
  <VAlert outlined color="warning"> warning </VAlert>
  <VAlert outlined color="success"> success </VAlert>
  <VAlert outlined color="error"> error </VAlert>
  <VAlert outlined color="dark"> dark </VAlert>
</template>
```

<DocsCanvas>
  <AlertsOutlined />
</DocsCanvas>

### Bordered

- **prop**: `border`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `border` to apply bordered style to the alert.

```vue
<template>
  <VAlert bordered> default </VAlert>
  <VAlert bordered color="primary"> primary </VAlert>
  <VAlert bordered color="secondary"> secondary </VAlert>
  <VAlert bordered color="info"> info </VAlert>
  <VAlert bordered color="warning"> warning </VAlert>
  <VAlert bordered color="success"> success </VAlert>
  <VAlert bordered color="error"> error </VAlert>
  <VAlert bordered color="dark"> dark </VAlert>
</template>
```

<DocsCanvas>
  <AlertsBordered />
</DocsCanvas>

### `v-model`

- **prop**: `modelValue`
- **type**: `boolean`
- **default**: `true`
- **required**: `false`

Use `v-model` to show or hide the alert.

<DocsCanvas>
  <AlertsVModel />
</DocsCanvas>

```vue{10}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert v-model="isOpen"> Alert text </VAlert>
</template>
```

### Dismissable

- **prop**: `dismissable`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `dismissable` to make alert dismissable.

```vue{10}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert v-model="isOpen" dismissable> Alert text </VAlert>
</template>
```

<DocsCanvas>
  <AlertsDismissable />
</DocsCanvas>

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
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert v-model="isOpen" transition="slide-up"> Alert text </VAlert>
</template>
```

<DocsCanvas>
  <AlertsTransition />
</DocsCanvas>

## Props

| Name                        | Type                                               | Default   |
| --------------------------- | -------------------------------------------------- | --------- |
| [modelValue](#name)         | `boolean`                                          | `true`    |
| [color](#color)             | `string` , [available colors](/guide/theme#colors) | `default` |
| [icon](#icon)               | `string`                                           | ` `       |
| [dismissable](#dismissable) | `boolean`                                          | `false`   |
| [outlined](#outlined)       | `boolean`                                          | `false`   |
| [solid](#solid)             | `boolean`                                          | `false`   |
| [border](#border)           | `boolean`                                          | `false`   |
| [transition](#transition)   | `string`                                           | `fade`    |
| [iconClass](#iconClass)     | `string`                                           | ` `       |

## Methods

None

## Events

| Name                                   | Payload            | Description                         |
| -------------------------------------- | ------------------ | ----------------------------------- |
| [update:modelValue](#updateModelValue) | `(value: boolean)` | Fired internal `open` state changed |
| [dismissed](#dismissed)                | None               | Fired when alert is hidden          |

## Slots

| Name                  | Props                   | Description             |
| --------------------- | ----------------------- | ----------------------- |
| [default](#default)   | None                    | The default Vue slot    |
| [icon](#icon)         | None                    | Prepend icon slot       |
| [x-button](#x-button) | `(dismiss: () => void)` | Dismissable button slot |

## CSS Variables

| Variable                                          | Default Value                  |
| ------------------------------------------------- | ------------------------------ |
| [`--alert-bg-color`](#--alert-bg-color)           | `theme('colors.white')`        |
| [`--alert-text-color`](#--alert-text-color)       | `theme('colors.gray.800')`     |
| [`--alert-border-radius`](#--alert-border-radius) | `theme('borderRadius.md')`     |
| [`--alert-border-color`](#--alert-border-color)   | `theme('colors.gray.500')`     |
| [`--alert-border-width`](#--alert-border-width)   | `theme('borderWidth.DEFAULT')` |
| [`--alert-padding-x`](#--alert-padding-x)         | `theme('padding.4')`           |
| [`--alert-padding-y`](#--alert-padding-y)         | `theme('padding.3')`           |

## Customization

With the power of CSS Variables and Tailwind's `theme` function, you can create your custom alert.

```vue{8,13-19}
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(true);
</script>

<template>
  <VAlert v-model="isOpen" color="indigo"> Alert text </VAlert>
</template>

<style>
.alert--indigo {
  --alert-bg-color: theme('colors.indigo.600');
  --alert-text-color: theme('colors.white');
  --alert-border-radius: theme('borderRadius.lg');
  --alert-border-color: theme('colors.indigo.600');
  --alert-border-width: theme('borderWidth.2');
  --alert-padding-x: theme('padding.6');
  --alert-padding-y: theme('padding.4');
}
</style>
```

## Manual Installation

You can also install the `Alert` component individually via `@gits-id/alert` package:

```bash
yarn install @gits-id/alert
```

```vue
<script setup lang="ts">
import VAlert from '@gits-id/alert';
</script>

<template>
  <VAlert> Alert text </VAlert>
</template>
```

## Tailwind Plugin

This package comes with custom tailwind plugin for styling. If you are installing this package separately from `@gits-id/ui` package, you need to include the plugin in `plugins` section in your Tailwind config file.

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  presets: [require('@gits-id/alert/plugin')],
};
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-alert--default).
