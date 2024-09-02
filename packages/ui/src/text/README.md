# Morpheme Text

Morpheme Text Component.

## Installation

npm

```
npm i @morpheme/text
```

yarn

```
yarn add @morpheme/text
```

pnpm

```
pnpm i @morpheme/text
```

## Usage

```vue
<script setup lang="ts">
// import component
import VText from '@morpheme/text';
// import styles
import '@morpheme/text/dist/style.css';
</script>

<template>
  <VText>Hello World</VText>
</template>
```

## Font Weight

```vue
<script setup lang="ts">
// import component
import VText from '@morpheme/text';
// import styles
import '@morpheme/text/dist/style.css';
</script>

<template>
  <VText font-weight="semibold">Hello World</VText>
</template>
```

## Variant

```vue
<script setup lang="ts">
// import component
import VText from '@morpheme/text';
// import styles
import '@morpheme/text/dist/style.css';
</script>

<template>
  <VText variant="xs">Hello World</VText>
  <VText variant="sm">Hello World</VText>
  <VText variant="md">Hello World</VText>
  <VText variant="lg">Hello World</VText>
  <VText variant="xl">Hello World</VText>
  <VText variant="display-xs">Hello World</VText>
  <VText variant="display-sm">Hello World</VText>
  <VText variant="display-md">Hello World</VText>
  <VText variant="display-lg">Hello World</VText>
  <VText variant="display-xl">Hello World</VText>
</template>
```

## Colors

```vue
<script setup lang="ts">
// import component
import VText from '@morpheme/text';
// import styles
import '@morpheme/text/dist/style.css';
</script>

<template>
  <VText color="primary" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="secondary" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="info" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="warning" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="error" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="success" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <!-- design token color -->
  <VText color="rose.700" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <!-- custom color -->
  <VText color="#FF87A0" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <VText color="lightblue" variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
  <!-- unspecify color -->
  <VText variant="display-xs">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit
  </VText>
</template>
```

## Documentation

View `Tooltip` documentation [here](https://gits-ui.web.app/?path=/story/components-tooltip--default).

## License

MIT
