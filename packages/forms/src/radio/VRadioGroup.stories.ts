import {Meta, Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {object, number, string} from 'yup';
import VRadioGroup from './VRadioGroup.vue';
import VBtn from '@morpheme/button';
import {ref} from 'vue';
import '@morpheme/forms/src/forms.scss';
import '@morpheme/forms/src/forms.dark.scss';
import './VRadioGroup.dark.scss';

const items = [...Array(5)].map((v, k) => ({
  text: `Item ${k + 1}`,
  value: k + 1,
}));

export default {
  title: 'Forms/RadioGroup',
  component: VRadioGroup,
  argTypes: {},
  args: {
    modelValue: '',
    value: '',
    items,
    itemText: 'text',
    itemValue: 'value',
    disabled: false,
    readonly: false,
    error: false,
    errorMessages: [],
    name: '',
    label: 'Select',
    inline: false,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VRadioGroup},
  setup() {
    return {args};
  },
  template: `<V-RadioGroup v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-radio-group :items="items" />',
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
      code: '<v-radio-group :items="items" hint="This is a hint" />',
    },
  },
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
};
Inline.parameters = {
  docs: {
    source: {
      code: '<v-radio-group :items="items" inline />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};
Error.parameters = {
  docs: {
    source: {
      code: '<v-radio-group :items="items" error />',
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
      code: '<v-radio-group :items="items" disabled />',
    },
  },
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: '',
};
NoLabel.parameters = {
  docs: {
    source: {
      code: '<v-radio-group :items="items" label="" />',
    },
  },
};

export const Customization = Template.bind({});
Customization.args = {
  label: 'Pick an option',
  labelClass: '!text-purple-500',
  defaultClass:
    'p-2 my-1 hover:bg-primary-50 border-grey-300 border rounded-lg cursor-pointer',
  selectedClass: '!border-primary-300 !text-primary-500',
};
Customization.parameters = {
  docs: {
    source: {
      code: '<v-radio-group default-class="" selected-class="" :items="items" label="" />',
    },
  },
};

export const Validation: Story<{}> = () => ({
  components: {VRadioGroup, VBtn},
  setup() {
    const schema = object({
      choose: number().oneOf([1, 2]).required().label('Agreement'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        choose: 0,
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, items};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <div class="flex gap-4">
        <v-radio-group
          name="choose"
          label="Choose"
          :items="items"
        />
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

export const ValidationMode: Story<{}> = () => ({
  components: {VRadioGroup, VBtn},
  setup() {
    const items = ['liquid', 'gas', 'solid'];

    const schema = object({
      choose_eager: string()
        .oneOf(items)
        .test(
          'is_correct',
          ({label}) => `${label} is incorrect.`, // a message can also be a function
          (value) => {
            return value === 'liquid';
          },
        )
        .required()
        .label('Answer'),
      choose_aggressive: string()
        .oneOf(items)
        .test(
          'is_correct',
          ({label}) => `${label} is incorrect.`, // a message can also be a function
          (value) => {
            return value === 'liquid';
          },
        )
        .required()
        .label('Answer'),
    });

    const modes = ref(['eager', 'aggressive']);

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        choose_eager: '',
        choose_aggressive: '',
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, modes, items};
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
        
        <p>
          Question: Rain is water in ... form
        </p>
        <v-radio-group
            :name="'choose_'+mode"
            label="Choose"
            :items="items"
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
  components: {VBtn, VRadioGroup},
  setup() {
    const items = ['fire', 'earth', 'wind', 'water'];

    const modelValue = ref();
    const modelValue2 = ref();
    const {handleSubmit, resetForm, values} = args.useForm
      ? useForm({
          initialValues: {
            radio: '',
            radio2: '',
          },
        })
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
      items,
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
        <v-radio-group
          name="radio"
          label="Only Name"
          value="name"
          :items="items"
        />
        <div class="text-xs">
          When used without vee validate, should not change "Vmodel" value or any other value unless
          explicitly implemented<br/>
          With vee validate, it should update form values under "radio" key
        </div>
      </div>

      <div class="flex-1">
        <v-radio-group
          v-model="modelValue"
          label="Only VModel"
          value="vmodel"
          :items="items"
        />
        <div class="text-xs">Should update "modelValue" only</div>
      </div>

      <div class="flex-1">
        <v-radio-group
          v-model="modelValue2"
          name="radio2"
          label="VModel and Name"
          value="vmodelname"
          :items="items"
        />
        <div class="text-xs">
          Should update form values under "radio2" (w/ vee validate) key AND "modelValue2"
        </div>
      </div>
      
      <div class="flex-1">
        <v-radio-group
          label="Uncontrolled"
          @change="onChange"
          value="uncontrolled"
          :items="items"
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
  components: {VRadioGroup},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VRadioGroup v-bind='args' hint="This is a hint" />
    <VRadioGroup v-bind='args' disabled label="Disabled" class="mt-5" hint="This is a hint" />
  </div>
  `,
});
