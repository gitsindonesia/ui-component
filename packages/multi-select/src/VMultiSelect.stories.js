import VMultiSelect from './VMultiSelect.vue';
import VBtn from '@gits-id/button';
import {useForm} from 'vee-validate';
import {object, array} from 'yup';
import {ref} from 'vue';

const items = [...Array(200)].map((item, index) => ({
  value: index + 1,
  text: `Option ${index + 1}`,
}));

export default {
  title: 'Components/MultiSelect',
  component: VMultiSelect,
  argTypes: {},
  args: {
    items,
    modelValue: [],
    itemText: 'text',
    itemValue: 'value',
    searchBy: '',
    placeholder: 'Search...',
    name: '',
    error: false,
    errorMessages: [],
    clearable: false,
    maxBadge: 0,
    delay: 500,
    id: '',
    inputProps: {},
    selectAll: false,
    loading: false,
  },
};

const Template = (args) => ({
  components: {
    VMultiSelect,
  },
  setup() {
    return {args};
  },
  template: `<v-multi-select v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-multi-select :items="items" />',
    },
  },
};

export const Clearable = Template.bind({});
Clearable.args = {
  clearable: true,
};
Clearable.parameters = {
  docs: {
    source: {
      code: '<v-multi-select :items="items" clearable />',
    },
  },
};

export const MaxBadge = Template.bind({});
MaxBadge.args = {
  clearable: true,
  maxBadge: 3,
};
MaxBadge.parameters = {
  docs: {
    source: {
      code: '<v-multi-select :items="items" :max-badge="3" />',
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
      code: '<v-multi-select :items="items" label="My Label" />',
    },
  },
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  wrapperClass:
    '!rounded-full !border-orange-500 focus-within:!border-orange-600',
  inputClass: '!italic',
  dropdownClass: 'bg-black/50',
  itemClass: 'bg-black/50 text-white hover:bg-warning-500 hover:text-white',
  badgeColor: 'warning',
  checkWrapperClass: 'text-orange-500',
};

export const Validation = (args) => ({
  components: {VBtn, VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
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
      <v-multi-select
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

export const InitialErrors = (args) => ({
  components: {VBtn, VMultiSelect},
  setup() {
    const schema = object({
      genre: array().required().min(1).label('Genre'),
    });

    const {handleSubmit, resetForm, values} = useForm({
      validationSchema: schema,
      initialErrors: {
        genre: 'Genre is required',
      },
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
      <v-multi-select
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
