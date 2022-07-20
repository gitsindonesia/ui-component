# Quill Editor Component

[VueQuill](https://vueup.github.io/vue-quill/) integrated with [vee-validate](https://vee-validate.logaretm.com/v4/).

## Installation

Install with your prefered Package Manager.

npm

```
npm i @gits-id/quill-editor
```

yarn

```
yarn add @gits-id/quill-editor
```

pnpm

```
pnpm i @gits-id/quill-editor
```

## Usage

### Basic Usage

```html
<script setup lang="ts">
  import {VQuillEditor} from '@gits-id/quill-editor';
  import '@gits-id/quill-editor/dist/style.css';

  const content = ref('');
</script>

<template>
  <VQuillEditor
    v-model="content"
    name="content"
    label="Content"
    placeholder="Input your content"
  />
  <pre>{{ {content} }}</pre>
</template>
```

### Validation Example

```html
<script setup lang="ts">
  import {VQuillEditor} from '@gits-id/quill-editor';
  import {useForm} from 'vee-validate';
  import {object, string} from 'yup';
  import VBtn from '@gits-id/button';
  import '@gits-id/quill-editor/dist/style.css';

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
    <pre>{{ { values } }}</pre>
  </form>
</template>
```

## Documentation

View full documentation [here](https://gits-ui.web.app/?path=/story/forms-quilleditor--basic).

## License

MIT
