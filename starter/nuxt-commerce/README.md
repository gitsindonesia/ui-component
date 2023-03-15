# nuxt-commerce

An extensible e-commerce template powered by Nuxt.js and GITS UI.

## Features

- Integrated with [GITS UI](https://gitsindonesia.github.io/ui-component/)
- Built-in Pages:
  - `/`
  - `/products`
  - `/products/:id`
- Customizable via Nuxt Layer
- Configurable via `app.config.ts`

## Demo

- [Online demo](https://gits-nuxt-commerce.vercel.app/commerce)
- [Source code](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-commerce)
- Try it online on [Stackblitz](https://stackblitz.com/github/gitsindonesia/ui-component/tree/main/starter/nuxt-commerce)

## Installation

```bash
npm i -D @gits-id/nuxt-commerce
```

## Usage

Add it to the `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: '@gits-id/nuxt-commerce',
});
```

## Configuration

You can change the default options for commerce pages like redirect url and head options via `app.config.ts`.

You can checkout the default configuration in the [source of this file](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-commerce/app.config.ts).

## Components

Checkout the list of available components [here](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-commerce/components).

## Pages

To customize the pages, just override the default pages by creating file in your Nuxt app with the same as the theme.

| Path                       | Description             |
| -------------------------- | ----------------------- |
| `pages/index.vue`          | The home page           |
| `pages/products/index.vue` | The product list page   |
| `pages/products/[id].vue`  | The product detail page |

## Authentication

Authentication is extended from [`@gits-id/nuxt-auth`](../nuxt-auth/) package.

## GITS UI

Checkout the [official documentation](https://gitsindonesia.github.io/ui-component/) to
learn more about `GITS UI`.

## License

MIT
