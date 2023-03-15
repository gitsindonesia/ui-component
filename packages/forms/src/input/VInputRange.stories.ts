import {Meta, Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {ref} from 'vue';
import {object} from 'yup';
import VInputRange from './VInputRange.vue';
import VBtn from '@morpheme/button';

export default {
  title: 'Forms/InputRange',
  component: VInputRange,
  argTypes: {},
  args: {},
} as Meta;

export const Default: Story = (args) => ({
  components: {VInputRange},
  setup() {
    const val = ref('');
    return {args, val};
  },
  template: '<VInputRange v-model="val" v-bind="args" />',
});
Default.parameters = {
  docs: {
    source: {
      code: '<v-input-range />',
    },
  },
};

export const Hint = Default.bind({});
Hint.args = {
  label: 'Label',
  hint: 'This is a hint',
};
Hint.parameters = {
  docs: {
    source: {
      code: `<v-input label="Label" hint="This is a hint" />`,
    },
  },
};

export const WithInput: Story = (args) => ({
  components: {VInputRange},
  setup() {
    return {args};
  },
  template: '<VInputRange v-bind="args" />',
});
WithInput.args = {
  showInput: true,
};
WithInput.parameters = {
  docs: {
    source: {
      code: '<v-input-range show-input />',
    },
  },
};

export const Validation: Story<{}> = (args) => ({
  components: {VInputRange, VBtn},
  setup() {
    const schema = object({
      score: object()
        .required()
        .test(
          'isBetween',
          ({label}) => `${label} must be between 25-75`, // a message can also be a function
          (value, testContext) => {
            return value.min >= 25 && value.max <= 75;
          },
        )
        .label('Range'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        score: {
          min: 0,
          max: 0,
        },
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, args};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-input-range
        wrapper-class="mb-4"
        name="score"
        label="Select Your Score"
        v-bind="args"
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
  components: {VInputRange, VBtn},
  setup() {
    const schema = object({
      score_eager: object()
        .required()
        .test(
          'isBetween',
          ({label}) => `${label} must be between 25-75`, // a message can also be a function
          (value, testContext) => {
            return value.min >= 25 && value.max <= 75;
          },
        )
        .label('Range'),
      score_aggressive: object()
        .required()
        .test(
          'isBetween',
          ({label}) => `${label} must be between 25-75`, // a message can also be a function
          (value, testContext) => {
            return value.min >= 25 && value.max <= 75;
          },
        )
        .label('Range'),
    });

    const modes = ref(['eager', 'aggressive']);

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        score_eager: {
          min: 0,
          max: 0,
        },
        score_aggressive: {
          min: 0,
          max: 0,
        },
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

        <v-input-range
            wrapper-class="mb-4"
            :name="'score_'+mode"
            label="Select Your Score"
            :validation-mode="mode"
            :show-input="true"
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

export const HideError = Validation.bind({});
HideError.args = {
  hideError: true,
};
