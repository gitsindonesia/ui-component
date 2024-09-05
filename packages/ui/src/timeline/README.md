# Morpheme Timeline

Morpheme Timeline Component.

## Installation

npm

```
npm i @morpheme/timeline
```

yarn

```
yarn add @morpheme/timeline
```

pnpm

```
pnpm i @morpheme/timeline
```

## Usage

```vue
<script setup lang="ts">
import {
  VTimeline,
  VTimelineItem,
  VTimelineItemDot,
  VTimelineContent,
} from '@morpheme/timeline';
import VText from '@morpheme/text';
import VBtn from '@morpheme/button';

const items = [
  {
    date: 'June 2022',
    title: 'New feature release',
    description:
      "We've released an exciting new feature that will change the way you use our product.",
    link: '#',
    icon: 'mdi:rocket',
    button: 'View release notes',
    dot: {
      color: 'primary.100',
      textColor: 'primary.600',
    },
  },
  {
    date: 'May 2022',
    title: 'User interface redesign',
    description:
      "We've updated our user interface to improve usability and make it more intuitive.",
    link: '#',
    icon: 'mdi:palette',
    dot: {
      color: 'gray.100',
      textColor: 'gray.600',
    },
  },
  {
    date: 'April 2022',
    title: 'Server migration',
    description:
      "We're moving our servers to a new data center to improve performance and reliability.",
    link: '#',
    icon: 'mdi:server',
    dot: {
      color: 'warning.100',
      textColor: 'warning.600',
    },
  },
  {
    date: 'March 2022',
    title: 'New logo',
    description:
      "We've updated our logo to make it more recognizable and memorable.",
    link: '#',
    icon: 'mdi:brush',
    dot: {
      color: 'error.100',
      textColor: 'error.600',
    },
  },
];
</script>

<template>
  <VTimeline>
    <VTimelineItem v-for="item in items" :key="item.title">
      <VTimelineItemDot v-bind="item.dot">
        <VIcon :name="item.icon" size="xs" />
      </VTimelineItemDot>
      <VTimelineItemContent>
        <VText font-weight="semibold">
          {{ item.title }}
        </VText>
        <VText variant="sm" color="gray.500" class="mt-1">
          Published on {{ item.date }}
        </VText>
        <VText color="gray.600" class="mt-1">
          {{ item.description }}
        </VText>
        <VBtn v-if="item.button" class="mt-4">
          {{ item.button }}
        </VBtn>
      </VTimelineItemContent>
    </VTimelineItem>
  </VTimeline>
</template>
```

## Documentation

Check out storybook documentation [here](https://gits-ui.web.app/?path=/story/components-timeline--default).

## License

MIT
