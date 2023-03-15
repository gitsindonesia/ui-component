# nuxt-admin

An extensible admin template powered by Nuxt.js and Morpheme UI.

## Features

- Integrated with [Morpheme UI](https://gitsindonesia.github.io/ui-component/)
- Dark mode ready
- Built-in Pages:
  - `/admin`
  - `/admin/profile`
- Customizable via Nuxt Layer
- Configurable via `app.config.ts`

## Demo

- [Online demo](https://gits-nuxt-admin.vercel.app/admin)
- [Source code](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-admin)
- Try it online on [Stackblitz](https://stackblitz.com/github/gitsindonesia/ui-component/tree/main/starter/nuxt-admin)

## Installation

```bash
npm i -D @morpheme/nuxt-admin
```

## Usage

Add it to the `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: '@morpheme/nuxt-admin',
});
```

## Configuration

You can change the default options for admin pages like redirect URL and head options via `app.config.ts`.

You can check out the default configuration in the [source of this file](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-admin/app.config.ts).

## Components

To customize the components, just override the default components by creating a file in your Nuxt app with the same name.

Check out the full list of components [here](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-admin/components).

## Pages

To customize the pages, just override the default pages by creating a file in your Nuxt app with the same name.

Check out the full list of pages [here](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-admin/pages).

## Authentication

Combine with [`nuxt-auth`](/themes/nuxt-auth) to add authentication to the admin page.

## Morpheme UI

Check out the [official documentation](https://gitsindonesia.github.io/ui-component/) to
learn more about `Morpheme UI`.

## License

MIT
