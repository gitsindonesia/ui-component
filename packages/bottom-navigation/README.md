# Morpheme Bottom Navigation

Morpheme Bottom Navigation Component.

## Installation

npm

```
npm i @morpheme/bottom-navigation
```

yarn

```
yarn add @morpheme/bottom-navigation
```

pnpm

```
pnpm i @morpheme/bottom-navigation
```

## Usage

```vue
<script setup lang="ts">
import {VBottomNavigation, VBottomNavigationItem} from '@morpheme/bottom-navigation';
</script>

<template>
  <VBottomNavigation>
    <VBottomNavigationItem icon="ri:home-line">
      Home
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:history-line">
      Recents
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:heart-line">
      Favorites
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:map-pin-2-line">
      Nearby
    </VBottomNavigationItem>
    <VBottomNavigationItem icon="ri:user-line">
      Account
    </VBottomNavigationItem>
  </VBottomNavigation>
</template>
```

## Documentation

Check out storybook documentation [here](https://gits-ui.web.app/?path=/story/components-bottom-navigation--default).

## License

MIT
