# Getting Started

This section will help you build a basic Vue app with GITS UI from ground up. If you already have an existing project and would like to keep documentation inside the project, start from Step 2.

::: tip
Checkout [Nuxt Starter](https://github.com/gitsindonesia/nuxt-starter) and [examples](https://github.com/gitsindonesia/ui-component/tree/main/examples/vue) to get you started faster.
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

![Step 1](/getting-started-1.png)

## Step 2. Install Tailwind CSS and GITS UI

Install `@gits-id/ui` and `tailwindcss` package:

```bash
yarn add @gits-id/ui tailwindcss postcss autoprefixer
```

Next, generate the tailwind config files:

```bash
npx tailwindcss init -p
```

Next, register the GITS UI preset and add the component folders the `content` section in the `tailwind.config.cjs` file:

```js{6,12}
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

Next, add the Tailwind directives to `src/assets/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Next, open `src/main.ts` and import `GitsUi` plugin from `@gits-id/ui` and use it as the Vue plugin.

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

## Step 3. Use the component

Open `src/views/HomeView.vue` and replace the existing content with the code below:

```vue
<template>
  <div class="container mx-auto p-6 space-y-3">
    <h1 class="text-3xl font-bold text-gray-800">GITS UI</h1>

    <VAlert color="error"> Alert text </VAlert>

    <VBtn color="primary"> Click me </VBtn>

    <VInput placeholder="Type something..." />
  </div>
</template>
```

::: info
The component `VAlert`, `VBtn` and `VInput` are registered globally.
:::

## Step 4. Boot up dev server

Run `dev` scripts and open http://localhost:5173.

```
yarn dev
```

If everything goes well, you should see something like in the browser:

![Getting Started 2](/getting-started-2.png)

## What's Next ?

Congratulation! You have completed setup your application with GITS UI! Now you can start creating your application with ease.

If you don't want to repeat this step in the future, you can save and push the project to your GitHub or somewhere else as your personal starter kit and use it when needed. You can also you the official [Nuxt Starter](https://github.com/gitsindonesia/nuxt-starter) and Vue Starter [here](https://github.com/gitsindonesia/ui-component/tree/main/examples/vue).
