# FileUpload

File input component.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" label="Label" />
</template>
```

<LivePreview src="forms-fileupload--default" />

::: info
The `VFileUpload` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Button Theme

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" label="Label" theme="button" />
</template>
```

<LivePreview src="forms-fileupload--button" />

### Image Theme

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" label="Label" theme="image" />
</template>
```

<LivePreview src="forms-fileupload--image" />

### Image Theme Full Width

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" label="Label" theme="image" full />
</template>
```

<LivePreview src="forms-fileupload--image-full" />

### Dropzone Theme

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" label="Label" theme="dropzone" />
</template>
```

<LivePreview src="forms-fileupload--dropzone" />

### Validation

```vue
<script setup lang="ts">
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

<LivePreview src="forms-fileupload--validation" />

### Initial Error

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

<LivePreview src="forms-fileupload--initial-error" />

### Initial Values

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

<LivePreview src="forms-fileupload--initial-error" />

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

## Types

### `FileValue`

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

### `update:modelValue`

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

### `hint`

```vue
<template>
  <VFileUpload>
    <template #hint> Max 10MB. </template>
  </VFileUpload>
</template>
```

### `error`

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

## Manual Installation

You can also install the `FileUpload` component individually via `@gits-id/forms` package:

```bash
npm i @gits-id/forms
```

```vue
<script setup lang="ts">
import {ref} from 'vue';

import {VFileUpload} from '@gits-id/forms';
import '@gits-id/forms/dist/style.css';

const value = ref();
</script>

<template>
  <VFileUpload v-model="value" />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-fileupload--default).
