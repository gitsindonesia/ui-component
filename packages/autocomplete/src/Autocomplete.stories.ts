import {Story, Meta} from '@storybook/vue3';
import Autocomplete from './Autocomplete.vue';
import {ref} from 'vue';
import {ListboxButton} from '@headlessui/vue';
import {Field, useForm} from 'vee-validate';
import {array, object} from 'yup';
import {VBtn} from '@morpheme/button';

const items = [...Array(10)].map((_, index) => ({
  value: index + 1,
  text: `Option ${index + 1}`,
}));

export default {
  title: 'Experimental/Autocomplete',
  component: Autocomplete,
  args: {
    items,
  },
} as Meta;

const Template: Story<typeof Autocomplete> = (args) => ({
  components: {
    Autocomplete,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <Autocomplete v-bind="args" v-model="value" />
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

export const EmptyText = Template.bind({});
EmptyText.args = {
  emptyText: 'No results found.',
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

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
};

export const SelectionItemProps = Template.bind({});
SelectionItemProps.args = {
  selectionItemProps: {
    outlined: true,
  },
  multiple: true,
};

export const Slots: Story<typeof Autocomplete> = (args) => ({
  components: {
    Autocomplete,
    ListboxButton,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <Autocomplete v-bind="args" class="mb-4" label="Custom Render Item" multiple>
      <template v-slot:item="{active, selected, item}">
        <div
          class="px-4 py-3 flex gap-2"
          :class="{
            'bg-gray-100 dark:bg-gray-true-800': active,
            'text-primary-500': selected,
          }"
        >
          <div class="flex-grow">{{ item.text }}</div>
          <span v-if="selected">✅</span>
        </div>
      </template>
    </Autocomplete>

    <Autocomplete v-bind="args" class="mb-4" label="Custom Selection" multiple>
      <template v-slot:selection="{active, selected, item}">
        <div
          v-if="selected"
          class="autocomplete-selection"
        >
          {{ selected.length }} Selected
        </div>
      </template>
    </Autocomplete>

    <Autocomplete v-bind="args" class="mb-4" label="Custom Selection Item" multiple>
      <template v-slot:selection-item="{item, remove}">
        <div
          class="px-2 py-1 text-sm rounded-full bg-error-500 text-white"
        >
          {{ item.text }}
          <button @click="remove">&times;</button>
        </div>
      </template>
    </Autocomplete>
  `,
});

export const DarkMode: Story<typeof Autocomplete> = (args) => ({
  components: {
    Autocomplete,
  },
  setup() {
    const value = ref();
    return {args, value};
  },
  template: `
    <div class="dark dark:bg-gray-true-900 p-6">
      <Autocomplete v-bind="args" label="Default" />
      <Autocomplete v-bind="args" label="Multiple" multiple />
    </div>
  `,
});

export const Validation: Story<{}> = (args) => ({
  components: {VBtn, Autocomplete, Field},
  setup() {
    const schema = object({
      gender: object().required().nullable().label('Gender'),
      genre: array().required().nullable().label('Genre'),
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
      {
        text: 'Jazz',
        value: 'jazz',
      },
      {
        text: 'Hip Hop',
        value: 'hiphop',
      },
    ]);

    return {onSubmit, resetForm, values, genders, genres, args, errors};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <Field name="gender" v-slot="{field, meta, errors}">
        <Autocomplete
          class="mb-4"
          label="Gender"
          placeholder="Autocomplete your gender"
          :items="genders"
          :error="!meta.valid && meta.touched"
          :errorMessage="errors[0]"
          v-bind="field"
        />
      </Field>
      <Field name="genre" v-slot="{field, meta, errors}">
        <Autocomplete
          class="mb-4"
          label="Genre"
          placeholder="Autocomplete your genre"
          :items="genres"
          :error="!meta.valid && meta.touched"
          :errorMessage="errors[0]"
          v-bind="field"
          multiple
        />
      </Field>
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="reset" text @click="resetForm">Reset</v-btn>
      </div>
      <pre>{{ {values, errors} }}</pre>
    </form>
  `,
});
