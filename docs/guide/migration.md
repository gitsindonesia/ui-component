# Migration Guide

## `0.11.0`...`0.11.2`

### Features

- New `Icon` component. Registered globally as `v-icon`.
- Drop `vue-remix-icons` in favor of new `Icon` component.
- Nuxt: Transpile dependency automatically for better SSR support

### How to upgrade

Bump `@gits-id/ui` or `@gits-id/ui-nuxt` (for Nuxt 3) version to latest `^0.11.2` and run `yarn install` or `npm install`

Vue:

```json
{
  "dependencies": {
    "@gits-id/ui": "^0.11.2"
  }
}
```

Nuxt:

```json
{
  "dependencies": {
    "@gits-id/ui-nuxt": "^0.11.2"
  }
}
```

## `v0.10.5`

### BREAKING CHANGE

Since `v0.10.5`, in order add SSR Support, `VEditor` must be imported from `@gits-id/editor`.

To upgrade, change `VEditor` import from `@gits-id/ui` to `@gits-id/editor`.

```
- import {VEditor} from '@gits-id/ui/editor';
+ import {VEditor} from '@gits-id/editor';
```

**Optimizing bundle size**

To optimize bundle size of `VEditor` you can code-split the component using `defineAsyncComponent`:

```html
<script setup lang="ts">
  import {defineAsyncComponent} from 'vue';

  const VEditor = defineAsyncComponent(() => import('@gits-id/editor'));
</script>

<template>
  <VEditor name="content" />
</template>
```

## `v0.10.4`

- As of an experimental SSR support, change `VEditor` import from `@gits-id/ui` to `@gits-id/ui/editor`.

```
- import {VEditor} from '@gits-id/ui';
+ import {VEditor} from '@gits-id/ui/editor';
```
