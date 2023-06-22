import {Story, Meta} from '@storybook/vue3';
import {themeColors} from '@morpheme/utils';
import Select from './Select.vue';
import {ref} from 'vue';
import {ListboxButton} from '@headlessui/vue';
import {Field, useForm} from 'vee-validate';
import {object, string} from 'yup';
import {VBtn} from '@morpheme/button';

const items = [...Array(10)].map((_, index) => ({
  value: index + 1,
  text: `Option ${index + 1}`,
}));

export default {
  title: 'Experimental/Select',
  component: Select,
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    items,
  },
} as Meta;

const Template: Story<typeof Select> = (args) => ({
  components: {
    Select,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <Select v-bind="args" v-model="value" />
    <pre class="mt-2">Model Value: {{ value }}</pre>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'This is a hint',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  errorMessage: 'This is an error message.',
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
};

export const Slots: Story<typeof Select> = (args) => ({
  components: {
    Select,
    ListboxButton,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <p>Custom Button</p>
    <Select v-bind="args" v-model="value">
      <template #button>
        <ListboxButton class="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <span class="block truncate">Select an option</span>
          <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7l3-3 3 3m0 6l-3 3-3-3"></path>
            </svg>
          </span>
        </ListboxButton>
      </template>
    </Select>
  `,
});

export const DarkMode: Story<typeof Select> = (args) => ({
  components: {
    Select,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <div class="dark dark:bg-gray-true-900 p-6">
      <Select v-bind="args" label="Default" />
      <Select v-bind="args" label="Multiple" multiple />
    </div>
  `,
});

export const Validation: Story<{}> = (args) => ({
  components: {VBtn, Select, Field},
  setup() {
    const schema = object({
      genre: object().required().nullable().label('Genre'),
      gender: object().required().nullable().label('Gender'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    const genders = ref([
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
        text: 'Pop',
        value: 'pop',
      },
      {
        text: 'Rock',
        value: 'rock',
      },
    ]);

    return {onSubmit, resetForm, values, genders, genres, args, errors};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <Field name="genre" v-slot="{field, meta, errors}">
        <Select
          class="mb-4"
          label="Genre"
          placeholder="Select your genre"
          :items="genres"
          :error="!meta.valid && meta.touched"
          :errorMessage="errors[0]"
          v-bind="field"
        />
      </Field>
      <Field name="gender" v-slot="{field, meta, errors}">
        <Select
          class="mb-4"
          label="Gender"
          placeholder="Select your gender"
          :items="genders"
          :error="!meta.valid && meta.touched"
          :errorMessage="errors[0]"
          v-bind="field"
        />
      </Field>
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values, errors} }}</pre>
    </form>
  `,
});
