---
outline: deep
---

# Container

The `VContainer` component is a versatile container that provides flexibility in styling and layout. It allows you to easily create containers with options for padding, centering content, fluid width, mini size, and fixed positioning. You can customize the behavior and appearance of the container based on your needs by toggling the corresponding props.

## Usage

This section provides examples of the basic usage of the `VContainer` component and demonstrates how to place content within the container.

### Basic Usage

This example shows the basic usage of the `VContainer` component without any additional props. The container wraps the content provided inside its tags.

<LivePreview src="components-container--default" >

```vue
<template>
  <VContainer> Content </VContainer>
</template>
```

</LivePreview>

### Padded

The `padded` prop adds padding to the container, creating space between the container's edges and its content. 

<LivePreview src="components-container--padded" >

```vue
<template>
  <VContainer padded> Content </VContainer>
</template>
```

</LivePreview>

### Fluid

The `fluid` prop allows the container to take up the full width of its parent element.

<LivePreview src="components-container--fluid" >

```vue
<template>
  <VContainer fluid> Content </VContainer>
</template>
```

</LivePreview>

### Centered

The `centered` prop aligns the content inside the container horizontally and vertically, making it appear centered.

<LivePreview src="components-container--centered" >

```vue
<template>
  <VContainer centered> Content </VContainer>
</template>
```

</LivePreview>


## Props

| Props      | Type    | Default                   | Description                                                                                                                   |
| ---------- | ------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| padded     | Boolean | `false`                   | Specifies whether the container should have padding.                                                                          |
| centered   | Boolean | `false`                   | Specifies whether the content should be centered within the container.                                                        |
| fluid      | Boolean | `false`                   | Specifies whether the container should take up the full width of its parent.                                                  |
| mini       | Boolean | `false`                   | Specifies whether the container should have a mini state. Intended to use with `VNavDrawer`.                                  |
| fixed      | Boolean | `false`                   | Specifies whether the container should be fixed in position.                                                                  |
| miniClass  | Object  | `{ open: "", close: "" }` | Deprecated. Use the `mini` prop instead. Specifies the class to toggle when the container is in the "open" or "close" state.  |
| fixedClass | Object  | `{ open: "", close: "" }` | Deprecated. Use the `fixed` prop instead. Specifies the class to toggle when the container is in the "open" or "close" state. |
| tag        | String  | `"div"`                   | Specifies the HTML tag to be used for rendering the container.                                                                |

## Events

None

## Slots

None

## CSS Variables

```scss
:root {
  --v-main-padding-x: var(--size-spacing-4);
  --v-main-padding-y: var(--size-spacing-4);
}
```

## Standalone Installation

You can also install the `VContainer` component individually via `@morpheme/container` package:

```bash
npm i @morpheme/container
```

```vue
<script setup lang="ts">
import VContainer from '@morpheme/container';
</script>

<template>
  <VContainer />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-container--default).
