# Alert

The `VAlert` component is a flexible alert component that can be used to display various types of messages to the user. It is registered globally when you install` @gits-id/ui`, so you don't need to import it manually.

## Usage

### Basic Usage

To use the `VAlert` component, you can simply include it in your template like this:

```vue
<template>
  <!-- VAlert is registered globally -->
  <VAlert> Alert text </VAlert>
</template>
```

<LivePreview src="components-alert--default" />

### Colors

- **prop**: `color`
- **type**: `string`
- **default**: `default`
- **required**: `false`

You can use the color prop to specify the color style of the alert. The following colors are available:

- `default`
- `primary`
- `secondary`
- `info`
- `warning`
- `success`
- `error`
- `dark`
  
Here's an example of how to use different colors:

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

<LivePreview src="components-alert--default" />

### Solid Style

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

<LivePreview src="components-alert--solid" />

### Outlined Style

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

<LivePreview src="components-alert--outlined" />

### Bordered Style

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

<LivePreview src="components-alert--bordered" />

### `v-model`

- **prop**: `modelValue`
- **type**: `boolean`
- **default**: `true`
- **required**: `false`

You can use the `v-model` directive to bind the alert to a data model. The `modelValue` prop is used to represent the model value, and it is a boolean that defaults to `true`.

```vue{10}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert v-model="isOpen" color="primary" class="mt-4" solid dismissable>
    Alert text
  </VAlert>
</template>
```

<LivePreview src="components-alert--v-model" />

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

<LivePreview src="components-alert--dismissable" />

### Transition

- **prop**: `transition`
- **type**: `string`
- **default**: `fade`
- **required**: `false`

Use `transition` prop change the default transition.

```vue{5,17}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';
// import transition styles
import '@gits-id/ui/src/assets/transition.css';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VAlert
    v-model="isOpen"
    color="primary"
    class="mt-4"
    solid
    transition="slide-down"
  >
    Alert text
  </VAlert>
</template>
```

<LivePreview src="components-alert--transition" />

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

## Events

| Name                                   | Payload            | Description                                                                             |
| -------------------------------------- | ------------------ | --------------------------------------------------------------------------------------- |
| [update:modelValue](#updateModelValue) | `(value: boolean)` | Emitted when the modelValue prop changes. Receives a value argument with the new value. |
| [dismissed](#dismissed)                | None               | Emitted when the alert is dismissed by the user.                                        |

To listen for the `emit` event in a parent component or another component, you can use the `@` symbol followed by the event name. For example:

```vue
<script setup>
function handleModelValueUpdate(value) {
  // do something with the value passed from the child component
}

function handleDismissed() {
  // do something when the dismissed event is triggered
}
</script>

<template>
  <VAlert
    @update:modelValue="handleModelValueUpdate"
    @dismissed="handleDismissed"
  >
    Alert message
  </VAlert>
</template>
```

## Slots

### `default`

A slot for placing the alert content/message.

### `icon`

A slot for customizing the icon. Receives an icon prop with the name of the current icon.

### `x-button`

A slot for customizing the dismiss button. Receives a dismiss prop with a function that dismisses the alert.

### `x-icon`

A slot for customizing the icon in the dismiss button.

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
.alert-indigo {
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

<LivePreview src="components-alert--custom" />

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
  plugins: [require('@gits-id/tailwind-components/alert')],
};
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-alert--default).
