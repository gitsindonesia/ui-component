import {Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {mixed, object} from 'yup';
import {VInput} from '..';
import VBtn from '@morpheme/button';
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
    placeholder: 'Choose file...',
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

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};
Multiple.parameters = {
  docs: {
    source: {
      code: '<v-file-upload multiple />',
    },
  },
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'This is a hint',
};
Hint.parameters = {
  docs: {
    source: {
      code: '<v-file-upload hint="This is a hint" />',
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

export const Validation: Story<{}> = () => ({
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

export const InitialValues: Story<{}> = () => ({
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

export const SlotFilename: Story<{}> = () => ({
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
        wrapper-class="mb-4 WRAPPER"
        theme="image"
        name="avatar"
        label="Avatar w/ image preview"
        placeholder="Pick your best photo"
        class='TEST_CLASSs'
        preview-class='relative'
        rounded
        image
        preview
        multiple
      >
        <template #filename="{value}">
          <div class='bg-[#0000008a] text-white text-xs p-2 absolute bottom-0 left-0 w-full'>
            The filename is overriden here. {{ value }}
          </div>
        </template>
      </v-file-upload>
      
      <v-file-upload
        wrapper-class="mb-4"
        theme="image"
        name="avatar"
        label="Avatar w/o image preview"
        placeholder="Pick your best photo"
        rounded
        preview
        multiple
      >
        <template #filename="{value}">
          <div class="text-xs">
            The filename is overriden here. {{ value }}
          </div>
        </template>
      </v-file-upload>
      
      <v-file-upload
        wrapper-class="mb-4"
        theme="dropzone"
        name="banner"
        label="Banner"
        placeholder="Choose banner image"
        image
        preview
        multiple
      >
        <template #filename="{value}">
          <div class="text-sm">
            The filename is overriden here. {{ value }}
          </div>
        </template>
      </v-file-upload>
      
      <v-file-upload
        wrapper-class="mb-4"
        name="document"
        label="Document"
        placeholder="Pick PDF File"
        accept="application/pdf"
        multiple
      >
        <template #filename="{value}">
          <div class="text-sm text-gray-400 italic">
            The filename is overriden here. {{ value }}
          </div>
        </template>
      </v-file-upload>
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const DarkMode: Story = (args) => ({
  components: {VFileUpload},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6 space-y-4">
    <VFileUpload v-bind='args' />
    <VFileUpload v-bind='args' label="Label" theme="button" />
    <VFileUpload v-bind='args' label="Label" theme="image" rounded />
    <VFileUpload v-bind='args' label="Label" theme="image" image rounded />
    <VFileUpload v-bind='args' label="Label" theme="dropzone" image />
  </div>
  `,
});
