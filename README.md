# Morpheme UI (GITS UI)

<div align="center">

![Morpheme.ID](https://gits.id/wp-content/uploads/2022/06/Logo-Main-1.png)

[![npm version](https://badge.fury.io/js/@gits-id%2Fui.svg)](https://badge.fury.io/js/@gits-id%2Fui)
![npm](https://img.shields.io/npm/dm/@gits-id/ui)

</div>

Morpheme UI (GITS UI) - A free and open-source Vue UI Library based on Morpheme Design System.

## Features

- 💻 Built with [Vue 3](https://vuejs.org/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 💎 Includes [Iconify Vue](https://icones.js.org/) for customizable icon support
- 📦 Offers a first-party [Nuxt 3](https://nuxt.com/) module for easy integration into Nuxt projects
- 🚀 Provides [TypeScript](https://www.typescriptlang.org/) support by default
- 🎨 Allows for customization with CSS properties
- 🔌 Modular design: allows for use as a complete UI framework or as individual plugins
- 🏷 Headless component by default
- 🎨 Dark mode: ships with dark mode styles out-of-the-box
- 🌈 Theming support: create your own custom theme easily

## Documentation

Detailed documentation can be found [here](https://gitsindonesia.github.io/ui-component/).

## Starter

Checkout starter of Morpheme UI in the [starter](/starter/) directory.

### [Vue 3](/starter/vue/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gitsindonesia/ui-component/tree/main/starter/vue)

### [Nuxt 3 + Minimal Starter](/starter/nuxt-minimal/)

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gitsindonesia/ui-component/tree/main/starter/nuxt-minimal)

### Nuxt 3 + Complete Starter

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gitsindonesia/nuxt-starter)

## Development

To set up Morpheme UI for development:

- Install [lerna](https://lerna.js.org/) and [yarn](https://yarnpkg.com/) globally:
  ```bash
  npm i -g lerna yarn
  ```
- Bootstap all packages:
  ```
  lerna bootstrap
  ```
- Build all packages:
  ```
  lerna run build
  ```
- Run storybook:

  ```bash
  yarn dev
  ```

## Running Documentation

To run the documentation locally:

```
yarn docs:dev
```

To build the documentation for production:

```
yarn docs:build
```

## License

Morpheme UI is licensed under the MIT license.
