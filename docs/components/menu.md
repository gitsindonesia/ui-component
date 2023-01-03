# Menu

The `VMenu` component is a navigation menu that can be used to display a hierarchy of links and submenus. It can be customized through props to change its appearance and behavior.

## Usage

To use the `VMenu` component, you need to pass it an object that describes the structure and content of the menu. This object should conform to the `Menu` interface, which has the following shape:

```ts
interface Menu {
  text: string;
  to?: string;
  icon?: string;
  children?: Menu[];
}
```

- `text` is the label that will be displayed for the menu item.
- `to` is an optional URL that the menu item will link to.
- `icon` is an optional icon that will be displayed next to the menu item. It can be specified using a string that follows the Ricon or Material Design Icon syntax.
- `children` is an optional array of child Menu objects that will be displayed as submenus under the current menu item.

### Basic Usage

Here is an example of how to use the `VMenu` component with a basic menu object:

```vue
<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'ri:home-2-line',
  children: [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'About',
      to: '/about',
    },
  ],
};
</script>

<template>
  <VMenu :menu="item" />
</template>
```

<LivePreview src="components-menu--default" />

### Variants

The `VMenu` component supports several variations that can be enabled by passing boolean props:

- `small`: Makes the menu items smaller and reduces the padding.
- `mini`: Makes the menu items even smaller and reduces the padding even more.
- `expandHover`: Makes submenus expand on hover instead of on click.
- `dark`: Switches the menu to a dark mode with a black background and white text.

Here is an example of how to use the small variant:

### Small

Use `small` prop to make the menu items smaller and reduces the padding.

```vue
<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'ri:home-2-line',
  children: [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'About',
      to: '/about',
    },
  ],
};
</script>

<template>
  <VMenu :menu="item" small />
</template>
```

<LivePreview src="components-menu--small" />

### Mini

Use `mini` prop to make the menu items even smaller and reduces the padding even more.

```vue
<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'ri:home-2-line',
  children: [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'About',
      to: '/about',
    },
  ],
};
</script>

<template>
  <VMenu :menu="item" mini />
</template>
```

<LivePreview src="components-menu--mini" />

### Custom Active Class

By default, the `VMenu` component applies a blue background and white text to the active menu item. You can customize this behavior by passing a different `active-class` prop:

```vue
<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'ri:home-2-line',
  children: [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'About',
      to: '/about',
    },
  ],
};
</script>

<template>
  <VMenu :menu="item" active-class="bg-blue-600 text-white" />
</template>
```

<LivePreview src="components-menu--custom-active-class" />

### Icons

You can use icons in the `VMenu` component by specifying the `icon` prop for each menu item. The icon prop should be a string that follows the [Icones](https://icones.js.org/) syntax.

```vue
<script setup lang="ts">
const item = {
  text: 'Text',
  to: '/',
  icon: 'mdi-light:home',
};
</script>

<template>
  <VMenu :menu="item" />
</template>
```

<LivePreview src="components-menu--icons" />

## Props

| Name                                  | Type                       | Default                          |
| ------------------------------------- | -------------------------- | -------------------------------- |
| [`menu`](#menu)                       | `Object as PropType<Menu>` | `null`                           |
| [`mini`](#mini)                       | `Boolean`                  | `false`                          |
| [`expandHover`](#expandHover)         | `Boolean`                  | `false`                          |
| [`dark`](#dark)                       | `Boolean`                  | `false`                          |
| [`color`](#color)                     | `String`                   | `''`                             |
| [`bgColor`](#bgColor)                 | `String`                   | `''`                             |
| [`darkColor`](#darkColor)             | `String`                   | `''`                             |
| [`darkBgColor`](#darkBgColor)         | `String`                   | `''`                             |
| [`classMenuParent`](#classMenuParent) | `String`                   | `'text-primary-500 bg-gray-700'` |
| [`small`](#small)                     | `Boolean`                  | `false`                          |

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Menu` component individually via `@gits-id/menu` package:

```bash
yarn install @gits-id/menu
```

```vue
<script setup lang="ts">
import VMenu from '@gits-id/menu';
import '@gits-id/menu/dist/style.css';
</script>

<template>
  <VMenu :menu="{text: 'Hello World'}" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-menu--default).
