<script setup lang="ts">
import {VStepper} from '@gits-id/ui';
</script>

# Stepper

## Usage

### Basic Usage

```vue
<template>
  <!-- VStepper is registered globally -->
  <VStepper :items="items"></VStepper>
</template>
```

<LivePreview src="components-stepper--default" height="250" />

::: info
The `VStepper` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Linear

- **prop**: `linear`
- **type**: `boolean`
- **default**: `default`
- **required**: `false`

Use `linear` to set the stepper's active state as continuous, meaning to get to next step, previous step must be passed.
When it is set to `true` previous will also be set as `active`.
When it is set to `false`, only current step will be set as `active`.

```vue
<template>
  <VStepper />
  <VStepper :linear="true" />
</template>
```

<LivePreview src="components-stepper--linear" />

### Disable Route Active

- **prop**: `disableRouteActive`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

By default, this component check active route to determine `active` state. 
Set `disableRouteActive` to `true` to base stepper active state by `modelValue` instead of active route.

```vue
<template>
  <VStepper disable-route-active />
</template>
```

<LivePreview src="components-stepper--disable-route-active" height="200"/>

### Linkable

- **prop**: `linkable`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `linkable` to make the step item to be clickable as route. This works well with `disableRouteActive` set to `false`.

```vue
<template>
  <VStepper linkable />
</template>
```

### Clickable

- **prop**: `clickable`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `clickable` to allow `click` event to be emitted, allowing interaction with the step item. This is useful for when
stepper needs to be rendered inside for example, a modal, which makes `linkable` unfeasible to be used for navigation
through interaction with the step item.

```vue
<template>
  <VStepper clickable />
</template>
```

<LivePreview src="components-stepper--clickable" height="600"/>

### Vertical

- **prop**: `vertical`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `vertical` to render the stepper in vertical mode.

```vue
<template>
  <VStepper vertical />
</template>
```

<LivePreview src="components-stepper--vertical" />

### `v-model`

- **prop**: `modelValue`
- **type**: `boolean`
- **default**: `true`
- **required**: `false`

Use `v-model` to set current step.

```vue{10}
<script setup lang="ts">
import {ref} from 'vue';

const currentStep = ref(1);
const items = [
    {
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        path: '/step/1',
    },
    {
        title: 'Title 2',
        subtitle: 'Subtitle 2',
        path: '/step/2',
    },
];
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle Alert</Button>
  <VStepper :items="items" v-model="currentStep" />
</template>
```

<LivePreview src="components-stepper--v-model" height="250" />

## Props

| Name                                        | Type      | Default |
|---------------------------------------------|-----------|---------|
| [modelValue](#name)                         | `number`  | `0`     |
| [items](#items)                             | `array`   | `[]`    |
| [disableRouteActive](#disable-route-active) | `voolean` | `false` |
| [linkable](#linkable)                       | `boolean` | `false` |
| [vertical](#vertical)                       | `boolean` | `false` |
| [linear](#linear)                           | `boolean` | `false` |

## Events

| Name                                   | Payload            | Description                                                                                      |
|----------------------------------------|--------------------|--------------------------------------------------------------------------------------------------|
| [update:modelValue](#updateModelValue) | `(value: boolean)` | Fired when step value changed                                                                    |
| click                                  | `({item, index})`  | Fired when step item is clicked. *Only available when [`clickable`](#clickable) prop is enabled* |


## Manual Installation

You can also install the `Stepper` component individually via `@gits-id/stepper` package:

```bash
yarn install @gits-id/stepper
```

```vue
<script setup lang="ts">
import VStepper from '@gits-id/stepper';
</script>

<template>
  <VStepper />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-stepper--default).
