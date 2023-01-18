# Customization

## Brand Colors

GITS UI includes 6 named colors with shades ranging from 50 to 900, similar to Tailwind CSS. These colors are:

- primary
- secondary
- info
- warning
- success
- error

You can view the full set of colors [here](https://gits-ui.web.app/?path=/story/foundation-colors--colors).

## Tailwind Preset

GITS UI comes with a default GITS Design as a Tailwind Preset via `@gits-id/tailwind-config/preset`.

## Creating Your Own Preset

To create your own preset, you can copy the default preset to your project with the following command:

```bash
cp ./node_modules/@gits-id/tailwind-config/preset.js ./src/preset.js
```

This will create a `preset.js` file in the `src` directory that you can then modify to fit your needs. For example, you can customize the colors as follows:

```js
const colors = require('tailwindcss/colors');

// default GITS Color
const primary = {
  DEFAULT: '#28A0F6',
  50: '#D8EEFD',
  100: '#C5E5FD',
  200: '#9DD4FB',
  300: '#76C3F9',
  400: '#4FB1F8',
  500: '#28A0F6',
  600: '#0984DD',
  700: '#0764A7',
  800: '#054471',
  900: '#02233B',
};

// default GITS Color
const secondary = {
  DEFAULT: '#FF8B49',
  50: '#FFFFFF',
  100: '#FFF3EC',
  200: '#FFD9C3',
  300: '#FFBF9B',
  400: '#FFA572',
  500: '#FF8B49',
  600: '#FF6711',
  700: '#D84E00',
  800: '#A03A00',
  900: '#682600',
};

module.exports = {
  theme: {
    extend: {
      colors: {
        primary,
        secondary,
        info: colors.sky,
        success: colors.emerald,
        warning: colors.yellow,
        error: colors.rose,
      },
    },
  },
  presets: [require('@gits-id/tailwind-config/preset')],
};
```

Once you have customized your preset, you can use it in your project by changing the path to your local preset file in the Tailwind configuration:

```js{12}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require('./src/preset')],
};
```
