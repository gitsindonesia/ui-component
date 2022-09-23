# Avatar

## Usage

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
