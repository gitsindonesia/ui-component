# NavDrawer

Navigation Drawer Component.

## Usage

- Import `NavDrawer` from `@morpheme/nav-drawer`
- Import NavDrawer's styles from `@morpheme/nav-drawer/dist/style.css`

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
import '@morpheme/nav-drawer/dist/style.css';
</script>

<template>
  <NavDrawer> Hello World </NavDrawer>
</template>
```

### Colors

Available colors: `default`, `primary`, `secondary`, `dark`.

```vue
<script setup lang="ts">
import {NavDrawer} from '@morpheme/nav-drawer';
</script>

<template>
  <NavDrawer color="default">
    <p>content</p>
  </NavDrawer>
  <NavDrawer color="ultimate">
    <p>content</p>
  </NavDrawer>
  <NavDrawer color="primary">
    <p>content</p>
  </NavDrawer>
  <NavDrawer color="secondary">
    <p>content</p>
  </NavDrawer>
  <NavDrawer color="quiet">
    <p>content</p>
  </NavDrawer>
  <NavDrawer color="destructive">
    <p>content</p>
  </NavDrawer>
</template>
```

### Shadow

```vue
<template>
  <NavDrawer shadow>
    <p>content</p>
  </NavDrawer>
</template>
```

### Bordered

```vue
<template>
  <NavDrawer bordered>
    <p>content</p>
  </NavDrawer>
</template>
```

### Sticky

```vue
<template>
  <NavDrawer sticky>
    <p>content</p>
  </NavDrawer>
</template>
```

### Fixed

```vue
<template>
  <NavDrawer fixed>
    <p>content</p>
  </NavDrawer>
</template>
```

### Right

```vue
<template>
  <NavDrawer right>
    <p>content</p>
  </NavDrawer>
</template>
```

### Overlay

```vue
<template>
  <NavDrawer overlay>
    <p>content</p>
  </NavDrawer>
</template>
```

### Transition

```vue
<template>
  <NavDrawer transition="slide-in-left" overlay-transition="fade">
    <p>content</p>
  </NavDrawer>
</template>
```

### Toggle (v-model)

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {NavDrawer} from '@morpheme/nav-drawer';

const isOpen = ref(true);
</script>

<template>
  <div class="flex">
    <NavDrawer v-model="isOpen" color="ultimate" shadow="lg">
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
