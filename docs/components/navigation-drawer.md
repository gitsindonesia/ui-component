---
outline: deep
---

# Navigation Drawer

The `NavDrawer` component is flexible component to create side navigation panel.

## Usage

### Basic Usage

To use the `NavDrawer` component, just import it from `@morpheme/ui` or `@morpheme/nav-drawer` and use it in the template.

<LivePreview src="components-navigationdrawer--default" >

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
</script>

<template>
  <NavDrawer>
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

</LivePreview>

### Colors

By default, `NavDrawer` component support 4 colors: `default`, `primary`, `secondary` and `dark`. You can use `color` prop to change the navigation drawer color.

#### Primary

<LivePreview src="components-navigationdrawer--primary">

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
</script>

<template>
  <NavDrawer color="primary">
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

</LivePreview>

<br>

#### Secondary

<LivePreview src="components-navigationdrawer--secondary">

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
</script>

<template>
  <NavDrawer color="secondary">
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

</LivePreview>

<br>

#### Dark

<LivePreview src="components-navigationdrawer--dark">

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
</script>

<template>
  <NavDrawer color="dark">
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

</LivePreview>

<br>

### Shadow

- **props**: `shadow`
- **type**: `string | boolean`
- **value**: `sm | md | lg | xl | true | false`
- **default**: `false`

You can add shadow to the nav-drawer using `shadow` prop.

<LivePreview src="components-navigationdrawer--shadow">

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
</script>

<template>
  <NavDrawer shadow>
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

</LivePreview>

### Bordered

- **props**: `bordered`
- **type**: `boolean`
- **default**: `false`

You can add border to the nav-drawer using `bordered` prop.

<LivePreview src="components-navigationdrawer--bordered">

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
</script>

<template>
  <NavDrawer bordered>
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

</LivePreview>

### Fixed

- **props**: `fixed`
- **type**: `boolean`
- **default**: `false`

Use `fixed` prop to apply fixed position to the navigation drawer.

<LivePreview src="components-navigationdrawer--fixed">

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
</script>

<template>
  <div class="flex">
    <NavDrawer color="primary" fixed class="top-0 inset-x-0">
      <p class="font-semibold">Fixed NavDrawer</p>
    </NavDrawer>
    <p class="h-screen bg-default p-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      consequat facilisis purus ac consectetur. Cras interdum nisi vitae metus
      pharetra dignissim. Curabitur pulvinar ex purus, id ultrices ligula dictum
      at. Integer ac libero dui. Vivamus posuere molestie enim in tempus. Sed
      neque arcu, pharetra non laoreet a, efficitur id leo. Nullam facilisis
      massa velit, ut sollicitudin magna elementum quis. Donec pharetra
      efficitur turpis, nec ultrices leo. Quisque placerat, dolor sit amet
      eleifend cursus, libero nisi feugiat urna, a sodales quam eros id massa.
      Nulla tristique neque quis turpis luctus tincidunt. Vestibulum bibendum
      lobortis orci, eget semper diam ultricies a. Nunc in nunc lacus.
    </p>
  </div>
</template>
```

</LivePreview>

### Sticky

- **props**: `fixed`
- **type**: `boolean`
- **default**: `false`

Use `sticky` prop to apply sticky position to the navigation drawer.

<LivePreview src="components-navigationdrawer--sticky" >

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
import '@morpheme/nav-drawer/dist/style.css';
</script>

<template>
  <div class="flex">
    <NavDrawer color="primary" sticky class="top-0 inset-x-0">
      <p class="font-semibold">Sticky NavDrawer</p>
    </NavDrawer>
    <p class="h-screen bg-default p-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      consequat facilisis purus ac consectetur. Cras interdum nisi vitae metus
      pharetra dignissim. Curabitur pulvinar ex purus, id ultrices ligula dictum
      at. Integer ac libero dui. Vivamus posuere molestie enim in tempus. Sed
      neque arcu, pharetra non laoreet a, efficitur id leo. Nullam facilisis
      massa velit, ut sollicitudin magna elementum quis. Donec pharetra
      efficitur turpis, nec ultrices leo. Quisque placerat, dolor sit amet
      eleifend cursus, libero nisi feugiat urna, a sodales quam eros id massa.
      Nulla tristique neque quis turpis luctus tincidunt. Vestibulum bibendum
      lobortis orci, eget semper diam ultricies a. Nunc in nunc lacus.
    </p>
  </div>
</template>
```

</LivePreview>

### Toggle

- **props**: `modelValue`
- **type**: `boolean`
- **default**: `false`

You can toggle show or hide the navigation drawer using `v-model` or `modelValue` prop.

<LivePreview src="components-navigationdrawer--toggle">

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
import '@morpheme/nav-drawer/dist/style.css';
import {ref} from 'vue';
import Button from '@morpheme/button';

const isOpen = ref(true);
</script>

<template>
  <div class="flex">
    <NavDrawer v-model="isOpen" color="primary" shadow="lg">
      <p class="font-semibold">Toggle (v-model)</p>
    </NavDrawer>
    <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
      <Button class="mt-5" @click="isOpen = !isOpen">
        {{ isOpen ? 'Close' : 'Open' }}
      </Button>
    </main>
  </div>
</template>
```

</LivePreview>

### Mini

- **props**: `mini`
- **type**: `boolean`
- **default**: `false`

Use `mini` prop to apply mini style to the navigation drawer.

<LivePreview src="components-navigationdrawer--mini">

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
import {ref} from 'vue';
import Button from '@morpheme/button';

const isMini = ref(true);
</script>

<template>
  <div class="flex">
    <NavDrawer v-model="isMini" color="primary" shadow="lg">
      <p class="font-semibold">Mini</p>
    </NavDrawer>
    <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
      <Button class="mt-5" @click="isMini = !isMini"> Toggle Mini </Button>
    </main>
  </div>
</template>
```

</LivePreview>

### Expand on Hover

To enable expand on hover effect, you need to apply two props: `expand-on-hover` and `expanded`. The prop `expand-on-hover` tells the nav-drawer to use this effect and the `expanded` prop used as the expand state of the nav-drawer.

<LivePreview src="components-navigationdrawer--expand-on-hover">

```vue {7,15-16}
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
import '@morpheme/nav-drawer/dist/style.css';
import {ref} from 'vue';
import Button from '@morpheme/button';

const isExpanded = ref(true);
</script>

<template>
  <div class="flex">
    <NavDrawer
      color="primary"
      shadow="lg"
      expand-on-hover
      v-model:expanded="isExpanded"
    >
      <p class="font-semibold">Expand on Hover</p>
    </NavDrawer>
    <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
      <Button class="mt-5" @click="isExpanded = !isExpanded">
        Toggle Expand
      </Button>
    </main>
  </div>
</template>
```

</LivePreview>

### Overlay

- **props**: `overlay`
- **type**: `boolean`
- **default**: `false`

Use `overlay` prop to add overlay to the navigation drawer.

<LivePreview src="components-navigationdrawer--overlay" >

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
</script>

<template>
  <NavDrawer overlay> Hello </NavDrawer>
</template>
```

</LivePreview>

### Right Aligned

- **props**: `right`
- **type**: `boolean`
- **default**: `false`

By default the navigation drawer is placed at the left of the page. You can move it to the right by passing `right` prop.

<LivePreview src="components-navigationdrawer--right" >

```vue {16}
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
import {ref} from 'vue';
import Button from '@morpheme/button';

const isOpen = ref(true);
</script>

<template>
  <div class="flex">
    <NavDrawer v-model="isOpen" color="primary" shadow="lg" fixed right>
      <div class="p-2">
        <p class="font-semibold mb-2">Right NavDrawer + Transition</p>
        <Button @click="isOpen = !isOpen"> Close </Button>
      </div>
    </NavDrawer>

    <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
      <Button class="mt-5" @click="isOpen = !isOpen">
        {{ isOpen ? 'Close' : 'Open' }}
      </Button>
    </main>
  </div>
</template>
```

</LivePreview>

### Custom Transition

- **props**: `transition`
- **type**: `string`
- **default**: `nav-drawer-transition`

You can also customize the default transition using `transition` prop.

<LivePreview src="components-navigationdrawer--custom-transition">

```vue {15}
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
import {ref} from 'vue';
import Button from '@morpheme/button';

const isOpen = ref(true);
</script>

<template>
  <div class="flex">
    <NavDrawer
      v-model="isOpen"
      color="primary"
      shadow="lg"
      transition="slide-down"
    >
      <p class="font-semibold">NavDrawer + Transition</p>
    </NavDrawer>

    <main class=" bg-default h-screen p-6 transition-all duration-300 w-full">
      <Button class="mt-5" @click="isOpen = !isOpen">
        {{ isOpen ? 'Close' : 'Open' }}
      </Button>
    </main>
  </div>
</template>
```

</LivePreview>

## Props

| Name                                          | Type                                                                                                                                     | Default                         |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| [`color`](#color)                             | `string \| default \| primary \| secondary \| dark`                                                                                      | `default`                       |
| [`modelValue`](#modelValue)                   | `boolean`                                                                                                                                | `true`                          |
| [`shadow`](#shadow)                           | `'sm' \| 'md' \| 'lg' \| 'xl' \| boolean`                                                                                                | `false`                         |
| [`bordered`](#bordered)                       | `boolean`                                                                                                                                | `false`                         |
| [`sticky`](#sticky)                           | `boolean`                                                                                                                                | `false`                         |
| [`fixed`](#fixed)                             | `boolean`                                                                                                                                | `false`                         |
| [`right`](#right)                             | `boolean`                                                                                                                                | `false`                         |
| [`left`](#left)                               | `boolean`                                                                                                                                | `false`                         |
| [`transition`](#transition)                   | `string`                                                                                                                                 | `nav-drawer-transition`         |
| [`overlay`](#overlay)                         | `boolean`                                                                                                                                | `false`                         |
| [`overlayTransition`](#overlayTransition)     | `string`                                                                                                                                 | `nav-drawer-overlay-transition` |
| [`closeOnOverlayClick`](#closeOnOverlayClick) | `boolean`                                                                                                                                | `true`                          |
| [`mini`](#mini)                               | `boolean`                                                                                                                                | `false`                         |
| [`expandOnHover`](#expandOnHover)             | `boolean`                                                                                                                                | `false`                         |
| [`expanded`](#expanded)                       | `boolean`                                                                                                                                | `false`                         |
| [`height`](#height)                           | `screen \| fit \| auto \| max \| screen-dvh \| screen-svh \|screen-lvh \|  unset \| initial \| inherit \| min-content \| revert \| none` | `screen`                        |

## Events

- `(e: 'update:modelValue', value: string): void;`

Emitted when `modelValue` prop changed. Used for `v-model` directive.

```vue
<script setup lang="ts">
const onUpdate = (value: boolean) => console.log('Updated!', value);
</script>

<template>
  <NavDrawer @update:modelValue="onUpdate" />
</template>
```

- `(e: 'update:expanded', value: boolean): void;`

Emitted when `expanded` prop changed. Used for `v-model:expanded` directive.

```vue
<script setup lang="ts">
const onUpdate = (value: boolean) => console.log('Expanded!', value);
</script>

<template>
  <NavDrawer @update:expanded="onUpdate" />
</template>
```

- `(e: 'clickOverlay'): void;`

Emitted when user click the overlay element.

```vue
<script setup lang="ts">
const onOverlayClicked = () => console.log('Clicked!');
</script>

<template>
  <NavDrawer @clickOverlay="onOverlayClicked" />
</template>
```

## Slots

- `default`

The default slot is used to place any content inside navigation drawer.

## CSS Variables

```scss
:root {
  --nav-drawer-width: 248px;
  --nav-drawer-transition: all 0.3s ease-out;
  --nav-drawer-bg-color: #fff;
  --nav-drawer-text-color: theme('colors.gray.800');
  --nav-drawer-shadow: 'none';
}
```

## Customization

You can constumize the navigation drawer via CSS Properties.

Here is the example to create indigo colored navigation drawer.

<LivePreview src="components-navigationdrawer--custom-color" >

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
import '@morpheme/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer color="indigo"> Custom </NavDrawer>
</template>

<style>
.nav-drawer-indigo {
  --nav-drawer-bg-color: theme('colors.indigo.600');
  --nav-drawer-text-color: theme('colors.white');
}
</style>
```

</LivePreview>

In the example above, first, we need to specify the custom color via `color` prop. For example, set to `indigo` and this will set class `nav-drawer-indigo` respectively so you can define your own style by utilizing the CSS Properties like above.

## Manual Installation

You can also install the `NavDrawer` component individually via `@morpheme/nav-drawer` package:

```bash
npm i @morpheme/nav-drawer
```

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
import '@morpheme/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer>Hello World</NavDrawer>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-navigationdrawer--default).
