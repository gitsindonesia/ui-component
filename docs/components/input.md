# Input

The `VInput` component is a form control for receiving user input. It can be used in various ways, such as a single line text input, a password input, or a search bar.

## Usage

### Basic Usage

To use the `VInput` component, simply add the component to your template:

```vue
<template>
  <!--VInput is registered globally -->
  <VInput />
</template>
```

<LivePreview src="forms-input--default" />

::: info
The `VInput` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Placeholder

You can also provide a placeholder attribute to display a hint to the user:

```vue
<template>
  <VInput placeholder="Enter your name" />
</template>
```

### Colors

You can customize the color of the `VInput` component using the `color` prop. The available color options are: `primary`, `secondary`, `info`, `warning`, `success`, `error`, and `dark`.

```vue
<template>
  <VInput />
  <VInput color="primary" />
  <VInput color="secondary" />
  <VInput color="info" />
  <VInput color="warning" />
  <VInput color="success" />
  <VInput color="error" />
  <VInput color="dark" />
</template>
```

<LivePreview src="forms-input--colors" />

### Readonly

To make the `VInput` component readonly, set the `readonly` prop to `true`.

```vue
<template>
  <VInput readonly />
</template>
```

<LivePreview src="forms-input--readonly" />

### Disabled

To `disable` the VInput component, set the `disabled` prop to `true`.

```vue
<template>
  <VInput disabled />
</template>
```

<LivePreview src="forms-input--disabled" />

### Shadow

To add a shadow to the `VInput` component, set the `shadow` prop to `true`.

```vue
<template>
  <VInput shadow />
</template>
```

<LivePreview src="forms-input--shadow" />

### Text

To use the `VInput` component as a text input, set the `text` prop to `true` and provide a `model-value` and `label`.

```vue
<template>
  <VInput text model-value="Text" label="Label" />
</template>
```

<LivePreview src="forms-input--text" />

### Error

To display an error message with the `VInput` component, set the `error` prop to `true`.

```vue
<template>
  <VInput error />
</template>
```

<LivePreview src="forms-input--error" />

### Icons

You can add icons to the `VInput` component using the `prepend-icon` and `append-icon` props.

To customize the icon classes, use the `prepend-icon-class` and `append-icon-class` props. To customize the wrapper element classes, use the `prepend-class` and `append-class` props.

```vue
<script setup lang="ts">
const showAlert = (message: string) => alert(message);
</script>

<template>
  <div class="space-y-2">
    <VInput
      prepend-icon="ri:search-line"
      placeholder="Search..."
      @clickPrepend="showAlert('prepend click')"
    />
    <VInput
      append-icon="ri:search-line"
      placeholder="Search..."
      @clickAppend="showAlert('append click')"
    />
    <VInput
      prepend-icon="ic:baseline-add-reaction"
      placeholder="Search..."
      @clickPrependIcon="showAlert('prepend icon click')"
    />
    <VInput
      append-icon="ic:baseline-add-reaction"
      placeholder="Search..."
      @clickAppendIcon="showAlert('append icon click')"
    />
    <p>Custom Classes:</p>
    <VInput
      prepend-class="bg-gray-100 border-gray-200 border-r"
      prepend-icon="ri:search-line"
      placeholder="Search..."
      @clickPrepend="showAlert('prepend click')"
    />
    <VInput
      append-class="bg-gray-100 border-gray-200 border-l"
      append-icon="ri:search-line"
      placeholder="Search..."
      @clickAppend="showAlert('append click')"
    />
    <VInput
      prepend-icon-class="text-primary"
      prepend-icon="ic:baseline-add-reaction"
      placeholder="Search..."
      @clickPrependIcon="showAlert('prepend icon click')"
    />
    <VInput
      append-icon-class="text-primary"
      append-icon="ic:baseline-add-reaction"
      placeholder="Search..."
      @clickAppendIcon="showAlert('append icon click')"
    />
  </div>
</template>
```

<LivePreview src="forms-input--icons" />

### Slots

```vue
<template>
  <h3 class="font-semibold text-xl mb-3 mt-5">Outer</h3>
  <div class="space-y-1 border-none">
    <VInput placeholder="Search...">
      <template #prepend.outer>
        <Icon name="ri:search-line" class="fill-current ml-3 w-5 h-5" />
      </template>
    </VInput>

    <VInput placeholder="Search...">
      <template #append.outer>
        <Icon name="ri:search-line" class="fill-current mr-3 w-5 h-5" />
      </template>
    </VInput>

    <h3 class="font-semibold text-xl mb-3 mt-5">Inner</h3>
    <VInput placeholder="Search..." class="pl-10">
      <template #prepend>
        <Icon name="ri:search-line" class="fill-current w-5 h-5" />
      </template>
    </VInput>

    <VInput placeholder="Search...">
      <template #append>
        <Icon name="ri:search-line" class="fill-current w-5 h-5" />
      </template>
    </VInput>

    <h3 class="font-semibold text-xl mb-3 mt-5">Text</h3>
    <VInput placeholder="Search...">
      <template #prepend.outer>
        <span class="ml-3">Text</span>
      </template>
    </VInput>

    <VInput placeholder="Search...">
      <template #append.outer>
        <span class="mr-3">Text</span>
      </template>
    </VInput>

    <VInput placeholder="username">
      <template #prepend>
        <span class="text-gray-700 text-sm font-medium"
          >https://gits.id/user/</span
        >
      </template>
    </VInput>

    <VInput placeholder="username">
      <template #append>
        <span>@gits.id</span>
      </template>
    </VInput>

    <h3 class="font-semibold text-xl mb-3 mt-5">Button</h3>
    <VInput placeholder="Type...">
      <template #prepend.outer>
        <VBtn>Search</VBtn>
      </template>
    </VInput>

    <VInput placeholder="Type...">
      <template #append.outer>
        <VBtn>Search</VBtn>
      </template>
    </VInput>

    <VInput placeholder="No File Selected" prepend-class="!pl-0">
      <template #prepend>
        <VBtn text no-ring>Browse</VBtn>
      </template>
    </VInput>

    <VInput placeholder="No File Selected" append-class="!pr-0">
      <template #append>
        <VBtn text no-ring>Browse</VBtn>
      </template>
    </VInput>
  </div>
</template>
```

<LivePreview src="forms-input--slots" />

### Validation

```vue
<script setup lang="ts">
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  name: string().required().label('Name'),
  email: string().required().email().label('Email'),
});

const {handleSubmit, resetForm} = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit" class="border-none">
    <VInput
      wrapper-class="mb-2"
      name="name"
      label="Name"
      placeholder="Your Name"
    />
    <VInput
      wrapper-class="mb-2"
      name="email"
      label="Email"
      placeholder="Your Email"
    />
    <div class="mt-4">
      <VBtn type="submit">Submit</VBtn>
      <VBtn type="button" text @click="resetForm">Reset</VBtn>
    </div>
  </form>
</template>
```

<LivePreview src="forms-input--validation" />

### Validation Mode

```vue
<script setup lang="ts">
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

const schema = object({
  name_eager: string().required().label('Name'),
  email_eager: string().required().email().label('Email'),
  name_aggressive: string().required().label('Name'),
  email_aggressive: string().required().email().label('Email'),
});

const {handleSubmit, resetForm} = useForm({
  validationSchema: schema,
});

const modes = ref(['eager', 'aggressive']);

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values));
});
</script>

<template>
  <form @submit="onSubmit">
    <div class="flex flex-wrap gap-4">
      <fieldset class="border-none flex-1" v-for="mode in modes" :key="mode">
        <legend>Mode: {{ mode }}</legend>
        <VInput
          wrapper-class="mb-2"
          :name="'name_' + mode"
          label="Name"
          placeholder="Your Name"
          :validation-mode="mode"
        />
        <VInput
          wrapper-class="mb-2"
          :name="'email_' + mode"
          label="Email"
          placeholder="Your Email"
          :validation-mode="mode"
        />
      </fieldset>
    </div>
    <div class="mt-4">
      <VBtn type="submit">Submit</VBtn>
      <VBtn type="button" text @click="resetForm">Reset</VBtn>
    </div>
  </form>
</template>
```

<LivePreview src="forms-input--validation-mode" />

### Field Array

```vue
<script setup>
import {Field, useForm, useFieldArray} from 'vee-validate';
import VInput from '../VInput.vue';
import VBtn from '@gits-id/button';

const {handleSubmit, values, errors} = useForm({
  initialValues: {
    links: ['https://github.com/logaretm'],
  },
});

const {remove, push, fields} = useFieldArray('links');

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <form @submit="onSubmit" novalidate>
    <div v-for="(field, idx) in fields" :key="field.key" class="flex gap-4">
      <VInput
        placeholder="http://"
        :name="`links[${idx}]`"
        type="url"
        wrapper-class="mb-2 flex-1"
      />
      <div>
        <VBtn type="button" @click="remove(idx)">Remove</VBtn>
      </div>
    </div>
    <div class="mt-4 space-x-2">
      <VBtn type="button" @click="push('')">Add</VBtn>
      <VBtn type="submit">Submit</VBtn>
    </div>
    Debug:
    <pre>{{ {values, errors} }}</pre>
  </form>
</template>
```

<LivePreview src="forms-input--field-arrays" />

### Field Array of Objects

```vue
<script setup>
import {Field, useForm, useFieldArray} from 'vee-validate';
import VInput from '../VInput.vue';
import VBtn from '@gits-id/button';

const {handleSubmit, values, errors} = useForm({
  initialValues: {
    users: [
      {
        name: 'Warsono',
        email: 'warsono@gits.id',
      },
    ],
  },
});

const {remove, push, fields} = useFieldArray('users');

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <form @submit="onSubmit" novalidate>
    <div v-for="(field, idx) in fields" :key="field.key" class="flex gap-4">
      <VInput
        placeholder="Name"
        :name="`users[${idx}].name`"
        wrapper-class="mb-2"
      />
      <VInput
        placeholder="Email"
        :name="`users[${idx}].email`"
        type="email"
        wrapper-class="mb-2"
      />
      <div>
        <VBtn type="button" @click="remove(idx)">Remove</VBtn>
      </div>
    </div>
    <div class="mt-4 space-x-2">
      <VBtn type="button" @click="push({})">Add</VBtn>
      <VBtn type="submit">Submit</VBtn>
    </div>
    Debug:
    <pre>{{ {values, errors} }}</pre>
  </form>
</template>
```

<LivePreview src="forms-input--field-array-of-objects" />

### Field Array Nested

```vue
<script setup>
import {Field, useForm, useFieldArray, FieldArray} from 'vee-validate';
import VInput from '../VInput.vue';
import VBtn from '@gits-id/button';

const {handleSubmit, values, errors, resetForm} = useForm({
  initialValues: {
    users: [
      {
        name: 'Warsono',
        email: 'warsono@gits.id',
        links: [
          {
            link: '',
          },
        ],
      },
    ],
  },
});

const {remove, push, fields} = useFieldArray('users');

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<template>
  <h1 class="font-semibold text-2xl mb-4">User List</h1>
  <form @submit="onSubmit" novalidate>
    <div class="border rounded-lg p-2 space-y-3 divide divide-y">
      <div v-for="(field, userIdx) in fields" :key="field.key" class="p-3">
        <div class="flex gap-4">
          <VInput
            placeholder="Name"
            :name="`users[${userIdx}].name`"
            wrapper-class="mb-2"
          />
          <VInput
            placeholder="Email"
            :name="`users[${userIdx}].email`"
            type="email"
            wrapper-class="mb-2"
          />
          <div>
            <VBtn type="button" @click="remove(userIdx)">Remove</VBtn>
          </div>
        </div>

        <div>
          <h3 class="mt-4 mb-2 font-semibold">User Links</h3>
          <FieldArray
            :name="`users[${userIdx}].links`"
            v-slot="{fields: links, remove: removeLink, push: addLink}"
          >
            <div
              v-for="(link, linkIdx) in links"
              :key="link.key"
              class="flex gap-4"
            >
              <VInput
                placeholder="http://"
                :name="`users[${linkIdx}].link`"
                type="url"
                wrapper-class="mb-2"
              />
              <div>
                <VBtn type="button" @click="removeLink(linkIdx)">Remove</VBtn>
              </div>
            </div>
            <VBtn type="button" @click="addLink({})">Add Link</VBtn>
          </FieldArray>
        </div>
      </div>

      <div class="border-t mt-5 pt-2">
        <VBtn type="button" color="primary" @click="push({})"> Add User </VBtn>
      </div>
    </div>

    <div class="mt-4 space-x-2">
      <VBtn type="submit" color="primary">Submit</VBtn>
      <VBtn type="reset" @click="resetForm">Reset</VBtn>
    </div>
    Debug:
    <pre>{{ {values, errors} }}</pre>
  </form>
</template>
```

<LivePreview src="forms-input--field-array-nested" />

## Props

| Name                                    | Type                                       | Default        |
| --------------------------------------- | ------------------------------------------ | -------------- |
| [`modelValue`](#modelValue)             | `[String, Number]`                         | `''`           |
| [`type`](#type)                         | `String`                                   | `'text'`       |
| [`name`](#name)                         | `String`                                   | `''`           |
| [`error`](#error)                       | `Boolean`                                  | `false`        |
| [`errorMessages`](#errorMessages)       | `Array`                                    | `[]`           |
| [`readonly`](#readonly)                 | `Boolean`                                  | `false`        |
| [`disabled`](#disabled)                 | `Boolean`                                  | `false`        |
| [`size`](#size)                         | `String as PropType<'sm' \| 'md' \| 'lg'>` | `'md'`         |
| [`placeholder`](#placeholder)           | `String`                                   | `''`           |
| [`prependIcon`](#prependIcon)           | `String`                                   | `''`           |
| [`appendIcon`](#appendIcon)             | `String`                                   | `''`           |
| [`color`](#color)                       | `String`                                   | `'default'`    |
| [`text`](#text)                         | `Boolean`                                  | `false`        |
| [`shadow`](#shadow)                     | `Boolean`                                  | `false`        |
| [`validationMode`](#validationMode)     | `String`                                   | `'aggressive'` |
| [`classes`](#classes)                   | `Object`                                   | `{}`           |
| [`label`](#label)                       | `String`                                   | `''`           |
| [`rules`](#rules)                       | `[Object, String]`                         | `null`         |
| [`id`](#id)                             | `String`                                   | `''`           |
| [`inputClass`](#inputClass)             | `String`                                   | `''`           |
| [`wrapperClass`](#wrapperClass)         | `String`                                   | `''`           |
| [`prependClass`](#prependClass)         | `String`                                   | `''`           |
| [`prependIconClass`](#prependIconClass) | `String`                                   | `''`           |
| [`appendClass`](#appendClass)           | `String`                                   | `''`           |
| [`appendIconClass`](#appendIconClass)   | `String`                                   | `''`           |

## Methods

None

## Events

- [`update:modelValue`](#update:modelValue)

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @update:modelValue="handle" />
</template>
```

- [`blur`](#blur)

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @blur="handle" />
</template>
```

- [`change`](#change)

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @change="handle" />
</template>
```

- [`clickPrepend`](#clickPrepend)

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @click-prepend="handle" />
</template>
```

- [`clickPrependIcon`](#clickPrependIcon)

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @click-prepend-icon="handle" />
</template>
```

- [`clickAppend`](#clickAppend)

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @click-append="handle" />
</template>
```

- [`clickAppendIcon`](#clickAppendIcon)

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @click-append-icon="handle" />
</template>
```

## Slots

- [`label`](#label)

```vue
<template>
  <VInput>
    <template #label>My Label</template>
  </VInput>
</template>
```

- [`prepend.outer`](#prepend.outer)

```vue
<template>
  <VInput>
    <template #prepend.outer>Prepend Outer</template>
  </VInput>
</template>
```

- [`prepend`](#prepend)

```vue
<template>
  <VInput>
    <template #prepend>Prepend</template>
  </VInput>
</template>
```

- [`append.outer`](#append.outer)

```vue
<template>
  <VInput>
    <template #append.outer>Append Outer</template>
  </VInput>
</template>
```

- [`append`](#append)

```vue
<template>
  <VInput>
    <template #append>Append</template>
  </VInput>
</template>
```

## CSS Variables

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

You can also install the `VInput` component individually via `@gits-id/forms` package:

```bash
npm install @gits-id/forms
```

```vue
<script setup lang="ts">
import {VInput} from '@gits-id/forms';
</script>

<template>
  <VInput />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-input--default).
