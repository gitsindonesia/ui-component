# GITS Pages Component

> Reusable Pages Component

## Installation

npm

```
npm i @gits-id/pages
```

yarn

```
yarn add @gits-id/pages
```

pnpm

```
pnpm i @gits-id/pages
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
} from '@gits-id/pages';
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
