# Badge

The `VBadge` component is a small component that is used to display a small piece of information, such as a notification, status, or count. It can be used in a variety of contexts, such as to display a notification count on a user profile or to highlight new or unread content.

## Usage

## Basic Usage

To use the `VBadge` component, you can simply include it in your template like this:

```vue
<template>
  <!-- VBadge is registered globally -->
  <VBadge> Hello World </VBadge>
</template>
```

::: info
Note that the `VBadge` component is registered globally when you install `@gits-id/ui`, so you don't need to import it manually.
:::

## Colors

- **prop**: `color`
- **type**: `string`
- **default**: `default`
- **required**: `false`

You can use the `color` prop to apply different color styles to the badge:

The available color options are `default`, `primary`, `secondary`, `info`, `warning`, `success`, and `error`.

<LivePreview src="components-badge--variants" height="70">

```vue
<template>
  <VBadge> Hello World </VBadge>
  <VBadge color="primary"> Hello World </VBadge>
  <VBadge color="secondary"> Hello World </VBadge>
  <VBadge color="info"> Hello World </VBadge>
  <VBadge color="warning"> Hello World </VBadge>
  <VBadge color="success"> Hello World </VBadge>
  <VBadge color="error"> Hello World </VBadge>
</template>
```

</LivePreview>

## Outlined

- **prop**: `outlined`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

You can use the `outlined` prop to apply a bordered style to the badge:

<LivePreview src="components-badge--outlined" height="70" >

```vue{2}
<template>
  <VBadge outlined> Hello World </VBadge>
</template>
```

</LivePreview>

## Rounded

- **prop**: `rounded`
- **type**: `boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none'`
- **default**: `none`
- **required**: `false`

You can use the `rounded` prop to apply a rounded style to the badge:

<LivePreview src="components-badge--rounded" height="70" >

```vue
<script setup lang="ts">
import {ref} from 'vue';
</script>

<template>
  <VBadge rounded> Hello World </VBadge>
  <VBadge rounded="sm"> Hello World </VBadge>
  <VBadge rounded="md"> Hello World </VBadge>
  <VBadge rounded="lg"> Hello World </VBadge>
  <VBadge rounded="xl"> Hello World </VBadge>
  <VBadge rounded="2xl"> Hello World </VBadge>
  <VBadge rounded="3xl"> Hello World </VBadge>
  <VBadge rounded="none"> Hello World </VBadge>
</template>
```

</LivePreview>

## Sizes

- **prop**: `small` or `large`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

You can use the `small` or `large` prop to change the size of the badge:

<LivePreview src="components-badge--sizes" height="70" >

```vue
<template>
  <VBadge small> small </VBadge>
  <VBadge> default </VBadge>
  <VBadge large> large </VBadge>
</template>
```

</LivePreview>

## Dismissable

- **prop**: `dismissable`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

You can use the `dismissable` prop to show an X button in the badge, which allows the user to dismiss the badge:

<LivePreview src="components-badge--dismissable" height="70" >

```vue
<template>
  <VBadge dismissable> Badge </VBadge>
</template>
```

</LivePreview>

## Props

| Name                        | Type                                                           | Default         |
| --------------------------- | -------------------------------------------------------------- | --------------- |
| [color](#color)             | `string` , [available colors](/guide/theme#colors)             | `default`       |
| [rounded](#rounded)         | `boolean`, `string`, [available rounded](/guide/theme#rounded) | `true`          |
| [small](#small)             | `boolean`                                                      | `false`         |
| [large](#large)             | `boolean`                                                      | `false`         |
| [dismissable](#dismissable) | `boolean`                                                      | `false`         |
| [outlined](#outlined)       | `boolean`                                                      | `false`         |
| [closeIcon](#closeIcon)     | `string`                                                       | `ri:close-line` |
| [iconSize](#iconSize)       | `string`                                                       | `xs`            |

## Events

## `dismiss`

The `VBadge` component provides a `dismiss` event, which is fired when the dismissable button is clicked. This can be useful if you want to perform an action, such as hiding or removing the badge, when it is dismissed by the user.

To listen for the `dismiss` event, you can use the @dismiss event binding in your template like this:

```vue
<script setup lang="ts">
const onDismiss = () => alert('Dismiss!');
</script>

<template>
  <VBadge @dismiss="onDismiss"> Badge </VBadge>
</template>
```

Note that the `dismiss` event is only available when the `dismissable` prop is set to `true`.

## Slots

| Name                        | Props                   | Description                 |
| --------------------------- | ----------------------- | --------------------------- |
| [default](#default)         | None                    | The default Vue slot        |
| [dismissable](#dismissable) | `{dismiss: () => void}` | Slot for dismissable button |

## CSS Variables

```css
:root: {
  --badge-bg-color: theme('colors.gray.100');
  --badge-color: theme('colors.gray.800');
  --badge-border-style: 'solid';
  --badge-border-width: theme('borderWidth.DEFAULT');
  --badge-border-color: theme('borderColor.transparent');
  --badge-border-radius: theme('borderRadius.DEFAULT');
  --badge-padding-x: theme('padding.2');
  --badge-padding-y: theme('padding.1');
  --badge-font-size: theme('fontSize.xs');
  --badge-font-weight: theme('fontWeight.semibold');
  --badge-icon-size: theme('width.4');
}
```

## Customization

The `VBadge` component can be customized using CSS variables and the `theme` function provided by Tailwind CSS. This allows you to create your own custom badge styles that match your project's design aesthetic.

To customize the `VBadge` component, you can define your own CSS classes that set the desired CSS variables. For example, to create an "indigo" colored badge, you can define a `.badge-indigo` class like this:

```vue{2,7-8}
<template>
  <VBadge color="indigo"> Indigo Colored Badge </VBadge>
</template>

<style>
.badge-indigo {
  --badge-bg-color: theme('colors.indigo.500');
  --badge-color: theme('colors.white');
}
</style>
```

This allows you to easily create custom color styles for the `VBadge` component, simply by defining a new class or color attribute and setting the appropriate CSS variables.

Note that you can also customize the other visual aspects of the `VBadge` component, such as the border style, padding, font size, and more, by defining the appropriate CSS variables in your custom class.

## Manual Installation

In addition to installing the `VBadge` component as part of the `@gits-id/ui` package, you can also install it individually using the `@gits-id/badge` package.

To install the `@gits-id/badge` package, run the following command:

```bash
npm i @gits-id/badge
```

Then, you can import and use the `VBadge` component in your application like this:

```vue
<script setup lang="ts">
import VBadge from '@gits-id/badge';
</script>

<template>
  <VBadge> Hello World </VBadge>
</template>
```

## Tailwind Plugin

The `@gits-id/badge` package comes with a custom Tailwind CSS plugin that provides various utility classes for styling the `VBadge` component. If you are installing the `@gits-id/badge` package separately from the `@gits-id/ui` package, you will need to include this plugin in the `plugins` section of your Tailwind CSS configuration file.

Here's an example of how to include the `@gits-id/badge` plugin in your Tailwind CSS configuration file:

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  plugins: [require('@gits-id/tailwind-components/badge')],
};
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-badge--variants).
