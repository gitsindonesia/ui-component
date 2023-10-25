# Switch

## Overview

The `Switch` component provides an interface for a toggleable option, often used to represent on/off or active/inactive states. This component is built on top of the `@headlessui/vue` library, and it's designed for easy customization and a wide range of configurations.

## Storybook

<LivePreview src="forms-switch--docs" hide-nav />

## Props

| Prop               | Type                           | Default   | Description                                                                     |
| ------------------ | ------------------------------ | --------- | ------------------------------------------------------------------------------- |
| `modelValue`       | Boolean                        | false     | The value representing the switch's state (on/off).                             |
| `label`            | String                         | ''        | Label text for the switch.                                                      |
| `color`            | Colors (from `./colors`)       | 'primary' | Color theme for the switch.                                                     |
| `inactiveClass`    | String                         | ''        | Class to be applied when the switch is in the inactive state.                   |
| `activeClass`      | String                         | ''        | Class to be applied when the switch is in the active state.                     |
| `buttonClass`      | String                         | ''        | Class to be applied to the switch's button.                                     |
| `wrapperClass`     | String                         | ''        | Class to be applied to the component wrapper.                                   |
| `switchClass`      | String                         | ''        | Class to be applied to the main switch component.                               |
| `switchGroupClass` | String                         | ''        | Class to be applied to the switch group wrapper.                                |
| `labelClass`       | String                         | ''        | Class to be applied to the switch label.                                        |
| `name`             | String                         | ''        | Name attribute for the switch.                                                  |
| `rules`            | String                         | ''        | Validation rules for the switch.                                                |
| `errorClass`       | String                         | ''        | Class to be applied when there is an error related to the switch.               |
| `hint`             | String                         | ''        | Hint or help text displayed below the switch.                                   |
| `size`             | 'sm' \| 'md' \| 'lg' \| string | 'md'      | Size of the switch. Can be 'sm', 'md', 'lg', or any custom string.              |
| `errorMessage`     | String                         | ''        | Error message displayed when there is a validation error related to the switch. |

## Events

| Event               | Payload Type | Description                                     |
| ------------------- | ------------ | ----------------------------------------------- |
| `update:modelValue` | Boolean      | Emits the current state (on/off) of the switch. |

## Slots

| Slot    | Props | Description                                                                  |
| ------- | ----- | ---------------------------------------------------------------------------- |
| `hint`  | {}    | Custom hint content. If not provided, the `hint` prop will be used.          |
| `error` | {}    | Custom error content. If not provided, the `errorMessage` prop will be used. |

## Usage

To use the `Switch` component:

1. Import the component.
2. Bind the necessary props.
3. Optionally, use the slots for custom content.

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {Switch} from '@morpheme/switch';

const isActive = ref(false);
</script>

<template>
  <Switch v-model="isActive" label="Activate Feature" color="green" size="lg" />
</template>
```

This will render a large green switch labeled "Activate Feature". The switch's state (on or off) will be bound to the `isActive` ref.
