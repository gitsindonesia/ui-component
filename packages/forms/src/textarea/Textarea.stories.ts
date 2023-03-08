import {Meta, Story} from '@storybook/vue3';
import {sizes} from '@gits-id/utils';
import VTextarea from './Textarea.vue';
import VBtn from '@gits-id/button';
import {object, string} from 'yup';
import {useForm} from 'vee-validate';
import {ref} from 'vue';

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
    rows: 5,
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

export const Label = Template.bind({});
Label.args = {label: 'My Label'};
Label.parameters = {
  docs: {
    source: {
      code: '<v-textarea label="My Label" />',
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

export const Validation: Story<{}> = (args) => ({
  components: {VTextarea, VBtn},
  setup() {
    const schema = object({
      bio: string().required().label('Bio'),
      message: string().required().label('Message'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, args, values, errors};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-textarea
        wrapper-class="mb-4"
        name="message"
        label="Message"
        placeholder="Enter your message"
        v-bind="args"
      />
      <v-textarea
        wrapper-class="mb-4"
        name="bio"
        label="Bio"
        placeholder="Enter your bio"
        input-class="italic"
        v-bind="args"
      />
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </form>
    <pre>{{ {values, errors} }}</pre>
`,
});

export const ValidationMode: Story<{}> = () => ({
  components: {VTextarea, VBtn},
  setup() {
    const schema = object({
      bio_eager: string().required().min(5).max(150).label('Bio'),
      bio_aggressive: string().required().min(5).max(150).label('Bio'),
    });

    const modes = ref(['eager', 'aggressive']);

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, modes};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
    <div class="flex flex-wrap gap-4">
      <fieldset
          class="border-none flex-1"
          v-for="mode in modes"
          :key="mode"
      >
        <legend>Mode: {{ mode }}</legend>

        <v-textarea
            wrapper-class="mb-4"
            :name="'bio_'+mode"
            label="Bio"
            placeholder="Enter your bio"
            input-class="italic"
            :validation-mode="mode"
        />
      </fieldset>
    </div>
    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>
    <div class="my-5">Debug:</div>
    <pre>{{ {errors, values} }}</pre>
    </form>
  `,
});

export const TestInputState: Story<{}> = (args) => ({
  components: {VBtn, VTextarea},
  setup() {
    const modelValue = ref('');
    const modelValue2 = ref('');
    const {handleSubmit, resetForm, values} = args.useForm
      ? useForm()
      : {
          handleSubmit: (cb: any) => null,
          resetForm: () => null,
          values: {},
        };

    const onSubmit = handleSubmit((values: any) => {
      alert(JSON.stringify(values));
    });

    const onChange = (val: any) => {
      alert('onChange');
    };

    return {
      args,
      onSubmit,
      resetForm,
      values,
      modelValue,
      modelValue2,
      onChange,
    };
  },
  template: `
    <form @submit="onSubmit" class="border-none">
    <h1 class="mb-8 font-semibold">{{ args.useForm ? 'with' : 'without' }} VeeValidate Form</h1>

    <div class="flex flex-wrap gap-4">
      <div class="flex-1">
        <v-textarea
          name="description"
          label="Only Name"
        />
        <div class="text-xs">
          When used without vee validate, should not change "Vmodel" value or any other value unless
          explicitly implemented<br/>
          With vee validate, it should update form values under "description" key
        </div>
      </div>

      <div class="flex-1">
        <v-textarea
          v-model="modelValue"
          label="Only VModel"
        />
        <div class="text-xs">Should update "modelValue" only</div>
      </div>

      <div class="flex-1">
        <v-textarea
          v-model="modelValue2"
          name="description2"
          label="VModel and Name"
        />
        <div class="text-xs">
          Should update form values under "description2" (w/ vee validate) key AND "modelValue2"
        </div>
      </div>
      
      <div class="flex-1">
        <v-textarea
          label="Uncontrolled"
          @change="onChange"
        />
        <div class="text-xs">Should not change any value unless explicitly implemented</div>
      </div>
      
    </div>

    <div class="mt-4">
      <v-btn type="submit">Submit</v-btn>
      <v-btn type="button" text @click="resetForm">Reset</v-btn>
    </div>

    <pre>{{ {values, modelValue, modelValue2} }}</pre>
    </form>
  `,
});
TestInputState.args = {
  useForm: false,
};

export const DarkMode: Story = (args) => ({
  components: {VTextarea},
  setup() {
    return {args};
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
