import {Story, Meta} from '@storybook/vue3';
import {sizes} from '@gits-id/utils/sizes';
import type {VFormSelectItem as VFormSelectProps} from './types';
import VFormSelect from './VFormSelect.vue';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
import {ref} from 'vue';
import VBtn from '@gits-id/button';

const items = [...Array(5)].map((item, index) => ({
  value: index,
  text: `Option ${index}`,
}));

export default {
  title: 'Forms/Select',
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
