# Using GITS UI with Nuxt 3

GITS UI is designed to work seamlessly with Nuxt 3 projects. You can easily install it in a new or existing Nuxt project, or use our starter project to get started faster.

## Installation

1. Install Nuxt GITS UI by running the following command:

  ```bash
  yarn add @gits-id/ui-nuxt
  ```

2. Install `@nuxtjs/tailwindcss`

```bash
yarn add --dev @nuxtjs/tailwindcss
```

3. Add the modules to your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  modules: ['@gits-id/ui-nuxt', '@nuxtjs/tailwindcss'],
  gitsUi: {
    // configuration options for GITS UI go here
  },
});
```

4. Create your `tailwind.config.js` by running:

```bash
npx tailwindcss init
```

5. Update your `tailwind.config.js`:

```js {2,3}
module.exports = {
  content: ['./node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx,css}'],
  presets: [require('@gits-id/tailwind-config/preset')],
};
```

6. Run the development server:

```bash
yarn dev
```

## Starter

You can use the Nuxt 3 Starter project, available [here](https://github.com/gitsindonesia/nuxt-starter) or online on [Stackblitz](https://stackblitz.com/github/gitsindonesia/nuxt-starter) as a starting point for your project.

To create a new project based on this starter, run the following commands:

```bash
npx nuxi init -t gh:gitsindonesia/nuxt-starter my-app
cd my-app
yarn
yarn dev
```
