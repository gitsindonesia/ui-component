# Customization

## Brand Colors

There are 6 named colors which come with its own shade from 50 to 900 like tailwind.

- primary
- secondary
- info
- warning
- success
- error

You can see the full colors [here](https://gits-ui.web.app/?path=/story/foundation-colors--colors).

## Tailwind Preset

GITS UI ships with default GITS Design as Tailwind Preset via `@gits-id/tailwind-config/preset`.

### Creating your own preset

To create your own preset, you can copy the default preset to your project.

```bash
cp ./node_modules/@gits-id/tailwind-config/preset.js ./src/preset.js
```

Now you can freely modify the preset color in `./src/preset.js` as you need:

```js
const tailwindColors = require('tailwindcss/colors');

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

const colors = {
  primary,
  secondary,
  info: tailwindColors.sky,
  success: tailwindColors.emerald,
  warning: tailwindColors.yellow,
  error: tailwindColors.rose,
};

module.exports = {
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@gits-id/tailwind-components/button'),
    require('@gits-id/tailwind-components/alert'),
  ],
};
```

After that, change the preset path to your local one and you good to go.

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
