import VCheckbox from './VCheckbox.vue';
import {ref} from 'vue';
import {themeColors} from '@gits-id/utils/colors';
import {sizes} from '@gits-id/utils/sizes';
import {Meta, Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {object, boolean, array} from 'yup';
import VBtn from '@gits-id/button';

export default {
  title: 'Forms/Checkbox',
  component: VCheckbox,
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
    },
    color: {
      control: 'select',
      options: themeColors,
    },
  },
  args: {
    label: 'Checkbox',
    name: 'myCheckbox',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VCheckbox},
  setup() {
    const value = ref(false)
    return {args, value};
  },
  template: `
    <VCheckbox v-bind='args' v-model="value" />
    <pre>Value: {{ value }}</pre>
  `,
});

export const Checkbox = Template.bind({});
Checkbox.args = {};
Checkbox.parameters = {
  docs: {
    source: {
      code: `<v-checkbox label="Checkbox" />`,
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
      code: `<v-checkbox label="Checkbox" disabled />`,
    },
  },
};

export const Multiple: Story<{}> = () => ({
  components: {VCheckbox: VCheckbox, VBtn},
  setup() {
    const schema = object({
      genre: array().required(),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        genre: [null]
      }
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-checkbox
        wrapper-class="mb-4"
        name="genre"
        value="Rock"
        label="Rock"
        id="genre1"
      />
      <v-checkbox
        wrapper-class="mb-4"
        name="genre"
        value="Pop"
        label="Pop"
        id="genre2"
      />
      <v-checkbox
        wrapper-class="mb-4"
        name="genre"
        value="Jazz"
        label="Jazz"
        id="genre3"
      />
      <v-checkbox
        wrapper-class="mb-4"
        name="genre"
        value="Tomato"
        label="Tomato"
        id="genre4"
      />
      <v-checkbox
        wrapper-class="mb-4"
        name="genre"
        value="Cucumber"
        label="Cucumber"
        id="genre5"
      />
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <div class="my-5">Debug:</div>
      <pre>{{ {errors, values} }}</pre>
    </form>
`,
});

export const Validation: Story<{}> = () => ({
  components: {VCheckbox: VCheckbox, VBtn},
  setup() {
    const schema = object({
      agreement: boolean()
        .oneOf([true], 'You must agree to terms and condition')
        .required()
        .label('Agreement'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        agreement: false,
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-checkbox
        wrapper-class="mb-4"
        name="agreement"
        label="Agreement"
      />
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
  components: {VCheckbox: VCheckbox, VBtn},
  setup() {
    const schema = object({
      agreement_eager: boolean()
        .oneOf([true], 'You must agree to terms and condition')
        .required()
        .label('Agreement'),
      agreement_aggressive: boolean()
        .oneOf([true], 'You must agree to terms and condition')
        .required()
        .label('Agreement'),
    });

    const modes = ref(['eager', 'aggressive']);

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        agreement_eager: false,
        agreement_aggressive: false,
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, modes};
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

        <v-checkbox
            wrapper-class="mb-4"
            :name="'agreement_'+mode"
            label="Agreement"
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
