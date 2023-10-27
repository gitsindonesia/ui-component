# Nuxt Auth

A Nuxt theme to get authentication ready with [nuxt-auth](https://sidebase.io/nuxt-auth/getting-started) and Morpheme UI.

## Features

- Integrated with [Morpheme UI](https://gitsindonesia.github.io/ui-component/)
- Authentication with [nuxt-auth](https://sidebase.io/nuxt-auth/getting-started)
- Built-in Pages:
  - Login
  - Register
  - Forgot Password
  - Profile page
- Dark mode ready
- Customizable via Nuxt Layer
- Configurable via `app.config.ts`

## Demo

- [Online demo](https://gits-nuxt-auth.vercel.app/)
- [Source code](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-auth)
- Try it online on [Stackblitz](https://stackblitz.com/github/gitsindonesia/ui-component/tree/main/starter/nuxt-auth)

## Installation

```bash
npm i -D @morpheme/nuxt-auth
```

## Usage

Add it to the `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: '@morpheme/nuxt-auth',
});
```

## Configuration

You can change the default options for auth pages like redirect url and head options via `app.config.ts`.

You can checkout the default configuration in the [source of this file](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-auth/app.config.ts).

### Configuration example

```ts
export default defineAppConfig({
  auth: {
    redirect: {
      login: '/auth/login',
      logout: '/',
      callback: '/auth/login',
      home: '/',
    },
    head: {
      login: {
        title: 'Login',
      },
      protected: {
        title: 'Profile Page',
      },
    },
  },
});
```

## Auth Handler

The auth handle is located at `servers/api/auth/[...].ts`. Feel free to override the file if you want to customize the authentication methods or providers.

## Components

To customize the components, just override the default components by creating a file in your Nuxt app with the same name.

Check out the full list of components [here](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-auth/components).

## Pages

To customize the pages, just override the default pages by creating a file in your Nuxt app with the same name.

Check out the full list of pages [here](https://github.com/gitsindonesia/ui-component/tree/main/starter/nuxt-auth/pages).

## Authentication

Checkout the [official documentation](https://sidebase.io/nuxt-auth/getting-started) to learn more about `nuxt-auth`.

## Morpheme UI

Checkout the [official documentation](https://gitsindonesia.github.io/ui-component/) to
learn more about `Morpheme UI`.

## Dark Mode

Basically, to enable dark mode, the only thing to do is change the value of `morpheme.darkMode` to `true` in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  morpheme: {
    darkMode: true, // <--
  },
});
```

And then, add class `dark` to the `html` attribute.

**Tips**: to test dark mode, you set `dark` class to the `html` using `useHead` in the `app.vue`.

```vue
<!-- app.vue -->
<script setup lang="ts">
useHead({
  title: 'Morpheme Nuxt Auth',
  htmlAttrs: {
    // uncomment this line to simulate dark mode
    class: 'dark', // <--
  },
});
</script>
```

## License

MIT
