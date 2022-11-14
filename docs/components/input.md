# Form Input

## Usage

### Basic Usage

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

### Colors

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

### Colors

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

<LivePreview src="forms-input--variants" />

### Readonly

```vue
<template>
  <VInput readonly />
</template>
```

<LivePreview src="forms-input--readonly" />

### Disabled

```vue
<template>
  <VInput disabled />
</template>
```

<LivePreview src="forms-input--disabled" />

### Shadow

```vue
<template>
  <VInput shadow />
</template>
```

<LivePreview src="forms-input--shadow" />

### Text

```vue
<template>
  <VInput text model-value="Text" label="Label" />
</template>
```

<LivePreview src="forms-input--text" />

### Error

```vue
<template>
  <VInput error />
</template>
```

<LivePreview src="forms-input--error" />

### Icons

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

| Name | Type | Default |
| ---- | ---- | ------- |

## Methods

None

## Events

None

## Slots

None

## CSS Variables

None

## Manual Installation

You can also install the `Input` component individually via `@gits-id/input` package:

```bash
npm install @gits-id/input
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
