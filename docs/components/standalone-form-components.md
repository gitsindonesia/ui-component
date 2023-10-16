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

<LivePreview src="experimental-forms-playground--example">

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

</LivePreview>

## Form validation with `vee-validate`

Here is an example of form validation using `vee-validate`:

<LivePreview src="experimental-forms-playground--with-validation">

```vue
<script setup lang="ts">
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import {
  Input,
  Checkbox,
  TextareaInput,
  Select,
  Radio,
  FileInput
} from '@morpheme/forms';
import {VBtn} from '@morpheme/button';
import {ref} from 'vue';
import {Select as SelectMenu} from '@morpheme/select';

const schema = yup.object({
  name: yup.string().required().label('Name'),
  email: yup.string().email().required().label('E-mail'),
  password: yup.string().min(6).required().label('Password'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required()
    .label('Password confirmation'),
  terms: yup
    .boolean()
    .required()
    .oneOf([true], 'You must agree to terms and conditions'),
    bio: yup.string().required().label('Bio'),
    hobby: yup.string().required().label('Hobby'),
    avatar: yup.array().min(1).required().label('Avatar'),
    radio: yup.string().required().label('Fruit'),
    checkboxMultiple: yup.array().min(1).required().label('Fruits'),
    selectMenu: yup.object().required().label('Select Menu'),
    selectMenu2: yup.array().min(1).required().label('Select Menu (Multiple)'),
    selectMenu3: yup.array().min(1).required().label('Select Menu (Searchable)'),
});

const { defineComponentBinds, handleSubmit, resetForm, errors, values } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    terms: false,
    bio: '',
    hobby: '',
    avatar: [],
    checkboxMultiple: [],
    selectMenu: undefined,
    selectMenu2: [],
    selectMenu3: [],
  }
});

const propsConfig = (state) => ({
  props: {
    error: !!state.errors.length,
    'error-message': state.errors[0],
  },
});

const name = defineComponentBinds('name', propsConfig);
const email = defineComponentBinds('email', propsConfig);
const password = defineComponentBinds('password', propsConfig);
const passwordConfirm = defineComponentBinds('passwordConfirm', propsConfig);
const terms = defineComponentBinds('terms', propsConfig);
const bio = defineComponentBinds('bio', propsConfig);
const hobby = defineComponentBinds('hobby', propsConfig);
const avatar = defineComponentBinds('avatar', propsConfig);
const radio = defineComponentBinds('radio', propsConfig);
const checkboxMultiple = defineComponentBinds('checkboxMultiple', propsConfig);
const selectMenu = defineComponentBinds('selectMenu', propsConfig);
const selectMenu2 = defineComponentBinds('selectMenu2', propsConfig);
const selectMenu3 = defineComponentBinds('selectMenu3', propsConfig);

const hobbies = ref([
  { label: 'Choose', value: '' },
  { label: 'Reading', value: 'reading' },
  { label: 'Coding', value: 'coding' },
  { label: 'Gaming', value: 'gaming' },
  { label: 'Disabled', value: 'gaming', disabled: true },
])

const fruits = ref([
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' },
  { label: 'Mango', value: 'mango' },
])

const selectMenuOptions = ref([
  { text: 'Apple', value: 'apple' },
  { text: 'Banana', value: 'banana' },
  { text: 'Orange', value: 'orange' },
  { text: 'Mango', value: 'mango' },
])

const onSubmit = handleSubmit((values) => {
  console.log('Submitted with', values);
});
</script>


<template>
  <form @submit="onSubmit" class="px-4 space-y-4">
    <Input id="name" v-bind="name" label="Name" />
    <Input id="email" v-bind="email" label="Email" type="email" />
    <Input id="password" v-bind="password" label="Password" type="password" />
    <Input
      v-bind="passwordConfirm"
      label="Password confirmation"
      type="password"
      id="password-confirm"
    />
    <TextareaInput v-bind="bio" label="Bio" />
    <Select v-bind="hobby" label="Hobby" :options="hobbies" />
    <FileInput v-bind="avatar" label="Avatar"  />

    <div>
      <div class="v-input-label">
        Choose your favorite fruits:
      </div>
      <Radio
        :id="`radio${i}`"
        v-for="(fruit, i) in fruits"
        :key="fruit.value"
        :value="fruit.value"
        v-bind="radio"
        :label="fruit.label"
        hide-error
      />
      <div v-if="errors.radio" class="v-input-error">
        {{ errors.radio }}
      </div>
    </div>

    <div>
      <div class="v-input-label">
        Choose your favorite fruits:
      </div>
      <p class="v-input-hint mb-2">
        You can choose more than one
      </p>
      <Checkbox
        :id="`checkbox${i}`"
        v-for="(fruit, i) in fruits"
        :key="fruit.value"
        :value="fruit.value"
        v-bind="checkboxMultiple"
        :label="fruit.label"
        hide-error
      />
      <div v-if="errors.checkboxMultiple" class="v-input-error">
        {{ errors.checkboxMultiple }}
      </div>
    </div>

    <Checkbox v-bind="terms" label="Do you agree?" color="primary" />
    
    <SelectMenu
      v-bind="selectMenu"
      :items="selectMenuOptions"
      label="Select Menu"
    />
    <SelectMenu
      v-bind="selectMenu2"
      :items="selectMenuOptions"
      label="Select Menu (Multiple)"
      multiple
      clearable
    />
    <SelectMenu
      v-bind="selectMenu3"
      :items="selectMenuOptions"
      label="Select Menu (Searchable)"
      searchable
      multiple
      clearable
    />

    <pre>{{ {values, errors} }}</pre>

    <div>
      <v-btn color="primary" type="submit"> Submit </v-btn>
      <v-btn color="outline" class="ml-4" @click="resetForm()"> Reset </v-btn>
    </div>
  </form>
</template>
```

</LivePreview>

## Additional Examples

For more examples and usage scenarios, please check out the [Storybook](https://gits-ui.web.app/?path=/story/experimental-forms-input--default) under the `Experimental` group.

By leveraging the Standalone Form Components and choosing the appropriate validation library, you can enhance your form handling process and create a better user experience tailored to your project's needs.