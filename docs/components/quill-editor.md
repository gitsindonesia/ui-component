# QuillEditor

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <VQuillEditor v-model="value" />
</template>
```

<LivePreview src="forms-quilleditor--basic" />

::: info
The `VQuillEditor` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Label

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <VQuillEditor v-model="value" label="Content" />
</template>
```

<LivePreview src="forms-quilleditor--label" />

### Validation

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  content: string().required().label('Content'),
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
    <VQuillEditor
      name="content"
      label="Content"
      placeholder="Input your content"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

<LivePreview src="forms-quilleditor--validation" />

### Initial Values

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  content: string().required().label('Content'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
  initialValues: {
    content: '<p>This is initial content</p>',
  },
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <VQuillEditor
      name="content"
      label="Content"
      placeholder="Input your content"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

<LivePreview src="forms-quilleditor--initial-values" />

### Initial Errors

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  content: string().required().label('Content'),
});

const {handleSubmit, resetForm, values} = useForm({
  validationSchema: schema,
  initialErrors: {
    content: 'Content is required',
  },
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <VQuillEditor
      name="content"
      label="Content"
      placeholder="Input your content"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

<LivePreview src="forms-quilleditor--initial-errors" />

### Toolbar

```vue
<script setup lang="ts">
import {ref} from 'vue';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  default: string().required().label('Default Toolbar'),
  minimal: string().required().label('Minimal Toolbar'),
  full: string().required().label('Full'),
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
    <VQuillEditor
      name="default"
      label="Default / essential"
      placeholder="Input your content"
    />
    <VQuillEditor
      name="minimal"
      label="Minimal"
      placeholder="Input your content"
      toolbar="minimal"
    />
    <VQuillEditor
      name="full"
      label="Full"
      placeholder="Input your content"
      toolbar="full"
    />
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <pre>{{ {values} }}</pre>
  </form>
</template>
```

<LivePreview src="forms-quilleditor--toolbar" />

## Props

| Name                          | Type                                       | Default                         |
| ----------------------------- | ------------------------------------------ | ------------------------------- |
| [`modelValue`](#modelValue)   | `string \| Delta`                          | `''`                            |
| [`value`](#value)             | `string \| Delta`                          | `''`                            |
| [`name` ](#name)              | `string`                                   | `undefined`                     |
| [`label` ](#label)            | `string`                                   | `undefined`                     |
| [`toolbar`](#toolbar)         | `'essential' \| 'minimal' \| 'full' \| ''` | `essential`                     |
| [`rules`](#rules)             | `string \| Record<string, any>`            | `undefined`                     |
| [`contentType`](#contentType) | `'html' \| 'text' \| 'delta'`              | `'html'`                        |
| [`enable`](#enable)           | `boolean`                                  | `true`                          |
| [`readOnly`](#readOnly)       | `boolean`                                  | `false`                         |
| [`labelClass`](#labelClass)   | `string`                                   | `'block mb-2 font-medium'`      |
| [`errorClass`](#errorClass)   | `string`                                   | `'text-sm mt-1 text-error-500'` |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `QuillEditor` component individually via `@gits-id/quill-editor` package:

```bash
yarn install @gits-id/quill-editor
```

```vue
<script setup lang="ts">
import VQuillEditor from '@gits-id/quill-editor';
</script>

<template>
  <VQuillEditor />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-quill-editor--default).
