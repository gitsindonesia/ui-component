import VCheckbox from './VCheckbox.vue';
import {ref} from 'vue';
import {themeColors} from '@morpheme/utils/colors';
import {sizes} from '@morpheme/utils/sizes';
import {Meta, Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {object, boolean, array} from 'yup';
import VBtn from '@morpheme/button';

export default {
  title: 'Forms/Checkbox',
  component: VCheckbox,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    label: 'Label',
    useForm: false,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VCheckbox},
  setup() {
    const value = ref(false);
    return {args, value};
  },
  template: `
    <VCheckbox v-bind='args' v-model="value" />
    <pre>Value: {{ value }}</pre>
  `,
});

export const Variants: Story = (args) => ({
  components: {VCheckbox},
  setup() {
    const value = ref(false);
    return {args, value};
  },
  template: `
    <VCheckbox :model-value="true" label="Primary" />
    <VCheckbox :model-value="true" label="Secondary" color="secondary" />
    <VCheckbox :model-value="true" label="Info" color="info" />
    <VCheckbox :model-value="true" label="Warning" color="warning" />
    <VCheckbox :model-value="true" label="Error" color="error" />
    <VCheckbox :model-value="true" label="Success" color="success" />
  `,
});

export const Checkbox = Template.bind({});
Checkbox.args = {};
Checkbox.parameters = {
  docs: {
    source: {
      code: `<v-checkbox label="Checkbox" />`,
    },
  },
};

export const Checked = Template.bind({});
Checked.args = {
  modelValue: true,
  value: true,
};
Checked.parameters = {
  docs: {
    source: {
      code: `<v-checkbox label="Checked" />`,
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
      code: `<v-checkbox label="Label" hint="This is a hint" />`,
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
      code: `<v-checkbox label="Checkbox" disabled />`,
    },
  },
};

export const Multiple: Story<{}> = () => ({
  components: {VCheckbox: VCheckbox, VBtn},
  setup() {
    const schema = object({
      genre: array().required(),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        genre: [null],
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-checkbox
        wrapper-class="mb-4"
        name="genre"
        value="Rock"
        label="Rock"
        id="genre1"
      />
      <v-checkbox
        wrapper-class="mb-4"
        name="genre"
        value="Pop"
        label="Pop"
        id="genre2"
      />
      <v-checkbox
        wrapper-class="mb-4"
        name="genre"
        value="Jazz"
        label="Jazz"
        id="genre3"
      />
      <v-checkbox
        wrapper-class="mb-4"
        name="genre"
        value="Tomato"
        label="Tomato"
        id="genre4"
      />
      <v-checkbox
        wrapper-class="mb-4"
        name="genre"
        value="Cucumber"
        label="Cucumber"
        id="genre5"
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

export const Validation: Story<{}> = (args) => ({
  components: {VCheckbox: VCheckbox, VBtn},
  setup() {
    const schema = object({
      agreement: boolean()
        .oneOf([true], 'You must agree to terms and condition')
        .required()
        .label('Agreement'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        agreement: false,
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, args};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-checkbox
        wrapper-class="mb-4"
        name="agreement"
        label="Agreement"
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

export const ValidationMode: Story<{}> = () => ({
  components: {VCheckbox: VCheckbox, VBtn},
  setup() {
    const schema = object({
      agreement_eager: boolean()
        .oneOf([true], 'You must agree to terms and condition')
        .required()
        .label('Agreement'),
      agreement_aggressive: boolean()
        .oneOf([true], 'You must agree to terms and condition')
        .required()
        .label('Agreement'),
    });

    const modes = ref(['eager', 'aggressive']);

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        agreement_eager: false,
        agreement_aggressive: false,
      },
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

        <v-checkbox
            wrapper-class="mb-4"
            :name="'agreement_'+mode"
            label="Agreement"
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

export const TestInputState: Story<typeof VCheckbox> = (args) => ({
  components: {VBtn, VCheckbox},
  setup() {
    const modelValue = ref('');
    const modelValue2 = ref('');
    const {handleSubmit, resetForm, values} = args.useForm
      ? useForm({})
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

    <div class="mb-4">
      <v-checkbox
        wrapper-class="mb-4"
        :name="'agreement'"
        label="Only Name"
      />
      <div class="text-xs">
        When used without vee validate, should not change "Vmodel" value or any other value unless
        explicitly implemented. With vee validate, should update form values under "agreement"
      </div>
    </div>

    <div class="mb-4">
      <v-checkbox
        wrapper-class="mb-4"
        v-model="modelValue"
        label="Only VModel"
      />
      <div class="text-xs">Should update form values under "modelValue" only</div>
    </div>

    <div class="mb-4">
      <v-checkbox
        v-model="modelValue2"
        name="agreement2"
        label="VModel and Name"
      />
      <div class="text-xs">Should update form values under "agreement2" (with vee validate) key AND "modelValue2"</div>
    </div>


    <div class="mb-4">
      <v-checkbox
        label="Uncontrolled"
        placeholder="Uncontrolled input"
        @change="onChange"
      />
      <div class="text-xs">Should not change any value unless explicitly implemented</div>
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
  components: {VCheckbox},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VCheckbox v-bind='args' hint="This is a hint" />
  </div>
  `,
});
