# Morpheme UI

A free and open-source Vue UI Library based on Morpheme Design System.

## Installation

Install with your prefered package manager:

With NPM:

```bash
npm i @morpheme/ui
```

With Yarn:

```bash
yarn add @morpheme/ui
```

With PNPM:

```bash
pnpm add @morpheme/ui
```

## Quick Setup

Setup the Vue plugin to your `main.ts` or `main.js` file:

```ts
// file: main.ts or main.js

// import the plugin
import MorphemeUI from '@morpheme/ui';

// import the styles
// load CSS bundle
import '@morpheme/themes/dist/morpheme/main.css'

// uncomment this line to load SCSS bundle
// import '@morpheme/themes/src/morpheme/main.scss'

const app = createApp(App);

app.use(MorphemeUI);
```

Then, you are ready to use the component:

```vue
<template>
  <VCard title="Hello World">
    <VBtn color="primary">Click me</VBtn>
  </VCard>
</template>
```

## Documentation

View full documentation [here](https://gitsindonesia.github.io/ui-component/)

## License

MIT
