---
outline: deep
---

# Popover

Popovers are perfect for floating panels with arbitrary content like navigation menus, mobile menus and flyout menus.

## Usage

### Basic Usage

Popovers are built using the `VPopover`, `VPopoverButton`, and `VPopoverPanel` components.

Clicking the `VPopoverButton` will automatically open/close the `VPopoverPanel`. When the panel is open, clicking anywhere outside of its contents, pressing the `Escape` key, or tabbing away from it will close the Popover.

<LivePreview src="components-popover--default" >

```vue
<template>
  <VPopover>
    <VPopoverButton>Click me</VPopoverButton>
    <VPopoverPanel>
      <p class="px-4 py-3">Popover content</p>
    </VPopoverPanel>
  </VPopover>
</template>
```

</LivePreview>

### Placement

You can change the panel placement via `placement` prop.

<LivePreview src="components-popover--placement" >

```vue
<template>
  <VPopover placement="bottom-end">
    <VPopoverButton>
      {{ placement }}
    </VPopoverButton>
    <VPopoverPanel>
      <p class="px-4 py-3">Popover content</p>
    </VPopoverPanel>
  </VPopover>
</template>
```

</LivePreview>

Here are list of the valid placements:

```ts
export const popoverPlacements = [
  "top",
  "right",
  "bottom",
  "left",
  "bottom-start",
  "bottom-end",
  "top-start",
  "top-end",
  "left-start",
  "left-end",
  "right-start",
  "right-end",
] as const;

export type VPopoverPlacement = typeof popoverPlacements[number];
```

### Overlay

If you'd like to style a backdrop over your application UI whenever you open a `VPopover`, use the `VPopoverOverlay` component:

<LivePreview src="components-popover--overlay" >

```vue
<template>
  <VPopover>
    <VPopoverButton>Click me</VPopoverButton>
    <VPopoverOverlay />
    <VPopoverPanel>
      <p class="px-4 py-3">Popover content</p>
    </VPopoverPanel>
  </VPopover>
</template>
```

</LivePreview>

### Group

When rendering several related Popovers, for example in a site's header navigation, use the `VPopoverGroup` component. This ensures panels stay open while users are tabbing between Popovers within a group, but closes any open panel once the user tabs outside of the group:

<LivePreview src="components-popover--group" >

```vue
<template>
  <VPopoverGroup>
    <VPopover>
      <VPopoverButton text>Click me</VPopoverButton>
      <VPopoverPanel>
        <p class="px-4 py-3">Popover content</p>
      </VPopoverPanel>
    </VPopover>
    <VPopover>
      <VPopoverButton text>Click me</VPopoverButton>
      <VPopoverPanel>
        <p class="px-4 py-3">Popover content</p>
      </VPopoverPanel>
    </VPopover>
  </VPopoverGroup>
</template>
```

</LivePreview>

### List

Here's an example of using `VList` with `VPopover`:

<LivePreview src="components-popover--with-list" >

```vue
<template>
  <VPopover>
    <VPopoverButton>Click me</VPopoverButton>
    <VPopoverPanel>
      <VList hover>
        <VListItem prepend-icon="ri:eye-line">View</VListItem>
        <VListItem prepend-icon="ri:edit-line">Edit</VListItem>
        <VDivider />
        <VListItem prepend-icon="ri:delete-bin-line">Delete</VListItem>
      </VList>
    </VPopoverPanel>
  </VPopover>
</template>
```

</LivePreview>

## Props

| Name                      | Type                | Default  |
| ------------------------- | ------------------- | -------- |
| [`placement`](#placement) | `VPopoverPlacement` | `bottom` |

## Events

None

## Slots

| Name                  | Props | Description          |
| --------------------- | ----- | -------------------- |
| [`default`](#default) | `{}`  | The default Vue slot |

## CSS Variables

```scss
:root {
  --v-popover-margin: var(--size-spacing-2);
  --v-popover-bg-color: white;
  --v-popover-border-color: var(--color-gray-300);
}

```

## Standalone Installation

You can also install the `VPopover` component individually via `@morpheme/popover` package:

```bash
npm i @morpheme/popover
```

```vue
<script setup lang="ts">
import VPopover from "@morpheme/popover";
</script>

<template>
  <VPopover />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-popover--default).
