# Using GITS UI with Nuxt

GITS UI is designed to work seamlessly with Nuxt projects. You can easily install it in a new or existing Nuxt project, or use our starter project to get started faster.

## Compatibility

Currently, **GITS UI only support Nuxt 3**.

## Installation

1. Install Nuxt GITS UI by running the following command:

```bash
yarn add @gits-id/ui-nuxt
```

2. Install `@nuxtjs/tailwindcss`:

```bash
yarn add --dev @nuxtjs/tailwindcss
```

3. Optional: Install `sass` if you want to use SASS bundle:

```bash
yarn add --dev sass
```

4. Add the modules to your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  modules: ['@gits-id/ui-nuxt', '@nuxtjs/tailwindcss'],
  gitsUi: {
    // configuration options for GITS UI go here
  },
});
```

5. Create your tailwind config by running:

```bash
npx tailwindcss init
```

6. Scan the `@gits-id/*` folders inside the `node_modules` by adding `'./node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx,css}'` to the `content` block in your Tailwind config. Also, add the default preset to the `presets` option.

```js {2,3}
module.exports = {
  content: ['./node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx,css}'],
  presets: [require('@gits-id/tailwind-config/preset')],
};
```

7. Run the development server:

```bash
yarn dev
```

## Options

Type:

```ts
export interface ModuleOptions {
  /**
   * Determine whether to load the css bundle.
   *
   * @default false
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   css: true
   * })
   */
  css?: boolean;
  /**
   * Determine whether to load the sass bundle.
   *
   * @default false
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   sass: true
   * })
   */
  sass?: boolean;
  /**
   * Determine whether to auto-imports the components.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   components: true
   * })
   */
  components?: boolean;
  /**
   * Determine whether to transpile dependencies.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   transpileDeps: true
   * })
   */
  transpileDeps?: boolean;
  /**
   * Determine whether to load floating vue styles.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   loadFloatingVueStyles: true
   * })
   */
  loadFloatingVueStyles?: boolean;
  /**
   * Determine whether to load default styles.
   * Only works when `css` and `scss` is `false`.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  gitsUi: {
   *   loadDefaultStyles: false
   * })
   */
  loadDefaultStyles?: boolean;
}
```

Default Options:

```ts
defaults: {
  css: false,
  sass: false,
  components: true,
  transpileDeps: true,
  loadFloatingVueStyles: true,
  loadDefaultStyles: true,
},
```

## Starter

Checkout [starter](/guide/starter) page to quickly setup your project with Nuxt.js.
