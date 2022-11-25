# Toast

## Usage

### Basic Usage

```vue
<template>
  <!-- VToast is registered globally -->
  <VBtn @click="openToast">
    Open Toast
  </VBtn>
  <VToast v-model="isOpen" message="Lorem ipsum" title="Notification">
</template>
```

<LivePreview src="components-toast--default" />

::: info
The `VToast` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Title

```vue
<template>
  <VBtn @click="openToast">
    Open Toast
  </VBtn>
  <VToast v-model="isOpen" message="Lorem ipsum" title="Notification">
</template>
```

<LivePreview src="components-toast--title" />

### Icon

```vue
<template>
  <VBtn @click="openToast">
    Open Toast
  </VBtn>
  <VToast v-model="isOpen" message="Lorem ipsum" title="Notification" type="success">
</template>
```

<LivePreview src="components-toast--icon" />

### Actions

```vue
<template>
  <VBtn @click="openToast">
    Open Toast
  </VBtn>
  <VToast v-model="isOpen" message="Lorem ipsum" title="Notification" actions confirm>
</template>
```

<LivePreview src="components-toast--actions" />

### Custom

```vue
<template>
  <VBtn @click="openToast">
    Open Toast
  </VBtn>
  <VToast 
    v-model="isOpen"
    message="Lorem ipsum"
    title="Confirmation"
    type="question"
    actions
    confirm
    confirm-color="error"
    confirm-text="Delete"
    close-text="Cancel"
    placement="center"
    hide-x-icon
    overlay
    @confirm="(e: any) => {
      alert("Confirmed!");
      e.close();
    }"
  />
</template>
```

<LivePreview src="components-toast--custom" />

## Props

| Name                            | Type      | Default     |
| ------------------------------- | --------- | ----------- |
| [`modelValue`](#modelValue)     | `boolean` | `'false'`   |
| [`title`](#title)               | `string`  | `''`        |
| [`color`](#color)               | `string`  | `'white'`   |
| [`confirmColor`](#confirmColor) | `string`  | `'primary'` |
| [`confirmProps`](#confirmProps) | `object`  | `{}`        |
| [`confirmText`](#confirmText)   | `string`  | `'Confirm'` |
| [`closeText`](#closeText)       | `string`  | `'Close'`   |
| [`closeProps`](#closeProps)     | `object`  | `{}`        |
| [`headerClass`](#headerClass)   | `string`  | `''`        |
| [`bodyClass`](#bodyClass)       | `string`  | `''`        |
| [`actionsClass`](#actionsClass) | `string`  | `''`        |
| [`placement`](#placement)       | `string`  | `''`        |
| [`timeout`](#timeout)           | `mumber`  | `0`         |
| [`type`](#type)                 | `string`  | `''`        |
| [`hideXIcon`](#hideXIcon)       | `boolean` | `'false'`   |
| [`overlay`](#overlay)           | `boolean` | `false''`   |
| [`loading`](#loading)           | `boolean` | `'false'`   |
| [`presistent`](#presistent)     | `boolean` | `'false'`   |

## Methods

None

## Events

| Name                                     | Type      | Default |
| ---------------------------------------- | --------- | ------- |
| [`confirm`](#confirm)                    | `unknown` | `-`     |
| [`update:modelValue`](#updateModelValue) | `unknown` | `-`     |
| [`open`](#open)                          | `unknown` | `-`     |
| [`close`](#close)                        | `unknown` | `-`     |

## Slots

| Name                            | Type      | Default |
| ------------------------------- | --------- | ------- |
| [`actions`](#actions)           | `unknown` | `-`     |
| [`activator`](#activator)       | `unknown` | `-`     |
| [`media`](#media)               | `unknown` | `-`     |
| [`header`](#header)             | `unknown` | `-`     |
| [`default`](#default)           | `unknown` | `-`     |
| [`rightActions`](#rightActions) | `unknown` | `-`     |

## CSS Variables

None

## Manual Installation

You can also install the `Toast` component individually via `@gits-id/toast` package:

```bash
yarn install @gits-id/toast
```

```vue
<script setup lang="ts">
import VToast from '@gits-id/toast';
</script>

<template>
  <VBtn @click="openToast">
    Open Toast
  </VBtn>
  <VToast v-model="isOpen" message="Lorem ipsum">
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-toast--default).
