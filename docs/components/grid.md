---
outline: deep
---

# Grid

::: warning
Experimental
:::

The grid is used to create specific layouts within an application’s content. It contains 5 types of media breakpoints that are used for targeting specific screen sizes or orientations:`sm`, `md`, `lg` and `xl`.

## Components

### `VRow`

The `VRow` component is a flexible row container that provides options for controlling the gap between items, alignment, and justification within the row.

### `VCol`

The `VCol` component is a flexible column container that allows you to control the column width, offset, and order at different breakpoints.

## Usage

The grid components is heavily inspired by the Bootstrap and Vuetify grid
. It is implemented by using a series of containers, rows, and columns to layout and align content. If you are new to flexbox, read the CSS Tricks flexbox guide for background, terminology, guidelines, and code snippets.

<LivePreview src="components-grid--default" >

```vue
<template>
  <VRow>
    <VCol>1</VCol>
    <VCol>2</VCol>
    <VCol>3</VCol>
    <VCol>4</VCol>
    <VCol>5</VCol>
    <VCol>6</VCol>
    <VCol>7</VCol>
    <VCol>8</VCol>
    <VCol>9</VCol>
    <VCol>10</VCol>
    <VCol>11</VCol>
    <VCol>12</VCol>
  </VRow>
</template>
```

</LivePreview>

### Column

The `VCol` component allows you to define the size of a column using the `cols` prop. You can specify the width of the column by providing a number between `1` and `12` or by using the value `auto` to let the column adjust its width based on the content.

<LivePreview src="components-grid--cols" >

```vue
<template>
  <VRow gap="4">
    <VCol cols="1" class="bg-gray-100 text-center"> 1 </VCol>
    <VCol cols="3" class="bg-gray-100 text-center"> 3 </VCol>
    <VCol cols="8" class="bg-gray-100 text-center"> 8 </VCol>
  </VRow>
</template>
```

</LivePreview>

In this example, we create a row with three columns. The first column has a width of 1, the second column has a width of 3, and the third column has a width of 8.

### Offset

You can offset a column within a row using the `offset` prop. This allows you to create empty space before a column, pushing it to the right.

<LivePreview src="components-grid--offset" >

```vue
<template>
  <VRow gap="4">
    <VCol cols="3" class="bg-gray-100 text-center"> 1 </VCol>
    <VCol cols="3" class="bg-gray-100 text-center"> 2 </VCol>
    <VCol cols="3" offset="3" class="bg-gray-100 text-center"> 3 </VCol>
  </VRow>
</template>
```

</LivePreview>

In this example, we create a row with three columns. The third column has an offset of 3, which means it will be pushed 3 units to the right, creating empty space before it.

### Order

The `order` prop allows you to control the order of columns within a row. By default, columns are displayed in the order they appear in the markup. However, you can use the `order` prop to override the default order and rearrange the columns as needed.

<LivePreview src="components-grid--order" >

```vue
<template>
  <VRow gap="4">
    <VCol cols="3" order="2" class="bg-gray-100 text-center"> 1 </VCol>
    <VCol cols="3" order="3" class="bg-gray-100 text-center"> 2 </VCol>
    <VCol cols="3" order="1" class="bg-gray-100 text-center"> 3 </VCol>
  </VRow>
</template>
```

</LivePreview>

In this example, we create a row with three columns. The first column has an order of 2, the second column has an order of 3, and the third column has an order of 1. As a result, the columns will be displayed in the order 3, 1, 2.

### Alignment

The `VRow` component allows you to control the alignment of its child columns using the `align`, `alignContent`, and `justifyContent` props.

<LivePreview src="components-grid--alignment" >

```vue
<script setup lang="ts">
const option = reactive({
  align: "center",
  alignContent: "center",
  justifyContent: "center",
});

function toItems(obj: any) {
  return Object.keys(obj).map((key) => ({
    text: obj[key],
    value: key,
  }));
}
</script>

<template>
  <VRow gap="4" class="mb-6">
    <VCol cols="3">
      <VSelect v-model="option.align" label="Align Items" :items="alignItems" />
    </VCol>
    <VCol cols="3">
      <VSelect
        v-model="option.alignContent"
        label="Align Content"
        :items="alignContent"
      />
    </VCol>
    <VCol cols="3">
      <VSelect
        v-model="option.justifyContent"
        label="Justify Content"
        :items="justifyContent"
      />
    </VCol>
  </VRow>

  <VRow gap="4" v-bind="option">
    <VCol cols="3" class="bg-gray-100 text-center">
      <div class="h-10 bg-red-500">1</div>
    </VCol>
    <VCol cols="3" class="bg-gray-100 text-center"> 2 </VCol>
    <VCol cols="3" class="bg-gray-100 text-center"> 3 </VCol>
  </VRow>
</template>
```

</LivePreview>

In this example, we create a row with three columns. The `align` prop controls the alignment of the items within each column, the `alignContent` prop controls the alignment of the row's content, and the `justifyContent` prop controls the justification of the row's content.

### Responsive

The `VCol` component supports responsiveness by allowing you to set different column widths for different breakpoints. You can use the `sm`, `md`, `lg`, and `xl` props to specify the column widths for small, medium, large, and extra-large screens, respectively.

<LivePreview src="components-grid--responsive" >

```vue
<template>
  <VRow>
    <VCol cols="12" sm="3" lg="4" xl="4">
      <div class="bg-gray-200 p-2 m-2">
        1
      </div>
    </VCol>
    <VCol cols="12" sm="3" lg="4" xl="4">
      <div class="bg-gray-200 p-2 m-2">
        2
      </div>
    </VCol>
    <VCol cols="12" sm="3" lg="4" xl="4">
      <div class="bg-gray-200 p-2 m-2">
        3
      </div>
    </VCol>
  </VRow>
</template>
```

</LivePreview>

In this example, we create a row with three columns. On extra-large screens (xl breakpoint), each column occupies 4 units of the available width. On large screens (lg breakpoint), each column occupies 4 units of the available width. On small screens (sm breakpoint) and below, each column occupies 3 units of the available width.

## Breakpoints

| Breakpoints | Max Width | Device  |
| ----------- | --------- | ------- |
| `sm`        | >= 360px  | Mobile  |
| `md`        | >= 640px  | Tablet  |
| `lg`        | >= 768px  | Tablet  |
| `xl`        | >= 834px  | Tablet  |
| `2xl`       | >= 1024px | Tablet  |
| `3xl`       | >= 1440px | Desktop |

## Props

### `VRow`

| Prop             | Type             | Default | Description                                                                             |
| ---------------- | ---------------- | ------- | --------------------------------------------------------------------------------------- |
| gap              | string \| number | -       | Sets the gap between items in the row.                                                  |
| gapSm            | string \| number | -       | Sets the gap between items in the row for small screens (sm breakpoint).                |
| gapMd            | string \| number | -       | Sets the gap between items in the row for medium screens (md breakpoint).               |
| gapLg            | string \| number | -       | Sets the gap between items in the row for large screens (lg breakpoint).                |
| gapXl            | string \| number | -       | Sets the gap between items in the row for extra-large screens (xl breakpoint).          |
| align            | string           | -       | Sets the alignment of items within the row.                                             |
| alignContent     | string           | -       | Sets the alignment of the entire row content.                                           |
| justifyContent   | string           | -       | Sets the justification of items within the row.                                         |
| alignSm          | string           | -       | Sets the alignment of items within the row for small screens (sm breakpoint).           |
| alignContentSm   | string           | -       | Sets the alignment of the entire row content for small screens (sm breakpoint).         |
| justifyContentSm | string           | -       | Sets the justification of items within the row for small screens (sm breakpoint).       |
| alignMd          | string           | -       | Sets the alignment of items within the row for medium screens (md breakpoint).          |
| alignContentMd   | string           | -       | Sets the alignment of the entire row content for medium screens (md breakpoint).        |
| justifyContentMd | string           | -       | Sets the justification of items within the row for medium screens (md breakpoint).      |
| alignLg          | string           | -       | Sets the alignment of items within the row for large screens (lg breakpoint).           |
| alignContentLg   | string           | -       | Sets the alignment of the entire row content for large screens (lg breakpoint).         |
| justifyContentLg | string           | -       | Sets the justification of items within the row for large screens (lg breakpoint).       |
| alignXl          | string           | -       | Sets the alignment of items within the row for extra-large screens (xl breakpoint).     |
| alignContentXl   | string           | -       | Sets the alignment of the entire row content for extra-large screens (xl breakpoint).   |
| justifyContentXl | string           | -       | Sets the justification of items within the row for extra-large screens (xl breakpoint). |

### `VCol`

| Prop     | Type                       | Default | Description                                                            |
| -------- | -------------------------- | ------- | ---------------------------------------------------------------------- |
| cols     | "auto" \| string \| number | "auto"  | Sets the width of the column.                                          |
| offset   | string \| number           | -       | Sets the offset of the column.                                         |
| order    | string \| number           | -       | Sets the order of the column.                                          |
| sm       | "auto" \| string \| number | -       | Sets the width of the column for small screens (sm breakpoint).        |
| md       | "auto" \| string \| number | -       | Sets the width of the column for medium screens (md breakpoint).       |
| lg       | "auto" \| string \| number | -       | Sets the width of the column for large screens (lg breakpoint).        |
| xl       | "auto" \| string \| number | -       | Sets the width of the column for extra-large screens (xl breakpoint).  |
| offsetSm | string \| number           | -       | Sets the offset of the column for small screens (sm breakpoint).       |
| offsetMd | string \| number           | -       | Sets the offset of the column for medium screens (md breakpoint).      |
| offsetLg | string \| number           | -       | Sets the offset of the column for large screens (lg breakpoint).       |
| offsetXl | string \| number           | -       | Sets the offset of the column for extra-large screens (xl breakpoint). |
| orderSm  | string \| number           | -       | Sets the order of the column for small screens (sm breakpoint).        |
| orderMd  | string \| number           | -       | Sets the order of the column for medium screens (md breakpoint).       |
| orderLg  | string \| number           | -       | Sets the order of the column for large screens (lg breakpoint).        |
| orderXl  | string \| number           | -       | Sets the order of the column for extra-large screens (xl breakpoint).  |

## Standalone Installation

You can also install the grid component individually via `@morpheme/layouts` package:

```bash
npm i @morpheme/layouts
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-grid--default).
