import VCheckbox from './Checkbox.vue';
import {ref, computed} from 'vue';
import {themeColors} from '@morpheme/utils/colors';
import {sizes} from '@morpheme/utils/sizes';
import type {Meta, StoryFn} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {object, boolean} from 'yup';
import VBtn from '@morpheme/button';
import CheckboxField from './CheckboxField.vue';

export default {
  title: 'Experimental/Forms/Checkbox',
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
    label: 'Label',
    id: 'checkbox',
  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: {VCheckbox},
  setup() {
    const value = ref(false);
    return {args, value};
  },
  template: `
    <VCheckbox v-bind='args' v-model="value" />
    <pre>Value: {{ value }}</pre>
  `,
});

export const Variants: StoryFn = (args) => ({
  components: {VCheckbox},
  setup() {
    const value = ref(false);
    return {args, value};
  },
  template: `
    <VCheckbox :model-value="true" label="Primary" />
    <VCheckbox :model-value="true" label="Secondary" color="secondary" />
    <VCheckbox :model-value="true" label="Info" color="info" />
    <VCheckbox :model-value="true" label="Warning" color="warning" />
    <VCheckbox :model-value="true" label="Error" color="error" />
    <VCheckbox :model-value="true" label="Success" color="success" />
  `,
});

export const VModel: StoryFn = (args) => ({
  components: {VCheckbox},
  setup() {
    const single = ref(false);
    const multiple = ref<string[]>([]);
    const checkAll = computed({
      get() {
        return multiple.value.length === 3;
      },
      set(value) {
        multiple.value = value ? ['orange', 'apple', 'banana'] : [];
      },
    });
    return {args, single, multiple, checkAll};
  },
  template: `
    <VCheckbox v-model="single" label="Single" />
    <pre>Model value: {{ single }}</pre>

    <p class="mt-4 mb-2 font-bold">Multiple</p>
    <VCheckbox
      v-model="checkAll"
      id="All"
      label="Check All"
      :indeterminate.prop="multiple.length > 0 && multiple.length < 3"
     />
    <VCheckbox wrapper-class="mt-2" v-model="multiple" id="Orange" label="Orange" value="orange" />
    <VCheckbox v-model="multiple" id="Apple" label="Apple" value="apple" />
    <VCheckbox v-model="multiple" id="Banana" label="Banana" value="banana" />
    <pre>Model value: {{ multiple }}</pre>
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

export const Checked = Template.bind({});
Checked.args = {
  modelValue: true,
  value: true,
};
Checked.parameters = {
  docs: {
    source: {
      code: `<v-checkbox label="Checked" />`,
    },
  },
};

export const Hint = Template.bind({});
Hint.args = {
  hint: 'This is a hint',
};
Hint.parameters = {
  docs: {
    source: {
      code: `<v-checkbox label="Label" hint="This is a hint" />`,
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  errorMessage: 'This is an error',
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

export const Validation: StoryFn<{}> = (args) => ({
  components: {CheckboxField, VBtn},
  setup() {
    const schema = object({
      agreement: boolean()
        .oneOf([true], 'You must agree to terms and condition')
        .required()
        .label('Agreement'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, args};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <CheckboxField
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

export const HideError = Validation.bind({});
HideError.args = {
  hideError: true,
};

export const DarkMode: StoryFn = (args) => ({
  components: {VCheckbox},
  setup() {
    return {args};
  },
  template: `
  <div class="dark dark:bg-neutral-900 dark:text-neutral-200 p-6">
    <VCheckbox v-bind='args' hint="This is a hint" />
  </div>
  `,
});
