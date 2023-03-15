---
outline: deep
---

# Input

The `VInput` component is a form control for receiving user input. It can be used in various ways, such as a single line text input, a password input, or a search bar.

## Usage

### Basic Usage

To use the `VInput` component, simply add the component to your template:

<LivePreview src="forms-input--default">

```vue
<template>
  <!--VInput is registered globally -->
  <VInput />
</template>
```

</LivePreview>

::: info
The `VInput` component is registered globally when you install with `@morpheme/ui`. So you don't need to import it manually.
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

<LivePreview src="forms-input--colors" >

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

</LivePreview>

### Readonly

To make the `VInput` component readonly, set the `readonly` prop to `true`.

<LivePreview src="forms-input--readonly" height="80" >

```vue
<template>
  <VInput readonly />
</template>
```

</LivePreview>

### Disabled

To disable the `VInput` component, set the `disabled` prop to `true`.

<LivePreview src="forms-input--disabled" height="80" >

```vue
<template>
  <VInput disabled />
</template>
```

</LivePreview>

### Shadow

To add a shadow to the `VInput` component, set the `shadow` prop to `true`.

<LivePreview src="forms-input--shadow" height="80" >

```vue
<template>
  <VInput shadow />
</template>
```

</LivePreview>

### Rounded

To add a shadow to the `VInput` component, set the `rounded` prop to `true`.

<LivePreview src="forms-input--rounded" height="80" >

```vue
<template>
  <VInput rounded />
</template>
```

</LivePreview>

### Text

To use the `VInput` component as a text input, set the `text` prop to `true` and provide a `model-value` and `label`.

<LivePreview src="forms-input--text" height="80" >

```vue
<template>
  <VInput text model-value="Text" label="Label" />
</template>
```

</LivePreview>

### Error

To display an error message with the `VInput` component, set the `error` prop to `true`.

<LivePreview src="forms-input--error" height="80" >

```vue
<template>
  <VInput error />
</template>
```

</LivePreview>

### Icons

You can add icons to the `VInput` component using the `prepend-icon` and `append-icon` props.

To customize the icon classes, use the `prepend-icon-class` and `append-icon-class` props. To customize the wrapper element classes, use the `prepend-class` and `append-class` props.

<LivePreview src="forms-input--icons" >

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

</LivePreview>

### Slots

You can use slots to insert custom content into the input field, such as icons, text, or buttons.

- Prepend Slot (Outer Position)

  The `prepend.outer` slot allows you to insert content before the input field, outside of the input field's container. This can be useful for adding icons or buttons that are positioned on the left side of the input field.

- Append Slot (Outer Position)

  The `prepend.outer` slot allows you to insert content before the input field, outside of the input field's container. This can be useful for adding icons or buttons that are positioned on the left side of the input field.

- Prepend Slot (Inner Position)

  The `prepend` slot allows you to insert content before the input field, inside of the input field's container. This can be useful for adding icons or text that are positioned on the left side of the input field and are aligned with the input text.

- Append Slot (Inner Position)

  The `append` slot allows you to insert content after the input field, inside of the input field's container. This can be useful for adding icons or text that are positioned on the right side of the input field and are aligned with the input text.

- Button or Text Slots

  You can use the `prepend.outer` and `append.outer` slots to insert button or text content on either side of the input field.

<LivePreview src="forms-input--slots" >

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

</LivePreview>

### Validation

To use the `VInput` component with a form validation library, you can use the `name` prop to bind the component to a form control. For example, with `VeeValidate`, you can use the `useForm` hook to create a form with validation schema:

<LivePreview src="forms-input--validation" >

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

</LivePreview>

### Validation Mode

There are 2 modes. The first is `eager` mode, and the second is `aggressive` mode. The `eager` mode validates input when the blur event occurs. Meanwhile, `aggressive` mode validates the input every time the input itself changes. This can be useful when you are validating for example the minimum or maximum limits of an input.

You can change the default value for this validation mode by adding an attribute or property named `validation-mode` to this component.

<LivePreview src="forms-input--validation-mode" >

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

</LivePreview>

### Field Array

Here is example of using `VInput` as field array with `vee-validate`.

<LivePreview src="forms-input--field-arrays" >

```vue
<script setup>
import {Field, useForm, useFieldArray} from 'vee-validate';
import VInput from '../VInput.vue';
import VBtn from '@morpheme/button';

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

</LivePreview>

### Field Array of Objects

Here is example of using `VInput` as field array of object with `vee-validate`.

<LivePreview src="forms-input--field-array-of-objects" >

```vue
<script setup>
import {Field, useForm, useFieldArray} from 'vee-validate';
import VInput from '../VInput.vue';
import VBtn from '@morpheme/button';

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

</LivePreview>

### Field Array Nested

Here is example of using `VInput` as nested field array with `vee-validate`.

<LivePreview src="forms-input--field-array-nested" >

```vue
<script setup>
import {Field, useForm, useFieldArray, FieldArray} from 'vee-validate';
import VInput from '../VInput.vue';
import VBtn from '@morpheme/button';

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

</LivePreview>

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
| [`rounded`](#rounded)                   | `Boolean`                                  | `false`        |
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
| [`hint`](#hint)                         | `String`                                   | `''`           |
| [`hideError`](#hideError)               | `Boolean`                                  | `false`        |

## Events

- [`update:modelValue`](#update:modelValue)

Emitted when the value of the `v-model` directive changes. Can be used to perform an action when the value changes, such as updating other data or displaying a message to the user.

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @update:modelValue="handle" />
</template>
```

- [`clickPrepend`](#clickPrepend)

Triggered when the element with the `prepend` slot is clicked.

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @click-prepend="handle" />
</template>
```

- [`clickPrependIcon`](#clickPrependIcon)

Triggered when the element with the `prepend-icon` slot is clicked.

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @click-prepend-icon="handle" />
</template>
```

- [`clickAppend`](#clickAppend)

Triggered when the element with the `append` slot is clicked.

```vue
<script setup lang="ts">
const handle = () => alert('Triggered!');
</script>

<template>
  <VInput @click-append="handle" />
</template>
```

- [`clickAppendIcon`](#clickAppendIcon)

Triggered when the element with the `append-icon` slot is clicked.

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

Allows you to customize the label of the input element.

```vue
<template>
  <VInput>
    <template #label>My Label</template>
  </VInput>
</template>
```

- [`prepend.outer`](#prepend.outer)

Allows you to customize the outer element of the prepend slot.

```vue
<template>
  <VInput>
    <template #prepend.outer>Prepend Outer</template>
  </VInput>
</template>
```

- [`prepend`](#prepend)

Allows you to customize the prepend slot.

```vue
<template>
  <VInput>
    <template #prepend>Prepend</template>
  </VInput>
</template>
```

- [`append.outer`](#append.outer)

Allows you to customize the outer element of the append slot.

```vue
<template>
  <VInput>
    <template #append.outer>Append Outer</template>
  </VInput>
</template>
```

- [`append`](#append)

Allows you to customize the append slot.

```vue
<template>
  <VInput>
    <template #append>Append</template>
  </VInput>
</template>
```

## CSS Variables

```scss
:root {
  /* input control */
  --v-input-height: 2.5rem;
  --v-input-border-color: theme('colors.gray.300');
  --v-input-placeholder-color: theme('colors.gray.500');
  --v-input-border-radius: theme('borderRadius.md');
  --v-input-padding-x: theme('padding.3');
  --v-input-padding-y: theme('padding.2');
  --v-input-font-size: theme('fontSize.base');
  --v-input-bg-color: theme('colors.white');

  /* label */
  --v-input-label-font-size: theme('fontSize.sm');
  --v-input-label-font-weight: theme('fontWeight.semibold');
  --v-input-label-display: block;
  --v-input-label-margin-bottom: theme('margin.1');

  /* text */
  --v-input-text-color: theme('colors.gray.600');
  --v-input-text-font-size: theme('fontSize.sm');
  --v-input-text-font-weight: theme('fontWeight.normal');

  /* icon */
  --v-input-icon-width: theme('width.5');
  --v-input-icon-height: theme('height.5');
  --v-input-icon-color: theme('colors.gray.500');
}
```

## Manual Installation

You can also install the `VInput` component individually via `@morpheme/forms` package:

```bash
npm i @morpheme/forms
```

```vue
<script setup lang="ts">
import {VInput} from '@morpheme/forms';
import '@morpheme/forms/dist/style.css';
// OR load SCSS styles
// import '@morpheme/forms/src/forms.scss';
</script>

<template>
  <VInput />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/forms-input--default).
