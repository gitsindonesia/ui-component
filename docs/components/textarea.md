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

### Disbled

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

There are 2 modes. The first is `eager` mode, and the second is `aggressive` mode. The `eager` mode validates input when the blur event occurs. Meanwhile, `aggressive` mode validates the input every time the input itself changes.

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
