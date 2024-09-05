import type { Meta, StoryFn } from '@storybook/vue3';
import { sizes } from '@morpheme/utils';
import VTextarea from './TextareaInput.vue';
import VBtn from '../../../button/src';
import { object, string } from 'yup';
import { useForm } from 'vee-validate';
import { ref } from 'vue';
import TextareaInputField from './TextareaInputField.vue';

export default {
  title: 'Experimental/Forms/Textarea',
  component: VTextarea,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
  },
  args: {
    rows: 5,
    placeholder: 'Type something...',
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { VTextarea },
  setup() {
    return { args };
  },
  template: `<VTextarea v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-textarea />',
    },
  },
};

export const VModel: StoryFn = (args) => ({
  components: { VTextarea },
  setup() {
    const value = ref('');
    return { args, value };
  },
  template: `
    <VTextarea v-bind='args' v-model="value" />
    <pre>Value: {{ value }}</pre>
  `,
});

export const Label = Template.bind({});
Label.args = { label: 'My Label' };
Label.parameters = {
  docs: {
    source: {
      code: '<v-textarea label="My Label" />',
    },
  },
};

export const Hint = Template.bind({});
Hint.args = {
  label: 'Label',
  hint: 'This is a hint',
};
Hint.parameters = {
  docs: {
    source: {
      code: '<v-textarea label="My Hint" hint="This is a hint" />',
    },
  },
};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
  modelValue: 'Text',
};
Readonly.parameters = {
  docs: {
    source: {
      code: '<v-textarea readonly modelValue="Text" />',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
Disabled.parameters = {
  docs: {
    source: {
      code: '<v-textarea disabled />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  label: 'Label',
  hint: 'This is a hint',
  error: true,
  errorMessage: 'Field is required',
};
Error.parameters = {
  docs: {
    source: {
      code: `<v-textarea error error-message="Field is required" />`,
    },
  },
};

export const Counter = Template.bind({});
Counter.args = {
  counter: true,
};
Counter.parameters = {
  docs: {
    source: {
      code: `<v-textarea counter />`,
    },
  },
};

export const Validation: StoryFn<{}> = (args) => ({
  components: { TextareaInputField, VBtn },
  setup() {
    const schema = object({
      bio: string().required().label('Bio'),
      message: string().required().label('Message'),
    });

    const { handleSubmit, resetForm, values, errors } = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return { onSubmit, resetForm, args, values, errors };
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <TextareaInputField
        wrapper-class="mb-4"
        name="message"
        label="Message"
        placeholder="Enter your message"
        hint="This is a hint"
        v-bind="args"
      />
      <TextareaInputField
        wrapper-class="mb-4"
        name="bio"
        label="Bio"
        placeholder="Enter your bio"
        hint="This is a hint"
        input-class="italic"
        v-bind="args"
      />
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </form>
    <pre>{{ {values, errors} }}</pre>
`,
});

export const DarkMode: StoryFn = (args) => ({
  components: { VTextarea },
  setup() {
    return { args };
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VTextarea v-bind='args' />
  </div>
  `,
});

export const HideError = Validation.bind({});
HideError.args = {
  hideError: true,
};
