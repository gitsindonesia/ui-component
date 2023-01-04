# QuillEditor

`VQuillEditor` is a rich text editor that allows users to add formatting and content to text documents. It is based on the [Quill.js](https://quilljs.com/) library and is designed to be easy to use and customize.

## Usage

To use the `VQuillEditor` component in your Vue.js application, you will need to have the `@gits-id/ui` package installed. The `VQuillEditor` component is registered globally when you install the package, so you don't need to import it manually.

### Basic Usage

The most basic usage of the `VQuillEditor` component is to add it to a template and bind it to a value variable using the `v-model` directive. The value variable will contain the text entered into the editor.

<LivePreview src="forms-quilleditor--basic" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <VQuillEditor v-model="value" />
</template>
```

</LivePreview>

### Label

You can add a label to the `VQuillEditor` component by using the `label` prop. The label will be displayed above the editor and can be used to provide context or instruction for the user.

<LivePreview src="forms-quilleditor--label" >

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <VQuillEditor v-model="value" label="Content" />
</template>
```

</LivePreview>

### Validation

The `VQuillEditor` component can be used with the `vee-validate` library to perform form validation. To do this, you will need to define a validation schema using yup and pass it to the `useForm` hook from `vee-validate`. You can then use the `handleSubmit` function from the hook to handle form submissions.

<LivePreview src="forms-quilleditor--validation" >

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

</LivePreview>

### Initial Values

You can set initial values for the form fields by passing an `initialValues` object to the `useForm` hook. The object should have keys that match the names of the form fields, and the values will be used as the default values for those fields.

<LivePreview src="forms-quilleditor--initial-values" >

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

</LivePreview>

### Initial Errors

You can also set initial errors for the form fields by passing an `initialErrors` object to the `useForm` hook. The object should have keys that match the names of the form fields, and the values will be used as the default error messages for those fields.

<LivePreview src="forms-quilleditor--initial-errors">

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

</LivePreview>

### Toolbar

The `VQuillEditor` component includes a toolbar that allows users to apply formatting to the text in the editor. By default, the toolbar includes the most commonly used formatting options, such as bold, italic, and underline.

You can customize the toolbar by using the toolbar prop. There are three built-in toolbar options: default, minimal, and full.

- `default`: The default toolbar includes the most commonly used formatting options.
- `minimal`: The minimal toolbar includes only the most essential formatting options.
- `full`: The full toolbar includes all available formatting options.

<LivePreview src="forms-quilleditor--toolbar" >


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

</LivePreview>

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
