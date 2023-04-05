# Morpheme Banner

Morpheme Banner Component.

## Installation

npm

```
npm i @morpheme/banner
```

yarn

```
yarn add @morpheme/banner
```

pnpm

```
pnpm i @morpheme/banner
```

## Usage

```vue
<script setup lang="ts">
import {VBanner, VBannerText} from '@morpheme/banner';
import VBtn from '@morpheme/button';
</script>

<template>
  <VBanner color="primary">
    <VBannerText>
      Welcome to the <span class="font-semibold">Morpheme</span> Design System
    </VBannerText>
    <template #actions="{close}">
      <VBtn text flush @click="close" class="!text-white" prefix-icon="ri:close-line" />
    </template>
  </VBanner>
</template>
```

## Documentation

Check out storybook documentation [here](https://gits-ui.web.app/?path=/story/components-banner--default).

## License

MIT
