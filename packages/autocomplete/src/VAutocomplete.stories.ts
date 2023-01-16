import {useForm} from 'vee-validate';
import {ref} from 'vue';
import {object} from 'yup';
import VAutocomplete from './VAutocomplete.vue';
import VBtn from '@gits-id/button';
import {Story} from '@storybook/vue3';
import './VAutocomplete.dark.scss';

const items = [
  {value: 1, text: 'Wade Cooper'},
  {value: 2, text: 'Arlene Mccoy'},
  {value: 3, text: 'Devon Webb'},
  {value: 4, text: 'Tom Cook'},
  {value: 5, text: 'Tanya Fox'},
  {value: 6, text: 'Hellen Schmidt'},
];

export default {
  title: 'Components/Autocomplete',
  component: VAutocomplete,
  argTypes: {},
  args: {
    items,
  },
};

const Template: Story = (args) => ({
  components: {VAutocomplete},
  setup() {
    const selected = ref();
    return {args, selected};
  },
  template: `
    <VAutocomplete v-bind="args" v-model="selected"/>
    Selected: {{ selected }}
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
};

export const Validation: Story = (args) => ({
  components: {VBtn, VAutocomplete},
  setup() {
    const schema = object({
      genre: object().required().label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

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
        text: 'Alternative',
        value: 'alternative',
      },
    ]);

    return {onSubmit, resetForm, values, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <VAutocomplete
        name="genre"
        label="Genre"
        placeholder="Choose your prefered genres"
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

export const DarkMode: Story = (args) => ({
  components: {VAutocomplete},
  setup() {
    const selected = ref();
    return {args, selected};
  },
  template: `
<main class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
  <VAutocomplete
    v-bind="args"
    v-model="selected"
    label="Dark Mode"
  />
</main>
  `,
});
