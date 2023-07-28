# Customization

## Brand Colors

Morpheme UI includes 6 named colors with shades ranging from 50 to 900, similar to Tailwind CSS. These colors are:

- primary
- secondary
- info
- warning
- success
- error

You can view the full set of colors [here](https://gits-ui.web.app/?path=/story/foundation-colors--colors).

## Tailwind Preset

Morpheme UI comes with a default Morpheme Design as a Tailwind Preset via `@morpheme/tailwind-config/preset`.

## Creating Your Own Preset

To create your own preset, you can copy the default preset to your project with the following command:

```bash
cp ./node_modules/@morpheme/tailwind-config/preset.js ./src/preset.js
```

This will create a `preset.js` file in the `src` directory that you can then modify to fit your needs. For example, you can customize the colors as follows:

```js
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.gray,
        info: colors.sky,
        success: colors.emerald,
        warning: colors.yellow,
        error: colors.rose,
      },
    },
  },
  presets: [require('@morpheme/tailwind-config/preset')],
};
```

Once you have customized your preset, you can use it in your project by changing the path to your local preset file in the Tailwind configuration:

```js{12}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './node_modules/@morpheme/**/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('./src/preset')],
};
```

## Customize Component with Tailwind Arbitrary Values and CSS Properties

You'll be delighted to discover that you can use Tailwind arbitrary values and CSS properties to customize the appearance of not only your modal component but also other components within your Vue applications. Tailwind CSS makes it a breeze to create stylish and unique designs for various components. Let's see how it's done:

```vue
<template>
  <VModal
    model-value
    title="Modal Title"
    class="
      [--v-modal-bg-color:var(--color-primary-600)]
      [--v-modal-title-color:var(--color-yellow-300)]
      [--v-modal-text-color:var(--color-white)]
      [--btn-text-color:var(--color-white)]
    "
  >
    Hello Tailwind!
  </VModal>

  <VCard
    class="
      [--card-bg-color:var(--color-gray-200)]
      [--card-color:var(--color-gray-800)]
    "
  >
    <h2>Card Content</h2>
    <p>Some text in the card.</p>
  </VCard>
</template>
```

In the code above, we have a Vue component that includes a `<VModal>` component and another component called `<VCard>`. Both components can be customized using Tailwind arbitrary values and CSS properties applied directly to their respective class attributes.

Custom CSS properties are defined using double hyphens (e.g., `--v-modal-bg-color`, `--v-modal-title-color`, etc.). The values of these custom CSS properties are set to Tailwind CSS color variables (e.g., `--color-primary-600`, `--color-yellow-300`, etc.).

With this setup, you have the flexibility to modify the appearance of various components within your Vue application, creating a consistent and harmonious design across all elements.