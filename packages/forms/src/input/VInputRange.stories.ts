import {Meta, Story} from '@storybook/vue3';
import { useForm } from 'vee-validate';
import {ref} from 'vue';
import { object, string } from 'yup';
import VInputRange from './VInputRange.vue';
import VBtn from '@gits-id/button';

export default {
  title: 'Forms/InputRange',
  component: VInputRange,
  argTypes: {},
  args: {
    modelValue: 1,
    showInput: false,
  },
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


export const Validation: Story<{}> = () => ({
  components: {VInputRange, VBtn},
  setup() {
    const schema = object({
      score: string()
        .required()
        .label('Range'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        score: 0,
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <v-input-range
        wrapper-class="mb-4"
        name="score"
        label="Select Your Score"
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
