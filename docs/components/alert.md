# Alert

## Usage

### Basic Usage

```vue
<template>
  <!-- VAlert is registered globally -->
  <VAlert> Alert text </VAlert>
  <VAlert color="primary"> Alert text </VAlert>
</template>
```

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

### `v-model`

- **prop**: `modelValue`
- **type**: `boolean`
- **default**: `true`
- **required**: `false`

Use `v-model` to show or hide the alert.

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

### Solid

- **prop**: `solid`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `solid` to apply solid style to the alert.

```vue{10}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert v-model="isOpen" solid> Alert text </VAlert>
</template>
```

### Outlined

- **prop**: `outlined`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `outlined` to apply outlined style to the alert.

```vue{10}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert v-model="isOpen" outlined> Alert text </VAlert>
</template>
```

### Bordered

- **prop**: `border`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `border` to apply bordered style to the alert.

```vue{10}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert v-model="isOpen" border> Alert text </VAlert>
</template>
```

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

### Creating your own style

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

```js
// tailwind.config.js
module.exports = {
  content: [],
  presets: [require('@gits-id/alert/plugin')],
};
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-alert--default).
