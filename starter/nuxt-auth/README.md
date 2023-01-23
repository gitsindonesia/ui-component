# nuxt-auth-app

This is a custom app created by running `npx create-gits-app`. This project uses the following technologies for a great developer and user-experience:

- [TypeScript](https://www.typescriptlang.org/)
- [Nuxt 3](https://nuxt.com)
- nuxt-auth

## How to get going?

This is a straight-forward setup with minimal templating and scaffolding. The options you selected during the sidebase CLI setup are all here though. Good places to continue reading are:

- [the First Steps documentation](https://gitsindonesia.github.io/ui-component/)

Some tasks you should probably do in the beginning are:

- [ ] replace this generic README with a more specific one
- [ ] install the Vue Volar extension
- [ ] enable [Volar takeover mode](https://nuxt.com/docs/getting-started/installation#prerequisites) to ensure a smooth editor setup
- [ ] Auth: Configure your auth providers to the [NuxtAuthHandler](./server/api/auth/[...].ts)
- [ ] Auth, optional: Enable global protection by setting `enableGlobalAppMiddleware: true` in [your nuxt.config.ts](./nuxt.config.ts). Delete the logal middleware in the [protected.vue](./pages/protected.vue) page if you do

### Setup

Make sure to install the dependencies:

```bash
npm install
```

### Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

### Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```
