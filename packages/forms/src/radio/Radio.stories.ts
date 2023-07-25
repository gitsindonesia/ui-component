import VRadio from './Radio.vue';
import {Meta, Story} from '@storybook/vue3';
import {useForm, Field, useField} from 'vee-validate';
import {object, string} from 'yup';
import VBtn from '@morpheme/button';
import {ref} from 'vue';
import RadioField from './RadioField.vue';

export default {
  title: 'Experimental/Forms/Radio',
  component: VRadio,
} as Meta;

export const Default: Story = (args) => ({
  components: {VRadio},
  setup() {
    const value = ref('1');
    return {args, value};
  },
  template: `
  <VRadio v-model="value" value="1" label="Choose 1" id="1" />
  <VRadio v-model="value" value="2" label="Choose 2" id="2" />
  <VRadio v-model="value" value="3" label="Choose 3" id="3" />

  <pre>Model value: {{ value }}</pre>
  `,
});

export const Hint: Story = (args) => ({
  components: {VRadio},
  setup() {
    const value = ref('1');
    return {args, value};
  },
  template: `
  <VRadio
    v-model="value"
    value="1"
    label="Choose 1"
    id="1"
    hint="This is a hint"
    />
  `,
});

export const Disabled: Story = (args) => ({
  components: {VRadio},
  setup() {
    const value = ref('1');
    return {args, value};
  },
  template: `
  <VRadio v-model="value" value="1" label="Choose 1" id="1" />
  <VRadio v-model="value" value="0" label="Choose 0" id="0" />
  <VRadio v-model="value" value="2" label="Disabled" disabled />
  <VRadio v-model="value" value="1" label="Disabled with Value" disabled />
  `,
});

export const Error: Story = (args) => ({
  components: {VRadio},
  setup() {
    const value = ref('1');
    return {args, value};
  },
  template: `
    <VRadio
      v-model="value"
      value="2"
      label="Error" error
      error-message="This is an error"
    />
  `,
});

export const Validation: Story<{}> = () => ({
  components: {RadioField, VRadio, VBtn, Field},
  setup() {
    const schema = object({
      choose: string().oneOf(['Yes', 'No']).required().label('Agreement'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, VRadio};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <div class="flex gap-4">
        <Field
          name="choose"
          v-slot="{field, errorMessage}"
        >
          <VRadio v-bind="field" id="radio1" label="Yes" value="Yes" />
          <VRadio v-bind="field" id="radio2" label="No" value="No" />
          <VRadio v-bind="field" id="radio3" label="Invalid" value="Invalid" />
        </Field>
      </div>
      <p class="text-error-600 text-sm mt-1">{{ errors.choose }}</p>
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm({
          values: {
            choose: '',
          }
        })">Reset</v-btn>
      </div>
      <div class="my-5">Debug:</div>
      <pre>{{ {errors, values} }}</pre>
    </form>
`,
});

// VRadio dark mode
export const DarkMode: Story<{}> = () => ({
  components: {VRadio},
  setup() {
    const value = ref('1');
    return {value};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VRadio v-model="value" value="1" label="Choose 1" id="1" />
    <VRadio v-model="value" value="0" label="Choose 0" id="0" />
    <VRadio v-model="value" value="2" label="Disabled" disabled />
  </div>
  `,
});
