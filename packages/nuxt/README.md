# Nuxt GITS UI

GITS UI Component + Nuxt.

## Installation

- Install Nuxt GITS UI

```bash
yarn add @gits-id/ui-nuxt
```

- Install `@nuxtjs/tailwindcss`

```bash
yarn add --dev @nuxtjs/tailwindcss
```

- Add it to your `modules` section in your `nuxt.config.ts`:

```ts
import {defineNuxtConfig} from 'nuxt';

export default defineNuxtConfig({
  modules: ['@gits-id/ui-nuxt', '@nuxtjs/tailwindcss'],
  ssr: false,
  gitsUi: {
    //
  },
});
```

> Currently, because of `@gits-id/editor` is not SSR friendly, so we need to disable SSR by option `ssr: false`

Create your tailwind.config.js by running:

```bash
npx tailwindcss init
```

Update your `tailwind.config.js`:

```js
module.exports = {
  content: ['./node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx}'],
  presets: [require('@gits-id/tailwind-config/preset')],
};
```

Run the development server:

```bash
yarn dev
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
