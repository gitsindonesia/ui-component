---
outline: deep
---

# Card

The `VCard` component is a container for displaying content in a card-like format.

## Usage

### Basic Usage

To use the `VCard` component, simply wrap your content in the `VCard` element:

<LivePreview src="components-card--default" height="160" >

```vue
<template>
  <!-- VCard is registered globally -->
  <VCard> Hello World </VCard>
</template>
```

</LivePreview>

::: info
The `VCard` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### With Title

To add a title to your `VCard`, use the `title` prop:

<LivePreview src="components-card--hide-footer" height="120" >

```vue
<template>
  <VCard title="Header"> Hello World </VCard>
</template>
```

</LivePreview>

### Header and Footer

You can add a header and footer to your `VCard` by using the `title` prop for the header and the `footer` slot for the footer:

<LivePreview src="components-card--default" height="160" >

```vue {2,4-6}
<template>
  <VCard title="Header">
    <!-- footer slot -->
    <template #footer>
      <VBtn> Action </VBtn>
    </template>
    <!-- body -->
    <p>Hello World</p>
  </VCard>
</template>
```

</LivePreview>

### Hide Header and Footer

To hide the header or footer of your `VCard`, use the `hide-header` or `hide-footer` props, respectively:

<LivePreview src="components-card--body-only" height="90" >

```vue {2}
<template>
  <VCard title="Header" hide-header hide-footer>
    <!-- footer slot -->
    <template #footer>
      <VBtn> Action </VBtn>
    </template>
    <!-- body -->
    <p>Hello World</p>
  </VCard>
</template>
```

</LivePreview>

### Colors

- **prop**: `color`
- **type**: `string`
- **default**: `default`
- **required**: `false`

You can apply different colors to your `VCard` using the `color` prop. It can take one of the following values: `default`, `primary`, `secondary`, `info`, `warning`, `success`, or `error`. The default value is `default`.

<LivePreview src="components-card--colors" height="480">

```vue
<template>
  <VCard> Hello World </VCard>
  <VCard color="primary"> Hello World </VCard>
  <VCard color="secondary"> Hello World </VCard>
  <VCard color="info"> Hello World </VCard>
  <VCard color="warning"> Hello World </VCard>
  <VCard color="success"> Hello World </VCard>
  <VCard color="error"> Hello World </VCard>
</template>
```

</LivePreview>

### Bordered

You can add a border style to your `VCard` by using the `bordered` prop and use `border-position` prop to change the border position.

<LivePreview src="components-card--bordered">

```vue{6}
<template>
  <VCard bordered> Hello World </VCard>
  <VCard bordered border-position="left"> Hello World </VCard>
  <VCard bordered border-position="right"> Hello World </VCard>
  <VCard bordered border-position="bottom"> Hello World </VCard>
</template>
```

</LivePreview>

### Shadow

- **prop**: `shadow`
- **type**: `boolean | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none'`
- **default**: `none`
- **required**: `false`

You can add a shadow to your `VCard` by using the `shadow` prop. It can take one of the following values: `sm`, `md`, `lg`, `xl`, `2xl`, `inner`, `none`. The default value is `none`.

<LivePreview src="components-card--shadow" height="520">

```vue
<template>
  <VCard shadow> Hello World </VCard>
  <VCard shadow="sm"> Hello World </VCard>
  <VCard shadow="md"> Hello World </VCard>
  <VCard shadow="lg"> Hello World </VCard>
  <VCard shadow="xl"> Hello World </VCard>
  <VCard shadow="2xl"> Hello World </VCard>
  <VCard shadow="inner"> Hello World </VCard>
  <VCard shadow="none"> Hello World </VCard>
</template>
```

</LivePreview>

### Bodyless

Bodyless card allows you to create declarative card with sub components like `VCardHeader`, `VCardBody` and `VCardFooter`.

<LivePreview src="components-card--bodyless">

```vue
<template>
  <div class="space-y-4">
    <VCard>
      Default
    </VCard>
    <VCard bodyless>
      Bodyless
    </VCard>
    <VCard bodyless>
      <VCardBody>
        Bodyless with <code>VCardBody</code>
      </VCardBody>
    </VCard>
    <VCard bodyless>
      <VCardHeader>
        <p>Bodyless with <code>VCardHeader</code></p>
      </VCardHeader>
      <VCardBody>
        Bodyless with <code>VCardBody</code>
      </VCardBody>
      <VCardFooter>
        <p>Bodyless with <code>VCardFooter</code></p>
      </VCardFooter>
    </VCard>
  </div>
</template>
```

</LivePreview>

## Props

| Name                                            | Type                                                           | Default       |
| ----------------------------------------------- | -------------------------------------------------------------- | ------------- |
| [color](#color)                                 | `string` , [available colors](/guide/theme#colors)             | `default`     |
| [shadow](#shadow)                               | `boolean`, `string`, [available shadows](/guide/theme#shadows) | `true`        |
| [flat](#flat)                                   | `boolean`                                                      | `false`       |
| [bordered](#bordered)                           | `boolean`                                                      | `false`       |
| [border-position](#border-position)             | `'top' \| 'left' \| 'bottom' \| 'right'`                       | `top`         |
| [title](#title)                                 | `string`                                                       | `false`       |
| [flat](#flat)                                   | `boolean`                                                      | `false`       |
| [hide-header](#hide-header)                     | `boolean`                                                      | `false`       |
| [hide-footer](#hide-footer)                     | `boolean`                                                      | `false`       |
| [to](#to)                                       | `string`, `RouteLocation`                                      | ` `           |
| [default-wrapper-class](#default-wrapper-class) | `string`                                                       | ` `           |
| [default-header-class](#default-header-class)   | `string`                                                       | `card-header` |
| [default-body-class](#default-body-class)       | `string`                                                       | `card-body`   |
| [default-footer-class](#default-footer-class)   | `string`                                                       | `card-footer` |
| [wrapper-class](#wrapper-class)                 | `string`                                                       | ` `           |
| [header-class](#header-class)                   | `string`                                                       | ` `           |
| [footer-class](#footer-class)                   | `string`                                                       | ` `           |
| [body-class](#body-class)                       | `string`                                                       | ` `           |

## Events

None

## Slots

| Name                              | Description                                |
| --------------------------------- | ------------------------------------------ |
| [default](#default)               | The default Vue slot for the card body     |
| [header](#header)                 | The card header                            |
| [header.append](#header.append)   | A slot to append before the actual header  |
| [header.prepend](#header.prepend) | A slot to prepend before the actual header |
| [footer](#default)                | The card footer                            |

### Default

The `default` slot is the main content area of the `VCard`. It is where you can place your card body content.

```vue
<template>
  <VCard>
    <!-- default slot -->
    <p>Hello World</p>
  </VCard>
</template>
```

### Header

The `header` slot is used to add a header to the `VCard`. It can contain any content you want to display in the header.

```vue
<template>
  <VCard>
    <!-- header slot -->
    <template #header>
      <h2>Card Header</h2>
    </template>
    <!-- default slot -->
    <p>Hello World</p>
  </VCard>
</template>
```

### `header.append`

The `header.append` slot is used to add content to the end of the header slot. It can be used to add buttons or other elements to the header.

```vue
<template>
  <VCard title="Header">
    <!-- header.append slot -->
    <template #header.append>
      <VBtn>Action</VBtn>
    </template>
    <!-- default slot -->
    <p>Hello World</p>
  </VCard>
</template>
```

### `header.prepend`

The `header.prepend` slot is used to add content to the beginning of the header slot. It can be used to add icons or other elements to the header.

```vue
<template>
  <VCard title="Header">
    <!-- header.prepend slot -->
    <template #header.prepend>
      <VBtn>Action</VBtn>
    </template>
    <!-- default slot -->
    <p>Hello World</p>
  </VCard>
</template>
```

### Footer

The `footer` slot is used to add a footer to the `VCard`. It can contain any content you want to display in the footer.

```vue
<template>
  <VCard>
    <!-- default slot -->
    <p>Hello World</p>
    <!-- footer slot -->
    <template #footer>
      <h4>Card Footer</h4>
    </template>
  </VCard>
</template>
```

### CSS Variables

```scss
:root {
  --card-bg-color: var(--color-white);
  --card-color: var(--color-gray-700);
  --card-border-style: solid;
  --card-border-width: 1px;
  --card-border-color: var(--color-gray-200);
  --card-border-radius: var(--border-radius-lg);
  --card-padding-x: var(--size-spacing-4);
  --card-padding-y: var(--size-spacing-3);
  --card-box-shadow: var(--effect-shadow-sm);
  --card-font-size: var(--size-font-sm);
}
```

### Customization

The `VCard` component can be customized using CSS variables and the theme function provided by Tailwind CSS. This allows you to create your own custom card styles.

To customize the `VCard`, you can define your own CSS class and set the desired CSS variables in it. For example, to create an indigo colored card with white text, you can do the following:

```vue{2,7-8}
<template>
  <VCard color="indigo"> Indigo Colored Card </VCard>
</template>

<style>
.card-indigo {
  --card-bg-color: theme('colors.indigo.500');
  --card-color: theme('colors.white');
}
</style>
```

## Standalone Installation

You can also install the `Card` component individually via `@morpheme/card` package:

```bash
yarn install @morpheme/card
```

```vue
<script setup lang="ts">
import VCard from "@morpheme/card";
</script>

<template>
  <VCard> Hello World </VCard>
</template>
```

## Tailwind Plugin

This package comes with custom tailwind plugin for styling. If you are installing this package separately from `@morpheme/ui` package, you need to include the plugin in `plugins` section in your Tailwind config file.

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  plugins: [require('@morpheme/tailwind-components/card')],
};
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-card--default).
