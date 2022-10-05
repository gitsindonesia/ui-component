# Breadcrumbs

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import VBreadcrumbs, {type VBreadcrumbItem} from '@gits-id/breadcrumbs';

const items = ref<VBreadcrumbItem[]>([
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Account',
    to: '/account'
  },
  {
    title: 'Profile',
    to: '/account/profile'
  },
])
</script>

<template>
  <!-- VBreadcrumbs is registered globally -->
  <VBreadcrumbs :items="items" />
</template>
```

::: info
The `VBreadcrumbs` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Divider

- **prop**: `divider`
- **type**: `string`
- **default**: `/`
- **required**: `false`

Use `divider` to change breadcrumbs divider/separator.

```vue
<script setup lang="ts">
import VBreadcrumbs, {type VBreadcrumbItem} from '@gits-id/breadcrumbs';

const items = ref<VBreadcrumbItem[]>([
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Account',
    to: '/account'
  },
  {
    title: 'Profile',
    to: '/account/profile'
  },
])
</script>

<template>
  <VBreadcrumbs divider=">" />
</template>
```

### Divider Slots

We can use slots for customize the item and divider content.

```vue
<script setup lang="ts">
import Icon from '@gits-id/icon';
import VBreadcrumbs, {type VBreadcrumbItem} from '@gits-id/breadcrumbs';

const items = ref<VBreadcrumbItem[]>([
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Account',
    to: '/account'
  },
  {
    title: 'Profile',
    to: '/account/profile'
  },
])
</script>

<template>
  <VBreadcrumbs>
    <template #divider>
      <Icon name="ri:arrow-right-s-line" />
    </template>
  </VBreadcrumbs>
</template>
```

### Default Slots

We can also define breadcrumb inside default slots.

```vue
<template>
  <v-breadcrumbs>
    <v-breadcrumbs-item to="/"> Home </v-breadcrumbs-item>
    <v-breadcrumbs-divider />
    <v-breadcrumbs-item to="/account"> Account </v-breadcrumbs-item>
    <v-breadcrumbs-divider />
    <v-breadcrumbs-item to="/account/profile" disabled>
      Profile
    </v-breadcrumbs-item>
  </v-breadcrumbs>
</template>
```

## Props

| Name                        | Type                | Default                    |
| --------------------------- | ------------------- | -------------------------- |
| [items](#items)             | `VBreadcrumbItem[]` | `[]`                       |
| [divider](#divider)         | `string`            | `/`                        |
| [tag](#tag)                 | `string`            | `li`                       |
| [customClass](#customClass) | `string`            | ``                         |
| [activeColor](#activeColor) | `string`            | `breadcrumbs-item--active` |

## Methods

None

## Events

None

## Slots

| Name                | Props | Description              |
| ------------------- | ----- | ------------------------ |
| [default](#default) | None  | The default Vue slot     |
| [divider](#divider) | None  | Slot for divider content |

## CSS Variables

| Variable                                                                  | Default Value                 |
| ------------------------------------------------------------------------- | ----------------------------- |
| [`--breadcrumbs-gap`](#--breadcrumbs-gap)                                 | `theme('spacing.3')`          |
| [`--breadcrumbs-margin-bottom`](#--breadcrumbs-margin-bottom)             | `theme('spacing.3')`          |
| [`--breadcrumbs-font-weight`](#--breadcrumbs-font-weight)                 | `theme('fontWeight.medium')`  |
| [`--breadcrumbs-item-color`](#--breadcrumbs-item-color)                   | `theme('colors.gray.800')`    |
| [`--breadcrumbs-item-hover-color`](#--breadcrumbs-item-hover-color)       | `theme('colors.primary.700')` |
| [`--breadcrumbs-item-active-color`](#--breadcrumbs-item-active-color)     | `theme('colors.primary.500')` |
| [`--breadcrumbs-item-disabled-color`](#--breadcrumbs-item-disabled-color) | `theme('colors.gray.500')`    |
| [`--breadcrumbs-divider-font-size`](#--breadcrumbs-divider-font-size)     | `theme('fontSize.sm')`        |
| [`--breadcrumbs-divider-font-weight`](#--breadcrumbs-divider-font-weight) | `theme('fontWeight.medium')`  |
| [`--breadcrumbs-divider-color`](#--breadcrumbs-divider-color)             | `theme('colors.gray.400')`    |

## Customization

With the power of CSS Variables and Tailwind's `theme` function, you can create your custom breadcrumbs.

```vue
<template>
  <VBreadcrumbs> Indigo Colored Breadcrumbs </VBreadcrumbs>
</template>

<style>
.breadcrumbs-indigo {
  --breadcrumbs-gap: theme('spacing.4');
  --breadcrumbs-margin-bottom: theme('spacing.5');
  --breadcrumbs-font-weight: theme('fontWeight.semibold');
  --breadcrumbs-item-color: theme('colors.gray.600');
  --breadcrumbs-item-hover-color: theme('colors.secondary.700');
  --breadcrumbs-item-active-color: theme('colors.secondary.500');
  --breadcrumbs-item-disabled-color: theme('colors.gray.500');
  --breadcrumbs-divider-font-size: theme('fontSize.base');
  --breadcrumbs-divider-font-weight: theme('fontWeight.semibold');
  --breadcrumbs-divider-color: theme('colors.gray.400');
}
</style>
```

## Manual Installation

You can also install the `Breadcrumbs` component individually via `@gits-id/breadcrumbs` package:

```bash
npm install @gits-id/breadcrumbs
```

```vue
<script setup lang="ts">
import VBreadcrumbs, {type VBreadcrumbItem} from '@gits-id/breadcrumbs';

const items = ref<VBreadcrumbItem[]>([
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Account',
    to: '/account'
  },
  {
    title: 'Profile',
    to: '/account/profile'
  },
])
</script>

<template>
  <VBreadcrumbs :items="items" />
</template>
```

## Tailwind Plugin

This package comes with custom tailwind plugin for styling. If you are installing this package separately from `@gits-id/ui` package, you need to include the plugin in `plugins` section in your Tailwind config file.

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  presets: [require('@gits-id/breadcrumbs/plugin')],
};
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-breadcrumbs--variants).
