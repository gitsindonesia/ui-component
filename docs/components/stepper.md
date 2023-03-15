---
outline: deep
---

# Stepper

The `VStepper` component allows you to create a stepper that guides users through a series of steps or stages. It can be used to display the progress of a task, or to navigate through different pages or sections.

## Usage

### Basic Usage

To use the `VStepper` component, you need to register it globally by installing `@morpheme/ui`. Then, you can include it in your template like this:

<LivePreview src="components-stepper--default" height="250" >

```vue
<template>
  <!-- VStepper is registered globally -->
  <VStepper :items="items"></VStepper>
</template>
```

</LivePreview>

The `items` prop should be an array of objects, each representing a step in the stepper. Each step object should have at least a `title` property. You can also include a `subtitle` and a `path` property if needed.

::: info
The `VStepper` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Linear

- **prop**: `linear`
- **type**: `boolean`
- **default**: `default`
- **required**: `false`

Use `linear` to set the stepper's active state as continuous, meaning to get to next step, previous step must be passed.
When it is set to `true` previous will also be set as `active`.
When it is set to `false`, only current step will be set as `active`.

<LivePreview src="components-stepper--linear" >

```vue
<template>
  <VStepper />
  <VStepper :linear="true" />
</template>
```

</LivePreview>

### Disable Route Active

- **prop**: `disableRouteActive`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

By default, this component check active route to determine `active` state.
Set `disableRouteActive` to `true` to base stepper active state by `modelValue` instead of active route.

<LivePreview src="components-stepper--disable-route-active" height="200">

```vue
<template>
  <VStepper disable-route-active />
</template>
```

</LivePreview>

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

<LivePreview src="components-stepper--clickable" height="600">

```vue
<template>
  <VStepper clickable />
</template>
```

</LivePreview>

### Vertical

- **prop**: `vertical`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

Use `vertical` to render the stepper in vertical mode.

<LivePreview src="components-stepper--vertical" >

```vue
<template>
  <VStepper vertical />
</template>
```

</LivePreview>

### `v-model`

- **prop**: `modelValue`
- **type**: `boolean`
- **default**: `true`
- **required**: `false`

Use `v-model` to set current step.

<LivePreview src="components-stepper--v-model" height="250" >

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

</LivePreview>

## Props

| Name                                        | Type      | Default |
| ------------------------------------------- | --------- | ------- |
| [modelValue](#name)                         | `number`  | `0`     |
| [items](#items)                             | `array`   | `[]`    |
| [disableRouteActive](#disable-route-active) | `voolean` | `false` |
| [linkable](#linkable)                       | `boolean` | `false` |
| [vertical](#vertical)                       | `boolean` | `false` |
| [linear](#linear)                           | `boolean` | `false` |

## Events

| Name                                   | Payload            | Description                                                                                      |
| -------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------ |
| [update:modelValue](#updateModelValue) | `(value: boolean)` | Fired when step value changed                                                                    |
| click                                  | `({item, index})`  | Fired when step item is clicked. _Only available when [`clickable`](#clickable) prop is enabled_ |

## Manual Installation

You can also install the `Stepper` component individually via `@morpheme/stepper` package:

```bash
npm i @morpheme/stepper
```

```vue
<script setup lang="ts">
import VStepper from '@morpheme/stepper';
</script>

<template>
  <VStepper />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-stepper--default).
