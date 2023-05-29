---
outline: deep
---

# Collapsible

The `Collapsible` component is based on Headless UI and allows you to toggle the visibility of content within your Vue app. It can be used to hide or reveal information in a compact and organized manner.

## Usage

### Basic Usage

You can use the VCollapsible component in your template like so:

<LivePreview src="components-collapsible--default">

```vue
<script setup lang="ts">
import {isOpen} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <!-- VCollapsible is registered globally -->
  <VCollapsible v-model="false">
    Anim eiusmod ea nostrud do incididunt consequat duis adipisicing
    reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut
    consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi
    elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui.
    Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute
    aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est
    pariatur qui amet cupidatat magna est adipisicing quis ea ea.
  </VCollapsible>
</template>
```

</LivePreview>

The `isOpen` variable in the `v-model` directive controls whether the collapsible is open or closed.

::: info
The `VCollapsible` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Auto Open

You can set the collapsible to open automatically by setting the `modelValue` prop to true:

<LivePreview src="components-collapsible--auto-open" >

```vue
<template>
  <VCollapsible :model-value="true" />
</template>
```

</LivePreview>

### Hide Icon

To hide the icon that indicates whether the collapsible is open or closed, set the `hideIcon` prop to true:

<LivePreview src="components-collapsible--auto-open">

```vue
<template>
  <VCollapsible hide-icon />
</template>
```

</LivePreview>

### Custom Class

You can customize the appearance of the Collapsible component by setting the following props:

- `header-class`: Class applied to the header element.
- `active-class`: Class applied to the header element when the collapsible is open.
- `inactive-class`: Class applied to the header element when the collapsible is closed.
- `wrapper-class`: Class applied to the wrapper element.
- `activator-class`: Class applied to the activator element.
- `panel-class`: Class applied to the panel element.

Here's an example of how you can use these props to apply custom styles:

<LivePreview src="components-collapsible--custom-classes" >

```vue
<template>
  <VCollapsible
    :items="items"
    header-class=""
    active-class="font-semibold text-red-500 bg-red-200 rounded-t-lg"
    inactive-class="text-red-500 bg-red-50"
    wrapper-class="rounded-lg"
    activator-class="hover:bg-red-200 hover:text-red-500"
    panel-class="border p-4 rounded-b-lg"
  />
</template>
```

</LivePreview>

## Props

| Name                                | Type      | Default       |
| ----------------------------------- | --------- | ------------- |
| [`modelValue`](#modelValue)         | `Boolean` | `false`       |
| [`defaultOpen`](#defaultOpen)       | `Boolean` | `false`       |
| [`title`](#title)                   | `String`  | `''`          |
| [`activeClass`](#activeClass)       | `String`  | `''`          |
| [`wrapperClass`](#wrapperClass)     | `String`  | `'mb-5'`      |
| [`inactiveClass`](#inactiveClass)   | `String`  | `''`          |
| [`activatorClass`](#activatorClass) | `String`  | `''`          |
| [`panelClass`](#panelClass)         | `String`  | `'px-4 pb-4'` |
| [`hideIcon`](#hideIcon)             | `Boolean` | `false`       |

## Events

### `update:modelValue`

The `update:modelValue` event is emitted when the value of the `modelValue` prop is changed. This can be used to update the state of your component or trigger other actions.

### `change`

The `change` event is emitted when the collapsible is opened or closed. This can also be used to update the state of your component or trigger other actions.

Here's an example of how you can use these events in your component:

```vue
<template>
  <VCollapsible
    v-model="isOpen"
    @change="onCollapsibleChange"
    @update:modelValue="onModelValueUpdate"
  />
</template>

<script>
export default {
  methods: {
    onCollapsibleChange(value) {
      console.log(`Collapsible is now ${value ? 'open' : 'closed'}`);
    },
    onModelValueUpdate(value) {
      console.log(`modelValue has been updated to ${value}`);
    },
  },
};
</script>
```

## Slots

The Collapsible component has several slots that allow you to customize the content of the header and panel elements.

### `header` slot

The header slot allows you to customize the content of the header element. It has a `isOpen` prop that you can use to toggle the appearance of the header based on whether the collapsible is open or closed.

Here's an example of how you can use the header slot:

```vue
<template>
  <VCollapsible>
    <template #header="{isOpen}">
      <div
        class="py-3 w-full flex justify-between items-center px-4 gap-x-4 transition duration-300 group cursor-pointer font-semibold"
        :class="[isOpen ? 'bg-gray-200' : 'bg-gray-100']"
      >
        Custom Header
      </div>
    </template>
  </VCollapsible>
</template>
```

### `icon` slot

The icon slot allows you to customize the icon that indicates whether the collapsible is open or closed. It is only displayed if the hideIcon prop is not set to true.

Here's an example of how you can use the icon slot:

```vue
<template>
  <VCollapsible>
    <template #icon>
      <Icon name="heroicons:chevron-up" class="w-5 h-5" />
    </template>
  </VCollapsible>
</template>
```

### Default slot

The default slot allows you to add content to the panel element. This is the content that will be revealed or hidden when the collapsible is opened or closed.

Here's an example of how you can use the default slot:

```vue
<template>
  <VCollapsible>
    <div class="p-4 bg-gray-200">Custom Panel Content</div>
  </VCollapsible>
</template>
```

## CSS Variables

None

## Standalone Installation

You can also install the `Collapsible` component individually via `@morpheme/collapsible` package:

```bash
npm i @morpheme/collapsible
```

```vue
<script setup lang="ts">
import VCollapsible from '@morpheme/collapsible';
</script>

<template>
  <VCollapsible> Hello </VCollapsible>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-collapsible--default).
