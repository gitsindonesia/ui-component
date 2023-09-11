# Nuxt Morpheme UI

Morpheme UI + Nuxt 3.

## Installation

- Install Nuxt Morpheme UI

```bash
yarn add @morpheme/nuxt
```

- Install `@nuxtjs/tailwindcss` and `sass`

```bash
yarn add --dev @nuxtjs/tailwindcss sass
```

- Add it to your `modules` section in your `nuxt.config.ts`:

```ts
import {defineNuxtConfig} from 'nuxt';

export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss'],
  morpheme: {
    theme: 'morpheme',
    sass: true,
    darkMode: false,
  },
});
```

Create your `tailwind.config.js` by running:

```bash
npx tailwindcss init -p
```

Update your `tailwind.config.js`:

```js
module.exports = {
  content: ['./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}'],
  presets: [require('@morpheme/tailwind-config/preset')],
};
```

Run the development server:

```bash
yarn dev
```

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
