# GITS Steppers Component

## Installation

npm

```
npm i @gits-id/stepper
```

yarn

```
yarn add @gits-id/stepper
```

pnpm

```
pnpm i @gits-id/stepper
```

## Usage

```vue
<script setup lang="ts">
import Stepper from '@gits-id/stepper';

const items = Array.from({length: 5}, (v, k) => ({
  title: 'Title',
  subtitle: 'Subtitle',
  path: '/step/' + k,
}));
</script>

<template>
  <Stepper :items="items" />
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-steppers--default).

## License

MIT
