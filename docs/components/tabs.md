# Tabs

Vue tabs component.

## Usage

### Basic Usage

```ts
// helpers
function createItems(len = 20, additionalItem = {}) {
  return [...Array(len)].map((v, k) => ({
    text: `Tab Item ${k + 1}`,
    ...additionalItem,
  }));
}

const items = createItems();
```

```vue
<template>
  <VTabs :items="items" />
</template>
```

<LivePreview src="components-tabs--default" />

::: info
The `VTabs` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### `v-model`

```vue
<script setup lang="ts">
import {ref} from 'vue';

const selectedTab = ref(0);
</script>

<template>
  <VTabs v-model="selectedTab" :items="items" />
</template>
```

### Custom Active Class

```vue
<template>
  <VTabs
    :items="items"
    default-class="!rounded-lg"
    inactive-class="hover:bg-success-50 hover:!text-success-600"
    active-class="bg-success-50 rounded-t text-success-600 font-semibold"
    hide-slider
  />
</template>
```

<LivePreview src="components-tabs--custom-active-class"  />

### Show Arrow

```vue
<template>
  <v-tabs :items="items" show-arrows />
</template>
```

<LivePreview src="components-tabs--show-arrows" />

### Center Active

```vue
<template>
  <v-tabs :items="items" center-active />
</template>
```

<LivePreview src="components-tabs--center-active" />

### Vertical

```vue
<template>
  <v-tabs :items="items" vertical />
</template>
```

<LivePreview src="components-tabs--vertical" />

### Tabs with Card

```vue
<template>
  <VCard body-class="!p-0" hide-header hide-footer>
    <VTabs v-model="tab" />
    <div class="px-4 py-2">Tab Content {{ tab }}</div>
  </VCard>
</template>
```

<LivePreview src="components-tabs--tabs-with-card" />

### Custom Style

```vue
<template>
  <VTabs
    v-model="tab"
    :style="{
      '--v-tabs-item-padding-x': '1rem',
      '--v-tabs-item-padding-y': '0.25rem',
      '--v-tabs-item-active-bg-color': 'purple',
      '--v-tabs-item-active-text-color': 'white',
      '--v-tabs-item-hover-bg-color': 'purple',
      '--v-tabs-item-hover-text-color': 'white',
      '--v-tabs-slider-height': '5px',
      '--v-tabs-slider-bg-color': 'pink',
      '--v-tabs-slider-border-color': 'pink',
    }"
  />
</template>
```

<LivePreview src="components-tabs--custom-style" />

### Removeable

```vue
<template>
  <VTabs v-model="tab" removeable />
</template>
```

<LivePreview src="components-tabs--removeable" />

## Props

| Name                                          | Type                                                                                | Default     |
| --------------------------------------------- | ----------------------------------------------------------------------------------- | ----------- |
| [`modelValue`](#modelValue)                   | `Number or String`                                                                  | `0`         |
| [`items`](#items)                             | `Array<TabItem[]>`                                                                  | `[]`        |
| [`itemText`](#itemText)                       | `String`                                                                            | `'text'`    |
| [`color`](#color)                             | `String \| 'primary' \| 'secondary' \| 'info' \| 'warning' \| 'success' \| 'error'` | `'primary'` |
| [`showArrows`](#showArrows)                   | `Boolean`                                                                           | `false`     |
| [`centerActive`](#centerActive)               | `Boolean`                                                                           | `false`     |
| [`removeable`](#removeable)                   | `Boolean`                                                                           | `false`     |
| [`vertical`](#vertical)                       | `Boolean`                                                                           | `false`     |
| [`defaultWrapperClass`](#defaultWrapperClass) | `String`                                                                            | `''`        |
| [`wrapperClass`](#wrapperClass)               | `String`                                                                            | `''`        |
| [`hideSlider`](#hideSlider)                   | `Boolean`                                                                           | `false`     |
| [`activeClass`](#activeClass)                 | `String`                                                                            | `''`        |
| [`inactiveClass`](#inactiveClass)             | `String`                                                                            | `''`        |
| [`defaultClass`](#defaultClass)               | `String`                                                                            | `''`        |
| [`contentClass`](#contentClass)               | `String`                                                                            | `''`        |
| [`sliderClass`](#sliderClass)                 | `String`                                                                            | `''`        |

## Events

### `update:modelValue`

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Item 1',
  },
  {
    text: 'Item 2',
  },
]);

const selected = ref(0);

const onChange = (value: number) => console.log(value);
</script>

<template>
  <VTabs v-model="selected" :items="items" @update:modelValue="onChange" />
</template>
```

### `change`

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Item 1',
  },
  {
    text: 'Item 2',
  },
]);

const selected = ref(0);

const onChange = (value: number) => console.log(value);
</script>

<template>
  <VTabs v-model="selected" :items="items" @change="onChange" />
</template>
```

### `remove`

```vue
<script setup lang="ts">
import {ref} from 'vue';
improt {useToast} from '@/composables';

const items = ref([
  {
    text: 'Item 1',
  },
  {
    text: 'Item 2',
  },
]);

const selected = ref(0);

const onRemove = (index: number) => {
  useToast()
    .confirm('Remove this tab?')
    .then(() => {
      items.value.splice(index, 1);
    });
};
</script>

<template>
  <VTabs v-model="selected" :items="items" removeable @remove="onRemove" />
</template>
```

## Slots

### `default`

```vue
<template>
  <VTabs>
    <VTabsSlider />
    <VTab>Tab 1</VTab>
    <VTab>Tab 2</VTab>
    <VTab>Tab 3</VTab>
  </VTabs>
</template>
```

### `previous`

```vue
<template>
  <VTabs>
    <template #previous>
      <VBtn prefix-icon="ri:arrow-left-s-line" />
    </template>
  </VTabs>
</template>
```

### `next`

```vue
<template>
  <VTabs>
    <template #next>
      <VBtn prefix-icon="ri:arrow-right-s-line" />
    </template>
  </VTabs>
</template>
```

### `prepend`

```vue
<template>
  <VTabs :items="items">
    <template #prepend>
      <VTab>Prepended Item</VTab>
    </template>
  </VTabs>
</template>
```

### `append`

```vue
<template>
  <VTabs :items="items">
    <template #append>
      <VTab>Appended Item</VTab>
    </template>
  </VTabs>
</template>
```

## CSS Variables

```css
:root {
  --v-tabs-padding-x: theme('padding.4');
  --v-tabs-padding-y: theme('padding.2');
  --v-tabs-bg-color: theme('colors.transparent');
  --v-tabs-border-color: theme('colors.transparent');
  --v-tabs-border-radius: theme('borderRadius.DEFAULT');

  /* item */
  --v-tabs-item-padding-x: theme('padding.4');
  --v-tabs-item-padding-y: theme('padding.2');
  --v-tabs-item-font-size: theme('fontSize.base');
  --v-tabs-item-font-weight: theme('fontWeight.normal');
  --v-tabs-item-bg-color: theme('colors.transparent');
  --v-tabs-item-text-color: theme('colors.gray.800');
  --v-tabs-item-border-color: theme('colors.transparent');
  --v-tabs-item-border-radius: theme('borderRadius.DEFAULT');

  /* item active */
  --v-tabs-item-active-padding-x: var(--v-tabs-item-padding-x);
  --v-tabs-item-active-padding-y: var(--v-tabs-item-padding-y);
  --v-tabs-item-active-font-size: var(--v-tabs-item-font-size);
  --v-tabs-item-active-font-weight: theme('fontWeight.semibold');
  --v-tabs-item-active-bg-color: var(--v-tabs-item-bg-color);
  --v-tabs-item-active-text-color: var(--v-tabs-item-text-color);
  --v-tabs-item-active-border-color: var(--v-tabs-item-border-color);
  --v-tabs-item-active-border-radius: var(--v-tabs-item-border-radius);

  /* item hover */
  --v-tabs-item-hover-padding-x: var(--v-tabs-item-padding-x);
  --v-tabs-item-hover-padding-y: var(--v-tabs-item-padding-y);
  --v-tabs-item-hover-font-size: var(--v-tabs-item-font-size);
  --v-tabs-item-hover-font-weight: var(--v-tabs-item-font-weight);
  --v-tabs-item-hover-bg-color: var(--v-tabs-item-bg-color);
  --v-tabs-item-hover-text-color: var(--v-tabs-item-text-color);
  --v-tabs-item-hover-border-color: var(--v-tabs-item-border-color);
  --v-tabs-item-hover-border-radius: var(--v-tabs-item-border-radius);

  /* slider */
  --v-tabs-slider-height: 3px;
  --v-tabs-slider-width: 3rem;
  --v-tabs-slider-max-width: theme('maxWidth.md');
  --v-tabs-slider-bg-color: theme('colors.primary.500');
  --v-tabs-slider-border-color: theme('colors.primary.500');
  --v-tabs-slider-border-radius: theme('borderRadius.DEFAULT');
}
```

## Manual Installation

You can also install the `Tabs` component individually via `@gits-id/tabs` package:

```bash
npm i @gits-id/tabs
```

```vue
<script setup lang="ts">
import VTabs from '@gits-id/tabs';
import '@gits-id/tabs/dist/style.css';
</script>

<template>
  <VTabs :items="items" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-tabs--default).
