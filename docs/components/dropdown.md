# Dropdown

Dropdown component based on Headless UI.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Item 1',
  },
  {
    text: 'Item 2',
  },
  {
    divider: true,
  },
  {
    text: 'Item 3',
  },
  {
    text: 'Item 4',
  },
]);
</script>

<template>
  <VDropdown :items="items" />
</template>
```

<LivePreview src="components-dropdown--default" />

::: info
The `VDropdown` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Right

```vue
<template>
  <VDropdown right />
</template>
```

<LivePreview src="components-dropdown--right" />

### Top

```vue
<template>
  <VDropdown top />
</template>
```

<LivePreview src="components-dropdown--top" />

### Router Link

```vue {7}
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Link 1',
    to: '/home',
  },
]);
</script>

<template>
  <VDropdown />
</template>
```

<LivePreview src="components-dropdown--router-link" />

### Href Link

```vue {7}
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Link 1',
    href: '/home',
  },
]);
</script>

<template>
  <VDropdown />
</template>
```

<LivePreview src="components-dropdown--href" />

### Slots

```vue
<script setup lang="ts">
import {VDropdown, VDropdownItem} from '@gits-id/dropdown';
</script>

<template>
  <VDropdown>
    <VDropdownItem text="Calendar" icon="mdi:calendar" />
    <VDropdownItem text="Files" icon="mdi:document" />
    <VDropdownItem divider />
    <VDropdownItem text="Timer" icon="mdi:clock" />
  </VDropdown>
</template>
```

<LivePreview src="components-dropdown--slots" />

### Custom Activator

```vue
<script setup lang="ts">
import {VDropdown, VDropdownItem, VBtn} from '@gits-id/ui';
</script>

<template>
  <VDropdown top top-class="bottom-12">
    <template #activator>
      <VDropdownButton :as="VBtn" color="error" outlined>
        My Button
      </VDropdownButton>
    </template>

    <VDropdownItem text="Calendar" icon="mdi:calendar" />
    <VDropdownItem text="Files" icon="mdi:document" />
    <VDropdownItem divider />
    <VDropdownItem text="Timer" icon="mdi:clock" />
  </VDropdown>
</template>
```

<LivePreview src="components-dropdown--custom-activator" />

## Props

| Name                                        | Type                   | Default                  |
| ------------------------------------------- | ---------------------- | ------------------------ |
| [`modelValue`](#modelValue)                 | `boolean`              | `false`                  |
| [`btnProps`](#btnProps)                     | `Record<string, any>`  | `{variant: 'secondary'}` |
| [`label`](#label)                           | `string`               | `'Options'`              |
| [`right`](#right)                           | `boolean`              | `false`                  |
| [`items`](#items)                           | `VDropdownItemProps[]` | `[]`                     |
| [`top`](#top)                               | `boolean`              | `false`                  |
| [`topClass`](#topClass)                     | `string`               | `'bottom-10'`            |
| [`bottomClass`](#bottomClass)               | `string`               | `'top-6'`                |
| [`panelClass`](#panelClass)                 | `string`               | `''`                     |
| [`buttonWrapperClass`](#buttonWrapperClass) | `string`               | `''`                     |
| [`rightClass`](#rightClass)                 | `string`               | `'left-0'`               |
| [`leftClass`](#leftClass)                   | `string`               | `'right-0'`              |
| [`transition`](#transition)                 | `string`               | `'fade'`                 |

## Methods

None

## Events

None

## Slots

### `activator`

```vue
<script setup lang="ts">
import {VDropdown, VDropdownItem, VBtn} from '@gits-id/ui';
</script>

<template>
  <VDropdown>
    <template #activator>
      <VDropdownButton :as="VBtn" color="error" outlined>
        My Button
      </VDropdownButton>
    </template>
  </VDropdown>
</template>
```

### `default`

```vue
<script setup lang="ts">
import {VDropdown, VDropdownItem, VBtn} from '@gits-id/ui';
</script>

<template>
  <VDropdown>
    <VDropdownItem>Item 1</VDropdownItem>
  </VDropdown>
</template>
```

## CSS Variables

```css
:root {
  --dropdown-bg-color: theme('colors.white');
  --dropdown-button-icon-color: theme('colors.gray.500');
  --dropdown-item-color: theme('colors.gray.800');
  --dropdown-item-icon-color: theme('colors.gray.600');
}
```

## Tailwind Plugin

This package comes with custom tailwind plugin for styling. If you are installing this package separately from `@gits-id/ui` package, you need to include the plugin in `plugins` section in your Tailwind config file.

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  plugins: [require('@gits-id/tailwind-components/dropdown')],
};
```

## Manual Installation

You can also install the `VDropdown` component individually via `@gits-id/dropdown` package:

```bash
npm i @gits-id/dropdown
```

```vue
<script setup lang="ts">
import {VDropdown, VDropdownItem} from '@gits-id/dropdown';
</script>

<template>
  <VDropdown>
    <VDropdownItem> Item 1 </VDropdownItem>
    <VDropdownItem> Item 2 </VDropdownItem>
    <VDropdownItem> Item 3 </VDropdownItem>
  </VDropdown>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-dropdown--default).
