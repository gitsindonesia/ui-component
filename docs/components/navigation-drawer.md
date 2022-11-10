# Navigation Drawer

New and improved Navigation Drawer component.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer>
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

<LivePreview src="components-navigationdrawer--default" />

### Primary

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer color="primary">
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

<LivePreview src="components-navigationdrawer--primary" />

### Secondary

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer color="secondary">
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

<LivePreview src="components-navigationdrawer--secondary" />

### Dark

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer color="dark">
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

<LivePreview src="components-navigationdrawer--dark" />

### Shadow

- **props**: `shadow`
- **type**: `string | boolean`
- **value**: `sm | md | lg | xl | true | false`
- **default**: `false`

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer shadow>
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

<LivePreview src="components-navigationdrawer--shadow" />

### Bordered

- **props**: `bordered`
- **type**: `boolean`
- **default**: `false`

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer bordered>
    <p class="font-semibold">Hello World</p>
  </NavDrawer>
</template>
```

<LivePreview src="components-navigationdrawer--bordered" />

### Fixed

- **props**: `fixed`
- **type**: `boolean`
- **default**: `false`

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
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

<LivePreview src="components-navigationdrawer--fixed" />

### Sticky

- **props**: `fixed`
- **type**: `boolean`
- **default**: `false`

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
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

<LivePreview src="components-navigationdrawer--sticky" />

### Toggle

- **props**: `modelValue`
- **type**: `boolean`
- **default**: `false`

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
import {ref} from 'vue';
import Button from '@gits-id/button';

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

<LivePreview src="components-navigationdrawer--toggle" />

### Mini

- **props**: `mini`
- **type**: `boolean`
- **default**: `false`

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
import {ref} from 'vue';
import Button from '@gits-id/button';

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

<LivePreview src="components-navigationdrawer--mini" />

### Expand on Hover

To enable expand on hover effect, you need to apply two props: `expand-on-hover` and `expanded`. The prop `expand-on-hover` tells the nav-drawer to use this effect and the `expanded` prop used as the expand state of the nav-drawer.

```vue {7,15-16}
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
import {ref} from 'vue';
import Button from '@gits-id/button';

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

<LivePreview src="components-navigationdrawer--expand-on-hover" />

### Overlay

- **props**: `overlay`
- **type**: `boolean`
- **default**: `false`

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer overlay> Hello </NavDrawer>
</template>
```

<LivePreview src="components-navigationdrawer--overlay" />

### Right

- **props**: `right`
- **type**: `boolean`
- **default**: `false`

```vue {17}
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
import {ref} from 'vue';
import Button from '@gits-id/button';

const isOpen = ref(true);
</script>

<template>
  <div class="flex">
    <NavDrawer
      v-model="isOpen"
      color="primary"
      shadow="lg"
      fixed
      right
      v-bind="args"
    >
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

<LivePreview src="components-navigationdrawer--right" />

### Custom Transition

- **props**: `transition`
- **type**: `string`
- **default**: `nav-drawer-transition`

```vue {16}
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
import {ref} from 'vue';
import Button from '@gits-id/button';

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

<LivePreview src="components-navigationdrawer--custom-transition" />

## Props

| Name                                          | Type                                                | Default                         |
| --------------------------------------------- | --------------------------------------------------- | ------------------------------- |
| [`color`](#color)                             | `string \| default \| primary \| secondary \| dark` | `default`                       |
| [`modelValue`](#modelValue)                   | `boolean`                                           | `true`                          |
| [`shadow`](#shadow)                           | `'sm' \| 'md' \| 'lg' \| 'xl' \| boolean`           | `false`                         |
| [`bordered`](#bordered)                       | `boolean`                                           | `false`                         |
| [`sticky`](#sticky)                           | `boolean`                                           | `false`                         |
| [`fixed`](#fixed)                             | `boolean`                                           | `false`                         |
| [`right`](#right)                             | `boolean`                                           | `false`                         |
| [`left`](#left)                               | `boolean`                                           | `false`                         |
| [`transition`](#transition)                   | `string`                                            | `nav-drawer-transition`         |
| [`overlay`](#overlay)                         | `boolean`                                           | `false`                         |
| [`overlayTransition`](#overlayTransition)     | `string`                                            | `nav-drawer-overlay-transition` |
| [`closeOnOverlayClick`](#closeOnOverlayClick) | `boolean`                                           | `true`                          |
| [`mini`](#mini)                               | `boolean`                                           | `false`                         |
| [`expandOnHover`](#expandOnHover)             | `boolean`                                           | `false`                         |
| [`expanded`](#expanded)                       | `boolean`                                           | `false`                         |

## Methods

None

## Events

- `(e: 'update:modelValue', value: string): void;`

```vue
<script setup lang="ts">
const onUpdate = (value: boolean) => console.log('Updated!', value);
</script>

<template>
  <NavDrawer @update:modelValue="onUpdate" />
</template>
```

- `(e: 'update:expanded', value: boolean): void;`

```vue
<script setup lang="ts">
const onUpdate = (value: boolean) => console.log('Expanded!', value);
</script>

<template>
  <NavDrawer @update:expanded="onUpdate" />
</template>
```

- `(e: 'clickOverlay'): void;`

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

## CSS Variables

| Variable                                              | Default Value              |
| ----------------------------------------------------- | -------------------------- |
| [`--nav-drawer-width`](#--nav-drawer-width)           | `248px`                    |
| [`--nav-drawer-transition`](#--nav-drawer-transition) | `all 0.3s ease-out`        |
| [`--nav-drawer-bg-color`](#--nav-drawer-bg-color)     | `#fff`                     |
| [`--nav-drawer-text-color`](#--nav-drawer-text-color) | `theme('colors.gray.800')` |
| [`--nav-drawer-shadow`](#--nav-drawer-shadow)         | `'none'`                   |

## Manual Installation

You can also install the `NavDrawer` component individually via `@gits-id/nav-drawer` package:

```bash
npm install @gits-id/nav-drawer
```

```vue
<script setup lang="ts">
import {NavDrawer} from '@gits-id/nav-drawer';
import '@gits-id/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer>Hello World</NavDrawer>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-navigationdrawer--default).
