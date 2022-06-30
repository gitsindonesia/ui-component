import {Meta, Story} from '@storybook/vue3';
import {sizes} from '@gits-id/utils';
import VTextarea from './Textarea.vue';
import VBtn from '@gits-id/button';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';

export default {
  title: 'Forms/Textarea',
  component: VTextarea,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
  },
  args: {
    value: '',
    modelValue: '',
    name: '',
    error: false,
    errorMessages: [],
    readonly: false,
    disabled: false,
    size: '',
    rows: 10,
    cols: '',
    placeholder: 'Type something...',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VTextarea},
  setup() {
    return {args};
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

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
  value: 'Text',
};
Readonly.parameters = {
  docs: {
    source: {
      code: '<v-textarea readonly value="Text" />',
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
  error: true,
  errorMessages: ['Field is required'],
};
Error.parameters = {
  docs: {
    source: {
      code: `<v-textarea error :error-messages="['Field is required']" />`,
    },
  },
};

export const Validation: Story<{}> = () => ({
  components: {VTextarea, VBtn},
  setup() {
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

    return {onSubmit, resetForm};
  },
  template: `
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
`,
});
