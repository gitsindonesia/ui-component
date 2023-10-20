# Dark Mode

The Morpheme UI includes dark mode support by default, however, to enable it, you will need to load the styles explicitly.

## Tailwind Configuration

To enable dark mode, you need to set the `darkMode` option to `class` in your Tailwind config file.

```ts {2}
module.exports = {
  darkMode: 'class',
};
```

## Enabling Dark Mode on a Vue App

To enable dark mode on a Vue application, load the dark mode styles in your `main.ts` file.

```ts {13}
import {createApp} from 'vue';
import {createPinia} from 'pinia';
import App from './App.vue';
import router from './router';
import MorphemeUI from '@morpheme/ui';
import './assets/index.css';
import '@morpheme/ui/styles.scss';

// load CSS bundle
import '@morpheme/themes/dist/morpheme/main.css';

// uncomment this line to enable dark mode
import '@morpheme/themes/dist/morpheme/main.dark.css'; // [!code ++]

// or uncomment this line to load SCSS styles
// import '@morpheme/themes/src/morpheme/main.scss';

// uncomment this line to enable dark mode
// import '@morpheme/themes/src/morpheme/main.dark.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(MorphemeUI);

app.mount('#app');
```

## Enabling Dark Mode on a Nuxt App

To enable dark mode on a Nuxt application, set the value of `darkMode` option to `true` in your `nuxt.config.ts` file.

```ts {4}
export default defineNuxtConfig({
  modules: ['@morpheme/nuxt', '@nuxtjs/tailwindcss'],
  morpheme: {
    darkMode: true,
  },
});
```

## Toggling between dark and light mode

You can toggle between `dark` and `light` mode by toggling the `class` of the parent element between `dark` or `light`. For example, you can set the value of the `html` class to `dark` to enable dark mode and `light` to enable light mode.

```vue
<script setup lang="ts">
const darkMode = ref(false);

watch(darkMode, () => {
  document.documentElement.classList.toggle('dark', darkMode.value);
});
</script>

<template>
  <VSwitch
    v-model="darkMode"
    label="Dark Mode"
    @update:model-value="toggleDarkMode"
  />
</template>
```
