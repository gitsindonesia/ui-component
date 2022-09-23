import VRadio from './VRadio.vue';
import {themeColors} from '@gits-id/utils/colors';
import {sizes} from '@gits-id/utils/sizes';
import {Meta, Story} from '@storybook/vue3';
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
import VBtn from '@gits-id/button';

export default {
  title: 'Forms/Radio',
  component: VRadio,
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
    modelValue: '',
    label: 'Radio',
    color: '',
    size: '',
  },
} as Meta;

const Template: Story = (args) => ({
  components: {VRadio},
  setup() {
    return {args};
  },
  template: `<VRadio v-bind='args'>${args.label}</VRadio>`,
});

export const Radio = Template.bind({});
Radio.args = {};
Radio.parameters = {
  docs: {
    source: {
      code: '<v-radio />',
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
      code: '<v-radio disabled />',
    },
  },
};

export const Validation: Story<{}> = () => ({
  components: {VRadio, VBtn},
  setup() {
    const schema = object({
      choose: string().oneOf(['Yes', 'No']).required().label('Agreement'),
    });

    const {handleSubmit, resetForm, values, errors} = useForm({
      validationSchema: schema,
      initialValues: {
        choose: '',
      },
    });

    const onSubmit = handleSubmit((values) => {
      alert(JSON.stringify(values));
    });

    return {onSubmit, resetForm, values, errors};
  },
  template: `
    <form @submit="onSubmit" class="border-none">
      <div class="flex gap-4">
        <v-radio
          name="choose"
          value="Yes"
          label="Yes"
          id="yes"
          hide-error
        />
        <v-radio
          name="choose"
          value="No"
          label="No"
          id="no"    
          hide-error
        />
      </div>
      <p class="text-error-600 text-sm mt-1">{{ errors.choose }}</p>
      <div class="mt-4">
        <v-btn type="submit">Submit</v-btn>
        <v-btn type="button" text @click="resetForm">Reset</v-btn>
      </div>
      <div class="my-5">Debug:</div>
      <pre>{{ {errors, values} }}</pre>
    </form>
`,
});
