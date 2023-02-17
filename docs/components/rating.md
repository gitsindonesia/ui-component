---
outline: deep
---

# Rating

A rating component is a user interface element that allows users to rate a product, service, or experience by selecting a number of stars or another similar symbol. It's commonly used in e-commerce websites, review platforms, and feedback systems to gather user opinions and provide an overall score for a particular item. The rating component is typically displayed as a visual representation, such as a series of stars, and users can select the number of stars that corresponds to their rating. The average rating is then calculated based on the ratings provided by multiple users.

## Usage

### Basic Usage

<br>

<LivePreview src="components-rating--default" >

```vue
<template>
  <VRating :rating="3" />
</template>
```

</LivePreview>

### `v-model`

The component also supports the `v-model` directive, which allows you to bind the value of the progress bar to a data property.

<LivePreview src="components-rating--default-value" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const rating = ref(3);
</script>

<template>
  <VRating v-model:rating="rating" />
</template>
```

</LivePreview>

### Half Stars

<LivePreview src="components-rating--half-stars" >

```vue
<template>
  <VRating :rating="2.5" :increment="0.5" />
</template>
```

</LivePreview>

## Props

| Prop              | Type            | Default   | Description                                                         |
| ----------------- | --------------- | --------- | ------------------------------------------------------------------- |
| increment         | Number          | 1         | The increment of the rating change.                                 |
| rating            | Number          | 0         | The initial rating value.                                           |
| roundStartRating  | Boolean         | true      | Whether to round the initial rating value to the nearest increment. |
| activeColor       | [String, Array] | "#ffd055" | The color of the active (filled) stars.                             |
| inactiveColor     | String          | "#d8d8d8" | The color of the inactive (unfilled) stars.                         |
| maxRating         | Number          | 5         | The maximum number of stars.                                        |
| starPoints        | Array           | []        | The points for each star shape.                                     |
| starSize          | Number          | 24        | The size of the stars.                                              |
| showRating        | Boolean         | false     | Whether to display the current rating value.                        |
| readOnly          | Boolean         | false     | Whether the rating can be changed by user interaction.              |
| textClass         | String          | ""        | The class applied to the rating text.                               |
| inline            | Boolean         | false     | Whether to display the rating in a row or a column.                 |
| borderColor       | String          | "#999"    | The color of the star border.                                       |
| activeBorderColor | [String, Array] | null      | The color of the active star border.                                |
| borderWidth       | Number          | 0         | The width of the star border.                                       |
| roundedCorners    | Boolean         | false     | Whether to display the stars with rounded corners.                  |
| padding           | Number          | 0         | The padding between the stars.                                      |
| rtl               | Boolean         | false     | Whether to display the rating right-to-left.                        |
| fixedPoints       | Number          | null      | The fixed number of decimal points for the rating value.            |
| glow              | Number          | 0         | The size of the glow around the stars.                              |
| glowColor         | String          | "#fff"    | The color of the glow around the stars.                             |
| clearable         | Boolean         | false     | Whether the rating can be cleared to 0 by user interaction.         |
| activeOnClick     | Boolean         | false     | Whether the active color changes on click.                          |
| animate           | Boolean         | false     | Whether to animate the transition of the rating change.             |

## Events

| Event Name    | Description                                  |
| ------------- | -------------------------------------------- |
| update:rating | Triggered when the rating is updated.        |
| hover:rating  | Triggered when the mouse hovers over a star. |

## CSS Variables

None.

## Manual Installation

You can also install the `Rating` component individually via `@gits-id/rating` package:

```bash
npm i @gits-id/rating
```

```vue
<script setup lang="ts">
import {Rating as VRating} from '@gits-id/rating';
import '@gits-id/rating/dist/style.css';
</script>

<template>
  <VRating :rating="4" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-rating--variants).
