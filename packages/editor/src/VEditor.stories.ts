import type {Story} from '@storybook/vue3';
import VEditor from './VEditor.vue';
import VBtn from '@morpheme/button';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';
import {ref} from 'vue';

export default {
  title: 'Forms/Editor',
  component: VEditor,
  argTypes: {},
  args: {
    modelValue: '',
    value: '',
    error: false,
    errorMessages: [],
  },
};

const Template: Story<{}> = (args) => ({
  components: {VEditor},
  setup() {
    return {args};
  },
  template: `<VEditor v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-editor />',
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
      code: '<v-editor hint="This is a hint" />',
    },
  },
};

export const VModel: Story<{}> = (args) => ({
  components: {VEditor},
  setup() {
    const content = ref('');
    return {args, content};
  },
  template: `
<VEditor v-bind='args' v-model="content" />
<pre>{{ content }}</pre>
  `,
});

export const Label = Template.bind({});
Label.args = {
  label: 'Blog Content',
};
Label.parameters = {
  docs: {
    source: {
      code: '<v-editor label="Blog Content" />',
    },
  },
};

export const InitialValue = Template.bind({});
InitialValue.args = {
  modelValue: '<p>Hello World</p>',
};
InitialValue.parameters = {
  docs: {
    source: {
      code: '<v-editor model-value="<p>Hello World</p>" />',
    },
  },
};

export const Validation: Story<{}> = (args) => ({
  components: {VEditor, VBtn},
  setup() {
    const schema = object({
      content: string().required().label('Content'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, args};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <VEditor
        wrapper-class="mb-4"
        name="content"
        label="Content"
        placeholder="Content"
        v-bind="args"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <div class="my-5">Debug:</div>
      <pre>{{ {errors, values} }}</pre>
    </form>
`,
});

export const HideError = Validation.bind({});
HideError.args = {
  hideError: true,
};
