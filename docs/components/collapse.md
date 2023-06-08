---
outline: deep
---

# Collapse

Toggle the visibility of content across your project with `VCollapse` component.

## Usage

### Basic Usage

You can use the `VCollapse` component in your template like so:

<LivePreview src="components-collapse--default">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const isOpen = ref(false);
</script>

<template>
  <VBtn @click="isOpen = !isOpen"> Toggle </VBtn>
  <VCollapse :show="isOpen">
    Anim eiusmod ea nostrud do incididunt consequat duis adipisicing
    reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut
    consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi
    elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui.
    Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute
    aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est
    pariatur qui amet cupidatat magna est adipisicing quis ea ea.
  </VCollapse>
</template>
```

</LivePreview>

The `isOpen` variable in the `v-model` directive controls whether the collapsible is open or closed.

### Expanded List

Here's an example how to create expanded list with `VCollapse` component.

<LivePreview src="components-collapse--expanded-list" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    question: 'What is Morpheme?',
    answer: 'Morpheme is a collection of UI components for Vue 3.',
    isOpen: true,
  },
  {
    question: 'What is Vue 3?',
    answer: 'Vue 3 is the latest version of the Vue framework.',
    isOpen: false,
  },
  {
    question: 'What is the difference between Vue 2 and Vue 3?',
    answer: 'Vue 3 is faster and smaller than Vue 2.',
    isOpen: false,
  },
]);
</script>

<template>
  <VList hover bordered>
    <template v-for="(item, index) in items">
      <VListItem
        @click="item.isOpen = !item.isOpen"
        prepend-icon="heroicons:chevron-down"
        :prepend-icon-class="{'transform rotate-180': item.isOpen}"
        class="!font-semibold"
      >
        {{ item.question }}
      </VListItem>
      <VCollapse :show="item.isOpen">
        <VListItem class="!text-gray-500">{{ item.answer }}</VListItem>
      </VCollapse>
    </template>
  </VList>
</template>
```

</LivePreview>

### Accordion 

Here's an example how to create accordion list with `VCollapse` component.

<LivePreview src="components-collapse--accordion">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const opened = ref(0);
const items = ref([
  {
    question: 'What is Morpheme?',
    answer: 'Morpheme is a collection of UI components for Vue 3.',
    isOpen: true,
  },
  {
    question: 'What is Vue 3?',
    answer: 'Vue 3 is the latest version of the Vue framework.',
    isOpen: false,
  },
  {
    question: 'What is the difference between Vue 2 and Vue 3?',
    answer: 'Vue 3 is faster and smaller than Vue 2.',
    isOpen: false,
  },
]);
</script>

<template>
  <VList hover bordered>
    <template v-for="(item, index) in items">
      <VListItem
        @click="opened = index"
        prepend-icon="heroicons:chevron-down"
        :prepend-icon-class="{'transform rotate-180': opened === index}"
        class="!font-semibold"
      >
        {{ item.question }}
      </VListItem>
      <VCollapse :show="opened === index">
        <VListItem class="!text-gray-500">{{ item.answer }}</VListItem>
      </VCollapse>
    </template>
  </VList>
</template>
```

</LivePreview>

## Props

| Name                        | Type               | Default         |
| --------------------------- | ------------------ | --------------- |
| [`show`](#show)             | `Boolean`          | `false`         |
| [`duration`](#duration)     | `[Number, Object]` | `300`           |
| [`transition`](#transition) | `String`           | `'ease-in-out'` |

## Events

None

## Slots

### Default slot

The default slot allows you to add content to the panel element. This is the content that will be revealed or hidden when the collapsible is opened or closed.

## CSS Variables

None

## Standalone Installation

You can also install the `Collapsible` component individually via `@morpheme/collapsible` package:

```bash
npm i @morpheme/collapsible
```

```vue
<script setup lang="ts">
import {VCollapse} from '@morpheme/collapsible';
</script>

<template>
  <VBtn @click="isOpen = !isOpen"> Toggle </VBtn>
  <VCollapse :show="isOpen">
    Anim eiusmod ea nostrud do incididunt consequat duis adipisicing
    reprehenderit nisi. Minim mollit eiusmod incididunt fugiat ipsum velit ut
    consequat est consectetur adipisicing. Nulla duis anim velit magna aute nisi
    elit nulla deserunt. Fugiat consequat ut magna eiusmod sit incididunt qui.
    Incididunt velit fugiat sunt sint amet magna est laborum excepteur. Aute
    aliqua nisi est nulla voluptate enim qui amet labore et consectetur. Est
    pariatur qui amet cupidatat magna est adipisicing quis ea ea.
  </VCollapse>
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-collapsible--default).
