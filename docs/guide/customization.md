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
