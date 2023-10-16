# Using Morpheme UI with Nuxt

Morpheme UI is designed to work seamlessly with Nuxt projects. You can easily install it in a new or existing Nuxt project, or use our starter project to get started faster.

## Compatibility

Currently, **Morpheme UI only support Nuxt 3**.

## Installation

1. Install Nuxt Morpheme UI by running the following command:

```bash
yarn add @morpheme/nuxt
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
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss'],
  morpheme: {
    // configuration options for Morpheme UI go here
  },
});
```

5. Create your tailwind config by running:

```bash
npx tailwindcss init -p
```

6. Scan the `@morpheme/*` folders inside the `node_modules` by adding `'./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}'` to the `content` block in your Tailwind config. Also, add the default preset to the `presets` option.

```js {2,3}
module.exports = {
  content: ['./node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx,css}'],
  presets: [require('@morpheme/tailwind-config/preset')],
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
   *  morpheme: {
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
   *  morpheme: {
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
   *  morpheme: {
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
   *  morpheme: {
   *   transpileDeps: true
   * })
   */
  transpileDeps?: boolean;
  /**
   * Determine whether to load floating vue styles. Only works when `theme` is `legacy`.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  morpheme: {
   *   loadFloatingVueStyles: true
   * })
   */
  loadFloatingVueStyles?: boolean;
  /**
   * Determine whether to load default styles.
   * Only works when `css` and `scss` is `false` and `theme` is `legacy`.
   *
   * @default true
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  morpheme: {
   *   loadDefaultStyles: false
   * })
   */
  loadDefaultStyles?: boolean;
  /**
   * Determine whether to load dark mode styles.
   *
   * @default false
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  morpheme: {
   *   darkMode: true
   * })
   */
  darkMode?: boolean;
  /**
   * Determine whether to optimize default deps.
   *
   * @default false
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  morpheme: {
   *   optimizeDeps: true
   * })
   */
  optimizeDeps?: boolean;
  /**
   * Name of the theme to use. Available options: `morpheme`, `legacy`.
   *
   * @default 'morpheme'
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   *  morpheme: {
   *   theme: 'morpheme'
   * })
   */
  theme: 'morpheme' | 'legacy';
  /**
   * Determine whether to use experimental components.
   *
   * @default false
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   * morpheme: {
   *  experimentalComponents: true
   * })
   */
  experimentalComponents: boolean;
}
```

Default Options:

```ts
{
  css: false,
  sass: false,
  components: true,
  transpileDeps: true,
  loadFloatingVueStyles: true,
  loadDefaultStyles: true,
  darkMode: false,
  optimizeDeps: true,
  theme: 'morpheme',
  experimentalComponents: true,
}
```

Config example:

```ts {8-11}
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss'],
  // https://gitsindonesia.github.io/ui-component/guide/nuxt.html#options
  morpheme: {
    // use `morpheme` theme
    theme: 'morpheme'
    // enable dark mode
    darkMode: true,
  },
});
```

## Starter

Checkout [starter](/guide/starter) page to quickly setup your project with Nuxt.js.
