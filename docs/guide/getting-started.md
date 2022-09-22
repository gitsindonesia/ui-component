# Getting Started

This section will help you build a basic Vue app with GITS UI from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 2.

::: tip
Checkout [examples](https://github.com/gitsindonesia/ui-component/tree/main/examples/vue) to help you get started faster.
:::

::: info
We recommend using `yarn` or `pnpm` as the package manager. The default `npm` should also works fine.
:::

## Step 1. Create new project

Create your Vue 3 project via `create-vue` CLI and install the dependencies.

```bash
npm init vue@3 my-app
cd my-app
yarn install
```

## Step 2. Install GITS UI

Install `@gits-id/ui` and `tailwindcss` package:

```bash
yarn add @gits-id/ui tailwindcss postcss autoprefixer
```

Generate the tailwind config files:

```bash
npx tailwindcss init -p
```

Install the GITS UI preset and scan the GITS UI Component Folders.

```js{6,15}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./node_modules/@gits-id/**/src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("@gits-id/tailwind-config/preset")],
};
```

Once that's done, open `src/main.ts` and import `GitsUi` plugin from `@gits-id/ui` and use it as the Vue plugin.

```ts{7-8,12}
// main.ts
import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import GitsUi from "@gits-id/ui";

const app = createApp(App);

app.use(router);
app.use(GitsUi);

app.mount("#app");
```

## Step 3. Boot up dev server

Run `dev` scripts and open http://localhost:5173.

```
yarn dev
```

## Step 4. Use the component

Open `src/views/HomeView` and replace the existing content with the code below:

```vue
<template>
  <h1 class="text-3xl font-bold text-gray-800">GITS UI</h1>

  <VAlert> Alert text </VAlert>

  <VBtn> Click me </VBtn>

  <VInput placeholder="Type something..." />
</template>
```

::: info
The component `VAlert`, `VBtn` and `VInput` is registered globally.
:::

View the result on the browser. You should see something like this:

[screenshot]
