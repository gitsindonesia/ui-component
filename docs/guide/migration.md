# Migration Guide

## `0.11.0`...`0.11.2`

## Features

- New `Icon` component. Registered globally as `v-icon`.
- Drop `vue-remix-icons` in favor of new `Icon` component.
- Nuxt: Transpile dependency automatically for better SSR support

## How to upgrade

Bump `@morpheme/ui` or `@morpheme/ui-nuxt` (for Nuxt 3) version to latest `^0.11.2` and run `yarn install` or `npm install`

Vue:

```json
{
  "dependencies": {
    "@morpheme/ui": "^0.11.2"
  }
}
```

Nuxt:

```json
{
  "dependencies": {
    "@morpheme/ui-nuxt": "^0.11.2"
  }
}
```

## `v0.10.5`

## BREAKING CHANGE

Since `v0.10.5`, in order add SSR Support, `VEditor` must be imported from `@morpheme/editor`.

To upgrade, change `VEditor` import from `@morpheme/ui` to `@morpheme/editor`.

```
- import {VEditor} from '@morpheme/ui/editor';
+ import {VEditor} from '@morpheme/editor';
```

**Optimizing bundle size**

To optimize bundle size of `VEditor` you can code-split the component using `defineAsyncComponent`:

```html
<script setup lang="ts">
  import {defineAsyncComponent} from 'vue';

  const VEditor = defineAsyncComponent(() => import('@morpheme/editor'));
</script>

<template>
  <VEditor name="content" />
</template>
```

## `v0.10.4`

- As of an experimental SSR support, change `VEditor` import from `@morpheme/ui` to `@morpheme/ui/editor`.

```
- import {VEditor} from '@morpheme/ui';
+ import {VEditor} from '@morpheme/ui/editor';
```
