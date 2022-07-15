import { useForm } from 'vee-validate';
import {ref} from 'vue';
import { object, array } from 'yup';
import Autocomplete from './Autocomplete.vue';
import VBtn from '@gits-id/button'

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
  component: Autocomplete,
  argTypes: {},
  args: {
    items,
  },
};

const Template = (args) => ({
  components: {Autocomplete},
  setup() {
    const selected = ref();
    return {args, selected};
  },
  template: `
    <Autocomplete v-bind="args" v-model="selected"/>
    Selected: {{ selected }}
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
};


export const Validation = (args) => ({
  components: {VBtn, Autocomplete},
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
      <Autocomplete
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
