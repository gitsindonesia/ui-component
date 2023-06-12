---
outline: deep
---

# Bottom Navigation

The `VBottomNavigation` component is an alternative to the sidebar. It is primarily used for mobile applications and comes in different colors, icons and and text.

## Usage

### Basic Usage

While it is meant to be used with Vue Router, you can also programmatically control the active state by using the item's `index`.

<LivePreview src="components-bottomnavigation--default" >

```vue
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

</LivePreview>

### Default Active

You can set the default active of item using `default-active` prop.

<LivePreview src="components-bottomnavigation--default-active" >

```vue
<template>
  <VBottomNavigation :default-active="1">
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

</LivePreview>

### Grow

Using the `grow` property forces the item to fill all available space.

<LivePreview src="components-bottomnavigation--grow" >

```vue
<template>
  <VBottomNavigation grow>
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

</LivePreview>

### With Vue Router

Bottom navigation automatically set active state when using with Vue Router. Add the `to` prop to the `VBottomNavigationItem` component and you good to go.

<LivePreview src="components-bottomnavigation--with-vue-router" >

```vue
<template>
  <div class="min-h-screen">
    <RouterView />
  </div>

  <VBottomNavigation>
    <VBottomNavigationItem to="/" icon="ri:home-line">
      Home
    </VBottomNavigationItem>
    <VBottomNavigationItem to="/recents" icon="ri:history-line">
      Recents
    </VBottomNavigationItem>
    <VBottomNavigationItem to="/favorites" icon="ri:heart-line">
      Favorites
    </VBottomNavigationItem>
    <VBottomNavigationItem to="/nearby" icon="ri:map-pin-2-line">
      Nearby
    </VBottomNavigationItem>
    <VBottomNavigationItem to="/account" icon="ri:user-line">
      Account
    </VBottomNavigationItem>
  </VBottomNavigation>
</template>
```

</LivePreview>

### Colors

Use `color` prop to change the active color.

<LivePreview src="components-bottomnavigation--colors" >

```vue
<template>
  <VBottomNavigation color="primary">
    <!-- mode code -->
  </VBottomNavigation>
  <VBottomNavigation color="secondary">
    <!-- mode code -->
  </VBottomNavigation>
  <VBottomNavigation color="info">
    <!-- mode code -->
  </VBottomNavigation>
  <VBottomNavigation color="warning">
    <!-- mode code -->
  </VBottomNavigation>
  <VBottomNavigation color="error">
    <!-- mode code -->
  </VBottomNavigation>
  <VBottomNavigation color="success">
    <!-- mode code -->
  </VBottomNavigation>
  <VBottomNavigation color="dark">
    <!-- mode code -->
  </VBottomNavigation>
  <VBottomNavigation color="default">
    <!-- mode code -->
  </VBottomNavigation>
</template>
```

</LivePreview>

### `v-model`

Use `v-model` to toggle show or hide the component.

<LivePreview src="components-bottomnavigation--colors" >

```vue
<script setup lang="ts">
const isOpen = ref(true)
</script>

<template>
  <VBtn @click="isOpen = !isOpen">Toggle Navigation</VBtn>

  <VBottomNavigation v-model="isOpen">
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

</LivePreview>

## Props

### `VBottomNavigation`

| Name                              | Type      | Default      |
| --------------------------------- | --------- | ------------ |
| [`modelValue`](#modelValue)       | `boolean` | `true`       |
| [`color`](#color)                 | `string`  | `'primary'`  |
| [`grow`](#grow)                   | `boolean` | `false`      |
| [`fixed`](#fixed)                 | `boolean` | `true`       |
| [`defaultActive`](#defaultActive) | `number`  | `0`          |
| [`transition`](#transition)       | `string`  | `'slide-up'` |

### `VBottomNavigationItem`

| Name                                    | Type                                          | Default                               |
| --------------------------------------- | --------------------------------------------- | ------------------------------------- |
| [`icon`](#icon)                         | `string`                                      | `undefined`                           |
| [`iconSize`](#iconSize)                 | `string`                                      | `'sm'`                                |
| [`text`](#text)                         | `string`                                      | `undefined`                           |
| [`to`](#to)                             | `string   \| RouteLocation`                   | `undefined`                           |
| [`href`](#href)                         | `string`                                      | `undefined`                           |
| [`nuxt`](#nuxt)                         | `boolean`                                     | `false`                               |
| [`as`](#as)                             | `string                     \| Vue Component` | `'button'`                            |
| [`exactActiveClass`](#exactActiveClass) | `string`                                      | `'v-bottom-navigation__item--active'` |

## Events

### `VBottomNavigation`

| Name                                      | Payload            | Description                     |
| ----------------------------------------- | ------------------ | ------------------------------- |
| [`update:modelValue`](#update:modelValue) | `{value: boolean}` | Fired when `modelValue` changed |

### `VBottomNavigationItem`

None

## Slots

### `VBottomNavigation`

| Name                  | Props | Description          |
| --------------------- | ----- | -------------------- |
| [`default`](#default) | `{}`  | The default Vue slot |

### `VBottomNavigationItem`

| Name                  | Props | Description               |
| --------------------- | ----- | ------------------------- |
| [`default`](#default) | `{}`  | The default Vue slot      |
| [`icon`](#icon)       | `{}`  | Used to place custom icon |

## CSS Variables

```scss
:root {
  --v-bottom-navigation-padding-x: 0;
  --v-bottom-navigation-padding-y: var(--size-spacing-3);
  --v-bottom-navigation-bg-color: var(--color-white);

  // content
  --v-bottom-navigation-content-gap: var(--size-spacing-2);

  // item
  --v-bottom-navigation-item-padding-x: var(--size-spacing-4);
  --v-bottom-navigation-item-padding-y: var(--size-spacing-2);
  --v-bottom-navigation-item-gap: var(--size-spacing-1);
  --v-bottom-navigation-item-color: var(--color-gray-700);

  // active color
  --v-bottom-navigation-item-active-bg-color: var(--color-primary-100);
  --v-bottom-navigation-item-active-color: var(--color-primary-700);

  // hover
  --v-bottom-navigation-item-hover-color: var(--v-bottom-navigation-item-active-color);
}
```

## Standalone Installation

You can also install the `VBottomNavigation` component individually via `@morpheme/bottom-navigation` package:

```bash
npm i @morpheme/bottom-navigation
```

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

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-bottomnavigation--default).
