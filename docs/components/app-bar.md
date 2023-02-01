# AppBar

The AppBar, also known as a Navigation Bar, is a component used to display content at the top of a page.

## Usage

## Basic Usage

To use the `VAppBar` component, you can simply include it in your template like this:

<LivePreview src="components-appbar--default">

```vue
<template>
  <!-- VAppBar is registered globally -->
  <VAppBar> Hello World </VAppBar>
</template>
```

</LivePreview>

::: info
The `VAppBar` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

## Colors

- **prop**: `color`
- **type**: `VAppBarColors | string`
- **default**: `default`

The `color` prop allows you to specify a color for the AppBar. The possible values for this prop are: `default`, `transparent`, `dark`, `primary`, `secondary`, `info`, `warning`, `success`, and `error`.

<LivePreview src="components-appbar--colors">

```vue
<template>
  <VAppBar> Hello World </VAppBar>
  <VAppBar color="primary"> Hello World </VAppBar>
  <VAppBar color="secondary"> Hello World </VAppBar>
  <VAppBar color="info"> Hello World </VAppBar>
  <VAppBar color="warning"> Hello World </VAppBar>
  <VAppBar color="success"> Hello World </VAppBar>
  <VAppBar color="error"> Hello World </VAppBar>
</template>
```

</LivePreview>

## Fixed

- **prop**: `fixed`
- **type**: `boolean`
- **default**: `false`

The `fixed` prop allows you to set a fixed position for the AppBar at the top of the page.

<LivePreview src="components-appbar--fixed">

```vue
<template>
  <VAppBar fixed> Hello World </VAppBar>
</template>
```

</LivePreview>

## Sticky

- **prop**: `sticky`
- **type**: `boolean`
- **default**: `false`

The `sticky` prop allows you to set a sticky position for the AppBar at the top of the page.

<LivePreview src="components-appbar--sticky">

```vue
<template>
  <VAppBar sticky> Hello World </VAppBar>
</template>
```

</LivePreview>

## Bordered

- **prop**: `bordered`
- **type**: `boolean`
- **default**: `false`
- **required**: `false`

The `bordered` prop allows you to apply a border style to the AppBar.

<LivePreview src="components-appbar--bordered" >

```vue
<template>
  <VAppBar bordered> Hello World </VAppBar>
</template>
```

</LivePreview>

## Shadow

- **prop**: `shadow`
- **type**: `boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'`
- **default**: `none`

The `shadow` prop allows you to apply a shadow style to the AppBar. The possible values for this prop are: `true`, `false`, `sm`, `md`, `lg`, `xl`, `2xl`, `inner`, and `none`.

<LivePreview src="components-appbar--shadow" >

```vue
<template>
  <VAppBar shadow> Hello World </VAppBar>
  <VAppBar shadow="sm"> Hello World </VAppBar>
  <VAppBar shadow="md"> Hello World </VAppBar>
  <VAppBar shadow="lg"> Hello World </VAppBar>
  <VAppBar shadow="xl"> Hello World </VAppBar>
  <VAppBar shadow="2xl"> Hello World </VAppBar>
  <VAppBar shadow="inner"> Hello World </VAppBar>
  <VAppBar shadow="none"> Hello World </VAppBar>
</template>
```

</LivePreview>

## Sizes

- **prop**: `size`
- **type**: `sm | md | lg`
- **default**: `md`
- **required**: `false`

The `size` prop allows you to specify the size of the AppBar. The possible values for this prop are: `sm`, `md`, and `lg`.

<LivePreview src="components-appbar--sizes" >

```vue
<template>
  <VAppBar size="sm"> Hello World </VAppBar>
  <VAppBar size="md"> Hello World </VAppBar>
  <VAppBar size="lg"> Hello World </VAppBar>
</template>
```

</LivePreview>

## `v-model`

- **prop**: `modelValue`
- **type**: `boolean`
- **default**: `true`
- **required**: `false`

Use `v-model` to show or hide the app-bar.

<LivePreview src="components-appbar--toggle" >

```vue{5,10}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle AppBar</Button>
  <VAppBar v-model="isOpen"> Hello World </VAppBar>
</template>
```

</LivePreview>

## Transition

- **prop**: `transition`
- **type**: `string`
- **default**: `fade`
- **required**: `false`

Use `transition` prop to change the default transition.

<LivePreview src="components-appbar--custom-transition" >

```vue{5,12}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';
// import transition styles
import '@gits-id/ui/src/assets/transition.css';

const isOpen = ref(true);
</script>

<template>
  <Button @click="isOpen = !isOpen">Toggle AppBar</Button>
  <VAppBar v-model="isOpen" transition="slide-down"> Hello World </VAppBar>
</template>
```

</LivePreview>

## Elevate on Scroll

- **prop**: `elevate-on-scroll`
- **type**: `string | boolean`
- **default**: `false`

Use `elevate-on-scroll` prop to add shadow effect on app-bar when user scroll the page.

<LivePreview src="components-appbar--elevate-on-scroll" >

```vue
<template>
  <VAppBar elevate-on-scroll> Brand </VAppBar>
</template>
```

</LivePreview>

You can also change the size of shadow by setting the value of `elevate-on-scroll` prop with the shadow name like `sm`, `md`, `lg` and so on.

```vue
<template>
  <VAppBar elevate-on-scroll="lg"> Brand </VAppBar>
</template>
```

## Props

| Name                                    | Type                                               | Default   |
| --------------------------------------- | -------------------------------------------------- | --------- |
| [modelValue](#name)                     | `boolean`                                          | `true`    |
| [color](#color)                         | `string` , [available colors](/guide/theme#colors) | `default` |
| [size](#size)                           | `string`                                           | `fade`    |
| [fixed](#fixed)                         | `boolean`                                          | `false`   |
| [sticky](#sticky)                       | `boolean`                                          | `false`   |
| [shadow](#shadow)                       | `boolean`                                          | `false`   |
| [bordered](#bordered)                   | `boolean`                                          | `false`   |
| [transition](#transition)               | `string`                                           | `fade`    |
| [elevate-on-scroll](#elevate-on-scroll) | `boolean \| string`                                | `false`   |

## Methods

## `toggle`

- Type: `toggle: () => void`

```vue{5,8,15}
<script setup lang="ts">
import {ref} from 'vue';
import Button from '@gits-id/button';

const appBarRef = ref();

const toggle = () => {
  appBarRef.value?.toggle();
};
</script>

<template>
  <VAppBar ref="appBarRef"> Hello World </VAppBar>

  <Button @click="toggle">Toggle</Button>
</template>
```

## Events

| Name                                   | Payload            | Description                         |
| -------------------------------------- | ------------------ | ----------------------------------- |
| [update:modelValue](#updateModelValue) | `(value: boolean)` | Fired internal `open` state changed |

## Slots

| Name                | Props | Description          |
| ------------------- | ----- | -------------------- |
| [default](#default) | None  | The default Vue slot |

## CSS Variables

```css
:root {
  --app-bar-height: 54;
  --app-bar-padding-x: theme('padding.4');
  --app-bar-padding-y: theme('padding.3');
  --app-bar-bg-color: theme('colors.white');
  --app-bar-color: theme('colors.gray.800');
  --app-bar-transition: 'all 0.3s ease';
  --app-bar-border-style: 'solid';
  --app-bar-border-width: theme('borderWidth.DEFAULT');
  --app-bar-border-color: theme('borderColor.DEFAULT');
}
```

## Customization

You can customize the style of the AppBar using CSS properties and the `theme` helper from Tailwind:

```vue{6,11-12}
<script setup lang="ts">
import {ref} from 'vue';
</script>

<template>
  <VAppBar color="indigo"> Indigo Colored AppBar </VAppBar>
</template>

<style>
.app-bar-indigo {
  --app-bar-bg-color: theme('colors.indigo.500');
  --app-bar-color: theme('colors.white');
}
</style>
```

The `color` prop on the `VAppBar` component specifies the color for the AppBar. The corresponding CSS class, `.app-bar-indigo`, is then used to set the background color and text color using the `--app-bar-bg-color` and `--app-bar-color` CSS variables, respectively. The `theme` helper is used to retrieve the appropriate color values from the Tailwind theme.

## Manual Installation

You can install the `AppBar` component individually using the `@gits-id/app-bar` package.

To install the package using NPM, run the following command:

```bash
npm i @gits-id/app-bar
```

To use the `AppBar` component, you will need to import it in your code:

```vue {2,6}
<script setup lang="ts">
import VAppBar from '@gits-id/app-bar';
</script>

<template>
  <VAppBar> Hello World </VAppBar>
</template>
```

This will include the `AppBar` component in your project and allow you to use it in your templates. You can then customize the appearance of the AppBar using CSS or by using the provided props.

## Tailwind Plugin

This package includes a custom Tailwind plugin for styling the `AppBar` component. If you are installing this package separately from the `@gits-id/ui` package, you will need to include the plugin in the `plugins` section of your Tailwind configuration file.

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  plugins: [require('@gits-id/tailwind-components/app-bar')],
};
```

This will enable the custom styles for the `AppBar` component in your project. You can then use these styles in your templates by applying the appropriate class names.

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-app-bar--default).
