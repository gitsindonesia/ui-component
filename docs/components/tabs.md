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
The `VTabs` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it
manually.
:::

### `v-model`

Use `v-model `to set selected tab.

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

Define custom classes to apply when tab is active (`active-class`), inactive (`inactive-class`). Or add common custom class for tabs using `default-class`.

```vue
<template>
  <VTabs
    :items="items"
    default-class='!rounded-lg'
    inactive-class='hover:bg-success-50 hover:!text-success-600'
    active-class='bg-success-50 rounded-t text-success-600 font-semibold'
    hide-slider
  />
</template>
```

<LivePreview src="components-tabs--custom-active-class" height='150' />

### Show Arrow

Use `showArrow` to enable  arrows to scroll the tab list. Only works if the list is scrollable.

```vue
<template>
  <v-tabs :items="items" show-arrows />
</template>
```

<LivePreview src="components-tabs--show-arrows" height='150' />

### Center Active

Use `centerActive` to allow the active tab to be position as at the center if possible. Works well when the list is scrollable.

```vue
<template>
  <v-tabs :items="items" center-active />
</template>
```

<LivePreview src="components-tabs--center-active" height='150'/>

### Vertical

Use `vertical` to render the tabs vertically.

```vue
<template>
  <v-tabs :items="items" vertical />
</template>
```

<LivePreview src="components-tabs--vertical" height='150' />

### Tabs with Card

Use `VTabs` as header in a `VCard` component.

```vue
<template>
  <VCard body-class='!p-0' hide-header hide-footer>
    <VTabs v-model="tab" />
    <div class='px-4 py-2'>Tab Content {{ tab }}</div>
  </VCard>
</template>
```

<LivePreview src="components-tabs--tabs-with-card" />

### Custom Style

Override CSS variables for `VTabs` inline through `style` prop;

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

<LivePreview src="components-tabs--custom-style" height='150' />

### Removeable

```vue
<template>
  <VTabs v-model="tab" removeable />
</template>
```

<LivePreview src="components-tabs--removeable" />

## Props

| Name                                          | Type                                                                                            | Default     |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------|-------------|
| [`modelValue`](#modelValue)                   | `Number or String`                                                                              | `0`         |
| [`items`](#items)                             | `Array<TabItem[]>`                                                                              | `[]`        |
| [`itemText`](#itemText)                       | `String`                                                                                        | `'text'`    |
| [`color`](#color)                             | `'primary'` &vert; `'secondary'` &vert; `'info'` &vert; `'warning'` &vert; `'success'` &vert; `'error'` | `'primary'` |
| [`showArrows`](#showArrows)                   | `Boolean`                                                                                       | `false`     |
| [`centerActive`](#centerActive)               | `Boolean`                                                                                       | `false`     |
| [`removeable`](#removeable)                   | `Boolean`                                                                                       | `false`     |
| [`vertical`](#vertical)                       | `Boolean`                                                                                       | `false`     |
| [`defaultWrapperClass`](#defaultWrapperClass) | `String`                                                                                        | `''`        |
| [`wrapperClass`](#wrapperClass)               | `String`                                                                                        | `''`        |
| [`hideSlider`](#hideSlider)                   | `Boolean`                                                                                       | `false`     |
| [`activeClass`](#activeClass)                 | `String`                                                                                        | `''`        |
| [`inactiveClass`](#inactiveClass)             | `String`                                                                                        | `''`        |
| [`defaultClass`](#defaultClass)               | `String`                                                                                        | `''`        |
| [`contentClass`](#contentClass)               | `String`                                                                                        | `''`        |
| [`sliderClass`](#sliderClass)                 | `String`                                                                                        | `''`        |

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
import {useToast} from '@/composables';

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

Define custom tab items rendering

Slot Props

| Prop          | Value      | Description                |
|---------------|------------|----------------------------|
| `onClick`     | `function` | Index of current tab       |
| `registerRef` | `function` | Current tab original value |

```vue
<VTabs>
<template v-slot:default="{onClick, registerRef, }">
  <VTab
    v-bind="item"
    v-for="(item, index) in items"
    :key="index"
    :index="index"
    :get-ref="registerRef"
    :active="index === activeTab"
    @click="onClick"
  >
    <div class="inline-block">
      {{ item.text }} {{ item.icon }}

      <span v-if="tab  === index" class='text-red-700' style='font-size: 10px; vertical-align: middle;'>
        {{ index }}
      </span>
    </div>
  </VTab>
</template>
</VTabs>
```

<LivePreview src="components-tabs--custom-tab" height='200' />

### `item`

Define custom content for the tab.

Slot Props

| Prop     | Value     | Description                              |
|----------|-----------|------------------------------------------|
| `index`  | `number`  | Index of current tab                     |
| `item`   | `any`     | Current tab original value               |
| `value`  | `any`     | Current tab label                        |
| `active` | `boolean` | Indication whether current tab is active |

```vue
<VTabs>
<template v-slot:item="{index, item, value, active}">
  <div class="inline-block">
    {{ value }} {{ item.icon }}

    <span v-if="active" class='text-red-700' style='font-size: 10px; vertical-align: middle;'>
        {{ index }}
      </span>
  </div>
</template>
</VTabs>

```

<LivePreview src="components-tabs--custom-tab-content" height="200" />

### `previous`

Define custom content for the previous arrow. Works when `showArrows` is set to `true`.

Slot Props

| Prop      | Value      | Description                     |
|-----------|------------|---------------------------------|
| `onClick` | `function` | Callback to handle click action |

```vue
<VTabs>
<template v-slot:previous="{onClick}">
  <VBtn prefix-icon="ri:arrow-left-s-line" class='mr-2' @click="onClick" />
</template>
</VTabs>
```

<LivePreview src="components-tabs--previous" height="200" />

### `next`

Define custom content for the next arrow. Works when `showArrows` is set to `true`.

Slot Props

| Prop      | Value      | Description                     |
|-----------|------------|---------------------------------|
| `onClick` | `function` | Callback to handle click action |

```vue
<VTabs>
<template v-slot:next="{onClick}">
  <VBtn prefix-icon="ri:arrow-right-s-line" class='mr-2' @click="onClick" />
</template>
</VTabs>
```

<LivePreview src="components-tabs--next" height="200" />

### `prepend`

Add an item to the start of the tab list

```vue
<template>
  <VTabs>
    <template #prepend>
      <div class='bg-[yellow] whitespace-nowrap uppercase p-3 mr-2 rounded-full'>
        🎒
      </div>
    </template>
  </VTabs>
</template>
```

<LivePreview src="components-tabs--prepend" height="200" />

### `append`

Add an item to the end of the tab list

```vue
<template>
  <VTabs>
    <template #append>
      <button title="See? I've been appended!">
        ❓
      </button>
    </template>
  </VTabs>
</template>
```

<LivePreview src="components-tabs--append" height="200" />

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
