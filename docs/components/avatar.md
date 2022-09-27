# Avatar

## Usage

To use the package, export `VAvatar` from `@gits-id/ui` or `Avatar` from `@gits-id/avatar` package. Then, import the styles from `@gits-id/avatar/dist/style.css`.

::: info
The `VAvatar` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Basic Usage

```vue
<script setup lang="ts">
// import style
import '@gits-id/avatar/dist/style.css';
</script>

<template>
  <!-- VAvatar is registered globally -->
  <VAvatar color="primary" name="John Doe" />
  <VAvatar color="primary" src="path-to-image.png" />
</template>
```

### Initial Name

- **prop**: `name`
- **type**: `string`
- **default**: ` `
- **required**: `false`

Use prop `name` to show the user initial name. You can pass the full name to the prop and it will automatically show the initial.

```vue
<script setup lang="ts">
// import style
import '@gits-id/avatar/dist/style.css';
</script>

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
<script setup lang="ts">
// import style
import '@gits-id/avatar/dist/style.css';
</script>

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

```vue
<script setup lang="ts">
// import style
import '@gits-id/avatar/dist/style.css';
</script>

<template>
  <VAvatar src="path-to-image.jpg" alt="John Doe" />
</template>
```

### Shape

- **prop**: `shape`
- **type**: `string`. Available values: `circle`, `rounded`, `square`.
- **default**: `circle`
- **required**: `true`

We can change the shape of avatar via `shape` prop. By the default, the shape is `circle`, but you can also change it to `rounded` or `square`.

```vue
<script setup lang="ts">
// import style
import '@gits-id/avatar/dist/style.css';
</script>

<template>
  <!-- default shape is circle -->
  <VAvatar src="path-to-image.jpg" alt="John Doe" />
  <VAvatar shape="square" src="path-to-image.jpg" alt="John Doe" />
  <VAvatar shape="rounded" src="path-to-image.jpg" alt="John Doe" />
</template>
```

## Props

| Name                      | Type                                                      | Default  | Description               |
| ------------------------- | --------------------------------------------------------- | -------- | ------------------------- |
| [name](#name)             | `string`                                                  | `-`      | Avatar color              |
| [maxInitial](#maxInitial) | `number`                                                  | `2`      | Max initial chars to show |
| [color](#color)           | `string` , [available colors](/guide/theme#colors)        | `-`      | Avatar color              |
| [size](#size)             | `string`, `number`, [available sizes](/guide/theme#sizes) | `md`     | Avatar size               |
| [shape](#shape)           | `square` , `circle` , `rounded`                           | `circle` | Avatar shape              |
| [alt](#alt)               | `string`                                                  | `-`      | Image alt                 |

## Methods

None

## Events

None

## Slots

| Name                | Description          |
| ------------------- | -------------------- |
| [default](#default) | The default Vue slot |

## CSS Variables

None

## Manual Installation

You can also install the `Avatar` component individually via `@gits-id/avatar` package:

```bash
yarn install @gits-id/avatar
```

```vue
<script setup lang="ts">
import VAvatar from '@gits-id/avatar';
</script>

<template>
  <VAvatar color="primary" name="John Doe" />
  <VAvatar color="primary" src="path-to-image.png" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-avatar--variants).
