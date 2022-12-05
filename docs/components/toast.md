# Toast

Vue toast component.

## Usage

### Basic Usage

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

::: info
The `VToast` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Icon

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

<LivePreview src="components-toast--default" />

### Placement

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

<LivePreview src="components-toast--title" />

### Colors

```vue
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(true);
const color = ref('default');

const changecolor = (position: string) => {
  color.value = position;
  isOpen.value = false;
  setTimeout(() => {
    isOpen.value = true;
  }, 200);
};

const colors = [...defaultColors, 'default', 'white'];
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

<LivePreview src="components-toast--title" />

## Props

| Name                            | Type      | Default     |
| ------------------------------- | --------- | ----------- |
| [`modelValue`](#modelValue)     | `boolean` | `'false'`   |
| [`title`](#title) ❌               | `string`  | `''`        |
| [`color`](#color) ❌               | `string`  | `'default'` |
| [`confirmColor`](#confirmColor) ❌ | `string`  | `'primary'` |
| [`confirmProps`](#confirmProps) ❌ | `object`  | `{}`        |
| [`confirmText`](#confirmText) ❌   | `string`  | `'Confirm'` |
| [`closeText`](#closeText) ❌      | `string`  | `'Close'`   |
| [`closeProps`](#closeProps) ❌     | `object`  | `{}`        |
| [`headerClass`](#headerClass) ❌   | `string`  | `''`        |
| [`bodyClass`](#bodyClass) ❌       | `string`  | `''`        |
| [`actionsClass`](#actionsClass) ❌ | `string`  | `''`        |
| [`placement`](#placement)       | `string`  | `''`        |
| [`timeout`](#timeout)           | `mumber`  | `0`         |
| [`type`](#type) ❌                 | `string`  | `''`        |
| [`hideXIcon`](#hideXIcon) ❌       | `boolean` | `'false'`   |
| [`overlay`](#overlay) ❌           | `boolean` | `false''`   |
| [`loading`](#loading) ❌           | `boolean` | `'false'`   |
| [`presistent`](#presistent) ❌     | `boolean` | `'false'`   |
| [`transition`](#transition)     | `String`  | `''`        |
| [`icon`](#icon)                 | `String`  | `''`        |
| [`iconSize`](#iconSize)         | `String`  | `'md'`      |
| [`iconClass`](#iconClass)       | `String`  | `''`        |
| [`contentClass`](#contentClass) | `String`  | `''`        |
| [`actionClass`](#actionClass)   | `String`  | `''`        |

- ❌ = deprecated
## Events

| Name                                     | Payload          |
| ---------------------------------------- | ---------------- |
| [`update:modelValue`](#updateModelValue) | `value: boolean` |

## Slots

| Name                  | Props                 |
| --------------------- | --------------------- |
| [`action`](#action)   | `{close: () => void}` |
| [`default`](#default) | `{close: () => void}` |

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

You can also install the `Toast` component individually via `@gits-id/toast` package:

```bash
npm i @gits-id/toast
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
