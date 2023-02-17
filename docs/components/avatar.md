---
outline: deep
---

# Avatar

The `Avatar` component is a visual representation of a user or an entity. It can be displayed in various shapes (e.g. circle, square, rounded) and can be initialized with either an image or a name.

## Installation

To use the `Avatar` component, you will need to install the `@gits-id/avatar` package and import the styles from `@gits-id/avatar/dist/style.css`.

Alternatively, you can also use the `VAvatar` component from the `@gits-id/ui` package, which is registered globally and does not require manual importing.

## Usage

### Basic Usage

To use the `VAvatar` component, you can simply include it in your template.

<LivePreview src="components-avatar--variants" height="70" >

```vue
<template>
  <VAvatar color="primary" name="John Doe" />
  <VAvatar color="primary" src="path-to-image.png" />
</template>
```

</LivePreview>

### Initial Name

- **prop**: `name`
- **type**: `string`
- **default**: ` `
- **required**: `false`

Use prop `name` to show the user initial name. You can pass the full name to the prop and it will automatically show the initial.

```vue
<template>
  <VAvatar name="John Doe" />
</template>
```

### Max Initial

- **prop**: `max-initial`
- **type**: `number`
- **default**: `2`
- **required**: `true`

By default it max to `2` initial name, but you can change it with `max-initial` prop`.

```vue
<template>
  <VAvatar name="John Doe" :max-initial="1" />
</template>
```

### Image

- **prop**: `image`
- **type**: `string`
- **default**: ` `
- **required**: `false`

We can also set avatar image with `image` prop. The `image` prop accept string as its value and usually contains full image url of avatar.

<LivePreview src="components-avatar--image" height="70" >

```vue
<template>
  <VAvatar src="path-to-image.jpg" alt="John Doe" />
</template>
```

</LivePreview>

### Shape

- **prop**: `shape`
- **type**: `string`. Available values: `circle`, `rounded`, `square`.
- **default**: `circle`
- **required**: `true`

We can change the shape of avatar via `shape` prop. By the default, the shape is `circle`, but you can also change it to `rounded` or `square`.

<LivePreview src="components-avatar--shape" height="70" >

```vue
<template>
  <!-- default shape is circle -->
  <VAvatar src="path-to-image.jpg" alt="John Doe" />
  <VAvatar shape="square" src="path-to-image.jpg" alt="John Doe" />
  <VAvatar shape="rounded" src="path-to-image.jpg" alt="John Doe" />
</template>
```

</LivePreview>

### Props

| Name                      | Type                                                      | Default  | Description               |
| ------------------------- | --------------------------------------------------------- | -------- | ------------------------- |
| [name](#name)             | `string`                                                  | `-`      | Avatar color              |
| [maxInitial](#maxInitial) | `number`                                                  | `2`      | Max initial chars to show |
| [color](#color)           | `string` , [available colors](/guide/theme#colors)        | `-`      | Avatar color              |
| [size](#size)             | `string`, `number`, [available sizes](/guide/theme#sizes) | `md`     | Avatar size               |
| [shape](#shape)           | `square` , `circle` , `rounded`                           | `circle` | Avatar shape              |
| [alt](#alt)               | `string`                                                  | `-`      | Image alt                 |

## Events

None

## Slots

| Name                | Description          |
| ------------------- | -------------------- |
| [default](#default) | The default Vue slot |

## CSS Variables

```scss
:root {
  --avatar-width: 28px;
  --avatar-height: 28px;
  --avatar-bg-color: theme('colors.gray.200');
  --avatar-text-color: theme('colors.gray.800');
  --avatar-border-color: theme('colors.gray.200');
  --avatar-border-width: theme('borderWidth.DEFAULT');
  --avatar-border-style: 'solid';
  --avatar-border-radius: theme('borderRadius.full');
  --avatar-font-weight: 600;
  --avatar-font-size: theme('fontSize.base');
  --avatar-text-transform: uppercase;
}
```

## Manual Installation

To install the `Avatar` component individually, you can use the `@gits-id/avatar` package. Here's how to install it using NPM:

```bash
npm i @gits-id/avatar
```

To use the `Avatar` component, you will need to import it and then add it to your template:

```vue
<script setup lang="ts">
import VAvatar from '@gits-id/avatar';
import '@gits-id/avatar/dist/style.css';
</script>

<template>
  <VAvatar color="primary" name="John Doe" />
  <VAvatar color="primary" src="path-to-image.png" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-avatar--variants).
