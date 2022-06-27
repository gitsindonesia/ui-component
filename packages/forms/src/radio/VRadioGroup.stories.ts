import {Meta, Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {object, number} from 'yup';
import VRadioGroup from './VRadioGroup.vue';
import VBtn from '@gits-id/button';

const items = [...Array(5)].map((v, k) => ({
  text: `Item ${k + 1}`,
  value: k + 1,
}));

export default {
  title: 'Forms/RadioGroup',
  component: VRadioGroup,
  argTypes: {},
  args: {
    modelValue: '',
    value: '',
    items,
    itemText: 'text',
    itemValue: 'value',
    disabled: false,
    readonly: false,
    error: false,
    errorMessages: [],
    name: '',
    label: 'Select',
    inline: false,
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VRadioGroup},
  setup() {
    return {args};
  },
  template: `<V-RadioGroup v-bind='args'/>`,
});

export const Default = Template.bind({});
Default.args = {};
Default.parameters = {
  docs: {
    source: {
      code: '<v-radio-group :items="items" />',
    },
  },
};

export const Inline = Template.bind({});
Inline.args = {
  inline: true,
};
Inline.parameters = {
  docs: {
    source: {
      code: '<v-radio-group :items="items" inline />',
    },
  },
};

export const Error = Template.bind({});
Error.args = {
  error: true,
};
Error.parameters = {
  docs: {
    source: {
      code: '<v-radio-group :items="items" error />',
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
      code: '<v-radio-group :items="items" disabled />',
    },
  },
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  label: '',
};
NoLabel.parameters = {
  docs: {
    source: {
      code: '<v-radio-group :items="items" label="" />',
    },
  },
};

export const Validation: Story<{}> = () => ({
  components: {VRadioGroup, VBtn},
  setup() {
    const schema = object({
      choose: number().oneOf([1, 2]).required().label('Agreement'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        choose: 0,
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors, items};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <div class="flex gap-4">
        <v-radio-group
          name="choose"
          label="Choose"
          :items="items"
        />
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
