---
outline: deep
---

# Avatar

The `Avatar` component is a visual representation of a user or an entity. It can be displayed in various shapes (e.g. circle, square, rounded) and can be initialized with either an image or a name.

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

### Avatar Indicator

We can display indicator to avatar component like online state or verified mark using `indicator` prop.

<LivePreview src="components-avatar--indicator">

```vue
<script setup>
const avatar1 =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
</script>

<template>
  <Avatar :src="avatar1" size="xl" indicator="online" />
  <Avatar :src="avatar1" size="xl" indicator="verified" />
  <Avatar
    :src="avatar1"
    size="xl"
    indicator="ic:outline-offline-bolt"
    indicator-class="text-amber-500"
  />
</template>
```

</LivePreview>

We can also use icon as the indicator by leveraging icon from `@morpheme/icon`. Just pass the icon name to the `indicator` prop and you good to go. You can also add custom class to indicator element using `indicator-class`. This is useful for example to change the icon color with Tailwind class.

```vue {5,6}
<template>
  <Avatar
    :src="avatar1"
    size="xl"
    indicator="ic:outline-offline-bolt"
    indicator-class="text-amber-500"
  />
</template>
```

### Avatar Group

We can group the avatar with `VAvatarGroup` component.

<LivePreview src="components-avatar--avatar-groups">

```vue
<script setup>
const avatar1 =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80';
const avatar2 =
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80';
</script>

<template>
  <VAvatarGroup spacing="xs">
    <VAvatar :src="avatar1" size="xl" />
    <VAvatar :src="avatar2" size="xl" />
    <VAvatar color="primary" size="xl">W</VAvatar>
    <VAvatar color="secondary" size="xl">AP</VAvatar>
    <VAvatar size="xl">+5</VAvatar>
  </VAvatarGroup>
</template>
```

</LivePreview>

### Props

<br>

#### Avatar

| Name                      | Type                                                      | Default  | Description               |
| ------------------------- | --------------------------------------------------------- | -------- | ------------------------- |
| [name](#name)             | `string`                                                  | `-`      | Avatar color              |
| [maxInitial](#maxInitial) | `number`                                                  | `2`      | Max initial chars to show |
| [color](#color)           | `string` , [available colors](/guide/theme#colors)        | `-`      | Avatar color              |
| [size](#size)             | `string`, `number`, [available sizes](/guide/theme#sizes) | `md`     | Avatar size               |
| [shape](#shape)           | `square` , `circle` , `rounded`                           | `circle` | Avatar shape              |
| [alt](#alt)               | `string`                                                  | `-`      | Image alt                 |

#### Avatar Group

| Name                | Type                                                      | Default | Description |
| ------------------- | --------------------------------------------------------- | ------- | ----------- |
| [spacing](#spacing) | `number \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'`  | Spacing     |

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
  --avatar-bg-color: var(--color-gray-200);
  --avatar-text-color: var(--color-gray-700);
  --avatar-border-color: var(--color-gray-200);
  --avatar-border-width: 0;
  --avatar-border-style: solid;
  --avatar-border-radius: var(--border-radius-full);
  --avatar-font-weight: 600;
  --avatar-font-size: var(--size-font-sm);
  --avatar-text-transform: uppercase;
  --avatar-group-spacing: -4px;
}
```

## Standalone Installation

To install the `Avatar` component individually, you can use the `@morpheme/avatar` package. Here's how to install it using NPM:

```bash
npm i @morpheme/avatar
```

To use the `Avatar` component, you will need to import it and then add it to your template:

```vue
<script setup lang="ts">
import VAvatar from '@morpheme/avatar';
</script>

<template>
  <VAvatar color="primary" name="John Doe" />
  <VAvatar color="primary" src="path-to-image.png" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-avatar--variants).
