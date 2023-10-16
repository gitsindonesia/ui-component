# Standalone Form Components

## Introduction

The Standalone Form Components provide enhanced flexibility and compatibility with various form validation libraries. Starting from version `1.0.0-beta.11`, these components are decoupled from `vee-validate`, enabling seamless integration with different validation strategies and offering a more predictable behavior.

One of the key advantages of standalone form components is their compatibility with `v-model`, making data binding effortless and streamlined. Additionally, for users who still prefer using `vee-validate`, there are custom components available, marked by the `Field` suffix (e.g., `InputField`), which integrate with `vee-validate` and retain its capabilities.

By adopting the Standalone Form Components, developers can harness the full potential of the form components, allowing for a tailored form handling process that caters to diverse development preferences and validation libraries.

## Adoption Strategy

To ensure a smooth transition and avoid breaking changes, all new standalone form components will not replace the current components. Instead, you can use them by importing the required components from the @morpheme/forms package, except for the Switch component, which should be imported from the @morpheme/switch package.

## Standalone Form Component List

Here is a list of the available standalone form components:

- `Input`
- `InputField`
- `FormField`
- `Radio`
- `Checkbox`
- `Select`
- `SelectField`
- `SelectOptions`
- `FileInput`
- `FileInputField`
- `FileInputButtonActivator`
- `FileInputDefaultActivator`
- `FileInputItem`
- `FileInputItems`
- `Switch`
- `TextareaInput`
- `TextareaInputField`

## Basic Usage

The standalone form components are designed to work seamlessly with `v-model`, allowing easy data binding. Below is an example of basic usage:

```vue
<script setup lang="ts">
import {reactive} from 'vue';
import {Input, TextareaInput, Select, Radio, Checkbox, FileInput} from '@morpheme/forms';
import {Switch} from '@morpheme/switch';
import {VBtn} from '@morpheme/button';

const form = reactive({
  name: '',
  description: '',
  category: '',
  active: false,
  radio: '',
  checkboxSingle: false,
  checkboxMultiple: [],
  file: undefined,
  avatar: undefined,
});
</script>

<template>
  <form>
    <Input v-model="form.name" label="Name" wrapper-class="mb-4" />
    <TextareaInput
      v-model="form.description"
      label="Description"
      wrapper-class="mb-4"
    />
    <Select
      v-model="form.category"
      label="Category"
      wrapper-class="mb-4"
      :options="[
        {
          label: 'Category 1',
          value: '1',
        },
        {
          label: 'Category 2',
          value: '2',
        },
      ]"
    />
    <Switch v-model="form.active" label="Active" wrapper-class="mb-4" />

    <Radio id="radio1" v-model="form.radio" label="Radio 1" value="1" />
    <Radio
      id="radio2"
      v-model="form.radio"
      label="Radio 2"
      value="2"
      wrapper-class="mb-4"
    />

    <Checkbox
      id="checkbox-single"
      v-model="form.checkboxSingle"
      label="Checkbox 1"
      value="check1"
      wrapper-class="mb-4"
    />

    <Checkbox
      id="checkbox1"
      v-model="form.checkboxMultiple"
      label="Checkbox 1"
      value="check1"
    />
    <Checkbox
      id="checkbox2"
      v-model="form.checkboxMultiple"
      label="Checkbox 2"
      value="check2"
      wrapper-class="mb-4"
    />

    <FileInput v-model="form.file" label="File" />
    <FileInput v-model="form.avatar" label="Avatar" variant="button" />

    <div class="mt-4">
      <VBtn color="primary">Submit</VBtn>
    </div>
  </form>
</template>
```

## Form validation with `vee-validate`

For users who prefer using `vee-validate`, the standalone form components offer custom versions indicated by the `Field` suffix (e.g., `InputField`). Below is an example of using `vee-validate`'s version of form components:

```vue
<script setup lang="ts">
import {
  InputField,
  TextareaInputField,
  SelectField,
  Radio,
  Checkbox,
  CheckboxField,
  FileInputField,
} from '@morpheme/forms';
import VSwitch from '@morpheme/switch';
import {VBtn} from '@morpheme/button';
import {useField, useForm} from 'vee-validate';
import {array, boolean, object, string} from 'yup';

const {handleSubmit, values, errors, resetForm} = useForm({
  validationSchema: object({
    name: string().required(),
    description: string().required(),
    category: string().required(),
    active: boolean().oneOf([true]).required(),
    gender: string().required(),
    'checkbox-single': boolean().oneOf([true]).required(),
    hobbies: array().min(1).required(),
    file: array().min(1).required(),
    avatar: array().min(1).required(),
  }),
});

const {value: gender} = useField<string>('gender', undefined, {
  initialValue: '',
});
const {value: hobbies} = useField<any[]>('hobbies', undefined, {
  initialValue: [],
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <form @submit="onSubmit">
    <InputField name="name" label="Name" wrapper-class="mb-4" />
    <TextareaInputField
      name="description"
      label="Description"
      wrapper-class="mb-4"
    />
    <SelectField
      name="category"
      label="Category"
      wrapper-class="mb-4"
      :options="[
        {
          label: 'Category 1',
          value: '1',
        },
        {
          label: 'Category 2',
          value: '2',
        },
      ]"
    />
    <VSwitch name="active" label="Active" wrapper-class="mb-4" />

    <div class="mb-4">
      <div class="v-input-label">Gender</div>
      <Radio
        v-model="gender"
        id="radio1"
        name="gender"
        label="Male"
        value="male"
      />
      <Radio
        v-model="gender"
        id="radio2"
        name="gender"
        label="Female"
        value="female"
      />
      <div class="v-input-error">{{ errors.gender }}</div>
    </div>

    <div class="mb-4">
      <CheckboxField
        id="checkbox-single"
        name="checkbox-single"
        label="Checkbox 1"
      />
    </div>

    <div class="mb-4">
      <div class="v-input-label">Hobby</div>
      <Checkbox
        v-model="hobbies"
        id="checkbox1"
        name="hobbies"
        label="Coding"
        value="coding"
        :error="!!errors['hobbies']"
      />
      <Checkbox
        v-model="hobbies"
        id="checkbox2"
        name="hobbies"
        label="Sport"
        value="Sport"
        :error="!!errors['hobbies']"
      />
      <div class="v-input-error">{{ errors['hobbies'] }}</div>
    </div>

    <FileInputField name="file" label="File" wrapper-class="mb-4" />
    <FileInputField name="avatar" label="Avatar" variant="button" />

    <div class="mt-4">
      <VBtn type="submit" color="primary">Submit</VBtn>
      <VBtn @click="resetForm" class="ml-2">Reset</VBtn>
    </div>
    <div class="mt-4">
      <pre>{{ {values, errors} }}</pre>
    </div>
  </form>
</template>
```

## Additional Examples

For more examples and usage scenarios, please check out the Storybook under the `Experimental` group.

By leveraging the Standalone Form Components and choosing the appropriate validation library, you can enhance your form handling process and create a better user experience tailored to your project's needs.