---
outline: deep
---

# FileUpload

The `VFileUpload` component is a form element that allows users to select and upload a file. It can be used with different themes, including a basic input field, a button, an image, or a dropzone.

## Usage

### Basic Usage

You can use it in your template as follows. This will render a basic file input field with the label "Label". The `v-model` directive is used to bind the value of the file input to the value variable, which can be a `ref` or a `computed` value.

<LivePreview src="forms-fileupload--default">

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" label="Label" />
</template>
```

</LivePreview>

::: info
The `VFileUpload` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
:::

### Themes

The `VFileUpload` component supports several themes that can be applied using the theme prop. Here are some examples of how to use each theme:

### Button Theme

This will render a file input field as a button, with the label "Label" displayed on the button.

<LivePreview src="forms-fileupload--button" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" label="Label" theme="button" />
</template>
```

</LivePreview>

<br>

### Image Theme

This will render a file input field as an image, with the label "Label" displayed on the image.

<LivePreview src="forms-fileupload--image" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" label="Label" theme="image" />
</template>
```

</LivePreview>

<br>

### Image Theme Full Width

This will render a file input field as a full-width image, with the label "Label" displayed on the image.

<LivePreview src="forms-fileupload--image-full" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" label="Label" theme="image" full />
</template>
```

</LivePreview>

<br>

### Dropzone Theme

This will render a file input field as a dropzone, with the label "Label" displayed on the dropzone.

<LivePreview src="forms-fileupload--dropzone" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" label="Label" theme="dropzone" />
</template>
```

</LivePreview>

### Validation

You can use the `VFileUpload` component with form validation by using a validation library such as `vee-validate`. Here's an example of how to use the FileUpload component with `vee-validate`:

<LivePreview src="forms-fileupload--validation" >

```vue
<script setup lang="ts">
import {useForm} from 'vee-validate';
import {object, mixed} from 'yup';

const schema = object({
  avatar: mixed().required().label('Avatar'),
  banner: mixed().required().label('Banner'),
  document: mixed().required().label('Document'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <v-file-upload
      wrapper-class="mb-4"
      theme="image"
      name="avatar"
      label="Avatar"
      placeholder="Pick your best photo"
      rounded
      image
    />
    <v-file-upload
      wrapper-class="mb-4"
      theme="dropzone"
      name="banner"
      label="Banner"
      placeholder="Choose banner image"
      image
      preview
    />
    <v-file-upload
      wrapper-class="mb-4"
      name="document"
      label="Document"
      placeholder="Pick PDF File"
      accept="application/pdf"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

</LivePreview>

### Initial Error

You can also specify initial errors for the `VFileUpload` component by providing an `initialErrors` object to the useForm hook:

<LivePreview src="forms-fileupload--initial-error" >

```vue {10-14}
<script setup lang="ts">
const schema = object({
  avatar: mixed().required().label('Avatar'),
  banner: mixed().required().label('Banner'),
  document: mixed().required().label('Document'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
  initialErrors: {
    avatar: 'Avatar is required',
    banner: 'Banner is required',
    document: 'Document is required',
  },
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <v-file-upload
      wrapper-class="mb-4"
      theme="image"
      name="avatar"
      label="Avatar"
      placeholder="Pick your best photo"
      rounded
      image
    />
    <v-file-upload
      wrapper-class="mb-4"
      theme="dropzone"
      name="banner"
      label="Banner"
      placeholder="Choose banner image"
      image
      preview
    />
    <v-file-upload
      wrapper-class="mb-4"
      name="document"
      label="Document"
      placeholder="Pick PDF File"
      accept="application/pdf"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

</LivePreview>

### Initial Values

You can also specify initial values for the `VFileUpload` component by providing an `initialValues` object to the `useForm` hook:

<LivePreview src="forms-fileupload--initial-error" >

```vue {10-14}
<script setup lang="ts">
const schema = object({
  avatar: mixed().required().label('Avatar'),
  banner: mixed().required().label('Banner'),
  document: mixed().required().label('Document'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
  initialValues: {
    avatar: 'https://picsum.photos/200/300',
    banner: 'https://picsum.photos/200/300',
    document: 'https://picsum.photos/200/300',
  },
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <v-file-upload
      wrapper-class="mb-4"
      theme="image"
      name="avatar"
      label="Avatar"
      placeholder="Pick your best photo"
      rounded
      image
    />
    <v-file-upload
      wrapper-class="mb-4"
      theme="dropzone"
      name="banner"
      label="Banner"
      placeholder="Choose banner image"
      image
      preview
    />
    <v-file-upload
      wrapper-class="mb-4"
      name="document"
      label="Document"
      placeholder="Pick PDF File"
      accept="application/pdf"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

</LivePreview>

## Props

| Name                                  | Type                                                                       | Default                           |
| ------------------------------------- | -------------------------------------------------------------------------- | --------------------------------- |
| [`value`](#value)                     | `Object as PropType<FileValue>`                                            | `null`                            |
| [`modelValue`](#modelValue)           | `Object as PropType<FileValue>`                                            | `null`                            |
| [`button`](#button)                   | `Boolean`                                                                  | `false`                           |
| [`full`](#full)                       | `Boolean`                                                                  | `false`                           |
| [`rounded`](#rounded)                 | `Boolean`                                                                  | `false`                           |
| [`image`](#image)                     | `Boolean`                                                                  | `false`                           |
| [`accept`](#accept)                   | `String`                                                                   | `''`                              |
| [`inputProps`](#inputProps)           | `Object`                                                                   | `({})`                            |
| [`name`](#name)                       | `String`                                                                   | `''`                              |
| [`error`](#error)                     | `Boolean`                                                                  | `false`                           |
| [`errorMessages`](#errorMessages)     | `Array`                                                                    | `[]`                              |
| [`placeholder`](#placeholder)         | `String`                                                                   | `'Browse file...'`                |
| [`hint`](#hint)                       | `String`                                                                   | `''`                              |
| [`id`](#id)                           | `String`                                                                   | `''`                              |
| [`readonly`](#readonly)               | `Boolean`                                                                  | `false`                           |
| [`disabled`](#disabled)               | `Boolean`                                                                  | `false`                           |
| [`browseText`](#browseText)           | `String`                                                                   | `'Browse'`                        |
| [`changeText`](#changeText)           | `String`                                                                   | `'Change'`                        |
| [`removeText`](#removeText)           | `String`                                                                   | `'Remove'`                        |
| [`viewFileText`](#viewFileText)       | `String`                                                                   | `'View File'`                     |
| [`loading`](#loading)                 | `Boolean`                                                                  | `false`                           |
| [`loadingText`](#loadingText)         | `String`                                                                   | `'Uploading...'`                  |
| [`theme`](#theme)                     | `String as PropType<'button' \| 'image' \| '' \| 'default' \| 'dropzone'>` | `''`                              |
| [`multiple`](#multiple)               | `Boolean`                                                                  | `false`                           |
| [`hidePlaceholder`](#hidePlaceholder) | `Boolean`                                                                  | `false`                           |
| [`uploadText`](#uploadText)           | `String`                                                                   | `'Upload a file'`                 |
| [`dragText`](#dragText)               | `String`                                                                   | `'or drag and drop'`              |
| [`preview`](#preview)                 | `Boolean`                                                                  | `false`                           |
| [`previewClass`](#previewClass)       | `String`                                                                   | `''`                              |
| [`customSize`](#customSize)           | `String`                                                                   | `'w-full sm:w-[180px] h-[180px]'` |
| [`customLayout`](#customLayout)       | `String`                                                                   | `''`                              |
| [`hideRemove`](#hideRemove)           | `Boolean`                                                                  | `false`                           |
| [`rules`](#rules)                     | `String`                                                                   | `''`                              |
| [`errorClass`](#errorClass)           | `String`                                                                   | `'text-error-500 text-sm'`        |
| [`label`](#label)                     | `String`                                                                   | `''`                              |
| [`labelClass`](#labelClass)           | `String`                                                                   | `'block mb-1'`                    |
| [`wrapperClass`](#wrapperClass)       | `String`                                                                   | `''`                              |
| [`hideError`](#hideError)             | `Boolean`                                                                  | `false`                           |

## Types

```ts
export type FileValue =
  | string
  | Record<string, any>
  | File
  | FileList
  | File[]
  | null;
```

## Events

The `VFileUpload` component emits several events that you can listen to and handle in your application.

### `update:modelValue`

This event is emitted when the value of the file input is updated. It passes the new value as an argument.

**Type**:

```ts
(event: 'update:modelValue', value: FileValue): void
```

**Example**:

```vue
<script setup lang="ts">
const onChange = (val: FileValue) => {
  console.log(val);
};
</script>

<template>
  <VFileUpload @update:modelValue="onChange" />
</template>
```

### `change`

This event is emitted when the value of the file input is changed. It passes the new value as an argument.

**Type**:

```ts
(event: 'change', value: FileValue): void
```

**Example**:

```vue
<script setup lang="ts">
const onChange = (val: FileValue) => {
  console.log(val);
};
</script>

<template>
  <VFileUpload @change="onChange" />
</template>
```

### `blur`

This event is emitted when the file input loses focus. It passes the event object as an argument.

**Type**:

```ts
(event: 'blur', e: Event): void
```

**Example**:

```vue
<script setup lang="ts">
const onBlur = (e: Event) => {
  console.log(e);
};
</script>

<template>
  <VFileUpload @blur="onBlur" />
</template>
```

### `removed`

This event is emitted when a file is removed from the file input.

**Type**:

```ts
(event: 'removed'): void
```

**Example**:

```vue
<script setup lang="ts">
const onRemoved = () => {
  console.log('Removed!');
};
</script>

<template>
  <VFileUpload @removed="onRemoved" />
</template>
```

## Slots

The `VFileUpload` component has two slots that you can use to customize its content.

### `hint`

Use the `hint` slot to add a hint or a description to the file input.

```vue
<template>
  <VFileUpload>
    <template #hint> Max 10MB. </template>
  </VFileUpload>
</template>
```

### `filename`

Use the `filename` slot to customize displayed filename text

```vue
<template>
  <VFileUpload>
    <template #filename> A file has been chosen. </template>
  </VFileUpload>
</template>
```

### `error`

Use the `error` slot to customize the error message displayed when the file input has an error. The slot receives an object with the following properties:

- `error`: a boolean indicating whether the file input has an error
- `errorMessages`: an array of error messages
- `field`: the name of the field

Type:

```ts
type ErrorProps = {
  error: boolean;
  errorMessages: string[];
  field: string;
};
```

Example:

```vue
<template>
  <VFileUpload>
    <template #error="{error, errorMessages, field}">
      <span class="text-red-500 text-xs">{{ errorMessages[0] }}</span>
    </template>
  </VFileUpload>
</template>
```

## CSS Variables

None

## Standalone Installation

You can also install the `FileUpload` component individually via `@morpheme/forms` package:

```bash
npm i @morpheme/forms
```

```vue
<script setup lang="ts">
import {ref} from 'vue';

import {VFileUpload} from '@morpheme/forms';
import '@morpheme/forms/dist/style.css';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-fileupload--default).
