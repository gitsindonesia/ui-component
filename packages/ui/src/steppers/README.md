# Morpheme Steppers Component

## Installation

npm

```
npm i @morpheme/stepper
```

yarn

```
yarn add @morpheme/stepper
```

pnpm

```
pnpm i @morpheme/stepper
```

## Usage

```vue
<script setup lang="ts">
import Stepper from '@morpheme/stepper';

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

View `Spinner` documentation [here](https://gitsindonesia.github.io/ui-component/components/stepper.html).

## License

MIT
