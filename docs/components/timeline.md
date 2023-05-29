---
outline: deep
---

# Timeline

The `VTimeline` component is a Vue timeline component that can display a list of events or steps in a vertical or horizontal layout. It provides an optional dashed styling and a customizable divider component to separate the timeline items.

## Usage

### Basic Usage

To use the `VTimeline` component, you can simply include it in your template like this:

<LivePreview src="components-timeline--default">

```vue
<script setup lang="ts">
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

</LivePreview>

### Dashed

To apply dashed style to the timeline divider, add `dashed` prop.

<LivePreview src="components-timeline--dashed">

```vue {4}
<!-- more code -->

<template>
  <VTimeline dashed>
    <!-- more code -->
  </VTimeline>
</template>
```

</LivePreview>

### Horizontal

To change the timeline layout to horizontal, add `horizontal` prop.

<LivePreview src="components-timeline--horizontal">

```vue {4}
<!-- more code -->

<template>
  <VTimeline horizontal>
    <!-- more code -->
  </VTimeline>
</template>
```

</LivePreview>

## Props

| Name                        | Type      | Default | Description                                                         |
| --------------------------- | --------- | ------- | ------------------------------------------------------------------- |
| [`dashed`](#dashed)         | `boolean` | `false` | Determines whether the timeline is rendered with a dashed style.    |
| [`horizontal`](#horizontal) | `boolean` | `false` | Determines whether the timeline is rendered in a horizontal layout. |

## Slots

| Name      | Description                                                                                                                                                                |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `default` | The default slot is used to render the timeline items.                                                                                                                     |
| `divider` | The divider slot can be used to customize the divider component that separates the timeline items. If not provided, the default `VTimelineDivider` component will be used. |

## Sub Components

- [`VTimelineDivider`](#timeline-divider)
- [`VTimelineItem`](#timeline-item)
- [`VTimelineItemDot`](#timeline-item-dot)
- [`VTimelineItemContent`](#timeline-item-content)

## CSS Variables

None

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-timeline--default).
