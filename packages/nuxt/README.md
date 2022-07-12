# Nuxt GITS UI

GITS UI Component + Nuxt 3.

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
  gitsUi: {
    //
  },
});
```

Create your `tailwind.config.js` by running:

```bash
npx tailwindcss init
```

Update your `tailwind.config.js`:

```js
module.exports = {
  content: ['./node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx,css}'],
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
