# Migration Guide


## From GITS UI to Morpheme UI (`1.0.0-beta.5`)

Package namespace has been renamed from `@gits-id/*` to `@morpheme/*`. With the exception for Nuxt module is now `@morpheme/nuxt` instead of `@morpheme/ui-nuxt`.

Here are full list of component changes:

| From                           | To                              |
| ------------------------------ | ------------------------------- |
| `@gits-id/alert`               | `@morpheme/alert`               |
| `@gits-id/app-bar`             | `@morpheme/app-bar`             |
| `@gits-id/autocomplete`        | `@morpheme/autocomplete`        |
| `@gits-id/avatar`              | `@morpheme/avatar`              |
| `@gits-id/badge`               | `@morpheme/badge`               |
| `@gits-id/bottom-sheet`        | `@morpheme/bottom-sheet`        |
| `@gits-id/breadcrumbs`         | `@morpheme/breadcrumbs`         |
| `@gits-id/button`              | `@morpheme/button`              |
| `@gits-id/card`                | `@morpheme/card`                |
| `@gits-id/collapsible`         | `@morpheme/collapsible`         |
| `@gits-id/container`           | `@morpheme/container`           |
| `@gits-id/dropdown`            | `@morpheme/dropdown`            |
| `@gits-id/editor`              | `@morpheme/editor`              |
| `@gits-id/forms`               | `@morpheme/forms`               |
| `@gits-id/icon`                | `@morpheme/icon`                |
| `@gits-id/list`                | `@morpheme/list`                |
| `@gits-id/logo`                | `@morpheme/logo`                |
| `@gits-id/menu`                | `@morpheme/menu`                |
| `@gits-id/menus`               | `@morpheme/menus`               |
| `@gits-id/modal`               | `@morpheme/modal`               |
| `@gits-id/multi-select`        | `@morpheme/multi-select`        |
| `@gits-id/nav-drawer`          | `@morpheme/nav-drawer`          |
| `@gits-id/navbar`              | `@morpheme/navbar`              |
| `@gits-id/pagination`          | `@morpheme/pagination`          |
| `@gits-id/progress-bar`        | `@morpheme/progress-bar`        |
| `@gits-id/quill-editor`        | `@morpheme/quill-editor`        |
| `@gits-id/rating`              | `@morpheme/rating`              |
| `@gits-id/select`              | `@morpheme/select`              |
| `@gits-id/shimmer`             | `@morpheme/shimmer`             |
| `@gits-id/spinner`             | `@morpheme/spinner`             |
| `@gits-id/stats`               | `@morpheme/stats`               |
| `@gits-id/stepper`             | `@morpheme/stepper`             |
| `@gits-id/switch`              | `@morpheme/switch`              |
| `@gits-id/table`               | `@morpheme/table`               |
| `@gits-id/tabs`                | `@morpheme/tabs`                |
| `@gits-id/tailwind-components` | `@morpheme/tailwind-components` |
| `@gits-id/tailwind-config`     | `@morpheme/tailwind-config`     |
| `@gits-id/theme`               | `@morpheme/theme`               |
| `@gits-id/toast`               | `@morpheme/toast`               |
| `@gits-id/tooltip`             | `@morpheme/tooltip`             |
| `@gits-id/utils`               | `@morpheme/utils`               |
| `@gits-id/ui`                  | `@morpheme/ui`                  |
| `@gits-id/ui-nuxt`             | `@morpheme/nuxt`                |

### How to upgrade

Basically just rename all `@gits-id/*` dependencies to `@morpheme/*` in your `package.json`:

:::tip
If you don't want to change the import manually, you can use **Search and Replace** feature in **VSCode**, **WebStorm** or other editors.
:::

Change `@gits-id/ui` to `@morpheme/ui`:

```json
{
  "dependencies": {
    "@gits-id/ui": "^1.0.0-beta.4" // [!code --]
    "@morpheme/ui": "^1.0.0-beta.5" // [!code ++]
  }
}
```

For Nuxt user, change `@gits-id/ui-nuxt` to `@morpheme/nuxt`:

```json
{
  "dependencies": {
    "@gits-id/ui-nuxt": "^1.0.0-beta.4" // [!code --]
    "@morpheme/nuxt": "^1.0.0-beta.5" // [!code ++]
  }
}
```

Then, change the Nuxt module usage in your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: [
    '@gits-id/ui-nuxt', // [!code --]
    '@morpheme/nuxt', // [!code ++]
  ],
});
```


Then, run install the dependencies:

```bash
# with NPM
npm install

# with Yarn
yarn

# with PNPM
pnpm install
```

Then, update import usage from `@gits-id/*` to `@morpheme/ui`:

```vue
<script setup lang="ts">
import Icon from '@gits-id/icon'; // [!code --]
import Icon from '@morpheme/icon'; // [!code ++]

import {VBtn} from '@gits-id/ui'; // [!code --]
import {VBtn} from '@morpheme/ui'; // [!code ++]
</script>

<template>
  <div>
    ...
  </div>
</template>
```

Then, also update your Tailwind Config reference:

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  // more code...
  content: ['./node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx,css}'], // [!code --]
  content: ['./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}'], // [!code ++]
  // more code...
  presets: [require('@gits-id/tailwind-config/preset')], // [!code --]
  presets: [require('@morpheme/tailwind-config/preset')], // [!code ++]
};
```


## `0.11.0`...`0.11.2`

### Features

- New `Icon` component. Registered globally as `v-icon`.
- Drop `vue-remix-icons` in favor of new `Icon` component.
- Nuxt: Transpile dependency automatically for better SSR support

### How to upgrade

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

### BREAKING CHANGE

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
