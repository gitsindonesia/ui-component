# Dark Mode

The GITS UI includes dark mode support by default, however, to enable it, you will need to load the styles explicitly.

## Tailwind Configuration

To enable dark mode, you need to set the `darkMode` option to `class` in your Tailwind config file.

```ts {2}
module.exports = {
  darkMode: 'class',
};
```

## Enabling Dark Mode on a Vue App

To enable dark mode on a Vue application, load the dark mode styles in your `main.ts` file.

```ts {10}
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import router from './router';
import GitsUi from '@gits-id/ui';
import './assets/index.css';
import '@gits-id/ui/styles.scss';

// load dark mode styles
import '@gits-id/ui/styles.dark';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(GitsUi);

app.mount('#app');
```

## Enabling Dark Mode on a Nuxt App

To enable dark mode on a Nuxt application, set the value of `darkMode` option to `true` in your `nuxt.config.ts` file.

```ts {4}
export default defineNuxtConfig({
  modules: ['@gits-id/ui-nuxt', '@nuxtjs/tailwindcss'],
  gitsUi: {
    darkMode: true,
  },
});
```

## Toggling between dark and light mode

You can toggle between `dark` and `light` mode by toggling the `class` of the parent element between `dark` or `light`. For example, you can set the value of the `html` class to `dark` to enable dark mode and `light` to enable light mode.

```vue
<script setup lang="ts">
const toggleDarkMode = () => {
  const html = document.querySelector('html');
  html?.classList?.toggle('dark');
};

const darkMode = ref(false);
</script>

<template>
  <VSwitch
    v-model="darkMode"
    label="Dark Mode"
    @update:model-value="toggleDarkMode"
  />
</template>
```
