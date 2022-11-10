# Use GITS UI with Nuxt 3

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

```js {2,3}
module.exports = {
  content: ['./node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx,css}'],
  presets: [require('@gits-id/tailwind-config/preset')],
};
```

Run the development server:

```bash
yarn dev
```

## Starter

Checkout Nuxt 3 Starter [here](https://github.com/gitsindonesia/nuxt-starter).

Try it online on [Stackblitz](https://stackblitz.com/github/gitsindonesia/nuxt-starter).

You can also scaffold new project with this starter using `nuxi`:

```bash
npx nuxi init -t gitsindonesia/nuxt-starter my-app
cd my-app
yarn
yarn dev
```
