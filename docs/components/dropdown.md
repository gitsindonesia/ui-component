---
outline: deep
---

# Dropdown

The `VDropdown` component is a Vue component based on the Headless UI library. It allows you to display a list of options in a dropdown menu that appears when the component is activated.

## Usage

### Basic Usage

To use the Dropdown component, you can include it in your template.

You need to pass an array of items to the `items` prop to define the options that will be displayed in the dropdown menu. Each item should be an object with at least a `text` property.

You can also specify a `divider` property for an item to insert a horizontal line in the dropdown menu.

<LivePreview src="components-dropdown--default" >

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

</LivePreview>

::: info
The `VDropdown` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Right Alignment

You can use the `right` align the dropdown menu to the top of the component activator.

<LivePreview src="components-dropdown--right" >

```vue
<template>
  <VDropdown right />
</template>
```

</LivePreview>

### Top Alignment

You can use the `top` align the dropdown menu to the top of the component activator.

<LivePreview src="components-dropdown--top" >

```vue
<template>
  <VDropdown top />
</template>
```

</LivePreview>

### Router Link

You can use the `to` property of an item to specify a Vue Router link that will be navigated to when the item is clicked.

<LivePreview src="components-dropdown--router-link" >

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

</LivePreview>

### Href Link

Alternatively, you can use the `href` property of an item to specify a regular URL that will be navigated to when the item is clicked.

<LivePreview src="components-dropdown--href" >

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

</LivePreview>

### Slots

You can also use slots to specify the items of the dropdown menu directly in the template, like this:

<LivePreview src="components-dropdown--slots" >

```vue
<script setup lang="ts">
import {VDropdown, VDropdownItem} from '@morpheme/dropdown';
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

</LivePreview>

### Custom Activator

You can use the `activator` slot to specify a custom element that will act as the activator for the dropdown menu. For example:

<LivePreview src="components-dropdown--custom-activator" >

```vue
<script setup lang="ts">
import {VDropdown, VDropdownItem, VBtn} from '@morpheme/ui';
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

</LivePreview>

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
| [`icon`](#icon)                             | `string`               | `'ri:arrow-down-s-line'` |
| [`iconSize`](#iconSize)                     | `string`               | `'md'`                   |
| [`iconClass`](#iconClass)                   | `string`               | `''`                     |
| [`prefixIcon`](#prefixIcon)                 | `string`               | `''`                     |
| [`prefixIconSize`](#prefixIconSize)         | `string`               | `'md'`                   |
| [`prefixIconClass`](#prefixIconClass)       | `string`               | `''`                     |

Prop Types:

```ts
export interface Props {
  modelValue?: boolean;
  btnProps?: Record<string, any>;
  label?: string;
  right?: boolean;
  items?: DropdownItemProps[];
  top?: boolean;
  topClass?: string;
  bottomClass?: string;
  panelClass?: string;
  buttonWrapperClass?: string;
  rightClass?: string;
  leftClass?: string;
  transition?: string;
  icon?: string;
  iconSize?: string;
  iconClass?: string;
  prefixIcon?: string;
  prefixIconSize?: string;
  prefixIconClass?: string;
}
```

## Events

None

## Slots

### `activator`

The `activator` slot in a Vue component allows you to specify custom content to be used as the trigger for the component. In the example provided, the `VDropdown` component is being used with a `VDropdownButton` component as the trigger, which is rendered as a button with the text "My Button". When this button is clicked, the dropdown menu will open.

```vue
<script setup lang="ts">
import {VDropdown, VDropdownItem, VBtn} from '@morpheme/ui';
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

The `default` slot, on the other hand, is a catch-all slot that allows you to specify default content for the component. In the example provided, the `VDropdown` component is being used with a `VDropdownItem` component as its default content. This means that the dropdown menu will contain a single item with the text "Item 1" when it is opened.

```vue
<script setup lang="ts">
import {VDropdown, VDropdownItem, VBtn} from '@morpheme/ui';
</script>

<template>
  <VDropdown>
    <VDropdownItem>Item 1</VDropdownItem>
  </VDropdown>
</template>
```

## CSS Variables

Default:

```css
:root {
  --dropdown-bg-color: theme('colors.white');

  // button
  --dropdown-button-icon-color: theme('colors.gray.500');

  // button activator
  --dropdown-button-activator-gap: theme('spacing.2');

  // item
  --dropdown-item-color: theme('colors.gray.800');
  --dropdown-item-icon-color: theme('colors.gray.600');
  --dropdown-item-gap: theme('spacing.2');
  --dropdown-item-border-radius: theme('borderRadius.md');
  --dropdown-item-padding: theme('spacing.2');

  // item active
  --dropdown-item-active-color: currentColor;
  --dropdown-item-active-bg-color: theme('colors.gray.200');

  // item icon
  --dropdown-item-icon-width: theme('width.5');
  --dropdown-item-icon-height: theme('height.5');
  --dropdown-item-icon-color: currentColor;

  // panel
  --dropdown-panel-bg-color: theme('colors.white');
  --dropdown-panel-border-radius: theme('borderRadius.md');
  --dropdown-panel-box-shadow: theme('boxShadow.lg');
  --dropdown-panel-z-index: theme('zIndex.10');
  --dropdown-panel-padding: theme('spacing.1');
  --dropdown-panel-width: theme('width.56');
  --dropdown-panel-margin-top: theme('spacing.2');

  // divider
  --dropdown-divider-border-color: theme('colors.gray.200');
}
```

Dark Mode:

```scss
.dark {
  .dropdown {
    --dropdown-bg-color: theme('colors.neutral.800');
    --dropdown-button-icon-color: theme('colors.neutral.400');
    --dropdown-item-color: theme('colors.neutral.200');
    --dropdown-item-icon-color: theme('colors.neutral.400');

    // item active
    --dropdown-item-active-color: theme('colors.neutral.200');
    --dropdown-item-active-bg-color: theme('colors.neutral.700');

    // panel
    --dropdown-panel-bg-color: theme('colors.neutral.800');

    // divider
    --dropdown-divider-border-color: theme('colors.neutral.700');

    // item active
    --dropdown-item-active-bg-color: theme('colors.neutral.700');
  }
}
```

## Tailwind Plugin

This package comes with custom tailwind plugin for styling. If you are installing this package separately from `@morpheme/ui` package, you need to include the plugin in `plugins` section in your Tailwind config file.

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  plugins: [require('@morpheme/tailwind-components/dropdown')],
};
```

## Manual Installation

You can also install the `VDropdown` component individually via `@morpheme/dropdown` package:

```bash
npm i @morpheme/dropdown
```

```vue
<script setup lang="ts">
import {VDropdown, VDropdownItem} from '@morpheme/dropdown';
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
