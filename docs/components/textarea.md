# TextArea

## Usage

### Basic Usage

```vue
<template>
  <!--VTextarea is registered globally -->
  <VTextarea />
</template>
```

<LivePreview height="200" src="forms-textarea--default" />

### Label

```vue
<template>
  <VTextarea label="My Label" />
</template>
```

<LivePreview height="250" src="forms-textarea--label" />

### Readonly

```vue
<template>
  <VTextarea readonly value="Text" />
</template>
```

<LivePreview height="250" src="forms-textarea--readonly" />

### Disabled

```vue
<template>
  <VTextarea disabled />
</template>
```

<LivePreview height="250" src="forms-textarea--disabled" />

### Error

```vue
<template>
  <VTextarea error :error-messages="['Field is required']" />
</template>
```

<LivePreview height="250" src="forms-textarea--error" />

### Counter

```vue
<template>
  <VTextarea counter />
</template>
```

<LivePreview height="250" src="forms-textarea--counter" />

### Validation

The first you need to do is import required package

```ts
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
```

And then

```ts
const schema = object({
  bio: string().required().label('Bio'),
  message: string().required().label('Message'),
});

const {handleSubmit, resetForm} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
```

```vue
<template>
  <form @submit="onSubmit" class="border-none">
    <v-textarea
      wrapper-class="mb-4"
      name="message"
      label="Message"
      placeholder="Enter your message"
    />
    <v-textarea
      wrapper-class="mb-4"
      name="bio"
      label="Bio"
      placeholder="Enter your bio"
      input-class="italic"
    />
    <v-btn type="submit">Submit</v-btn>
    <v-btn type="button" text @click="resetForm">Reset</v-btn>
  </form>
</template>
```

<LivePreview src="forms-textarea--validation" />

### Validation Mode

There are 2 modes. The first is `eager` mode, and the second is `aggressive` mode. The `eager` mode validates input when the blur event occurs. Meanwhile, `aggressive` mode validates the input every time the input itself changes. This can be useful when you are validating for example the minimum or maximum limits of an input.

You can change the default value for this validation mode by adding an attribute or property named `validation-mode` to this component.

```ts{6}
const schema = object({
  bio_eager: string().required().min(5).max(150).label('Bio'),
  bio_aggressive: string().required().min(5).max(150).label('Bio'),
});

const modes = ref(['eager', 'aggressive']);

const {handleSubmit, resetForm, values, errors} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
```

```vue{12}
<template>
  <form @submit="onSubmit" class="border-none">
    <div class="flex flex-wrap gap-4">
      <fieldset class="border-none flex-1" v-for="mode in modes" :key="mode">
        <legend>Mode: {{ mode }}</legend>
        <v-textarea
          wrapper-class="mb-4"
          :name="'bio_' + mode"
          label="Bio"
          placeholder="Enter your bio"
          input-class="italic"
          :validation-mode="mode"
        />
      </fieldset>
    </div>
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <div class="my-5">Debug:</div>
    <pre>{{ {errors, values} }}</pre>
  </form>
</template>
```

<LivePreview src="forms-textarea--validation-mode" />

## Props

| Name                                | Type               | Default        |
| ----------------------------------- | ------------------ | -------------- |
| [`modelValue`](#modelValue)         | `string`           | `''`           |
| [`rows`](#rows)                     | `string \| number` | `undefined`    |
| [`value`](#value)                   | `string`           | `''`           |
| [`name`](#name)                     | `string`           | `''`           |
| [`error`](#error)                   | `boolean`          | `false`        |
| [`errorMessages`](#errorMessages)   | `array`            | `[]`           |
| [`readonly`](#readonly)             | `boolean`          | `false`        |
| [`disabled`](#disabled)             | `boolean`          | `false`        |
| [`shadow`](#shadow)                 | `boolean`          | `false`        |
| [`size`](#shadow)(deprecated)       | `string`           | `''`           |
| [`cols`](#cols)                     | `string \| number` | `'undefined'`  |
| [`label`](#label)                   | `string`           | `''`           |
| [`rules`](#rules)                   | `string`           | `''`           |
| [`wrapperClass`](#wrapperClass)     | `string`           | `''`           |
| [`inputClass`](#inputClass)         | `string`           | `''`           |
| [`validationMode`](#validationMode) | `string`           | `'aggressive'` |

## Methods

None

## Events

- [`update:modelValue`](#update:modelValue)

```vue
<script lang="ts" setup>
const handle = () => alert('Triggered!');
</script>

<template>
  <VTextarea @update:modelValue="handle" />
</template>
```

## Slots

- [`counter`](#counter-slot)

```vue
<template>
  <VTextarea counter>
    <template #counter="{count}">
      <div class="font-bold text-lg">{{ count }}</div>
    </template>
  </VTextarea>
</template>
```

### CSS Variables

| Variable                                                          | Default Value                  |
| ----------------------------------------------------------------- | ------------------------------ |
| [`--v-input-height`](#--v-input-height)                           | `2.5rem`                       |
| [`--v-input-border-color`](#--v-input-border-color)               | `theme('colors.gray.300'`      |
| [`--v-input-placeholder-color`](#--v-input-placeholder-color)     | `theme('colors.gray.500')`     |
| [`--v-input-border-radius`](#--v-input-border-radius)             | `theme('borderRadius.md')`     |
| [`--v-input-padding-x`](#--v-input-padding-x)                     | `theme('padding.3')`           |
| [`--v-input-padding-y`](#--v-input-padding-y)                     | `theme('padding.2')`           |
| [`--v-input-font-size`](#--v-input-font-size)                     | `theme('fontSize.base')`       |
| [`--v-input-bg-color`](#--v-input-bg-color)                       | `theme('colors.white')`        |
| [`--v-input-label-font-size`](#--v-input-label-font-size)         | `theme('fontSize.sm'`          |
| [`--v-input-label-font-weight`](#--v-input-label-font-weight)     | `theme('fontWeight.semibold')` |
| [`--v-input-label-display`](#--v-input-label-display)             | `block`                        |
| [`--v-input-label-margin-bottom`](#--v-input-label-margin-bottom) | `theme('margin.1')`            |
| [`--v-input-text-color`](#--v-input-text-color)                   | `theme('colors.gray.600')`     |
| [`--v-input-text-font-size`](#--v-input-text-font-size)           | `theme('fontSize.sm')`         |
| [`--v-input-text-font-weight`](#--v-input-text-font-weight)       | `theme('fontWeight.normal')`   |
| [`--v-input-icon-width`](#--v-input-icon-width)                   | `theme('width.5')`             |
| [`--v-input-icon-height`](#--v-input-icon-height)                 | `theme('height.5')`            |
| [`--v-input-icon-color`](#--v-input-icon-color)                   | `theme('colors.gray.500')`     |

## Manual Installation

You can also install the `VTextarea` component individually via `@gits-id/forms` package:

yarn :

```bash
yarn install @gits-id/forms
```

npm :

```bash
npm install @gits-id/forms
```

pnpm :

```bash
pnpm install @gits-id/forms
```

```vue
<script setup lang="ts">
import {VTextarea} from '@gits-id/forms';
</script>

<template>
  <VTextarea />
</template>
```
