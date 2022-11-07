# Editor

CKEditor component integrated with `vee-validate` for validation.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <VEditor v-model="value" />
</template>
```

<LivePreview src="forms-editor--default" />

::: info
The `VEditor` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Label

```vue
<script setup lang="ts">
import {ref} from 'vue';

const value = ref('');
</script>

<template>
  <VEditor v-model="value" label="Content" />
</template>
```

<LivePreview src="forms-editor--label" />

### Validation

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

<LivePreview src="forms-editor--validation" />

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

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Editor` component individually via `@gits-id/editor` package:

```bash
yarn install @gits-id/editor
```

```vue
<script setup lang="ts">
import VEditor from '@gits-id/editor';
</script>

<template>
  <VEditor />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-editor--default).
