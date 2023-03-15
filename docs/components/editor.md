---
outline: deep
---

# Editor

The `VEditor` component is an integration of the CKEditor component with `vee-validate` for validation.

## Usage

### Basic Usage

To use the `VEditor` component, bind it to a `value` using the `v-model` directive:

<LivePreview src="forms-editor--default">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <VEditor v-model="value" />
</template>
```

</LivePreview>

::: info
The `VEditor` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Label

You can add a label to the `VEditor` component by using the `label` prop:

<LivePreview src="forms-editor--label">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <VEditor v-model="value" label="Content" />
</template>
```

</LivePreview>

### Validation

To add validation to the `VEditor` component, you can use the `useForm` hook from `vee-validate`. Here's an example of how to set up validation and handle form submission:

<LivePreview src="forms-editor--validation">

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  content: string().required().label('Content'),
});

const {handleSubmit, resetForm, values, errors} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <VEditor
      wrapper-class="mb-4"
      name="content"
      label="Content"
      placeholder="Content"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
  </form>
</template>
```

</LivePreview>

## Props

| Name                              | Type     | Default   |
| --------------------------------- | -------- | --------- |
| [`modelValue`](#modelValue)       | string   | `''`      |
| [`value`](#value)                 | string   | `''`      |
| [`name`](#name)                   | string   | `''`      |
| [`rules`](#rules)                 | string   | `''`      |
| [`label`](#label)                 | string   | `''`      |
| [`labelClass`](#labelClass)       | string   | `''`      |
| [`wrapperClass`](#wrapperClass)   | string   | `''`      |
| [`error`](#error)                 | boolean  | `boolean` |
| [`errorClass`](#errorClass)       | string   | `''`      |
| [`errorMessages`](#errorMessages) | string[] | `[]`      |
| [`readonly`](#readonly)           | string   | `''`      |
| [`hint`](#hint)                   | `String` | `''`      |

## Events

The `VEditor` component emits several Vue events that can be listened to and acted upon.

### `update:modelValue`

This event is emitted when the `modelValue` prop of the `VEditor` component is updated. It passes the updated value as an argument.

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');

function onModelValueUpdate(value: string) {
  // do something with the updated value
}
</script>

<template>
  <VEditor v-model="value" @update:modelValue="onModelValueUpdate" />
</template>
```

### `change`

This event is emitted when the value of the `VEditor` component is changed. It passes the updated value as an argument.

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');

function onChange(value: string) {
  // do something with the updated value
}
</script>

<template>
  <VEditor v-model="value" @change="onChange" />
</template>
```

### `blur`

This event is emitted when the VEditor component loses focus. It passes the event object as an argument.

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');

function onBlur(event: any) {
  // do something with the event object
}
</script>

<template>
  <VEditor v-model="value" @blur="onBlur" />
</template>
```

## Slots

None

## CSS Variables

```css
:root {
  --v-editor-height: 300px;

  /* label */
  --v-editor-label-font-size: var(
    --input-label-font-size,
    theme('fontSize.sm')
  );
  --v-editor-label-font-weight: theme('fontWeight.normal');
  --v-editor-label-display: var(--v-input-label-display, block);
  --v-editor-label-margin-bottom: theme('margin.2');
}
```

## Manual Installation

You can also install the `Editor` component individually via `@morpheme/editor` package:

```bash
yarn install @morpheme/editor
```

```vue
<script setup lang="ts">
import VEditor from '@morpheme/editor';
</script>

<template>
  <VEditor />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-editor--default).
