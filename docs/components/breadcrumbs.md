---
outline: deep
---

# Breadcrumbs

The `VBreadcrumbs` component is used to display a list of links that allow the user to navigate through different pages or sections of a website.

## Usage

### Basic Usage

To use `VBreadcrumbs`, you will need to import it and pass an array of `VBreadcrumbItem` objects as the items prop. Each `VBreadcrumbItem` should have a `title` and a `to` property, which will be used to display the breadcrumb and link it to a specific page.

<LivePreview src="components-breadcrumbs--default" height="70" >

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

</LivePreview>

::: info
The `VBreadcrumbs` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Divider

- **prop**: `divider`
- **type**: `string`
- **default**: `/`
- **required**: `false`

You can use the `divider` prop to change the character or element used to separate the breadcrumbs.

<LivePreview src="components-breadcrumbs--custom-divider" height="70" >

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

</LivePreview>

### Divider Slots

You can also use slots to customize the content of the divider element.

<LivePreview src="components-breadcrumbs--custom-divider-slots" height="70" >

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

</LivePreview>

### Default Slots

You can use the default slots of `VBreadcrumbs` to define the breadcrumb items and dividers manually. This can be useful if you want to customize the appearance or behavior of each breadcrumb item.

<LivePreview src="components-breadcrumbs--bare" height="70" >

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

</LivePreview>

## Props

| Name                        | Type                | Default                    |
| --------------------------- | ------------------- | -------------------------- |
| [items](#items)             | `VBreadcrumbItem[]` | `[]`                       |
| [divider](#divider)         | `string`            | `/`                        |
| [tag](#tag)                 | `string`            | `li`                       |
| [customClass](#customClass) | `string`            | ``                         |
| [activeColor](#activeColor) | `string`            | `breadcrumbs-item--active` |

## Events

None

## Slots

The `VBreadcrumbs` component has the following slots:

### default

The `default` slot is the default Vue slot. You can use this slot to define the breadcrumb items and dividers manually using `VBreadcrumbItem` and `VBreadcrumbDivider` components.

```vue
<template>
  <VBreadcrumbs>
    <VBreadcrumbItem to="/">Home</VBreadcrumbItem>
    <VBreadcrumbDivider />
    <VBreadcrumbItem to="/account">Account</VBreadcrumbItem>
    <VBreadcrumbDivider />
    <VBreadcrumbItem to="/account/profile" disabled>Profile</VBreadcrumbItem>
  </VBreadcrumbs>
</template>
```

### divider

The `divider` slot allows you to customize the content of the divider element. This can be useful if you want to use a custom icon or element as the divider.

```vue
<template>
  <VBreadcrumbs :items="items">
    <template #divider>
      <Icon name="ri:arrow-right-s-line" />
    </template>
  </VBreadcrumbs>
</template>
```

## CSS Variables

```scss
:root {
  --breadcrumbs-gap: theme('spacing.3');
  --breadcrumbs-margin-bottom: theme('spacing.3');
  --breadcrumbs-font-weight: theme('fontWeight.medium');

  // item
  --breadcrumbs-item-color: theme('colors.gray.800');

  // item hover
  --breadcrumbs-item-hover-color: theme('colors.primary.700');

  // item active
  --breadcrumbs-item-active-color: theme('colors.primary.500');

  // item disabled
  --breadcrumbs-item-disabled-color: theme('colors.gray.500');

  // divider
  --breadcrumbs-divider-font-size: theme('fontSize.sm');
  --breadcrumbs-divider-font-weight: theme('fontWeight.medium');
  --breadcrumbs-divider-color: theme('colors.gray.400');
}
```

## Customization

You can customize the appearance of the `VBreadcrumbs` component using CSS variables and the theme function from Tailwind CSS.

Here is an example of how you can customize the font size and color of the breadcrumb links:

```vue
<template>
  <VBreadcrumbs> Indigo Colored Breadcrumbs </VBreadcrumbs>
</template>

<style>
:root {
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
  plugins: [require('@gits-id/tailwind-components/breadcrumbs')],
};
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-breadcrumbs--variants).
