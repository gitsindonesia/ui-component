# Button

The `VBtn` component is a button element that can be added to your Vue.js templates. It can be used in a variety of ways, including:

- As a default button
- With a specified color (primary, secondary, info, warning, error, or dark)
- With an outlined style
- With a text style
- With a flush style, which removes padding and sets the width and height to auto
- With a rounded style
- With a tile style, which removes the border radius

## Usage

### Basic Usage

To use the `VBtn` component, simply add it to your template.

<LivePreview src="forms-button--default" >

```vue
<template>
  <VBtn> default </VBtn>
  <VBtn color="primary"> primary </VBtn>
  <VBtn color="secondary"> secondary </VBtn>
  <VBtn color="info"> info </VBtn>
  <VBtn color="warning"> warning </VBtn>
  <VBtn color="error"> error </VBtn>
  <VBtn color="dark"> dark </VBtn>
</template>
```

</LivePreview>

::: info
The `VBtn` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Outlined

Use `outlined` prop to apply outlined style.

<LivePreview src="forms-button--outlined" >

```vue
<template>
  <VBtn outlined> default </VBtn>
  <VBtn color="primary" outlined> primary </VBtn>
  <VBtn color="secondary" outlined> secondary </VBtn>
  <VBtn color="info" outlined> info </VBtn>
  <VBtn color="warning" outlined> warning </VBtn>
  <VBtn color="error" outlined> error </VBtn>
  <VBtn color="dark" outlined> dark </VBtn>
</template>
```

</LivePreview>

### Text

Use `text` prop to apply text style.

<LivePreview src="forms-button--text" >

```vue
<template>
  <VBtn text> default </VBtn>
  <VBtn color="primary" text> primary </VBtn>
  <VBtn color="secondary" text> secondary </VBtn>
  <VBtn color="info" text> info </VBtn>
  <VBtn color="warning" text> warning </VBtn>
  <VBtn color="error" text> error </VBtn>
  <VBtn color="dark" text> dark </VBtn>
</template>
```

</LivePreview>

### Flush

- **Prop**: `flush`
- **Type**: `boolean`
- **Default Value**: `false`

Use `flush` prop to remove button padding. It will also set the width and height button to `auto`;

<LivePreview src="forms-button--flush" >

```vue
<template>
  <VBtn text flush> default </VBtn>
  <VBtn color="primary" text flush> primary </VBtn>
  <VBtn color="secondary" text flush> secondary </VBtn>
  <VBtn color="info" text flush> info </VBtn>
  <VBtn color="warning" text flush> warning </VBtn>
  <VBtn color="error" text flush> error </VBtn>
  <VBtn color="dark" text flush> dark </VBtn>
</template>
```

</LivePreview>

### Rounded

Use `rounded` prop to apply rounded style.

<LivePreview src="forms-button--rounded" >

```vue
<template>
  <VBtn rounded> default </VBtn>
  <VBtn color="primary" rounded> primary </VBtn>
  <VBtn color="secondary" rounded> secondary </VBtn>
  <VBtn color="info" rounded> info </VBtn>
  <VBtn color="warning" rounded> warning </VBtn>
  <VBtn color="error" rounded> error </VBtn>
  <VBtn color="dark" rounded> dark </VBtn>
</template>
```

</LivePreview>

### Tile

Use `tile` prop to apply tile style. This will remove border radius from button.

<LivePreview src="forms-button--tile" >

```vue
<template>
  <VBtn tile> default </VBtn>
  <VBtn color="primary" tile> primary </VBtn>
  <VBtn color="secondary" tile> secondary </VBtn>
  <VBtn color="info" tile> info </VBtn>
  <VBtn color="warning" tile> warning </VBtn>
  <VBtn color="error" tile> error </VBtn>
  <VBtn color="dark" tile> dark </VBtn>
</template>
```

</LivePreview>

### Sizes

- Prop: `size`
- Values: `sm | md | lg`
- Default Value: `md`

Use `size` prop to change button size.

<LivePreview src="forms-button--sizes" >

```vue
<template>
  <VBtn size="sm"> Button </VBtn>
  <VBtn size="md"> Button </VBtn>
  <VBtn size="lg"> Button </VBtn>
</template>
```

</LivePreview>

You can even roll your own custom sizing with CSS variables:

```vue
<template>
  <VBtn
    :style="{
      '--btn-height': 40,
      '--btn-padding-x': 16,
      '--btn-padding-y': 8,
    }"
  >
    Button
  </VBtn>
</template>
```

### Disabled

Use `disabled` prop to disable the button.

<LivePreview src="forms-button--disabled" height="140" >

```vue
<template>
  <VBtn disabled> default </VBtn>
  <VBtn color="primary" disabled> primary </VBtn>
  <VBtn color="secondary" disabled> secondary </VBtn>
  <VBtn color="info" disabled> info </VBtn>
  <VBtn color="warning" disabled> warning </VBtn>
  <VBtn color="error" disabled> error </VBtn>
  <VBtn color="dark" disabled> dark </VBtn>
</template>
```

</LivePreview>

Outlined button have different disabled style.

<LivePreview src="forms-button--outlined-disabled" height="140" >

```vue
<template>
  <VBtn outlined disabled> default </VBtn>
  <VBtn color="primary" outlined disabled> primary </VBtn>
  <VBtn color="secondary" outlined disabled> secondary </VBtn>
  <VBtn color="info" outlined disabled> info </VBtn>
  <VBtn color="warning" outlined disabled> warning </VBtn>
  <VBtn color="error" outlined disabled> error </VBtn>
  <VBtn color="dark" outlined disabled> dark </VBtn>
</template>
```

</LivePreview>

### Loading

Use `loading` prop to set button loading state.

<LivePreview src="forms-button--loading" height="140" >

```vue
<template>
  <VBtn loading> default </VBtn>
  <VBtn color="primary" loading> primary </VBtn>
  <VBtn color="secondary" loading> secondary </VBtn>
  <VBtn color="info" loading> info </VBtn>
  <VBtn color="warning" loading> warning </VBtn>
  <VBtn color="error" loading> error </VBtn>
  <VBtn color="dark" loading> dark </VBtn>
</template>
```

</LivePreview>

### Block

Use `block` prop to make button full width.

<LivePreview src="forms-button--block" >

```vue
<template>
  <VBtn block> default </VBtn>
  <VBtn color="primary" block> primary </VBtn>
  <VBtn color="secondary" block> secondary </VBtn>
  <VBtn color="info" block> info </VBtn>
  <VBtn color="warning" block> warning </VBtn>
  <VBtn color="error" block> error </VBtn>
  <VBtn color="dark" block> dark </VBtn>
</template>
```

</LivePreview>

### Shadow

Use `shadow` prop to add shadow to the button.

<LivePreview src="forms-button--shadow" height="140">

```vue
<template>
  <VBtn shadow> default </VBtn>
  <VBtn color="primary" shadow> primary </VBtn>
  <VBtn color="secondary" shadow> secondary </VBtn>
  <VBtn color="info" shadow> info </VBtn>
  <VBtn color="warning" shadow> warning </VBtn>
  <VBtn color="error" shadow> error </VBtn>
  <VBtn color="dark" shadow> dark </VBtn>
</template>
```

</LivePreview>

### No ring effect

Use `no-ring` prop to remove ring effect to the button.

<LivePreview src="forms-button--no-ring-effect" height="140" >

```vue
<template>
  <VBtn no-ring> default </VBtn>
  <VBtn color="primary" no-ring> primary </VBtn>
  <VBtn color="secondary" no-ring> secondary </VBtn>
  <VBtn color="info" no-ring> info </VBtn>
  <VBtn color="warning" no-ring> warning </VBtn>
  <VBtn color="error" no-ring> error </VBtn>
  <VBtn color="dark" no-ring> dark </VBtn>
</template>
```

</LivePreview>

### Icon

Use `prefix-icon` prop to add icon to the button before the text.
Use `suffix-icon` prop to add icon to the button after the text.

<LivePreview src="forms-button--icons" height="100">

```vue
<template>
  <VBtn prefix-icon="ri:search-2-line"> Search </VBtn>
  <VBtn suffix-icon="ri:download-2-line"> Download </VBtn>
</template>
```

</LivePreview>

### FAB

Use `fab` prop to make the button as floating action button (FAB).

<LivePreview src="forms-button--fab" height="100">

```vue
<script setup lang="ts">
import VIcon from '@gits-id/icon';
</script>

<template>
  <VBtn icon fab>
    <VIcon name="ri:home-line" />
  </VBtn>
</template>
```

</LivePreview>

### Button Group

You can group the button using `VBtnGroup` component. You can also wrap the grouped button inside toolbar using `VBtnToolbar` component.

<LivePreview src="forms-button--button-group">

```vue
<template>
  <h3 class="font-semibold">Default</h3>
  <VBtnGroup class="w-full mt-2">
    <VBtn>Button</VBtn>
    <VBtn>Button</VBtn>
    <VBtn>Button</VBtn>
  </VBtnGroup>
  <h3 class="font-semibold mt-5">Sizes:</h3>
  <VBtnGroup class="w-full mt-2">
    <VBtn size="sm">sm</VBtn>
    <VBtn size="sm">sm</VBtn>
    <VBtn size="sm">sm</VBtn>
  </VBtnGroup>
  <VBtnGroup class="w-full mt-2">
    <VBtn size="lg">lg</VBtn>
    <VBtn size="lg">lg</VBtn>
    <VBtn size="lg">lg</VBtn>
  </VBtnGroup>
  <VBtnGroup class="w-full mt-5">
    <VBtn color="primary">Button</VBtn>
    <VBtn color="primary">Button</VBtn>
    <VBtn color="primary">Button</VBtn>
  </VBtnGroup>
  <VBtnGroup class="w-full mt-5">
    <VBtn color="primary">Button</VBtn>
    <VBtn color="secondary">Button</VBtn>
    <VBtn color="error">Button</VBtn>
  </VBtnGroup>
  <VBtnGroup class="w-full mt-5">
    <VBtn outlined color="primary">Button</VBtn>
    <VBtn outlined color="secondary">Button</VBtn>
    <VBtn outlined color="error">Button</VBtn>
  </VBtnGroup>
  <VBtnGroup class="w-full mt-5">
    <VBtn text color="primary">Button</VBtn>
    <VBtn text color="secondary">Button</VBtn>
    <VBtn text color="error">Button</VBtn>
  </VBtnGroup>
  <VBtnGroup class="mt-5">
    <VBtn prefix-icon="ri:search-2-line"></VBtn>
    <VBtn suffix-icon="ri:add-line"></VBtn>
    <VBtn prefix-icon="ri:edit-line"></VBtn>
  </VBtnGroup>

  <VBtnToolbar class="mt-5">
    <VBtnGroup>
      <VBtn prefix-icon="ri:bold"></VBtn>
      <VBtn suffix-icon="ri:italic"></VBtn>
      <VBtn prefix-icon="ri:underline"></VBtn>
    </VBtnGroup>
    <VBtnGroup>
      <VBtn suffix-icon="ri:list-ordered"></VBtn>
      <VBtn prefix-icon="ri:list-check"></VBtn>
      <VBtn prefix-icon="ri:align-left"></VBtn>
    </VBtnGroup>
    <VBtnGroup>
      <VBtn prefix-icon="ri:link"></VBtn>
      <VBtn suffix-icon="ri:image-line"></VBtn>
      <VBtn prefix-icon="ri:video-line"></VBtn>
    </VBtnGroup>
    <VBtn prefix-icon="ri:format-clear"></VBtn>
  </VBtnToolbar>
</template>
```

</LivePreview>

## Props

| Name                          | Type                                                                                 | Default      |
| ----------------------------- | ------------------------------------------------------------------------------------ | ------------ |
| [`color`](#color)             | `'default' \| 'primary' \| 'secondary' \| 'info' \| 'warning' \| 'error' \| 'dark' ` | `'default'`  |
| [`size`](#size)               | `'sm' \| 'md' \| 'lg'`                                                               | `'md'`       |
| [`to`](#to)                   | `string \| RouteLocationRaw`                                                         | `undefined`  |
| [`href`](#href)               | `string`                                                                             | `undefined`  |
| [`text`](#text)               | `boolean`                                                                            | `false`      |
| [`outlined`](#outlined)       | `boolean`                                                                            | `false`      |
| [`rounded`](#rounded)         | `boolean`                                                                            | `false`      |
| [`disabled`](#disabled)       | `boolean`                                                                            | `false`      |
| [`noRing`](#noRing)           | `boolean`                                                                            | `false`      |
| [`tile` ](#tile)              | `boolean`                                                                            | `false`      |
| [`block`](#block)             | `boolean`                                                                            | `false`      |
| [`shadow`](#shadow)           | `boolean`                                                                            | `false`      |
| [`icon` ](#icon)              | `boolean`                                                                            | `false`      |
| [`loading`](#loading)         | `boolean`                                                                            | `false`      |
| [`loadingText`](#loadingText) | `string`                                                                             | `Loading...` |
| [`newTab`](#newTab)           | `boolean`                                                                            | `false`      |
| [`type` ](#type)              | `'submit' \| 'reset' \| 'button'`                                                    | `button`     |
| [`ring` ](#ring)              | `boolean`                                                                            | `false`      |
| [`solid`](#solid)             | `boolean`                                                                            | `false`      |
| [`fab` ](#fab)                | `boolean`                                                                            | `false`      |

## Events

None

## Slots

- [`default`](#default)

Use the `default` slot to place the content such as text or icon.

```vue
<template>
  <VBtn> Button </VBtn>
</template>
```

- [`prefix`](#prefix)

Use the `prefix` slot to place the content before the text.

```vue
<template>
  <VBtn>
    <template #prefix> Prefix </template>
    Button
  </VBtn>
</template>
```

- [`suffix`](#suffix)

Use the `suffix` slot to place the content after the text.

```vue
<template>
  <VBtn>
    <template #suffix> Suffix </template>
    Button
  </VBtn>
</template>
```

## CSS Variables

```scss
:root {
  --btn-bg-color: theme('colors.gray.200');
  --btn-text-color: theme('colors.gray.800');
  --btn-border-color: theme('colors.gray.300');
  --btn-border-radius: theme('borderRadius.DEFAULT');
  --btn-border-width: theme('borderWidth.DEFAULT');
  --btn-padding-x: theme('spacing.3');
  --btn-padding-y: theme('spacing.2');
  --btn-line-height: theme('lineHeight.tight');
  --btn-font-size: theme('fontSize.sm');
  --btn-font-weight: theme('fontWeight.semibold');
  --btn-shadow: theme('boxShadow.none');
  --btn-icon-width: theme('spacing.5');
  --btn-icon-height: theme('spacing.5');
  --btn-width: theme('width.auto');
  --btn-height: theme('width.auto');
  --btn-transition: all 0.2s ease-in-out;

  // sm
  --btn-sm-height: 32px;
  --btn-sm-padding-x: theme('padding.3');
  --btn-sm-padding-y: theme('padding.1');
  --btn-sm-icon-width: theme('spacing.4');
  --btn-sm-icon-height: theme('spacing.4');

  // md
  --btn-md-height: 44px;
  --btn-md-padding-x: theme('padding.4');
  --btn-md-padding-y: theme('padding.3');
  --btn-md-icon-width: theme('spacing.5');
  --btn-md-icon-height: theme('spacing.5');

  // lg
  --btn-lg-height: 52px;
  --btn-lg-padding-x: theme('padding.6');
  --btn-lg-padding-y: theme('padding.3');
  --btn-lg-icon-width: theme('spacing.6');
  --btn-lg-icon-height: theme('spacing.6');
}
```

## Tailwind Plugin

This package comes with custom tailwind plugin for styling. If you are installing this package separately from `@gits-id/ui` package, you need to include the plugin in `plugins` section in your Tailwind config file.

```js{4}
// tailwind.config.js
module.exports = {
  content: [],
  plugins: [require('@gits-id/tailwind-components/button')],
};
```

## Manual Installation

You can also install the `Button` component individually via `@gits-id/button` package:

```bash
npm i @gits-id/button
```

```vue
<script setup lang="ts">
import VBtn from '@gits-id/button';
import '@gits-id/button/dist/style.css';
// or import the SCSS styles
// import '@gits-id/button/src/VBtn.scss';
</script>

<template>
  <VBtn> Button </VBtn>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-button--default).
