import {Story, Meta} from '@storybook/vue3';
import {sizes} from '@morpheme/utils/sizes';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
import {ref} from 'vue';
import VBtn from '@morpheme/button';
import Select from './Select.vue';
import SelectField from './SelectField.vue';

function createItems(length = 5, additionalAttrs = {}) {
  return [...Array(length)].map((_, index) => ({
    value: index + 1,
    label: `Option ${index + 1}`,
    ...additionalAttrs,
  }));
}

const items = createItems();

const groupItems = createItems(5, {
  options: createItems(5),
});

export default {
  title: 'Experimental/Forms/Select',
  component: Select,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
  },
  args: {
    options: [
      {
        label: 'Choose',
        value: '',
      },
      ...items,
      {
        label: 'Disabled item',
        value: 'x',
        disabled: true,
      },
    ],
  },
} as Meta;

const Template: Story<typeof Select> = (args) => ({
  components: {
    Select,
  },
  setup() {
    return {args};
  },
  template: `<Select v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<Select :items="items" />',
    },
  },
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  modelValue: 2,
};

export const OptionGroup = Template.bind({});
OptionGroup.args = {
  options: groupItems,
};

export const VModel: Story<typeof Select> = (args) => ({
  components: {
    Select,
  },
  setup() {
    const value = ref('');
    return {args, value};
  },
  template: `
  <Select v-bind="args" v-model="value" />
  <pre>Model Value: {{ value }}</pre>
  `,
});

export const Shadow = Template.bind({});
Shadow.args = {
  shadow: true,
};
Shadow.parameters = {
  docs: {
    source: {
      code: '<Select :items="items" shadow />',
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
      code: '<Select :items="items" disabled />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  errorMessage: 'Field is required',
};

export const Label = Template.bind({});
Label.args = {
  label: 'My Label',
};
Label.parameters = {
  docs: {
    source: {
      code: `<Select :items="items" label="My Label" />`,
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
      code: `<Select :items="items" label="My Label" hint="This is a hint" />`,
    },
  },
};

export const Validation: Story<{}> = (args) => ({
  components: {VBtn, SelectField},
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
      <SelectField
        wrapper-class="mb-4"
        name="genre"
        label="Genre"
        placeholder="Select your genre"
        :items="genres"
      />
      <SelectField
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

export const DarkMode: Story = (args) => ({
  components: {Select},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <Select v-bind='args'/>
  </div>
  `,
});
