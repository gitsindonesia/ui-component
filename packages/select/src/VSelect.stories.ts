import {Story, Meta} from '@storybook/vue3';
import {themeColors} from '@gits-id/utils';
import type {VSelectProps} from './types';
import VSelect from './VSelect.vue';
import {useForm} from 'vee-validate';
import {ref} from 'vue';
import {mixed, object, string} from 'yup';
import VBtn from '@gits-id/button';

const items = [...Array(5)].map((item, index) => ({
  value: index,
  text: `Option ${index}`,
}));

export default {
  title: 'Components/Select',
  component: VSelect,
  argTypes: {
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    items,
    color: 'primary',
    modelValue: null,
    value: null,
    itemText: 'text',
    itemValue: 'value',
    name: '',
    error: false,
    errorMessages: [],
    searchable: false,
    placeholder: 'Select',
    hideCheckIcon: false,
  },
} as Meta;

const Template: Story<VSelectProps> = (args) => ({
  components: {
    VSelect,
  },
  setup() {
    return {args};
  },
  template: `<v-select v-bind="args" />`,
});

export const Select = Template.bind({});
Select.args = {};
Select.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" />',
    },
  },
};

export const Searchable = Template.bind({});
Searchable.args = {
  searchable: true,
};
Searchable.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" searchable />',
    },
  },
};

export const NoCheckIcon = Template.bind({});
NoCheckIcon.args = {
  hideCheckIcon: true,
};
NoCheckIcon.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" no-check-icon />',
    },
  },
};

export const Label = Template.bind({});
Label.args = {
  label: 'My Label',
  labelClass: 'font-semibold mb-1 block',
};
Label.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" label="My Label" label-class="font-semibold mb-1 block" />',
    },
  },
};

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};
Shadow.parameters = {
  docs: {
    source: {
      code: '<v-select :items="items" shadow />',
    },
  },
};

export const Validation: Story<{}> = () => ({
  components: {VBtn, VSelect},
  setup() {
    const schema = object({
      genre: object().required().nullable().label('Genre'),
      gender: object().required().nullable().label('Gender'),
    });

    const {handleSubmit, resetForm, values} = useForm({
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

    return {onSubmit, resetForm, values, genders, genres};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-select
        wrapper-class="mb-4"
        name="genre"
        label="Genre"
        placeholder="Select your genre"
        :items="genres"
      />
      <v-select
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
