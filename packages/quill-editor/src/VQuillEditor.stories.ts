import VQuillEditor from './VQuillEditor.vue';
import {Meta, Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
import VBtn from '@gits-id/button';

export default {
  title: 'Forms/QuillEditor',
  component: VQuillEditor,
  args: {
    modelValue: '',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VQuillEditor},
  setup() {
    return {args};
  },
  template: `
    <VQuillEditor v-bind="args" />
  `,
});

export const Basic = Template.bind({});
Basic.args = {};

export const Label = Template.bind({});
Label.args = {
  label: 'Content',
};

export const Validation: Story = () => ({
  components: {VBtn, VQuillEditor},
  setup() {
    const schema = object({
      content: string().required().label('Content'),
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
      <VQuillEditor
        name="content"
        label="Content"
        placeholder="Input your content"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const InitialValues: Story = () => ({
  components: {VBtn, VQuillEditor},
  setup() {
    const schema = object({
      content: string().required().label('Content'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialValues: {
        content: '<p>This is initial content</p>',
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values};
  },
  template: `
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
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const InitialErrors: Story = () => ({
  components: {VBtn, VQuillEditor},
  setup() {
    const schema = object({
      content: string().required().label('Content'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialErrors: {
        content: 'Content is required',
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values};
  },
  template: `
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
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const Toolbar: Story = () => ({
  components: {VBtn, VQuillEditor},
  setup() {
    const schema = object({
      default: string().required().label('Default Toolbar'),
      minimal: string().required().label('Minimal Toolbar'),
      full: string().required().label('Full'),
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
      <VQuillEditor
        name="default"
        label="Default / essential"
        placeholder="Input your content"
      />
      <VQuillEditor
        name="minimal"
        label="Minimal"
        placeholder="Input your content"
        toolbar="minimal"
      />
      <VQuillEditor
        name="full"
        label="Full"
        placeholder="Input your content"
        toolbar="full"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});
