import {Story, Meta} from '@storybook/vue3';
import {sizes} from '@morpheme/utils/sizes';
import type {VFormSelectItem as VFormSelectProps} from './types';
import VFormSelect from './VFormSelect.vue';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
import {ref} from 'vue';
import VBtn from '@morpheme/button';

const items = [...Array(5)].map((item, index) => ({
  value: index,
  text: `Option ${index}`,
}));

export default {
  title: 'Forms/FormSelect',
  component: VFormSelect,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
  },
  args: {
    items,
    modelValue: '1',
    value: '',
    size: '',
    itemText: 'text',
    itemValue: 'value',
    name: '',
    error: false,
    errorMessages: [],
    disabled: false,
  },
} as Meta;

const Template: Story<VFormSelectProps> = (args) => ({
  components: {
    VFormSelect,
  },
  setup() {
    return {args};
  },
  template: `<v-form-select v-bind="args"/>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-form-select :items="items" />',
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
      code: '<v-form-select :items="items" disabled />',
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
      code: `<v-form-select :items="items" error :error-messages="['Field is required']" />`,
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  label: 'My Label',
};
Label.parameters = {
  docs: {
    source: {
      code: `<v-form-select :items="items" label="My Label" />`,
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
      code: `<v-form-select :items="items" label="My Label" hint="This is a hint" />`,
    },
  },
};

export const Validation: Story<{}> = (args) => ({
  components: {VBtn, VFormSelect},
  setup() {
    const schema = object({
      genre: string().required().label('Genre'),
      gender: string().required().label('Gender'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genders = ref([
      {
        text: 'Select Gender',
        value: '',
        disabled: true,
      },
      {
        text: 'Male',
        value: 'male',
      },
      {
        text: 'Female',
        value: 'female',
      },
    ]);

    const genres = ref([
      {
        text: 'Select Genre',
        value: '',
        disabled: true,
      },
      {
        text: 'Pop',
        value: 'pop',
      },
      {
        text: 'Rock',
        value: 'rock',
      },
    ]);

    return {onSubmit, resetForm, values, genders, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-form-select
        wrapper-class="mb-4"
        name="genre"
        label="Genre"
        placeholder="Select your genre"
        :items="genres"
      />
      <v-form-select
        wrapper-class="mb-4"
        name="gender"
        label="Gender"
        placeholder="Select your gender"
        :items="genders"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const ValidationMode: Story<{}> = () => ({
  components: {VFormSelect, VBtn},
  setup() {
    const schema = object({
      genre_eager: string()
        .required()
        .test(
          'isCorrect',
          ({label}) => `${label} is not correct`,
          (val, ctx) => {
            return !!['E', 'A', 'U', 'I', 'O'].find(
              (e) => e === val?.charAt(0)?.toUpperCase(),
            );
          },
        )
        .label('Genre'),
      genre_aggressive: string()
        .required()
        .test(
          'isCorrect',
          ({label}) => `${label} is not correct`,
          (val, ctx) => {
            return !!['E', 'A', 'U', 'I', 'O'].find(
              (e) => e === val?.charAt(0)?.toUpperCase(),
            );
          },
        )
        .label('Genre'),
    });

    const modes = ref(['eager', 'aggressive']);
    const genres = ref([
      {
        text: 'Select Genre that starts with a vowel',
        value: '',
        disabled: true,
      },
      {
        text: 'Pop',
        value: 'pop',
      },
      {
        text: 'Rock',
        value: 'rock',
      },
      {
        text: 'Hip-Hop',
        value: 'hiphop',
      },
      {
        text: 'Electronic',
        value: 'electronic',
      },
      {
        text: 'Opera',
        value: 'opera',
      },
    ]);

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, modes, genres};
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

        <v-form-select
            wrapper-class="mb-4"
            :items="genres"
            :name="'genre_'+mode"
            label="Genre"
            placeholder="Select your genre"
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

export const IntialValues: Story<{}> = (args) => ({
  components: {VBtn, VFormSelect},
  setup() {
    const schema = object({
      genre: string().required().label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialValues: {
        genre: 'pop',
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genres = ref([
      {
        text: 'Select Genre',
        value: '',
        disabled: true,
      },
      {
        text: 'Pop',
        value: 'pop',
      },
      {
        text: 'Rock',
        value: 'rock',
      },
    ]);

    return {onSubmit, resetForm, values, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-form-select
        wrapper-class="mb-4"
        name="genre"
        label="Genre"
        placeholder="Select your genre"
        :items="genres"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values} }}</pre>
    </form>
`,
});

export const TestInputState: Story<{}> = (args) => ({
  components: {VBtn, VFormSelect},
  setup() {
    const modelValue = ref();
    const modelValue2 = ref();
    const {handleSubmit, resetForm, values} = args.useForm
      ? useForm({
          initialValues: {
            choice: '',
            choice2: '',
          },
        })
      : {handleSubmit: (cb: any) => null, resetForm: () => null, values: {}};

    const items = ref([
      {
        text: 'Water',
        value: 'water',
      },
      {
        text: 'Earth',
        value: 'earth',
      },
      {
        text: 'Fire',
        value: 'fire',
      },
      {
        text: 'Wind',
        value: 'wind',
      },
    ]);

    const onSubmit = handleSubmit((values: any) => {
      alert(JSON.stringify(values));
    });

    const onChange = (val: any) => {
      alert('onChange: ' + val);
    };

    return {
      args,
      onSubmit,
      resetForm,
      values,
      modelValue,
      modelValue2,
      items,
      onChange,
    };
  },
  template: `
    <form @submit='onSubmit' class='border-none'>
    <h1 class='mb-8 font-semibold'>{{ args.useForm ? 'with' : 'without' }} VeeValidate Form</h1>

    <div class="flex flex-wrap">
      <div class='w-1/2 p-2'>
        <v-form-select
          name='choice'
          label='Only Name'
          :items="items"
        />
        <div class='text-xs'>
          When used without vee validate, should not change "Vmodel" value or any other value unless
          explicitly implemented<br/>
          With veevalidate, should update form values under "choice" key only
        </div>
      </div>

      <div class="w-1/2 p-2">
        <v-form-select
          v-model='modelValue'
          label='Only VModel'
          :items="items"
        />
        <div class='text-xs'>Should update "modelValue" only</div>
      </div>

      <div class='w-1/2 p-2'>
        <v-form-select
          v-model='modelValue2'
          name='choice2'
          label='VModel and Name'
          :items="items"
        />
        <div class='text-xs'>Should update form values under "choice2" (with vee validate) key AND "modelValue2"</div>
      </div>
      
      <div class='w-1/2 p-2'>
        <v-form-select
          label='Uncontrolled'
          placeholder='Uncontrolled input'
          @change="onChange"
          :items="items"
        />
        <div class='text-xs'>Should not change any value unless explicitly implemented</div>
      </div>
    </div>

    <div class='mt-4'>
      <v-btn type='submit'>Submit</v-btn>
      <v-btn type='button' text @click='resetForm'>Reset</v-btn>
    </div>

    <pre>{{ {values, modelValue, modelValue2} }}</pre>
    </form>
  `,
});
TestInputState.args = {
  useForm: false,
};

export const DarkMode: Story = (args) => ({
  components: {VFormSelect},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VFormSelect v-bind='args'/>
  </div>
  `,
});
