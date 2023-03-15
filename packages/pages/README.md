# GITS Pages Component

> Reusable Pages Component

## Installation

npm

```
npm i @morpheme/pages
```

yarn

```
yarn add @morpheme/pages
```

pnpm

```
pnpm i @morpheme/pages
```

## Usage

```vue
<script setup lang="ts">
import {
  // Base Template
  Auth,
  // Pages Components
  Activation,
  ForgotPassword,
  Login,
  ResetPassword,
  // NotFound component no requires Auth as its parent
  NotFound,
} from '@morpheme/pages';
</script>

<template>
  <Auth>
    <!-- use pages component as child of Auth component -->
    <Activation />
  </Auth>
</template>
```

## Documentation

View `Pages` documentation [here](https://gits-ui.web.app/?path=/story/components-pages--default).

## License

MIT
