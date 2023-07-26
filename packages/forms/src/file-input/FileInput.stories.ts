import {Story, Meta} from '@storybook/vue3';
import VBtn from '@morpheme/button'
import { Field, useForm } from 'vee-validate';
import { ref } from 'vue';
import { array, object } from 'yup';
import FileInput from './FileInput.vue';
import FileInputField from './FileInputField.vue';
import FileInputDefaultActivator from './FileInputDefaultActivator.vue';
import FileInputButtonActivator from './FileInputButtonActivator.vue';
import FileInputItem from './FileInputItem.vue';
import FileInputItems from './FileInputItems.vue';

export default {
  title: 'Experimental/Forms/FileInput',
  component: FileInput,
  subcomponents: {FileInputField, FileInputDefaultActivator},
} as Meta;

export const Default: Story<{}> = (args) => ({
  components: {
    FileInput,
    VBtn
  },
  setup() {
    const value = ref()
    return {args, value};
  },
  template: `
  <FileInput
    v-bind="args"
    v-model="value"
  />
  
  <VBtn class="my-3" @click="value = []">
    Clear
  </VBtn>
  <div>Debug:</div>
  <pre>Model Value: {{ value }}</pre>
  `,
});

export const Multiple = Default.bind({});
Multiple.args = {
  multiple: true,
};

export const Accept = Default.bind({});
Accept.args = {
  accept: 'image/*'
};

export const Error = Default.bind({});
Error.args = {
  error: true,
  errorMessage: 'This field is required'
};

export const LabelAndHint = Default.bind({});
LabelAndHint.args = {
  label: 'File',
  hint: 'Max 1MB. Only images are allowed.'
};

export const VariantProps = Default.bind({});
VariantProps.args = {
  label: 'File',
  variantProps: {
    hint: 'Max 1MB. Only images are allowed.'
  }
};

export const CustomSlot: Story<{}> = (args) => ({
  components: {
    FileInput,
    VBtn
  },
  setup() {
    const value = ref()
    return {args, value};
  },
  template: `
  <FileInput
    v-bind="args"
    v-slot="{files, open, reset}"
    v-model="value"
  >
    <VBtn @click="open">
      {{ files?.length ? 'Change' : 'Choose' }}
    </VBtn>
    <ul class="list-disc ml-4 text-sm text-gray-600">
      <li v-for="file in files" :key="file.name">
        {{ file.name }}
      </li>
    </ul>
  </FileInput>
  
  <VBtn class="my-3" @click="value = []">
    Clear
  </VBtn>
  <div>Debug:</div>
  <pre>Model Value: {{ value }}</pre>
  `,
});

export const FormValidation: Story<{}> = (args) => ({
  components: {
    FileInput,
    VBtn,
    Field,
    FileInputField
  },
  setup() {
    const {handleSubmit, values, errors, resetForm} = useForm({
      validationSchema: object({
        files: array()
          .required()
          .test('fileSize', 'File too large. Max 1MB.', (value) => {
            if (!value?.[0]) return true;

            return value?.[0]?.size < 1000000;
          })
          .label('File'),
        avatar: array()
          .required()
          .test('fileSize', 'File too large. Max 1MB.', (value) => {
            if (!value?.[0]) return true;

            return value?.[0]?.size < 1000000;
          })
          .test('fileType', 'Unsupported Format', (value) => {
            if (!value?.[0]) return true;
            return value?.[0]?.type?.startsWith('image');
          })
          .label('Avatar')
      })
    });
    const onSubmit = handleSubmit((values) => {
      console.log(values)
    })
    return {args, onSubmit, values, errors, resetForm};
  },
  template: `
    <form @submit="onSubmit">
      <!-- this is example using Field component -->
      <Field
        name="files"
        v-slot="{field, errorMessage, meta, handleChange}"
      >
        <label for="files" class="v-input-label">File</label>
        <FileInput
          :model-value="field.value"
          @update:modelValue="handleChange"
        />
        <div class="v-input-error">
          {{ errorMessage }}
        </div>
      </Field>

      <!--
        this is example using FileInputField. Much shorter.
        Make you to set name prop to match the validation schema
      -->
      <FileInputField
        wrapper-class="mt-4"
        label="Avatar"
        hint="Max 1MB. Only images are allowed."
        name="avatar"
        accept="image/*"
        v-slot="{files, open}"
      />

      <div class="flex gap-2 items-center mt-4">
        <VBtn type="submit" color="primary">Submit</VBtn>
        <VBtn type="reset" @click="resetForm" class="ml-2">Reset</VBtn>
      </div>

      <div class="mt-4">Debug:</div>
      <pre>{{ {values, errors} }}</pre>
    </form>
  `,
});

export const DefaultActivator: Story<{}> = (args) => ({
  components: {
    FileInput,
    VBtn,
    FileInputDefaultActivator,
    FileInputItem
  },
  setup() {
    const value = ref()
    const disabled = ref(false)
    return {args, value, disabled};
  },
  template: `
  <FileInput
    v-bind="args"
    v-slot="{files, open, reset}"
    v-model="value"
    multiple
    accept="image/*"
  >
    <FileInputDefaultActivator
      v-bind="{files, open, reset}"
      hint="Max 1MB. Only images are allowed."
      :disabled="disabled"
    />

    <FileInputItem
      v-for="(file, fileIndex) in value"
      :key="file.name"
      :name="file.name"
      :size="file.size"
      class="mt-2"
      @remove="value.splice(fileIndex, 1)"
    />
  </FileInput>
  
  <VBtn class="my-3" @click="value = []">
    Clear
  </VBtn>
  <VBtn class="my-3 ml-2" @click="disabled = !disabled">
    {{ disabled ? 'Enable' : 'Disable' }}
  </VBtn>
  <div>Debug:</div>
  <pre>Model Value: {{ value }}</pre>
  `,
});

export const ButtonActivator: Story<{}> = (args) => ({
  components: {
    FileInput,
    VBtn,
    FileInputButtonActivator,
    FileInputItems
  },
  setup() {
    const value = ref()
    return {args, value};
  },
  template: `
  <FileInput
    v-bind="args"
    v-slot="{files, open, reset}"
    v-model="value"
    multiple
    accept="image/*"
  >
    <FileInputButtonActivator
      v-bind="{files, open, reset}"
    />

    <p class="v-input-hint">
      Max 1MB. Only images are allowed.
    </p>

    <FileInputItems
      :files="value"
      class="mt-2"
      @remove="value.splice(fileIndex, 1)"
    />
  </FileInput>
  
  <VBtn class="my-3" @click="value = []">
    Clear
  </VBtn>
  <div>Debug:</div>
  <pre>Model Value: {{ value }}</pre>
  `,
});