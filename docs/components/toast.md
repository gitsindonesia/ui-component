---
outline: deep
---

# Toast

The `VToast` component is a Vue component for displaying temporary, dismissible notifications. It can be used to display a message, an icon, and an optional action button.

## Usage

### Basic Usage

To use the `VToast` component, you will need to import `ref` from `vue` and create a reactive data property to control the `isOpen` state of the toast. You can then bind this property to the `v-model` directive of the `VToast` component.

<LivePreview src="components-toast--default" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen"> {{ isOpen ? 'Close' : 'Open' }} Toast </VBtn>
  <VToast v-model="isOpen"> Toast message </VToast>
</template>
```

</LivePreview>

::: info
The `VToast` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Icon

You can display an icon in the `VToast` component by setting the `icon` prop to the desired icon name.

<LivePreview src="components-toast--icon" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen"> {{ isOpen ? 'Close' : 'Open' }} Toast </VBtn>
  <VToast v-model="isOpen" icon="ri:check-line"> Toast message </VToast>
</template>
```

</LivePreview>

### Placement

You can control the placement of the `VToast` component using the placement prop. The possible values are `top`, `bottom`, `left`, and `right`.

<LivePreview src="components-toast--placement" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(true);
const placement = ref('bottom');

const changePlacement = (position: string) => {
  placement.value = position;
  isOpen.value = false;
  setTimeout(() => {
    isOpen.value = true;
  }, 200);
};
</script>

<template>
  <VBtnGroup class="mt-14">
    <VBtn
      v-for="position in placements"
      :key="position"
      @click="changePlacement(position)"
    >
      {{ position }}
    </VBtn>
  </VBtnGroup>
  <VToast v-model="isOpen" :placement="placement"> Toast message </VToast>
</template>
```

</LivePreview>

### Colors

You can set the color of the `VToast` component using the `color` prop. The possible values are the default theme colors, which are `primary`, `secondary`, `success`, `warning`, `error`, and `info`, as well as `white`.

<LivePreview src="components-toast--colors" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {defaultColors} from '@morpheme/theme/defaultTheme';

const isOpen = ref(true);
const color = ref('default');

// Function to change the color of the toast and update the `isOpen` state
const changecolor = (position: string) => {
  color.value = position;
  isOpen.value = false;
  setTimeout(() => {
    isOpen.value = true;
  }, 200);
};

// Array of default theme colors and white
const colors = [...defaultColors, 'white'];
</script>

<template>
  <VBtnGroup>
    <VBtn
      v-for="color in colors"
      :key="color"
      :color="color"
      @click="changecolor(color)"
    >
      {{ color }}
    </VBtn>
  </VBtnGroup>
  <VToast v-model="isOpen" :color="color"> Toast message </VToast>
</template>
```

</LivePreview>

### Slots

You can use slots to customize the content of the `VToast` component. The `VToast` component has a `default` slot for the main content and an `action` slot for an optional action button. The `action` slot provides a `close` function that can be called to close the toast.

<LivePreview src="components-toast--slots" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
const actionHandler = () => {
  alert('Confirmed!');
};
</script>

<template>
  <VBtn @click="isOpen = !isOpen">{{ isOpen ? 'Close' : 'Open' }} Toast</VBtn>
  <VToast v-bind="args" v-model="isOpen">
    Toast message
    <template #action="{close}">
      <VBtn text size="sm" color="primary" @click="actionHandler">Action</VBtn>
      <VBtn
        text
        fab
        size="sm"
        color="primary"
        prefix-icon="ri:close-line"
        @click="close"
      />
    </template>
  </VToast>
</template>
```

</LivePreview>

## Props

| Name                              | Type      | Default     |
| --------------------------------- | --------- | ----------- |
| [`modelValue`](#modelValue)       | `boolean` | `'false'`   |
| [`title`](#title) ❌               | `string`  | `''`        |
| [`color`](#color) ❌               | `string`  | `'default'` |
| [`confirmColor`](#confirmColor) ❌ | `string`  | `'primary'` |
| [`confirmProps`](#confirmProps) ❌ | `object`  | `{}`        |
| [`confirmText`](#confirmText) ❌   | `string`  | `'Confirm'` |
| [`closeText`](#closeText) ❌       | `string`  | `'Close'`   |
| [`closeProps`](#closeProps) ❌     | `object`  | `{}`        |
| [`headerClass`](#headerClass) ❌   | `string`  | `''`        |
| [`bodyClass`](#bodyClass) ❌       | `string`  | `''`        |
| [`actionsClass`](#actionsClass) ❌ | `string`  | `''`        |
| [`placement`](#placement)         | `string`  | `''`        |
| [`timeout`](#timeout)             | `mumber`  | `0`         |
| [`type`](#type) ❌                 | `string`  | `''`        |
| [`hideXIcon`](#hideXIcon) ❌       | `boolean` | `'false'`   |
| [`overlay`](#overlay) ❌           | `boolean` | `false''`   |
| [`loading`](#loading) ❌           | `boolean` | `'false'`   |
| [`presistent`](#presistent) ❌     | `boolean` | `'false'`   |
| [`transition`](#transition)       | `String`  | `''`        |
| [`icon`](#icon)                   | `String`  | `''`        |
| [`iconSize`](#iconSize)           | `String`  | `'md'`      |
| [`iconClass`](#iconClass)         | `String`  | `''`        |
| [`contentClass`](#contentClass)   | `String`  | `''`        |
| [`actionClass`](#actionClass)     | `String`  | `''`        |

- ❌ = deprecated

## Events

The `VToast` component emits the following event:

### `update:modelValue`

This event is emitted when the `v-model` directive of the `VToast` component is updated. It is triggered whenever the `isOpen` state of the toast changes.

The payload of the event is an object with a single property:

- `value`: The new value of the `isOpen` state, which is a `boolean`.

## Slots

The `VToast` component has the following slots:

### `default`

The default slot is used to specify the main content of the toast. It can be used to display a message or any other content you want to show in the toast.

The default slot also receives a prop with a single function:

- `close`: A function that can be called to close the toast.

### `action`

The action slot is used to specify an optional action button for the toast. It is useful when you want to provide a way for the user to interact with the toast, such as by confirming an action or dismissing the toast.

The action slot receives a prop with a single function:

- `close`: A function that can be called to close the toast.

You can use the close function provided by the action slot to specify the behavior of the action button. For example, you might want to call the `close` function when the user clicks a "Confirm" button, or you might want to call it when the user clicks a "Dismiss" button.

Here is an example of how to use the action slot:

```vue
<template>
  <VToast v-model="isOpen">
    Toast message
    <template #action="{close}">
      <VBtn text size="sm" color="primary" @click="close">Dismiss</VBtn>
    </template>
  </VToast>
</template>
```

## CSS Variables

```css
:root {
  /* toast */
  --v-toast-wrapper-padding-x: theme('padding.0');
  --v-toast-wrapper-padding-y: theme('padding.3');
  /* panel */
  --v-toast-padding-x: theme('padding.4');
  --v-toast-padding-y: theme('padding.3');
  --v-toast-bg-color: #2f3031;
  --v-toast-text-color: white;
  --v-toast-font-size: theme('fontSize.sm');
  --v-toast-font-weight: theme('fontWeight.normal');
  --v-toast-width: 328px;
  --v-toast-box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2), 0px 2px 10px rgba(0, 0, 0, 0.1);
  --v-toast-border-radius: theme('borderRadius.DEFAULT');
  --v-toast-text-align: left;
  --v-toast-gap: theme('gap.4');
}
```

## Manual Installation

You can also install the `Toast` component individually via `@morpheme/toast` package:

```bash
npm i @morpheme/toast
```

```vue
<script setup lang="ts">
import VToast from '@morpheme/toast';
import '@morpheme/toast/dist/style.css';
</script>

<template>
  <VBtn @click="openToast"> Open Toast </VBtn>
  <VToast v-model="isOpen"> Toast message </VToast>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-toast--default).
