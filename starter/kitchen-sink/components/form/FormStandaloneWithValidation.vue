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
