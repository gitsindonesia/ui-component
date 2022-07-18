import {Story} from '@storybook/vue3';
import {VInputProps} from 'packages/ui';
import {useForm} from 'vee-validate';
import {mixed, object} from 'yup';
import {VInput} from '..';
import VBtn from '@gits-id/button';
import VFileUpload from './VFileUpload.vue';

export default {
  title: 'Forms/FileUpload',
  component: VFileUpload,
  argTypes: {},
  args: {
    button: false,
    full: false,
    rounded: false,
    image: false,
    value: null,
    modelValue: null,
    accept: '',
    inputProps: {},
    name: '',
    error: false,
    errorMessages: [],
    placeholder: 'Browse file...',
    id: '',
  },
};

const Template: Story<{}> = (args) => ({
  components: {
    VFileUpload,
  },
  setup() {
    return {args};
  },
  template: `<v-file-upload v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-file-upload />',
    },
  },
};

export const Button = Template.bind({});
Button.args = {
  theme: 'button',
};
Button.parameters = {
  docs: {
    source: {
      code: '<v-file-upload theme="button" />',
    },
  },
};

export const Image = Template.bind({});
Image.args = {
  theme: 'image',
};
Image.parameters = {
  docs: {
    source: {
      code: '<v-file-upload theme="image" />',
    },
  },
};

export const ImageFull = Template.bind({});
ImageFull.args = {
  theme: 'image',
  full: true,
};
ImageFull.parameters = {
  docs: {
    source: {
      code: '<v-file-upload theme="image" full />',
    },
  },
};

export const Dropzone = Template.bind({});
Dropzone.args = {
  theme: 'dropzone',
};
Dropzone.parameters = {
  docs: {
    source: {
      code: '<v-file-upload theme="dropzone" />',
    },
  },
};

export const Validation: Story<VInputProps> = (args) => ({
  components: {VInput, VBtn, VFileUpload},
  setup() {
    const schema = object({
      avatar: mixed().required().label('Avatar'),
      banner: mixed().required().label('Banner'),
      document: mixed().required().label('Document'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-file-upload
        wrapper-class="mb-4"
        theme="image"
        name="avatar"
        label="Avatar"
        placeholder="Pick your best photo"
        rounded
        image
      />
      <v-file-upload
        wrapper-class="mb-4"
        theme="dropzone"
        name="banner"
        label="Banner"
        placeholder="Choose banner image"
        image
        preview
      />
      <v-file-upload
        wrapper-class="mb-4"
        name="document"
        label="Document"
        placeholder="Pick PDF File"
        accept="application/pdf"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const InitialError: Story<VInputProps> = (args) => ({
  components: {VInput, VBtn, VFileUpload},
  setup() {
    const schema = object({
      avatar: mixed().required().label('Avatar'),
      banner: mixed().required().label('Banner'),
      document: mixed().required().label('Document'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialErrors: {
        avatar: 'Avatar is required',
        banner: 'Banner is required',
        document: 'Document is required',
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-file-upload
        wrapper-class="mb-4"
        theme="image"
        name="avatar"
        label="Avatar"
        placeholder="Pick your best photo"
        rounded
        image
      />
      <v-file-upload
        wrapper-class="mb-4"
        theme="dropzone"
        name="banner"
        label="Banner"
        placeholder="Choose banner image"
        image
        preview
      />
      <v-file-upload
        wrapper-class="mb-4"
        name="document"
        label="Document"
        placeholder="Pick PDF File"
        accept="application/pdf"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const InitialValues: Story<VInputProps> = (args) => ({
  components: {VInput, VBtn, VFileUpload},
  setup() {
    const schema = object({
      avatar: mixed().required().label('Avatar'),
      banner: mixed().required().label('Banner'),
      document: mixed().required().label('Document'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialValues: {
        avatar: 'https://picsum.photos/200/300',
        banner: 'https://picsum.photos/200/300',
        document: 'https://picsum.photos/200/300',
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-file-upload
        wrapper-class="mb-4"
        theme="image"
        name="avatar"
        label="Avatar"
        placeholder="Pick your best photo"
        rounded
        image
        preview
      />
      <v-file-upload
        wrapper-class="mb-4"
        theme="dropzone"
        name="banner"
        label="Banner"
        placeholder="Choose banner image"
        image
        preview
      />
      <v-file-upload
        wrapper-class="mb-4"
        name="document"
        label="Document"
        placeholder="Pick PDF File"
        accept="application/pdf"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});
