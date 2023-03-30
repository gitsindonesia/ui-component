---
outline: deep
---

# Progress Circular

The `VProgressCircular` component is a circular progress bar that can be used in Vue.js applications. It is customizable and can display a progress value or be used as an indeterminate loader.

## Usage

The `VProgressCircular` component is a circular progress indicator that can be customized with different colors, sizes, and values. It can be used in a variety of scenarios, such as loading screens, progress bars, or data visualizations.

To use the `VProgressCircular` component, simply import it and create a new instance. You can then use it in your Vue templates as shown below:

<LivePreview src="components-progresscircular--default">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const progress = ref(0);
</script>

<template>
  <VProgressCircular v-model="progress" />
</template>
```

</LivePreview>

The `v-model` directive is used to bind the progress variable to the component's value. This allows you to update the progress dynamically and have the component reflect those changes.

## Text

The `VProgressCircular` component can display the progress value as text inside the circle. To enable this, simply wrap the component's slot content with curly braces and add it inside the component's tags.

<LivePreview src="components-progresscircular--text">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const progress = ref(0);
</script>

<template>
  <VProgressCircular v-model="progress">
    {{ progress }}
  </VProgressCircular>
</template>
```

</LivePreview>

## Indeterminate

The `VProgressCircular` component can also be used in an indeterminate mode, where the progress value is unknown and the circle animates continuously.

<LivePreview src="components-progresscircular--indeterminate">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const progress = ref(0);
</script>

<template>
  <VProgressCircular v-model="progress" indeterminate />
</template>
```

</LivePreview>

## Custom Color

You can customize the color of the `VProgressCircular` component by setting the color prop to a valid CSS color value. For example, to set the color to a specific shade of red, you can use the following code:

<LivePreview src="components-progresscircular--custom-color">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const progress = ref(0);
</script>

<template>
  <VProgressCircular v-model="progress" color="rose.500" />
</template>
```

</LivePreview>

## Custom Size

You can adjust the size of the `VProgressCircular` component by setting the `size` and `width` props. The `size` prop sets the diameter of the circle, while the `width` prop sets the thickness of the circle's stroke.

<LivePreview src="components-progresscircular--custom-size">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const progress = ref(0);
</script>

<template>
  <VProgressCircular v-model="progress" :size="50" :width="8" />
</template>
```

</LivePreview>

## Props

| Prop             | Type                 | Required | Default Value             | Description                                                |
| ---------------- | -------------------- | -------- | ------------------------- | ---------------------------------------------------------- |
| `modelValue`     | `Number`             | Yes      | `N/A`                     | The current progress value                                 |
| `size`           | `Number`             | No       | `100`                     | The diameter of the circular progress bar in pixels        |
| `width`          | `Number`             | No       | `10`                      | The width of the progress bar in pixels                    |
| `color`          | `String`             | No       | `'primary.600'`           | The color of the progress bar                              |
| `indeterminate`  | `Boolean`            | No       | `false`                   | Whether the progress bar should be indeterminate           |
| `underlayColor`  | `String`             | No       | `'gray.200'`              | The color of the underlay (background) of the progress bar |
| `underlayWidth`  | `Number`             | No       | The value of `width` prop | The width of the underlay                                  |
| `underlayFill`   | `String`             | No       | `'transparent'`           | The fill color of the underlay                             |
| `textFontSize`   | `String`             | No       | `'1rem'`                  | The font size of the progress value text                   |
| `textFontWeight` | `String` or `Number` | No       | `600`                     | The font weight of the progress value text                 |

## Events

| Event               | Parameters      | Description                           |
| ------------------- | --------------- | ------------------------------------- |
| `update:modelValue` | `value: number` | Fired when the progress value changes |

## Styling

The component provides a few CSS classes that can be used to style the progress bar:

- `.v-progress-circular`: the main container element
- `.v-progress-circular--indeterminate`: applied when the `indeterminate` prop is true
- `.v-progress-circular-underlay`: the underlay circle element
- `.v-progress-circular-overlay`: the overlay circle element
- `.v-progress-circular-text`: the progress value text element

The `scoped` attribute is used to limit the CSS rules to the component only.

## Standalone Installation

You can also install the component individually via `@morpheme/progress-circular` package:

```bash
npm i @morpheme/progress-circular
```

Then, use it like so:

```vue
<script setup lang="ts">
import VProgressCircular from '@morpheme/progress-circular';
</script>

<template>
  <VProgressCircular :model-value="50" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-progresscircular--default).
