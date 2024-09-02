# Morpheme Tooltip Component

> Reusable Tooltip Component

## Installation

npm

```
npm i @morpheme/tooltip
```

yarn

```
yarn add @morpheme/tooltip
```

pnpm

```
pnpm i @morpheme/tooltip
```

## Usage

First, install the `FloatingVuePlugin`:

```ts
import {createApp} from 'vue'
import {FloatingVuePlugin} from '@morpheme/tooltip'

const app = createApp()
// use the plugin
app.use(FloatingVuePlugin)
```

Then, use it like so:

```vue
<script setup lang="ts">
// import styles
import '@morpheme/themes/dist/morpheme/main.css';
// import component
import VTooltip from '@morpheme/tooltip';
</script>

<template>
  <VTooltip>
    <template #activator>
      <button>Hover me</button>
    </template>
  </VTooltip>
  <span>I am a tooltip</span>
</template>
```

## Documentation

View `Tooltip` documentation [here](https://gits-ui.web.app/?path=/story/components-tooltip--default).

## License

MIT
