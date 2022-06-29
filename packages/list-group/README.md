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

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/components-listgroup--basic-list).

## License

MIT
