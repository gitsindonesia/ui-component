# GITS List Group Component

Use List Group component for creating list, grouping list and creating menus.

## Installation

npm

```
npm i @gits-id/list-group
```

yarn

```
yarn add @gits-id/list-group
```

pnpm

```
pnpm i @gits-id/list-group
```

## Usage

This package provides 5 components: `ListGroup`, `ListItem`, `ListItemDivider`, `ListItemHeader`, `ListCollapse`.

### Basic Usage

```vue
<script setup lang="ts">
import {ListGroup, ListItem, ListItemDivider} from '@gits-id/list-group';
</script>

<template>
  <ListGroup>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItemDivider />
    <ListItem>Item 3</ListItem>
    <ListItemDivider />
    <ListItem>Item 4</ListItem>
    <ListItem>Item 5</ListItem>
  </ListGroup>
</template>
```

### List with icons

```vue
<template>
  <ListGroup v-bind="args">
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
  </ListGroup>
</template>
```

### Collapsing List

```vue
<template>
  <ListGroup>
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
      <ListGroup>
        <ListItem> Add New Post </ListItem>
        <ListItem> View Comments </ListItem>
      </ListGroup>
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
      <ListGroup>
        <ListItem> View Dashboard </ListItem>
        <ListItem> Sales </ListItem>
      </ListGroup>
    </ListCollapse>
  </ListGroup>
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-listgroup--basic-list).

## License

MIT
