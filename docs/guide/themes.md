# Themes

Morpheme UI offers two different themes: `legacy` and `morpheme`.

- The `legacy` theme represents the default styles used before version `v1.0.0-beta.9`.
- The `morpheme` theme introduces new styles starting from version `v1.0.0-beta.9`.

## Morpheme Theme

The `morpheme` theme is an improved theme implemented from the Morpheme Design System. It features enhanced design, philosophy, and styles.

The `morpheme` theme brings a fresh and dynamic visual experience to our platform, enhancing its aesthetics and usability. By leveraging the power of the Morpheme Design System, we have crafted a theme that offers a sleek and modern interface, tailored to elevate your user experience.

Checkout the [Morpheme Kitchen Sink demo](https://morpheme-kitchen-sink.vercel.app/) to see it in action.

### Themes Files

| Description                        | Legacy                        | Morpheme                                       |
| ---------------------------------- | ----------------------------- | ---------------------------------------------- |
| Main CSS (dist) Styles             | `@morpheme/ui/dist/style.css` | `@morpheme/themes/dist/morpheme/main.css`      |
| Main CSS (dist) Styles (Dark Mode) | `@morpheme/ui/dist/style.css` | `@morpheme/themes/dist/morpheme/main.dark.css` |
| Main SASS Styles                   | `@morpheme/ui/styles`         | `@morpheme/themes/src/morpheme/main.scss`      |
| Main SASS Styles (Dark Mode)       | `@morpheme/ui/styles.dark`    | `@morpheme/themes/src/morpheme/main.dark.scss` |

## How to use the `morpheme` theme

### Use the new `morpheme` theme in Vue apps

```ts
// file: src/main.ts
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import MorphemeUI from '@morpheme/ui';

import '@morpheme/ui/styles'; // [!code --]

// dark mode
// import '@morpheme/ui/styles.dark'; // [!code --]

// load CSS bundle
import '@morpheme/themes/dist/morpheme/main.css'; // [!code ++]

// of load this bundle is you use SASS
// import '@morpheme/themes/src/morpheme/main.scss'; // [!code ++]

// load dark mode CSS bundle
import '@morpheme/themes/dist/morpheme/main.dark.css'; // [!code ++]

// of load this bundle is you use SASS
// import '@morpheme/themes/src/morpheme/main.dark.scss'; // [!code ++]

const app = createApp(App);

app.use(router);
app.use(MorphemeUI);

app.mount('#app');
```

### Use the new `morpheme` theme in Nuxt apps


```ts
// file: nuxt.config.ts
export default defineNuxtConfig({
  morpheme: {
    sass: true, // use SASS bundle instead of CSS
    theme: 'morpheme', // [!code ++]
  },
});

```

Check out all available Nuxt options [here](/guide/nuxt#options).

## FAQ

### Which theme should I choose?

Starting from `v1.0.0-beta.9`, we recommend using the latest `morpheme` theme as the default theme for new projects. However, if you want to maintain the current design of your app, you can continue using the `legacy` theme.

### Is it possible to upgrade from `legacy` to `morpheme`?

While it is possible to upgrade from the `legacy` theme to the `morpheme` theme, we recommend trying it out locally first to assess any significant changes it may bring to your app.
