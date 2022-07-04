# GITS List Component

Use `List` component for creating list, grouping list and creating menus.

## Installation

npm

```
npm i @gits-id/list
```

yarn

```
yarn add @gits-id/list
```

pnpm

```
pnpm i @gits-id/list
```

## Usage

This package provides 5 components: `List`, `ListItem`, `ListItemDivider`, `ListItemHeader`, `ListCollapse`.

### Basic Usage

```vue
<script setup lang="ts">
import {List, ListItem, ListItemDivider} from '@gits-id/list';
</script>

<template>
  <List>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItemDivider />
    <ListItem>Item 3</ListItem>
    <ListItemDivider />
    <ListItem>Item 4</ListItem>
    <ListItem>Item 5</ListItem>
  </List>
</template>
```

### List with icons

```vue
<template>
  <List v-bind="args">
    <ListItem prepend-icon="ri:user-line"> Item 1 </ListItem>
    <ListItem prepend-icon="ri:search-line"> Item 2 </ListItem>
    <ListItemDivider />
    <ListItem append-icon="ri:search-line"> Item 3 </ListItem>
    <ListItem append-icon="ri:search-line"> Item 4 </ListItem>
    <ListItemDivider />
    <ListItem prepend-icon="ri:home-line" append-icon="ri:search-line">
      Item 5
    </ListItem>
    <ListItem prepend-icon="ri:user-line" append-icon="ri:arrow-downs-line">
      Item 6
    </ListItem>
  </List>
</template>
```

### Collapsing List

```vue
<template>
  <List>
    <ListItem prepend-icon="ri:home-2-line"> Home </ListItem>
    <ListCollapse>
      <template #activator="{isOpen, toggle}">
        <ListItem
          prepend-icon="ri:book-line"
          append-icon="ri:arrow-down-s-line"
          :append-icon-class="isOpen ? 'rotate-180' : ''"
          @click="toggle"
        >
          Blog
        </ListItem>
      </template>
      <List>
        <ListItem> Add New Post </ListItem>
        <ListItem> View Comments </ListItem>
      </List>
    </ListCollapse>
    <ListCollapse>
      <template #activator="{isOpen, toggle}">
        <ListItem
          prepend-icon="ri:user-line"
          append-icon="ri:arrow-down-s-line"
          :append-icon-class="isOpen ? 'rotate-180' : ''"
          @click="toggle"
        >
          Shop
        </ListItem>
      </template>
      <List>
        <ListItem> View Dashboard </ListItem>
        <ListItem> Sales </ListItem>
      </List>
    </ListCollapse>
  </List>
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-listgroup--basic-list).

## License

MIT
