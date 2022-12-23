# GITS UI

<div align="center">

![GITS.ID](https://gits.id/wp-content/uploads/2022/06/Logo-Main-1.png)

[![npm version](https://badge.fury.io/js/@gits-id%2Fui.svg)](https://badge.fury.io/js/@gits-id%2Fui)
![npm](https://img.shields.io/npm/dm/@gits-id/ui)

</div>

GITS UI is the official UI Component Library in GITS Indonesia built with Vue 3 and Tailwind CSS.

## Features

- Built with [Vue 3](https://vuejs.org/) [`<script setup>`](https://vuejs.org/api/sfc-script-setup.html)
- [Tailwind CSS](https://tailwindcss.com/)
- Includes [Iconify Vue](https://icones.js.org/) for customizable icon support
- Offers a first-party [Nuxt 3](https://nuxt.com/) module for easy integration into Nuxt projects
- Provides [TypeScript](https://www.typescriptlang.org/) support by default
- Allows for customization with CSS properties
- Modular design: allows for use as a complete UI framework or as individual plugins
- Headless by default (coming soon)
- Theming support (coming soon)

## Documentation

Detailed documentation can be found [here](https://gitsindonesia.github.io/ui-component/).

## Examples

See examples of GITS UI in action in the [examples](/examples/) directory:

- [Vue 3](/examples/vue/)
- [Nuxt 3 Starter with GITS UI](https://github.com/gitsindonesia/nuxt-starter)

## Development

To set up GITS UI for development:

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

GITS UI is licensed under the MIT license.
