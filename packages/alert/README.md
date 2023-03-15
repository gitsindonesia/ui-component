# GITS Alert

GITS Alert component is a flexible alert component that can be used to display various types of messages to the user.

## Installation

Install with your prefered package manager.

With NPM:

```
npm i @morpheme/alert
```

With Yarn:

```
yarn add @morpheme/alert
```

With PNPM:

```
pnpm i @morpheme/alert
```

## Usage

To use the component, you can simply include it in your template like this:

```vue
<script setup lang="ts">
// import component
import VAlert from '@morpheme/alert';
// import styles (includes dark mode)
import '@morpheme/alert/dist/style.css';
// or import the SASS styles
import '@morpheme/alert/src/VAlert.scss';
// if are using SASS bundle and want to add dark mode support,
// uncomment this line
// import '@morpheme/alert/src/VAlert.dark.scss';
</script>

<template>
  <VAlert color="primary"> Hello World </VAlert>
</template>
```

## Documentation

View full documentation [here](https://gitsindonesia.github.io/ui-component/components/alert).

## License

MIT
