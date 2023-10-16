# Using Morpheme UI with Nuxt

Morpheme UI is designed to work seamlessly with Nuxt 3 projects. You can easily install it in a new or existing Nuxt project, or use our starter project to get started faster.

::: tip
Checkout [Morpheme CLI](/tools/cli) to setup your application quickly.
:::

## Compatibility

Currently, **Morpheme UI only support Nuxt 3**.

## Installation

1. Install Nuxt Morpheme UI by running the following command:

```bash
yarn add @morpheme/nuxt
```

2. Install `@nuxtjs/tailwindcss` and `sass`:

```bash
yarn add --dev @nuxtjs/tailwindcss sass
```

3. Add the modules to your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss'],
  morpheme: {
    darkMode: false,
    sass: true,
    theme: 'morpheme',
  },
});
```

1. Create your tailwind config by running:

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
  /**
   * Component prefix.
   *
   * @default 'V'
   * @example
   * // nuxt.config.ts
   * export default defineConfig({
   * morpheme: {
   * prefix: 'M'
   * })
   */
  prefix: string;
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
  prefix: 'V'
}
```

Config example:

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@morpheme/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  // https://gitsindonesia.github.io/ui-component/guide/nuxt.html#options
  morpheme: {
    // use `morpheme` theme
    theme: 'morpheme'
    // enable dark mode
    darkMode: true,
    // load SASS bundle instead of CSS
    sass: true,
  },
});
```

## Experimental Components

By default, experimental components are not auto-imported. That's mean you need to import it manually or you can auto-import it by setting `experimentalComponents` option to `true` in your Nuxt config.

```ts {16}
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@morpheme/nuxt',
    '@nuxtjs/tailwindcss'
  ],
  // https://gitsindonesia.github.io/ui-component/guide/nuxt.html#options
  morpheme: {
    // use `morpheme` theme
    theme: 'morpheme'
    // enable dark mode
    darkMode: true,
    // load SASS bundle instead of CSS
    sass: true,
    // auto-import experimental components
    experimentalComponents: true,
  },
});
```

When you auto-import the experimental components, you will notice some component name is conflict with the existing one. That's because some of the experimental components are built to replace the current exisiting components.

### List of experimental components

```ts
const experimentalComponents: AddComponentOptions[] = [
  {
    name: 'Select',
    filePath: '@morpheme/select/src/Select.vue',
  },
  {
    name: 'Autocomplete',
    filePath: '@morpheme/autocomplete/src/Autocomplete.vue',
  },
  {
    name: 'Checkbox',
    filePath: '@morpheme/forms/src/checkbox/Checkbox.vue',
  },
  {
    name: 'CheckboxField',
    filePath: '@morpheme/forms/src/checkbox/CheckboxField.vue',
  },
  {
    name: 'FileInput',
    filePath: '@morpheme/forms/src/file-input/FileInput.vue',
  },
  {
    name: 'FileInputButtonActivator',
    filePath: '@morpheme/forms/src/file-input/FileInputButtonActivator.vue',
  },
  {
    name: 'FileInputDefaultActivator',
    filePath: '@morpheme/forms/src/file-input/FileInputDefaultActivator.vue',
  },
  {
    name: 'FileInputField',
    filePath: '@morpheme/forms/src/file-input/FileInputField.vue',
  },
  {
    name: 'FileInputItem',
    filePath: '@morpheme/forms/src/file-input/FileInputItem.vue',
  },
  {
    name: 'FileInputItems',
    filePath: '@morpheme/forms/src/file-input/FileInputItems.vue',
  },
  {
    name: 'FormSelect',
    filePath: '@morpheme/forms/src/form-select/Select.vue',
  },
  {
    name: 'FormSelectInputField',
    filePath: '@morpheme/forms/src/form-select/SelectField.vue',
  },
  {
    name: 'Input',
    filePath: '@morpheme/forms/src/input/Input.vue',
  },
  {
    name: 'InputField',
    filePath: '@morpheme/forms/src/input/InputField.vue',
  },
  {
    name: 'SelectOptions',
    filePath: '@morpheme/forms/src/input/SelectOptions.vue',
  },
  {
    name: 'Radio',
    filePath: '@morpheme/forms/src/radio/Radio.vue',
  },
  {
    name: 'Textarea',
    filePath: '@morpheme/forms/src/textarea/TextareaInput.vue',
  },
  {
    name: 'TextareaField',
    filePath: '@morpheme/forms/src/textarea/TextareaInputField.vue',
  },
];
```

You can view the latest experimental component list [here](https://github.com/gitsindonesia/ui-component/blob/main/packages/nuxt/src/module.ts#L554).
