---
outline: deep
---

# Banner

The `VBanner` component is a Vue.js component that allows you to display a banner with various properties such as color, position, and transition. This component can also be made dismissible, sticky, fixed, and absolute.

## Usage

### Basic Usage

To use the banner component, you can use it in your template as follows:

<LivePreview src="components-banner--default" >

```vue
<template>
  <VBanner color="primary">
    <VBannerText>
      Welcome to the <span class="font-semibold">Morpheme</span> Design System
    </VBannerText>
    <template #actions="{close}">
      <VBtn
        text
        flush
        @click="close"
        class="!text-white"
        prefix-icon="ri:close-line"
      />
    </template>
  </VBanner>
</template>
```

</LivePreview>

### Fixed

To display the banner as a fixed element at the top of the viewport, add `fixed` prop.

<LivePreview src="components-banner--fixed" >

```vue
<template>
  <VBanner color="primary" fixed>
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Sticky

To display the banner as a sticky element, which remains fixed to the top of the viewport until the user scrolls past it, add `sticky` prop.

<LivePreview src="components-banner--sticky" >

```vue
<template>
  <VBanner color="primary" sticky>
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Absolute

To display the banner as an absolutely positioned element, positioned relative to its nearest positioned ancestor, add `absolute` prop.

<LivePreview src="components-banner--absolute" >

```vue
<template>
  <VBanner color="primary" absolute>
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Top

Add `top` prop, to position the banner at the top of its container element.

<LivePreview src="components-banner--top" >

```vue
<template>
  <VBanner color="primary" top>
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Bottom

Add `bottom` prop, to position the banner at the bottom of its container element.

<LivePreview src="components-banner--bottom" >

```vue
<template>
  <VBanner color="primary" bottom>
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Primary

Displays the banner with a primary color scheme.

<LivePreview src="components-banner--primary" >

```vue
<template>
  <VBanner color="primary">
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Secondary

Displays the banner with a secondary color scheme.

<LivePreview src="components-banner--secondary" >

```vue
<template>
  <VBanner color="secondary">
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Info

Displays the banner with an informational color scheme.

<LivePreview src="components-banner--info" >

```vue
<template>
  <VBanner color="info">
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Warning

Displays the banner with a warning color scheme.

<LivePreview src="components-banner--warning" >

```vue
<template>
  <VBanner color="warning">
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Error

Displays the banner with an error color scheme.

<LivePreview src="components-banner--error" >

```vue
<template>
  <VBanner color="error">
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Success

Displays the banner with a success color scheme.

<LivePreview src="components-banner--success" >

```vue
<template>
  <VBanner color="success">
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Light

Displays the banner with a light color scheme.

<LivePreview src="components-banner--light" >

```vue
<template>
  <VBanner color="light">
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Dark

Displays the banner with a dark color scheme.

<LivePreview src="components-banner--dark" >

```vue
<template>
  <VBanner color="dark">
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### White

Displays the banner with a white background color.

<LivePreview src="components-banner--white" >

```vue
<template>
  <VBanner color="white">
    <!-- more code -->
  </VBanner>
</template>
```

</LivePreview>

### Custom Class

This example demonstrate how to apply custom CSS classes to the banner component to style it according to the developer's preferences.

<LivePreview src="components-banner--custom-class" >

```vue
<template>
  <VBanner class="bg-purple-600 text-white">
    <VBannerText class="text-left">
      Welcome to the <span class="font-semibold">Morpheme</span> Design System
    </VBannerText>
    <template #actions="{close}">
      <VBtn
        text
        flush
        @click="close"
        class="!text-white"
        prefix-icon="ri:close-line"
      />
    </template>
  </VBanner>
</template>
```

</LivePreview>

### Model Value

Use the `v-model` directive to bind the banner's visibility to a boolean value, allowing the component to be toggled on and off dynamically.

<LivePreview src="components-banner--model-value" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const banner = ref(true);
</script>

<template>
  <VBanner v-model="banner">
    <VBannerText class="text-left">
      Welcome to the <span class="font-semibold">Morpheme</span> Design System
    </VBannerText>
    <template #actions="{close}">
      <VBtn
        text
        flush
        @click="close"
        class="!text-white"
        prefix-icon="ri:close-line"
      />
    </template>
  </VBanner>
</template>
```

</LivePreview>

## Props

| Name          | Type           | Default value           | Description                                                                                       |
| ------------- | -------------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
| `modelValue`  | `Boolean`      | `true`                  | Controls whether the banner is visible or not.                                                    |
| `color`       | `BannerColors` | `'primary'`             | Specifies the color theme for the banner.                                                         |
| `sticky`      | `Boolean`      | `false`                 | Sets the banner to be sticky, meaning it will remain fixed in place as the user scrolls.          |
| `fixed`       | `Boolean`      | `false`                 | Sets the banner to be fixed to the top of the viewport, regardless of scrolling.                  |
| `absolute`    | `Boolean`      | `false`                 | Sets the banner to be positioned absolutely, relative to the nearest positioned ancestor element. |
| `top`         | `Boolean`      | `false`                 | Positions the banner at the top of its parent container.                                          |
| `bottom`      | `Boolean`      | `false`                 | Positions the banner at the bottom of its parent container.                                       |
| `transition`  | `String`       | `'v-banner-transition'` | Specifies the name of the CSS transition used when the banner appears or disappears.              |
| `center`      | `Boolean`      | `false`                 | Centers the banner horizontally within its parent container.                                      |
| `dismissible` | `Boolean`      | `false`                 | Adds a dismiss button to the banner, allowing the user to hide it.                                |

## Events

| Name                | Description                                                                                                                      |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `update:modelValue` | Emitted whenever the value of the `modelValue` prop changes. The new value is passed as the first argument to the event handler. |

## Slots

| Name      | Props                                | Description                                                                                                                   |
| --------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Default   | `close`: Function, `isOpen`: Boolean | The default slot is where the content of the banner goes. It can receive a `close` function and an `isOpen` boolean as props. |
| `prefix`  | `close`: Function, `isOpen`: Boolean | Use this slot to add a prefix element to the banner. It can receive a `close` function and an `isOpen` boolean as props.      |
| `actions` | `close`: Function, `isOpen`: Boolean | Use this slot to add actions to the banner. It can receive a `close` function and an `isOpen` boolean as props.               |

## Standalone Installation

You can also install the `Banner` component individually via `@morpheme/banner` package:

```bash
npm i @morpheme/banner
```

Then, use it like so:

```vue
<script setup lang="ts">
import VBanner from '@morpheme/banner';
import '@morpheme/banner/dist/style.css';
// or load SCSS styles (requires `sass`)
import '@morpheme/banner/src/VBanner.scss';
</script>

<template>
  <VBanner color="primary">
    <VBannerText>
      Welcome to the <span class="font-semibold">Morpheme</span> Design System
    </VBannerText>
    <template #actions="{close}">
      <VBtn
        text
        flush
        @click="close"
        class="!text-white"
        prefix-icon="ri:close-line"
      />
    </template>
  </VBanner>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-banner--default).
