# Editor

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

### Initial Values

```vue
<template>
  <VEditor model-value="<p>Hello World</p>" />
</template>
```

<LivePreview src="forms-editor--initial-value" />

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
    <VEditor
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

<LivePreview src="forms-editor--validation" height="550" />

## Props

| Name                              | Type                                       | Default                         |
| --------------------------------- | ------------------------------------------ | ------------------------------- |
| [`modelValue`](#modelValue)       | `string \| Delta`                          | `''`                            |
| [`value`](#value)                 | `string \| Delta`                          | `''`                            |
| [`errorMessages`](#errorMessages) | `Array`                                    | `[]`                            |
| [`name` ](#name)                  | `string`                                   | `undefined`                     |
| [`label` ](#label)                | `string`                                   | `undefined`                     |
| [`labelClass`](#labelClass)       | `string`                                   | `'block mb-2 font-medium'`      |
| [`errorClass`](#errorClass)       | `string`                                   | `'text-sm mt-1 text-error-500'` |

## Methods

None

## Events

- `update:modelValue`
- `update:value`
- `change`
- `input`
- `blur`

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `VEditor` component individually via `@gits-id/editor` package:

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

View Storybook documentation [here](https://gits-ui.web.app/?path=/docs/forms-editor--default).
